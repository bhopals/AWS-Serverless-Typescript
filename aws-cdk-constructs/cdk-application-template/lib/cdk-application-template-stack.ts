import * as cdk from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import { CfnOutput, Duration } from "@aws-cdk/core";
export class CdkApplicationTemplateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, "someBucket", {
      lifecycleRules: [{ expiration: Duration.days(10) }],
    });

    new CfnOutput(this, "myBucket", {
      value: myBucket.bucketName,
    });
  }
}
