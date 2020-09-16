import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult>;
export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The private endpoint connection of an IotHub
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The properties of a private endpoint connection
     */
    readonly properties: outputs.devices.v20200301.PrivateEndpointConnectionPropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
