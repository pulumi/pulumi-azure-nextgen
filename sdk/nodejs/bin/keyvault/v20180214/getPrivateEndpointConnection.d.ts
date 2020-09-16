import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult>;
export interface GetPrivateEndpointConnectionArgs {
    /**
     * Name of the private endpoint connection associated with the key vault.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * Name of the resource group that contains the key vault.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the key vault.
     */
    readonly vaultName: string;
}
/**
 * Private endpoint connection resource.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Azure location of the key vault resource.
     */
    readonly location: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the private endpoint object.
     */
    readonly privateEndpoint?: outputs.keyvault.v20180214.PrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState?: outputs.keyvault.v20180214.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState?: string;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}
