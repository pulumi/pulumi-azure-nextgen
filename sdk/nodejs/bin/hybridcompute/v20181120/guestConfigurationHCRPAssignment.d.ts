import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export declare class GuestConfigurationHCRPAssignment extends pulumi.CustomResource {
    /**
     * Get an existing GuestConfigurationHCRPAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestConfigurationHCRPAssignment;
    /**
     * Returns true if the given object is an instance of GuestConfigurationHCRPAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GuestConfigurationHCRPAssignment;
    /**
     * Region where the VM is located.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Name of the guest configuration assignment.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Properties of the Guest configuration assignment.
     */
    readonly properties: pulumi.Output<outputs.hybridcompute.v20181120.GuestConfigurationAssignmentPropertiesResponse>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a GuestConfigurationHCRPAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestConfigurationHCRPAssignmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GuestConfigurationHCRPAssignment resource.
 */
export interface GuestConfigurationHCRPAssignmentArgs {
    /**
     * Name of the guest configuration assignment.
     */
    readonly guestConfigurationAssignmentName: pulumi.Input<string>;
    /**
     * Region where the VM is located.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the ARC machine.
     */
    readonly machineName: pulumi.Input<string>;
    /**
     * Name of the guest configuration assignment.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Properties of the Guest configuration assignment.
     */
    readonly properties?: pulumi.Input<inputs.hybridcompute.v20181120.GuestConfigurationAssignmentProperties>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
