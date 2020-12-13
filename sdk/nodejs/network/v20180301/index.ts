// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./endpoint";
export * from "./getEndpoint";
export * from "./getProfile";
export * from "./profile";

// Export enums:
export * from "../../types/enums/network/v20180301";

// Import resources to register:
import { Endpoint } from "./endpoint";
import { Profile } from "./profile";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:network/v20180301:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-nextgen:network/v20180301:Profile":
                return new Profile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "network/v20180301", _module)
