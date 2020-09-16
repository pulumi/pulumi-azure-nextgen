import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult>;
export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    readonly resourceName: string;
}
/**
 * A private endpoint connection
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The name of the private endpoint connection.
     */
    readonly name: string;
    /**
     * The resource of private endpoint.
     */
    readonly privateEndpoint?: outputs.containerservice.v20200601.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: outputs.containerservice.v20200601.PrivateLinkServiceConnectionStateResponse;
    /**
     * The current provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
