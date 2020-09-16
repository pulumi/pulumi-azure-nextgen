import * as pulumi from "@pulumi/pulumi";
export declare function listDatabaseAccountKeys(args: ListDatabaseAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseAccountKeysResult>;
export interface ListDatabaseAccountKeysArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The access keys for the given database account.
 */
export interface ListDatabaseAccountKeysResult {
    /**
     * Base 64 encoded value of the primary read-write key.
     */
    readonly primaryMasterKey: string;
    /**
     * Base 64 encoded value of the primary read-only key.
     */
    readonly primaryReadonlyMasterKey: string;
    /**
     * Base 64 encoded value of the secondary read-write key.
     */
    readonly secondaryMasterKey: string;
    /**
     * Base 64 encoded value of the secondary read-only key.
     */
    readonly secondaryReadonlyMasterKey: string;
}
