// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./dpsCertificate";
export * from "./getDpsCertificate";
export * from "./getIotDpsResource";
export * from "./iotDpsResource";
export * from "./listIotDpsResourceKeys";
export * from "./listIotDpsResourceKeysForKeyName";

// Export enums:
export * from "../../types/enums/devices/v20200101";

// Import resources to register:
import { DpsCertificate } from "./dpsCertificate";
import { IotDpsResource } from "./iotDpsResource";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:devices/v20200101:DpsCertificate":
                return new DpsCertificate(name, <any>undefined, { urn })
            case "azure-nextgen:devices/v20200101:IotDpsResource":
                return new IotDpsResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "devices/v20200101", _module)
