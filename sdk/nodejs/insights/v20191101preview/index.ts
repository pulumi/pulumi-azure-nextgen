// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./dataCollectionRule";
export * from "./dataCollectionRuleAssociation";
export * from "./getDataCollectionRule";
export * from "./getDataCollectionRuleAssociation";

// Export enums:
export * from "../../types/enums/insights/v20191101preview";

// Import resources to register:
import { DataCollectionRule } from "./dataCollectionRule";
import { DataCollectionRuleAssociation } from "./dataCollectionRuleAssociation";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:insights/v20191101preview:DataCollectionRule":
                return new DataCollectionRule(name, <any>undefined, { urn })
            case "azure-nextgen:insights/v20191101preview:DataCollectionRuleAssociation":
                return new DataCollectionRuleAssociation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "insights/v20191101preview", _module)
