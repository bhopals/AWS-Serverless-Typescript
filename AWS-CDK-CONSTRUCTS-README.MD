### Understanding AWS CDK

- It is an Abstraction of AWS Service
- Abstraction - Reusable component capable of hiding complex implementation.
- The abstraction is provided using Construct
- These Abstartions are reusable across the constructs and Stacks
- AWS CDK supports Multiple Languages
- It uses Javascript Interop Interface (JSII) under the hood
- TypeScript ==> JSII ==> Java, C#, Phyton, etc...

- Install AWS-CDK package globally - `npm i -g aws-cdk`
- Sample Stack Details - Refer - https://github.com/aws/aws-cdk

### Init First CDK Project

- create a directory in which you want to init your project

- `npm init app --language typescript`

- `cdk synth` - Generate Cloudformation template from CDK Application.
  AWS CDK apps are effectively only a definition of your infrastructure using code. When CDK apps are executed, they produce (or “synthesize”, in CDK parlance) an AWS CloudFormation template for each stack defined in your application. To synthesize (produce a code equivalent CloudFormation Template) a CDK app, use the cdk synth

- `cdk bootstrap` - It will create a CloudFormation Stack in our AWS Account
  The first time you deploy an AWS CDK app into an environment (account/region), you can install a “bootstrap stack”. This stack includes resources that are used in the toolkit’s operation. For example, the stack includes an S3 bucket that is used to store templates and assets during the deployment process.

You can use the cdk bootstrap command to install the bootstrap stack into an environment: `cdk bootdtrap`

- `cdk deploy` - Deploy the stack to AWS account. Add/Remove/Update AWS Resources

  - CDK deploy is the only command that you need to run everytime when you change your Construct and want to Deploy the Changes.
  - Use `cdk deploy --all` if you have multiple Stacks and want to deploy all
  - Use `cdk deploy <stack-name/id>` if you just want to deploy specific stack only

- `cdk init app --language typescript` (Initialize CDK project)
  Available templates:

  - app: Template for a CDK Application
    └─ cdk init app --language=[csharp|fsharp|go|java|javascript|python|typescript]

    - CDK Application Template

      - generated `cdk.json` file makes the generated project CDK Application/Project
      - `cdk.json` has 2 things - app and context

        - app - `npx ts-node --prefer-ts-exts bin/cdk-application-template.ts` (Starting point of our Application) - tells the toolkit how to run your app. (Refer - https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html)
        - context - meta data for the CDK application

      - Now if we go to `bin/cdk-application-template.ts`
        - Create an AWS CDK instance - const app = new cdk.App();
        - Invoke the Stack Constructor by passing `app` instance, `name` and `props` - new <StackName>(app, `firstStack`, {})
        - Our whole stack Logic goes into the Constructor of <StackName> (CDK Application)

  - lib: Template for a CDK Construct Library
    └─ cdk init lib --language=typescript

  - sample-app: Example CDK Application with some constructs
    └─ cdk init sample-app --language=[csharp|fsharp|go|java|javascript|python|typescript]

- Other CDK Commands

  - `cdk list` - List out all the stacks
  - `cdk diff` - Compare the local stack v/s deployed stack
  - `cdk destroy` - To delete the Stack/AWS Resources
  - `cdk doctor` - Will show if there are any problems in our stack

- CDK Construct - A CDK Application consist of one or more Construct.
  When someone says construct, it means A class that can be initialized using Construct and acceptin <scope> as a construct.

  - @aws-cdk/aws-s3 - It is an S3 Construct Library
    - A Construct library can have `CFN-RESOURCES` and `CFN-CONSTRUCTS`
  - @aws-cdk/aws-sqs - It is a SQS Construct Library

- AWS Constructs (Three Types)
- L1 Construct - Low Level Construct - CFN Resources
- L2 Construct - Higher Level Construct - Intent-Based API - Per Resource One Construct (This is what We are Mostly be using )
- Even Higher Level - Patterns - Involves mutliple kinds of Resources - Group of Construct
- More Details - https://docs.aws.amazon.com/cdk/latest/guide/constructs.html

- CloudFormation Output - use `CfnOutput`
  new CfnOutput(this, "myBucket", {
  value: myBucket.bucketName,
  });
  Outputs: CdkApplicationTemplateStack.myBucket = cdkapplicationtemplatestack-somebucket8b32029d-1qqofot3pwy6w

  - The value would be in CloudFormation `output` section

- CfnParameter - For Input parameter pass down to the Stack
  const duration = new CfnParameter(this, "duration", {
  type: "Number",
  minValue: 1, //Validation - Wont allow less than 1
  maxValue: 10, //Validation - Wont allow more that 10
  default: 6, //if null or undefined, set 6
  });
  const myBucket = new Bucket(this, "someBucket", {
  lifecycleRules: [{ expiration: Duration.days(duration.valueAsNumber) }],
  });

  `cdk deploy --parameters duration=5`

  `cdk deploy --parameters duration=11` // Error - Parameter 'duration' must be a number not greater than 10

- Debugging issue - Always prefer to look into `aws-cdk` github page for known issues or enhancements - https://github.com/aws/aws-cdk/issues

#### Securing API's with AWS Cognito

-- Understanding AWS Cognito

