// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./b2ctenant";
export * from "./getB2CTenant";

// Export enums:
export * from "../../types/enums/azureactivedirectory/v20190101preview";

// Import resources to register:
import { B2CTenant } from "./b2ctenant";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:azureactivedirectory/v20190101preview:B2CTenant":
                return new B2CTenant(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "azureactivedirectory/v20190101preview", _module)
