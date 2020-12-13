// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getWorkflow";
export * from "./getWorkflowAccessKey";
export * from "./listWorkflowAccessKeySecretKeys";
export * from "./workflow";
export * from "./workflowAccessKey";

// Export enums:
export * from "../../types/enums/logic/v20150201preview";

// Import resources to register:
import { Workflow } from "./workflow";
import { WorkflowAccessKey } from "./workflowAccessKey";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:logic/v20150201preview:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            case "azure-nextgen:logic/v20150201preview:WorkflowAccessKey":
                return new WorkflowAccessKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "logic/v20150201preview", _module)
