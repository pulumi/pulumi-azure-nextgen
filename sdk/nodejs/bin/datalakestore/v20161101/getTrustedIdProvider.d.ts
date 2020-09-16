import * as pulumi from "@pulumi/pulumi";
export declare function getTrustedIdProvider(args: GetTrustedIdProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustedIdProviderResult>;
export interface GetTrustedIdProviderArgs {
    /**
     * The name of the Data Lake Store account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the trusted identity provider to retrieve.
     */
    readonly trustedIdProviderName: string;
}
/**
 * Data Lake Store trusted identity provider information.
 */
export interface GetTrustedIdProviderResult {
    /**
     * The URL of this trusted identity provider.
     */
    readonly idProvider: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
