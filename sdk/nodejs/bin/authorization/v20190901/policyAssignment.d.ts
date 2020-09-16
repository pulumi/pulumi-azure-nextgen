import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The policy assignment.
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
     * This message will be part of response in case of policy violation.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy assignment.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
     */
    readonly enforcementMode: pulumi.Output<string | undefined>;
    /**
     * The managed identity associated with the policy assignment.
     */
    readonly identity: pulumi.Output<outputs.authorization.v20190901.IdentityResponse | undefined>;
    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The name of the policy assignment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The policy's excluded scopes.
     */
    readonly notScopes: pulumi.Output<string[] | undefined>;
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: outputs.authorization.v20190901.ParameterValuesValueResponse;
    } | undefined>;
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    readonly policyDefinitionId: pulumi.Output<string | undefined>;
    /**
     * The scope for the policy assignment.
     */
    readonly scope: pulumi.Output<string | undefined>;
    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     */
    readonly sku: pulumi.Output<outputs.authorization.v20190901.PolicySkuResponse | undefined>;
    /**
     * The type of the policy assignment.
     */
    readonly type: pulumi.Output<string>;
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
     * This message will be part of response in case of policy violation.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the policy assignment.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
     */
    readonly enforcementMode?: pulumi.Input<string>;
    /**
     * The managed identity associated with the policy assignment.
     */
    readonly identity?: pulumi.Input<inputs.authorization.v20190901.Identity>;
    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The policy's excluded scopes.
     */
    readonly notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.authorization.v20190901.ParameterValuesValue>;
    }>;
    /**
     * The name of the policy assignment.
     */
    readonly policyAssignmentName: pulumi.Input<string>;
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    readonly policyDefinitionId?: pulumi.Input<string>;
    /**
     * The scope for the policy assignment.
     */
    readonly scope: pulumi.Input<string>;
    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     */
    readonly sku?: pulumi.Input<inputs.authorization.v20190901.PolicySku>;
}
