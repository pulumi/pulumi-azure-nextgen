// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getReplicationStorageClassificationMapping(args: GetReplicationStorageClassificationMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationStorageClassificationMappingResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:recoveryservices/v20180710:getReplicationStorageClassificationMapping", {
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "storageClassificationMappingName": args.storageClassificationMappingName,
        "storageClassificationName": args.storageClassificationName,
    }, opts);
}

export interface GetReplicationStorageClassificationMappingArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: string;
    /**
     * Storage classification mapping name.
     */
    readonly storageClassificationMappingName: string;
    /**
     * Storage classification name.
     */
    readonly storageClassificationName: string;
}

/**
 * Storage mapping object.
 */
export interface GetReplicationStorageClassificationMappingResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Properties of the storage mapping object.
     */
    readonly properties: outputs.recoveryservices.v20180710.StorageClassificationMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
