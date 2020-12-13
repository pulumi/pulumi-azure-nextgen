// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getMultipleActivationKey";
export * from "./multipleActivationKey";

// Export enums:
export * from "../../types/enums/windowsesu/v20190916preview";

// Import resources to register:
import { MultipleActivationKey } from "./multipleActivationKey";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:windowsesu/v20190916preview:MultipleActivationKey":
                return new MultipleActivationKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "windowsesu/v20190916preview", _module)
