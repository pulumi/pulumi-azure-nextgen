// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getStorageTarget(args: GetStorageTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTargetResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:storagecache/latest:getStorageTarget", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "storageTargetName": args.storageTargetName,
    }, opts);
}

export interface GetStorageTargetArgs {
    /**
     * Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
     */
    readonly cacheName: string;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
     */
    readonly storageTargetName: string;
}

/**
 * Type of the Storage Target.
 */
export interface GetStorageTargetResult {
    /**
     * Properties when targetType is clfs.
     */
    readonly clfs?: outputs.storagecache.latest.ClfsTargetResponse;
    /**
     * Resource ID of the Storage Target.
     */
    readonly id: string;
    /**
     * List of Cache namespace junctions to target for namespace associations.
     */
    readonly junctions?: outputs.storagecache.latest.NamespaceJunctionResponse[];
    /**
     * Region name string.
     */
    readonly location: string;
    /**
     * Name of the Storage Target.
     */
    readonly name: string;
    /**
     * Properties when targetType is nfs3.
     */
    readonly nfs3?: outputs.storagecache.latest.Nfs3TargetResponse;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: outputs.storagecache.latest.SystemDataResponse;
    /**
     * Type of the Storage Target.
     */
    readonly targetType: string;
    /**
     * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
     */
    readonly type: string;
    /**
     * Properties when targetType is unknown.
     */
    readonly unknown?: outputs.storagecache.latest.UnknownTargetResponse;
}
