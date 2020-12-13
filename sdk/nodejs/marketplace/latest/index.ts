// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getPrivateStoreOffer";
export * from "./privateStoreOffer";

// Export enums:
export * from "../../types/enums/marketplace/latest";

// Import resources to register:
import { PrivateStoreOffer } from "./privateStoreOffer";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:marketplace/latest:PrivateStoreOffer":
                return new PrivateStoreOffer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "marketplace/latest", _module)
