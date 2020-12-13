// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./deployment";
export * from "./deploymentAtSubscriptionScope";
export * from "./getDeployment";
export * from "./getDeploymentAtSubscriptionScope";
export * from "./getResource";
export * from "./getResourceGroup";
export * from "./resource";
export * from "./resourceGroup";

// Export enums:
export * from "../../types/enums/resources/v20190510";

// Import resources to register:
import { Deployment } from "./deployment";
import { DeploymentAtSubscriptionScope } from "./deploymentAtSubscriptionScope";
import { Resource } from "./resource";
import { ResourceGroup } from "./resourceGroup";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:resources/v20190510:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-nextgen:resources/v20190510:DeploymentAtSubscriptionScope":
                return new DeploymentAtSubscriptionScope(name, <any>undefined, { urn })
            case "azure-nextgen:resources/v20190510:Resource":
                return new Resource(name, <any>undefined, { urn })
            case "azure-nextgen:resources/v20190510:ResourceGroup":
                return new ResourceGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "resources/v20190510", _module)
