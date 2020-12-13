// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./cloudEndpoint";
export * from "./getCloudEndpoint";
export * from "./getPrivateEndpointConnection";
export * from "./getRegisteredServer";
export * from "./getServerEndpoint";
export * from "./getStorageSyncService";
export * from "./getSyncGroup";
export * from "./privateEndpointConnection";
export * from "./registeredServer";
export * from "./serverEndpoint";
export * from "./storageSyncService";
export * from "./syncGroup";

// Export enums:
export * from "../../types/enums/storagesync/v20200301";

// Import resources to register:
import { CloudEndpoint } from "./cloudEndpoint";
import { PrivateEndpointConnection } from "./privateEndpointConnection";
import { RegisteredServer } from "./registeredServer";
import { ServerEndpoint } from "./serverEndpoint";
import { StorageSyncService } from "./storageSyncService";
import { SyncGroup } from "./syncGroup";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:storagesync/v20200301:CloudEndpoint":
                return new CloudEndpoint(name, <any>undefined, { urn })
            case "azure-nextgen:storagesync/v20200301:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:storagesync/v20200301:RegisteredServer":
                return new RegisteredServer(name, <any>undefined, { urn })
            case "azure-nextgen:storagesync/v20200301:ServerEndpoint":
                return new ServerEndpoint(name, <any>undefined, { urn })
            case "azure-nextgen:storagesync/v20200301:StorageSyncService":
                return new StorageSyncService(name, <any>undefined, { urn })
            case "azure-nextgen:storagesync/v20200301:SyncGroup":
                return new SyncGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "storagesync/v20200301", _module)
