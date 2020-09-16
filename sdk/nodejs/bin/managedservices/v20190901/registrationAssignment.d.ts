import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Registration assignment.
 */
export declare class RegistrationAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RegistrationAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistrationAssignment;
    /**
     * Returns true if the given object is an instance of RegistrationAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegistrationAssignment;
    /**
     * Name of the registration assignment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of a registration assignment.
     */
    readonly properties: pulumi.Output<outputs.managedservices.v20190901.RegistrationAssignmentPropertiesResponse>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RegistrationAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationAssignmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RegistrationAssignment resource.
 */
export interface RegistrationAssignmentArgs {
    /**
     * Properties of a registration assignment.
     */
    readonly properties?: pulumi.Input<inputs.managedservices.v20190901.RegistrationAssignmentProperties>;
    /**
     * Guid of the registration assignment.
     */
    readonly registrationAssignmentId: pulumi.Input<string>;
    /**
     * Scope of the resource.
     */
    readonly scope: pulumi.Input<string>;
}
