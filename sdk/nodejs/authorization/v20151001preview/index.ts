// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getPolicyAssignment";
export * from "./getPolicyDefinition";
export * from "./policyAssignment";
export * from "./policyDefinition";

// Export enums:
export * from "../../types/enums/authorization/v20151001preview";

// Import resources to register:
import { PolicyAssignment } from "./policyAssignment";
import { PolicyDefinition } from "./policyDefinition";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:authorization/v20151001preview:PolicyAssignment":
                return new PolicyAssignment(name, <any>undefined, { urn })
            case "azure-nextgen:authorization/v20151001preview:PolicyDefinition":
                return new PolicyDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "authorization/v20151001preview", _module)
