// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./adccatalog";
export * from "./getADCCatalog";

// Export enums:
export * from "../../types/enums/datacatalog/v20160330";

// Import resources to register:
import { ADCCatalog } from "./adccatalog";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:datacatalog/v20160330:ADCCatalog":
                return new ADCCatalog(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "datacatalog/v20160330", _module)
