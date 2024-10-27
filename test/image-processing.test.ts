import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { ImageProcessingStack } from "../lib/image-processing-stack";

test("Snapshot is matched", () => {
	const app = new App();
	const stack = new ImageProcessingStack(app, "MyTestStack");
	const template = Template.fromStack(stack);
	expect(template.toJSON()).toMatchSnapshot();
});
