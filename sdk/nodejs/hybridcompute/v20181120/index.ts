// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getGuestConfigurationHCRPAssignment";
export * from "./guestConfigurationHCRPAssignment";

// Export enums:
export * from "../../types/enums/hybridcompute/v20181120";

// Import resources to register:
import { GuestConfigurationHCRPAssignment } from "./guestConfigurationHCRPAssignment";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:hybridcompute/v20181120:GuestConfigurationHCRPAssignment":
                return new GuestConfigurationHCRPAssignment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "hybridcompute/v20181120", _module)
