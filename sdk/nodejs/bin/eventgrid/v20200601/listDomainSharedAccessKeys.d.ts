import * as pulumi from "@pulumi/pulumi";
export declare function listDomainSharedAccessKeys(args: ListDomainSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDomainSharedAccessKeysResult>;
export interface ListDomainSharedAccessKeysArgs {
    /**
     * Name of the domain.
     */
    readonly domainName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Shared access keys of the Domain.
 */
export interface ListDomainSharedAccessKeysResult {
    /**
     * Shared access key1 for the domain.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the domain.
     */
    readonly key2?: string;
}
