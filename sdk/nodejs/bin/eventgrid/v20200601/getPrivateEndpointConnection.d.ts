import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult>;
export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the parent resource (namely, either, the topic name or domain name).
     */
    readonly parentName: string;
    /**
     * The type of the parent resource. This can be either \'topics\' or \'domains\'.
     */
    readonly parentType: string;
    /**
     * The name of the private endpoint connection connection.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
}
export interface GetPrivateEndpointConnectionResult {
    /**
     * GroupIds from the private link service resource.
     */
    readonly groupIds?: string[];
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The Private Endpoint resource for this Connection.
     */
    readonly privateEndpoint?: outputs.eventgrid.v20200601.PrivateEndpointResponse;
    /**
     * Details about the state of the connection.
     */
    readonly privateLinkServiceConnectionState?: outputs.eventgrid.v20200601.ConnectionStateResponse;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    readonly provisioningState?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
