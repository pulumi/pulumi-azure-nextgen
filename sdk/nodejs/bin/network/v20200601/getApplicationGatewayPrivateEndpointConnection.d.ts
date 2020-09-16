import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplicationGatewayPrivateEndpointConnection(args: GetApplicationGatewayPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayPrivateEndpointConnectionResult>;
export interface GetApplicationGatewayPrivateEndpointConnectionArgs {
    /**
     * The name of the application gateway.
     */
    readonly applicationGatewayName: string;
    /**
     * The name of the application gateway private endpoint connection.
     */
    readonly connectionName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Private Endpoint connection on an application gateway.
 */
export interface GetApplicationGatewayPrivateEndpointConnectionResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The consumer link id.
     */
    readonly linkIdentifier: string;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    readonly name?: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: outputs.network.v20200601.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: outputs.network.v20200601.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the application gateway private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
