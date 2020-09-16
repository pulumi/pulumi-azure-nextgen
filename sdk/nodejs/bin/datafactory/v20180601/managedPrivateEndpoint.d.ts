import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Managed private endpoint resource type.
 */
export declare class ManagedPrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ManagedPrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedPrivateEndpoint;
    /**
     * Returns true if the given object is an instance of ManagedPrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedPrivateEndpoint;
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Managed private endpoint properties.
     */
    readonly properties: pulumi.Output<outputs.datafactory.v20180601.ManagedPrivateEndpointResponse>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ManagedPrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedPrivateEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ManagedPrivateEndpoint resource.
 */
export interface ManagedPrivateEndpointArgs {
    /**
     * The factory name.
     */
    readonly factoryName: pulumi.Input<string>;
    /**
     * Managed private endpoint name
     */
    readonly managedPrivateEndpointName: pulumi.Input<string>;
    /**
     * Managed virtual network name
     */
    readonly managedVirtualNetworkName: pulumi.Input<string>;
    /**
     * Managed private endpoint properties.
     */
    readonly properties: pulumi.Input<inputs.datafactory.v20180601.ManagedPrivateEndpoint>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
