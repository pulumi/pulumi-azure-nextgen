import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
 */
export declare class Peering extends pulumi.CustomResource {
    /**
     * Get an existing Peering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Peering;
    /**
     * Returns true if the given object is an instance of Peering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Peering;
    /**
     * The properties that define a direct peering.
     */
    readonly direct: pulumi.Output<outputs.peering.v20200401.PeeringPropertiesDirectResponse | undefined>;
    /**
     * The properties that define an exchange peering.
     */
    readonly exchange: pulumi.Output<outputs.peering.v20200401.PeeringPropertiesExchangeResponse | undefined>;
    /**
     * The kind of the peering.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The location of the peering.
     */
    readonly peeringLocation: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The SKU that defines the tier and kind of the peering.
     */
    readonly sku: pulumi.Output<outputs.peering.v20200401.PeeringSkuResponse>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Peering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Peering resource.
 */
export interface PeeringArgs {
    /**
     * The properties that define a direct peering.
     */
    readonly direct?: pulumi.Input<inputs.peering.v20200401.PeeringPropertiesDirect>;
    /**
     * The properties that define an exchange peering.
     */
    readonly exchange?: pulumi.Input<inputs.peering.v20200401.PeeringPropertiesExchange>;
    /**
     * The kind of the peering.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The location of the peering.
     */
    readonly peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    readonly peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU that defines the tier and kind of the peering.
     */
    readonly sku: pulumi.Input<inputs.peering.v20200401.PeeringSku>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
