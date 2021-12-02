import * as cdk from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import { CfnOutput, Duration, CfnParameter } from "@aws-cdk/core";
export class CdkApplicationTemplateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const duration = new CfnParameter(this, "duration", {
      type: "Number",
      minValue: 1,
      maxValue: 10,
      default: 6,
    });

    const myBucket = new Bucket(this, "someBucket", {
      lifecycleRules: [{ expiration: Duration.days(duration.valueAsNumber) }],
    });

    new CfnOutput(this, "myBucket", {
      value: myBucket.bucketName,
    });
  }
}
