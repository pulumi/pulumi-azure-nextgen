import * as pulumi from "@pulumi/pulumi";
export declare function getFileShare(args: GetFileShareArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareResult>;
export interface GetFileShareArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    readonly shareName: string;
}
/**
 * Properties of the file share, including Id, resource name, resource type, Etag.
 */
export interface GetFileShareResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Returns the date and time the share was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120).
     */
    readonly shareQuota?: number;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
