import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of the file share, including Id, resource name, resource type, Etag.
 */
export declare class FileShare extends pulumi.CustomResource {
    /**
     * Get an existing FileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileShare;
    /**
     * Returns true if the given object is an instance of FileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FileShare;
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
     */
    readonly accessTier: pulumi.Output<string | undefined>;
    /**
     * Indicates the last modification time for share access tier.
     */
    readonly accessTierChangeTime: pulumi.Output<string>;
    /**
     * Indicates if there is a pending transition for access tier.
     */
    readonly accessTierStatus: pulumi.Output<string>;
    /**
     * Indicates whether the share was deleted.
     */
    readonly deleted: pulumi.Output<boolean>;
    /**
     * The deleted time if the share was deleted.
     */
    readonly deletedTime: pulumi.Output<string>;
    /**
     * The authentication protocol that is used for the file share. Can only be specified when creating a share.
     */
    readonly enabledProtocols: pulumi.Output<string | undefined>;
    /**
     * Resource Etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Returns the date and time the share was last modified.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Remaining retention days for share that was soft deleted.
     */
    readonly remainingRetentionDays: pulumi.Output<number>;
    /**
     * The property is for NFS share only. The default is NoRootSquash.
     */
    readonly rootSquash: pulumi.Output<string | undefined>;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
     */
    readonly shareQuota: pulumi.Output<number | undefined>;
    /**
     * The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
     */
    readonly shareUsageBytes: pulumi.Output<number>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The version of the share.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a FileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileShareArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FileShare resource.
 */
export interface FileShareArgs {
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
     */
    readonly accessTier?: pulumi.Input<string>;
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The authentication protocol that is used for the file share. Can only be specified when creating a share.
     */
    readonly enabledProtocols?: pulumi.Input<string>;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The property is for NFS share only. The default is NoRootSquash.
     */
    readonly rootSquash?: pulumi.Input<string>;
    /**
     * The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
     */
    readonly shareQuota?: pulumi.Input<number>;
}
