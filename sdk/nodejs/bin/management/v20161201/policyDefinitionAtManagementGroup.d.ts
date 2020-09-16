import * as pulumi from "@pulumi/pulumi";
/**
 * The policy definition.
 */
export declare class PolicyDefinitionAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PolicyDefinitionAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyDefinitionAtManagementGroup;
    /**
     * Returns true if the given object is an instance of PolicyDefinitionAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PolicyDefinitionAtManagementGroup;
    /**
     * The policy definition description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy definition.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The policy definition metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The policy definition mode. Possible values are NotSpecified, Indexed, and All.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the policy definition.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Required if a parameter is used in policy rule.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The policy rule.
     */
    readonly policyRule: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType: pulumi.Output<string | undefined>;
    /**
     * Create a PolicyDefinitionAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyDefinitionAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PolicyDefinitionAtManagementGroup resource.
 */
export interface PolicyDefinitionAtManagementGroupArgs {
    /**
     * The policy definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the policy definition.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The ID of the management group.
     */
    readonly managementGroupId: pulumi.Input<string>;
    /**
     * The policy definition metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The policy definition mode. Possible values are NotSpecified, Indexed, and All.
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * Required if a parameter is used in policy rule.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The name of the policy definition to create.
     */
    readonly policyDefinitionName: pulumi.Input<string>;
    /**
     * The policy rule.
     */
    readonly policyRule?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: pulumi.Input<string>;
}
