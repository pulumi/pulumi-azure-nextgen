import * as pulumi from "@pulumi/pulumi";
export declare function getSpatialAnchorsAccount(args: GetSpatialAnchorsAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetSpatialAnchorsAccountResult>;
export interface GetSpatialAnchorsAccountArgs {
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
 * SpatialAnchorsAccount Response.
 */
export interface GetSpatialAnchorsAccountResult {
    /**
     * Correspond domain name of certain Spatial Anchors Account
     */
    readonly accountDomain: string;
    /**
     * unique id of certain account.
     */
    readonly accountId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
