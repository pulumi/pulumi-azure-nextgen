import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Policy assignment.
 */
export declare class PolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing PolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyAssignment;
    /**
     * Returns true if the given object is an instance of PolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PolicyAssignment;
    /**
     * Gets or sets the policy assignment name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the policy assignment properties.
     */
    readonly properties: pulumi.Output<outputs.authorization.v20151101.PolicyAssignmentPropertiesResponse>;
    /**
     * Create a PolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PolicyAssignment resource.
 */
export interface PolicyAssignmentArgs {
    /**
     * Policy assignment name.
     */
    readonly policyAssignmentName: pulumi.Input<string>;
    /**
     * Gets or sets the policy assignment properties.
     */
    readonly properties?: pulumi.Input<inputs.authorization.v20151101.PolicyAssignmentProperties>;
    /**
     * Scope.
     */
    readonly scope: pulumi.Input<string>;
}
