import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateLinkServicePrivateEndpointConnection(args: GetPrivateLinkServicePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicePrivateEndpointConnectionResult>;
export interface GetPrivateLinkServicePrivateEndpointConnectionArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the private end point connection.
     */
    readonly peConnectionName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the private link service.
     */
    readonly serviceName: string;
}
/**
 * PrivateEndpointConnection resource.
 */
export interface GetPrivateLinkServicePrivateEndpointConnectionResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The consumer link id.
     */
    readonly linkIdentifier: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: outputs.network.v20200301.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: outputs.network.v20200301.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
