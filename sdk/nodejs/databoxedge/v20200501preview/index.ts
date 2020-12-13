// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./bandwidthSchedule";
export * from "./container";
export * from "./device";
export * from "./getBandwidthSchedule";
export * from "./getContainer";
export * from "./getDevice";
export * from "./getDeviceExtendedInformation";
export * from "./getOrder";
export * from "./getRole";
export * from "./getShare";
export * from "./getStorageAccount";
export * from "./getStorageAccountCredential";
export * from "./getTrigger";
export * from "./getUser";
export * from "./order";
export * from "./role";
export * from "./share";
export * from "./storageAccount";
export * from "./storageAccountCredential";
export * from "./trigger";
export * from "./user";

// Export enums:
export * from "../../types/enums/databoxedge/v20200501preview";

// Import resources to register:
import { BandwidthSchedule } from "./bandwidthSchedule";
import { Container } from "./container";
import { Device } from "./device";
import { Order } from "./order";
import { Role } from "./role";
import { Share } from "./share";
import { StorageAccount } from "./storageAccount";
import { StorageAccountCredential } from "./storageAccountCredential";
import { Trigger } from "./trigger";
import { User } from "./user";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:databoxedge/v20200501preview:BandwidthSchedule":
                return new BandwidthSchedule(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Container":
                return new Container(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Order":
                return new Order(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Role":
                return new Role(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Share":
                return new Share(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:StorageAccount":
                return new StorageAccount(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:StorageAccountCredential":
                return new StorageAccountCredential(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:Trigger":
                return new Trigger(name, <any>undefined, { urn })
            case "azure-nextgen:databoxedge/v20200501preview:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "databoxedge/v20200501preview", _module)
