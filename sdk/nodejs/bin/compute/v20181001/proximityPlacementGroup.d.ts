import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Specifies information about the proximity placement group.
 */
export declare class ProximityPlacementGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProximityPlacementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProximityPlacementGroup;
    /**
     * Returns true if the given object is an instance of ProximityPlacementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProximityPlacementGroup;
    /**
     * A list of references to all availability sets in the proximity placement group.
     */
    readonly availabilitySets: pulumi.Output<outputs.compute.v20181001.SubResourceResponse[]>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
     */
    readonly proximityPlacementGroupType: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * A list of references to all virtual machine scale sets in the proximity placement group.
     */
    readonly virtualMachineScaleSets: pulumi.Output<outputs.compute.v20181001.SubResourceResponse[]>;
    /**
     * A list of references to all virtual machines in the proximity placement group.
     */
    readonly virtualMachines: pulumi.Output<outputs.compute.v20181001.SubResourceResponse[]>;
    /**
     * Create a ProximityPlacementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProximityPlacementGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ProximityPlacementGroup resource.
 */
export interface ProximityPlacementGroupArgs {
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the proximity placement group.
     */
    readonly proximityPlacementGroupName: pulumi.Input<string>;
    /**
     * Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
     */
    readonly proximityPlacementGroupType?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
