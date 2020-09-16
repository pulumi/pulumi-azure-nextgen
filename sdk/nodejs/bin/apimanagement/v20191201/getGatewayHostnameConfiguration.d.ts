import * as pulumi from "@pulumi/pulumi";
export declare function getGatewayHostnameConfiguration(args: GetGatewayHostnameConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayHostnameConfigurationResult>;
export interface GetGatewayHostnameConfigurationArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    readonly gatewayId: string;
    /**
     * Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
     */
    readonly hcId: string;
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
 * Gateway hostname configuration details.
 */
export interface GetGatewayHostnameConfigurationResult {
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    readonly certificateId?: string;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    readonly hostname?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Determines whether gateway requests client certificate
     */
    readonly negotiateClientCertificate?: boolean;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
