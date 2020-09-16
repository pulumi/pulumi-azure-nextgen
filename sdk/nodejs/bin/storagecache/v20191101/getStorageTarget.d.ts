import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageTarget(args: GetStorageTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTargetResult>;
export interface GetStorageTargetArgs {
    /**
     * Name of Cache.
     */
    readonly cacheName: string;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the Storage Target.
     */
    readonly storageTargetName: string;
}
/**
 * A storage system being cached by a Cache.
 */
export interface GetStorageTargetResult {
    /**
     * Properties when targetType is clfs.
     */
    readonly clfs?: outputs.storagecache.v20191101.ClfsTargetResponse;
    /**
     * List of Cache namespace junctions to target for namespace associations.
     */
    readonly junctions?: outputs.storagecache.v20191101.NamespaceJunctionResponse[];
    /**
     * Name of the Storage Target.
     */
    readonly name: string;
    /**
     * Properties when targetType is nfs3.
     */
    readonly nfs3?: outputs.storagecache.v20191101.Nfs3TargetResponse;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: string;
    /**
     * Type of the Storage Target.
     */
    readonly targetType?: string;
    /**
     * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
     */
    readonly type: string;
    /**
     * Properties when targetType is unknown.
     */
    readonly unknown?: outputs.storagecache.v20191101.UnknownTargetResponse;
}
