import * as pulumi from "@pulumi/pulumi";
/**
 * Settings defined at the Management Group scope.
 */
export declare class HierarchySetting extends pulumi.CustomResource {
    /**
     * Get an existing HierarchySetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HierarchySetting;
    /**
     * Returns true if the given object is an instance of HierarchySetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HierarchySetting;
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    readonly defaultManagementGroup: pulumi.Output<string | undefined>;
    /**
     * The name of the object. In this case, default.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    readonly requireAuthorizationForGroupCreation: pulumi.Output<boolean | undefined>;
    /**
     * The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/settings.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HierarchySetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HierarchySettingArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HierarchySetting resource.
 */
export interface HierarchySettingArgs {
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    readonly defaultManagementGroup?: pulumi.Input<string>;
    /**
     * Management Group ID.
     */
    readonly groupId: pulumi.Input<string>;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    readonly requireAuthorizationForGroupCreation?: pulumi.Input<boolean>;
}
