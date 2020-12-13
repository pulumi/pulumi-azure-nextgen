// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./digitalTwin";
export * from "./digitalTwinsEndpoint";
export * from "./getDigitalTwin";
export * from "./getDigitalTwinsEndpoint";

// Export enums:
export * from "../../types/enums/digitaltwins/v20200301preview";

// Import resources to register:
import { DigitalTwin } from "./digitalTwin";
import { DigitalTwinsEndpoint } from "./digitalTwinsEndpoint";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:digitaltwins/v20200301preview:DigitalTwin":
                return new DigitalTwin(name, <any>undefined, { urn })
            case "azure-nextgen:digitaltwins/v20200301preview:DigitalTwinsEndpoint":
                return new DigitalTwinsEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "digitaltwins/v20200301preview", _module)
