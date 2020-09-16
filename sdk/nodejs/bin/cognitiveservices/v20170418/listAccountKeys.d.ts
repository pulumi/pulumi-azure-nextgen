import * as pulumi from "@pulumi/pulumi";
export declare function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult>;
export interface ListAccountKeysArgs {
    /**
     * The name of Cognitive Services account.
     */
    readonly accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The access keys for the cognitive services account.
 */
export interface ListAccountKeysResult {
    /**
     * Gets the value of key 1.
     */
    readonly key1?: string;
    /**
     * Gets the value of key 2.
     */
    readonly key2?: string;
}
