import * as pulumi from "@pulumi/pulumi";
export declare function getAsset(args: GetAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetResult>;
export interface GetAssetArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Asset name.
     */
    readonly assetName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * An Asset.
 */
export interface GetAssetResult {
    /**
     * The alternate ID of the Asset.
     */
    readonly alternateId?: string;
    /**
     * The Asset ID.
     */
    readonly assetId: string;
    /**
     * The name of the asset blob container.
     */
    readonly container?: string;
    /**
     * The creation date of the Asset.
     */
    readonly created: string;
    /**
     * The Asset description.
     */
    readonly description?: string;
    /**
     * The last modified date of the Asset.
     */
    readonly lastModified: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The name of the storage account.
     */
    readonly storageAccountName?: string;
    /**
     * The Asset encryption format. One of None or MediaStorageEncryption.
     */
    readonly storageEncryptionFormat: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
