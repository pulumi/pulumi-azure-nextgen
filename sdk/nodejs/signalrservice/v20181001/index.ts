// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getSignalR";
export * from "./listSignalRKeys";
export * from "./signalR";

// Export enums:
export * from "../../types/enums/signalrservice/v20181001";

// Import resources to register:
import { SignalR } from "./signalR";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:signalrservice/v20181001:SignalR":
                return new SignalR(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "signalrservice/v20181001", _module)