- USER POOLS - User Directories that provide sign-up and sign-in options for your app users.

  - Stores User Data
  - Basic Authentication Solution - JWT Tokens

  - FLOW

    - User submits an username and password combination to Amanzon Cognito
    - Cognito validates the credential
    - If successful validation, Cognito returns a JWT Token (timely expired)
    - User could use this JWT Token to access the secured API's

  - CREATE A USER POOL (OPTIONS AND FEATURES)

    - Add Name, Atrtributes, MFA Verifications, Messaging, Tags, Devices, App Clients
    - Also, can add Lambda Triggers - Pre sign-up, Pre Authentication, Post Authentication, Create/Verify Auth Challange, Pre Token Generation
    - Once created It will gives a Pool ID `pool-id`
    - After Creation, we need to perform APP Integration
      - App Domain Name
      - Create App Client
      - This will give an `app-client-id`
    - The generated `pool-id` and `app-client-id` would be used to Authentication

  - PRACTICAL

    - npm i aws-amplify @aws-amplify/auth
    - Refer - `test/playground/Auth/*` to sign in and get a token generated from AWS Cognito.

  - In AWS API, we could use AWS Cognito for Authrization using LAMBDA.

    - Create New Authorizer ==> Select `Cognito` type ==> Select `Cognito User Pool` ==> Select `Authorizer` Header ==> Create

  - Cognito Groups
    - Using Cognito Groups we can provide fine-grained access control

- IDENTITY POOLS - It provides AWS Credential to grant your users access (by assuming role) to Other AWS Services

  - Fine grained Access Control - a user assumes an Identity
  - Can directly call AWS SDK Commands - S3 Bucket
  - Used with supported Authentication Providers/ Public Login Providers (Cognito, Google, Twitter, SAML, OpenID, Apple, Custom)

  - FLOW

    - User submits an username and password combination to Amanzon Cognito
    - Cognito validates the credential
    - If successful validation, Cognito returns a JWT Token (timely expired)
    - User could use this JWT Token to access the secured API's
    - HERE, the JWT token can contains an IAM access role which the User Can Assume
    - Assuming role is like accessing Temporary Credentials

  - CREATE NEW IDENTITY POOL

    - Give a name to Identity pool - `mytestidentitypool`
    - Enable access to unidentified identities ==> CHECK THE BOX
      - Amazon Congnito can support unauthenticated identities by providing a unique identifier and AWS Credentials for users who do not authenticate with an Identity provider. If your application allows customers to use the
        application without logging in, you can enable access for unauthenticated identities.
        - Enabling access to unidentified identities means anyone with internet can be granted
          AWS credentials. Unauthenticated identities are typically users who do not log in to your application.
          Typically, the permissions that you assign for unauthenticated identities should be more restrictive than those for authenticated identities.
    - Authentication Flow Settings

      - A User authentication with Amazon Cognito will go through a multi-step process to bootstrap their credentials.
        Amazon Cognito has TWO different flows for authentication with Public Providers:
        - ENHANCED
        - BASIC

    - Authentication Provider

      - Amazon Cognito supports the following authentication methods with Amazon Cognito Sign-In or any Public Provider. If you allow your users to authenticate using any of these public providers, you can specify your
        application identifiers here.
      - Select Authentication Providers/ Public Login Providers from the List

        - Cognito (Provide UserPoolId, App clientId)
        - Amazon, Apple, Facebook, Google, Twitter
        - OpenID, SAML, Custom

      - Identify the IAM Roles to use with your new Identity Pool.

        - Before you can begin using your new Amazon Cognito Identity Pool, you must assign one or more IAM roles to
          determine the level of access you want your application end users to have to your AWS resources. Identity pools define two types of Identities: `authentication` and `unauthenticated`. Each can be assigned their own role in IAM. `Authenticated` identities belong to users who are authenticated by a Public Login Provider (Amazon Cognito User Pools, Facebook, Google, Twitter, SAML, OpenID Connect Providers) OR A developer
          provider (your own backend authentication process), while `unauthenticated` identities typically belong to guest users.

        - When Amazon Cognito receives a user request, the service will determine if the request is either `authenticated` or `unauthenticated`, determine which role is associated with that authentication type, and then use the policy attached to that role to response to that request.

      - SELECT ROLES

        - For Authenticated Identities
        - For Unauthenticated Identities

      - CREATE IDENTITY POOL
      - Once this is created, it generates `Identity Pool ID`

      - If we have selected `Cognito` as Authentication Provider
        - Go to that section
        - Instead of `use-default-role`, select `choose-role-from-token`

#### Fine-grained Access Control options

- Access Control options with Identity Pools
  - Guest/Unauthenticated Access - Anonymous access to generic Data
  - Authenticated Access - Same Access Level for all authenticated users
  - RBAC (Role-based access control) - Access based on user role in your system
    - Choose Role from Token (User Pool Group)
    - Choose Role with Rules (`claims` or any other attribute in the Token)
  - Using attributes (of the User) for access control - Access based on user profile attributes or factors decided at runtime (be it a Tag or User Role or Profile or Department)

REFERENCE

- AWS Typescript Workshop - https://cdkworkshop.com/20-typescript.html

- AWS Construct Libraries - https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html
