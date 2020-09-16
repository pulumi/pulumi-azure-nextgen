import * as pulumi from "@pulumi/pulumi";
export declare function listTenantAccessSecrets(args: ListTenantAccessSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListTenantAccessSecretsResult>;
export interface ListTenantAccessSecretsArgs {
    /**
     * The identifier of the Access configuration.
     */
    readonly accessName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Tenant access information contract of the API Management service.
 */
export interface ListTenantAccessSecretsResult {
    /**
     * Determines whether direct access is enabled.
     */
    readonly enabled?: boolean;
    /**
     * Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly primaryKey?: string;
    /**
     * Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly secondaryKey?: string;
}
