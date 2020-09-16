import * as pulumi from "@pulumi/pulumi";
export declare function listIntegrationAccountCallbackUrl(args: ListIntegrationAccountCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountCallbackUrlResult>;
export interface ListIntegrationAccountCallbackUrlArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The key type.
     */
    readonly keyType?: string;
    /**
     * The expiry time.
     */
    readonly notAfter?: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The callback url.
 */
export interface ListIntegrationAccountCallbackUrlResult {
    /**
     * The URL value.
     */
    readonly value?: string;
}
