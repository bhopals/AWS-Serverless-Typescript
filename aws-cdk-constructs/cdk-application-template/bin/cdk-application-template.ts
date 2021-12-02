#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkApplicationTemplateStack } from "../lib/cdk-application-template-stack";

const app = new cdk.App();
new CdkApplicationTemplateStack(app, "CdkApplicationTemplateStack", {});
