#!/usr/bin/env node
// this is a test comment
import { App } from '@aws-cdk/core';
import { SportstatStack } from '../lib/sportstat-stack';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new App();

const lambdaStack = new SportstatStack(app, 'LambdaStack');
new PipelineStack(app, 'PipelineDeployingLambdaStack', {
  
});

app.synth();