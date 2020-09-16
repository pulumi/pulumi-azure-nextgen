import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A virtual network.
 */
export declare class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork;
    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetwork;
    /**
     * The allowed subnets of the virtual network.
     */
    readonly allowedSubnets: pulumi.Output<outputs.devtestlab.v20180915.SubnetResponse[] | undefined>;
    /**
     * The creation date of the virtual network.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * The description of the virtual network.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    readonly externalProviderResourceId: pulumi.Output<string | undefined>;
    /**
     * The external subnet properties.
     */
    readonly externalSubnets: pulumi.Output<outputs.devtestlab.v20180915.ExternalSubnetResponse[]>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The subnet overrides of the virtual network.
     */
    readonly subnetOverrides: pulumi.Output<outputs.devtestlab.v20180915.SubnetOverrideResponse[] | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * The allowed subnets of the virtual network.
     */
    readonly allowedSubnets?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.Subnet>[]>;
    /**
     * The description of the virtual network.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    readonly externalProviderResourceId?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The subnet overrides of the virtual network.
     */
    readonly subnetOverrides?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.SubnetOverride>[]>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
