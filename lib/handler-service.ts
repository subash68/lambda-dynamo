import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";

export class UUIDService extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

        const handler = new lambda.Function(this, "lambda-uuid", {
            code: lambda.Code.fromAsset("./src"),
            handler: "index.handler",
            memorySize: 1024,
            runtime: lambda.Runtime.NODEJS_14_X,
            timeout: cdk.Duration.seconds(300),
            environment: {
                TABLE_NAME: 'uuid-test'
            }
        });

        const api = new apigateway.RestApi(this, "lambda-uuid-api", {
            restApiName: "UUId-generator",
            description: "This is a uuid generator api."
        });

        const apiIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });

        api.root.addMethod("GET", apiIntegration);
    }
}