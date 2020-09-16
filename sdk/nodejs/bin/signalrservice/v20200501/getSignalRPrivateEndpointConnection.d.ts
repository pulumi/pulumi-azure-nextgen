import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSignalRPrivateEndpointConnection(args: GetSignalRPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRPrivateEndpointConnectionResult>;
export interface GetSignalRPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection associated with the SignalR resource.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the SignalR resource.
     */
    readonly resourceName: string;
}
/**
 * A private endpoint connection to SignalR resource
 */
export interface GetSignalRPrivateEndpointConnectionResult {
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Private endpoint associated with the private endpoint connection
     */
    readonly privateEndpoint?: outputs.signalrservice.v20200501.PrivateEndpointResponse;
    /**
     * Connection state
     */
    readonly privateLinkServiceConnectionState?: outputs.signalrservice.v20200501.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection
     */
    readonly provisioningState: string;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
}
