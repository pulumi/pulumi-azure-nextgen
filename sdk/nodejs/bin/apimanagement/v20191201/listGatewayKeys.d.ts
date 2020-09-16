import * as pulumi from "@pulumi/pulumi";
export declare function listGatewayKeys(args: ListGatewayKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListGatewayKeysResult>;
export interface ListGatewayKeysArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    readonly gatewayId: string;
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
 * Gateway authentication keys.
 */
export interface ListGatewayKeysResult {
    /**
     * Primary gateway key.
     */
    readonly primary?: string;
    /**
     * Secondary gateway key.
     */
    readonly secondary?: string;
}
