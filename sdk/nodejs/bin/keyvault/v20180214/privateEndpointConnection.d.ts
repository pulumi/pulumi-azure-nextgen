import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Private endpoint connection resource.
 */
export declare class PrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnection;
    /**
     * Returns true if the given object is an instance of PrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateEndpointConnection;
    /**
     * Azure location of the key vault resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Name of the key vault resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the private endpoint object.
     */
    readonly privateEndpoint: pulumi.Output<outputs.keyvault.v20180214.PrivateEndpointResponse | undefined>;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState: pulumi.Output<outputs.keyvault.v20180214.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Resource type of the key vault resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Name of the private endpoint connection associated with the key vault.
     */
    readonly privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.keyvault.v20180214.PrivateLinkServiceConnectionState>;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the key vault.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the key vault.
     */
    readonly vaultName: pulumi.Input<string>;
}
