import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A private endpoint connection
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
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    readonly privateEndpoint: pulumi.Output<outputs.dbformariadb.v20180601.PrivateEndpointPropertyResponse | undefined>;
    /**
     * Connection state of the private endpoint connection.
     */
    readonly privateLinkServiceConnectionState: pulumi.Output<outputs.dbformariadb.v20180601.PrivateLinkServiceConnectionStatePropertyResponse | undefined>;
    /**
     * State of the private endpoint connection.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
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
     * Private endpoint which the connection belongs to.
     */
    readonly privateEndpoint?: pulumi.Input<inputs.dbformariadb.v20180601.PrivateEndpointProperty>;
    readonly privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Connection state of the private endpoint connection.
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.dbformariadb.v20180601.PrivateLinkServiceConnectionStateProperty>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
}
