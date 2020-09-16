import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Role definition.
 */
export declare class RoleDefinition extends pulumi.CustomResource {
    /**
     * Get an existing RoleDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleDefinition;
    /**
     * Returns true if the given object is an instance of RoleDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoleDefinition;
    /**
     * Role definition assignable scopes.
     */
    readonly assignableScopes: pulumi.Output<string[] | undefined>;
    /**
     * The role definition description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The role definition name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Role definition permissions.
     */
    readonly permissions: pulumi.Output<outputs.authorization.v20150701.PermissionResponse[] | undefined>;
    /**
     * The role name.
     */
    readonly roleName: pulumi.Output<string | undefined>;
    /**
     * The role type.
     */
    readonly roleType: pulumi.Output<string | undefined>;
    /**
     * The role definition type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RoleDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RoleDefinition resource.
 */
export interface RoleDefinitionArgs {
    /**
     * Role definition assignable scopes.
     */
    readonly assignableScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The role definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Role definition permissions.
     */
    readonly permissions?: pulumi.Input<pulumi.Input<inputs.authorization.v20150701.Permission>[]>;
    /**
     * The ID of the role definition.
     */
    readonly roleDefinitionId: pulumi.Input<string>;
    /**
     * The role name.
     */
    readonly roleName?: pulumi.Input<string>;
    /**
     * The role type.
     */
    readonly roleType?: pulumi.Input<string>;
    /**
     * The scope of the role definition.
     */
    readonly scope: pulumi.Input<string>;
}
