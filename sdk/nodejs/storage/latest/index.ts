// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./blobContainer";
export * from "./blobContainerImmutabilityPolicy";
export * from "./blobInventoryPolicy";
export * from "./blobServiceProperties";
export * from "./fileServiceProperties";
export * from "./fileShare";
export * from "./getBlobContainer";
export * from "./getBlobContainerImmutabilityPolicy";
export * from "./getBlobInventoryPolicy";
export * from "./getBlobServiceProperties";
export * from "./getFileServiceProperties";
export * from "./getFileShare";
export * from "./getManagementPolicy";
export * from "./getObjectReplicationPolicy";
export * from "./getPrivateEndpointConnection";
export * from "./getQueue";
export * from "./getQueueServiceProperties";
export * from "./getStorageAccount";
export * from "./getTable";
export * from "./getTableServiceProperties";
export * from "./listStorageAccountKeys";
export * from "./listStorageAccountSAS";
export * from "./listStorageAccountServiceSAS";
export * from "./managementPolicy";
export * from "./objectReplicationPolicy";
export * from "./privateEndpointConnection";
export * from "./queue";
export * from "./queueServiceProperties";
export * from "./storageAccount";
export * from "./table";
export * from "./tableServiceProperties";

// Export enums:
export * from "../../types/enums/storage/latest";

// Import resources to register:
import { BlobContainer } from "./blobContainer";
import { BlobContainerImmutabilityPolicy } from "./blobContainerImmutabilityPolicy";
import { BlobInventoryPolicy } from "./blobInventoryPolicy";
import { BlobServiceProperties } from "./blobServiceProperties";
import { FileServiceProperties } from "./fileServiceProperties";
import { FileShare } from "./fileShare";
import { ManagementPolicy } from "./managementPolicy";
import { ObjectReplicationPolicy } from "./objectReplicationPolicy";
import { PrivateEndpointConnection } from "./privateEndpointConnection";
import { Queue } from "./queue";
import { QueueServiceProperties } from "./queueServiceProperties";
import { StorageAccount } from "./storageAccount";
import { Table } from "./table";
import { TableServiceProperties } from "./tableServiceProperties";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:storage/latest:BlobContainer":
                return new BlobContainer(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:BlobContainerImmutabilityPolicy":
                return new BlobContainerImmutabilityPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:BlobInventoryPolicy":
                return new BlobInventoryPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:BlobServiceProperties":
                return new BlobServiceProperties(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:FileServiceProperties":
                return new FileServiceProperties(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:FileShare":
                return new FileShare(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:ManagementPolicy":
                return new ManagementPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:ObjectReplicationPolicy":
                return new ObjectReplicationPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:Queue":
                return new Queue(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:QueueServiceProperties":
                return new QueueServiceProperties(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:StorageAccount":
                return new StorageAccount(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:Table":
                return new Table(name, <any>undefined, { urn })
            case "azure-nextgen:storage/latest:TableServiceProperties":
                return new TableServiceProperties(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "storage/latest", _module)
