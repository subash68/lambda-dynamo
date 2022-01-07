// import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from '@aws-cdk/core';
// import * as lambda from '@aws-cdk/aws-lambda';

import * as uuidService from './handler-service'
// import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiUuidCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ApiUuidCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // new lambda.Function(this, 'LambdaNodeStack', {
    //   code: lambda.Code.fromAsset('./src'),
    //   functionName: "lambdaNode",
    //   handler: 'index.handler',
    //   memorySize: 1024,
    //   runtime: lambda.Runtime.NODEJS_14_X,
    //   timeout: cdk.Duration.seconds(300),
    // });

    new uuidService.UUIDService(this, 'uuidHandler')
  }
}
