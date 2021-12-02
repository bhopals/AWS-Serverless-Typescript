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
- `cdk sync` - Generate Cloudformation template from CDK Construct
- `cdk bootstrap` - It will create a CloudFormation Stack in our AWS Account
- `cdk deploy` - Deploy the stack to AWS account

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
