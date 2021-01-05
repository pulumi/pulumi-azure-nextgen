// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./deploymentAtManagementGroupScope";
export * from "./getDeploymentAtManagementGroupScope";

// Export enums:
export * from "../../types/enums/management/v20200801";

// Import resources to register:
import { DeploymentAtManagementGroupScope } from "./deploymentAtManagementGroupScope";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:management/v20200801:DeploymentAtManagementGroupScope":
                return new DeploymentAtManagementGroupScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "management/v20200801", _module)