import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class ImageProcessingStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const srcBucket = new cdk.aws_s3.Bucket(this, "SrcBucket", {});
		const queue = new cdk.aws_sqs.Queue(this, "Queue", {});
		srcBucket.addEventNotification(
			cdk.aws_s3.EventType.OBJECT_CREATED,
			new cdk.aws_s3_notifications.SqsDestination(queue),
			{
				prefix: "images/",
			},
		);
		const destBucket = new cdk.aws_s3.Bucket(this, "DestBucket", {});
		const lambda = new cdk.aws_lambda.Function(this, "Function", {
			runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
			handler: "index.handler",
			code: cdk.aws_lambda.Code.fromAsset("dist/lib/lambda"),
			environment: {
				DEST_BUCKET: "DestBucket",
				DEST_PREFIX: "outputs/",
			},
		});
		destBucket.grantWrite(lambda);
	}
}
