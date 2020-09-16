import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Policy definition.
 */
export declare class PolicyDefinition extends pulumi.CustomResource {
    /**
     * Get an existing PolicyDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyDefinition;
    /**
     * Returns true if the given object is an instance of PolicyDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PolicyDefinition;
    /**
     * Gets or sets the policy definition name.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the policy definition properties.
     */
    readonly properties: pulumi.Output<outputs.authorization.v20151101.PolicyDefinitionPropertiesResponse>;
    /**
     * Create a PolicyDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PolicyDefinition resource.
 */
export interface PolicyDefinitionArgs {
    /**
     * Gets or sets the policy definition name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The policy definition name.
     */
    readonly policyDefinitionName: pulumi.Input<string>;
    /**
     * Gets or sets the policy definition properties.
     */
    readonly properties?: pulumi.Input<inputs.authorization.v20151101.PolicyDefinitionProperties>;
}
