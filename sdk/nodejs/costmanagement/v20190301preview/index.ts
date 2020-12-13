// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./cloudConnector";
export * from "./getCloudConnector";

// Export enums:
export * from "../../types/enums/costmanagement/v20190301preview";

// Import resources to register:
import { CloudConnector } from "./cloudConnector";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:costmanagement/v20190301preview:CloudConnector":
                return new CloudConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "costmanagement/v20190301preview", _module)
