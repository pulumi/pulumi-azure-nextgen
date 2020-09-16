import * as pulumi from "@pulumi/pulumi";
export declare function listSpatialAnchorsAccountKeys(args: ListSpatialAnchorsAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSpatialAnchorsAccountKeysResult>;
export interface ListSpatialAnchorsAccountKeysArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    readonly accountName: string;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Developer Keys of account
 */
export interface ListSpatialAnchorsAccountKeysResult {
    /**
     * value of primary key.
     */
    readonly primaryKey: string;
    /**
     * value of secondary key.
     */
    readonly secondaryKey: string;
}
