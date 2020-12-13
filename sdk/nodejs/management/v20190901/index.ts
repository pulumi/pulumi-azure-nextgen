// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getPolicyDefinitionAtManagementGroup";
export * from "./getPolicySetDefinitionAtManagementGroup";
export * from "./policyDefinitionAtManagementGroup";
export * from "./policySetDefinitionAtManagementGroup";

// Export enums:
export * from "../../types/enums/management/v20190901";

// Import resources to register:
import { PolicyDefinitionAtManagementGroup } from "./policyDefinitionAtManagementGroup";
import { PolicySetDefinitionAtManagementGroup } from "./policySetDefinitionAtManagementGroup";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:management/v20190901:PolicyDefinitionAtManagementGroup":
                return new PolicyDefinitionAtManagementGroup(name, <any>undefined, { urn })
            case "azure-nextgen:management/v20190901:PolicySetDefinitionAtManagementGroup":
                return new PolicySetDefinitionAtManagementGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "management/v20190901", _module)
