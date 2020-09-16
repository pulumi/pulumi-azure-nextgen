import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents an instance of a Dedicated Capacity resource.
 */
export declare class CapacityDetails extends pulumi.CustomResource {
    /**
     * Get an existing CapacityDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityDetails;
    /**
     * Returns true if the given object is an instance of CapacityDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapacityDetails;
    /**
     * A collection of Dedicated capacity administrators
     */
    readonly administration: pulumi.Output<outputs.powerbidedicated.v20171001.DedicatedCapacityAdministratorsResponse | undefined>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the PowerBI Dedicated resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The SKU of the PowerBI Dedicated resource.
     */
    readonly sku: pulumi.Output<outputs.powerbidedicated.v20171001.ResourceSkuResponse>;
    /**
     * The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the PowerBI Dedicated resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CapacityDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityDetailsArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CapacityDetails resource.
 */
export interface CapacityDetailsArgs {
    /**
     * A collection of Dedicated capacity administrators
     */
    readonly administration?: pulumi.Input<inputs.powerbidedicated.v20171001.DedicatedCapacityAdministrators>;
    /**
     * The name of the Dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    readonly dedicatedCapacityName: pulumi.Input<string>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the PowerBI Dedicated resource.
     */
    readonly sku: pulumi.Input<inputs.powerbidedicated.v20171001.ResourceSku>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
