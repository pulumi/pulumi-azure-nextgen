import * as pulumi from "@pulumi/pulumi";
export declare function listAssetContainerSas(args: ListAssetContainerSasArgs, opts?: pulumi.InvokeOptions): Promise<ListAssetContainerSasResult>;
export interface ListAssetContainerSasArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Asset name.
     */
    readonly assetName: string;
    /**
     * The SAS URL expiration time.  This must be less than 24 hours from the current time.
     */
    readonly expiryTime?: string;
    /**
     * The permissions to set on the SAS URL.
     */
    readonly permissions?: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * The Asset Storage container SAS URLs.
 */
export interface ListAssetContainerSasResult {
    /**
     * The list of Asset container SAS URLs.
     */
    readonly assetContainerSasUrls?: string[];
}
