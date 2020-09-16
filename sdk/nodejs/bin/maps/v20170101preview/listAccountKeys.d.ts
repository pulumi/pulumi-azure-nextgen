import * as pulumi from "@pulumi/pulumi";
export declare function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult>;
export interface ListAccountKeysArgs {
    /**
     * The name of the Maps Account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure Resource Group.
     */
    readonly resourceGroupName: string;
}
/**
 * The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption.
 */
export interface ListAccountKeysResult {
    /**
     * The primary key for accessing the Maps REST APIs.
     */
    readonly primaryKey: string;
    /**
     * The secondary key for accessing the Maps REST APIs.
     */
    readonly secondaryKey: string;
}
