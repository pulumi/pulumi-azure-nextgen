import * as pulumi from "@pulumi/pulumi";
/**
 * Describes the source control configuration for web app
 */
export declare class SiteSourceControlSlot extends pulumi.CustomResource {
    /**
     * Get an existing SiteSourceControlSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SiteSourceControlSlot;
    /**
     * Returns true if the given object is an instance of SiteSourceControlSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteSourceControlSlot;
    /**
     * Name of branch to use for deployment
     */
    readonly branch: pulumi.Output<string | undefined>;
    /**
     * Whether to manual or continuous integration
     */
    readonly deploymentRollbackEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Whether to manual or continuous integration
     */
    readonly isManualIntegration: pulumi.Output<boolean | undefined>;
    /**
     * Mercurial or Git repository type
     */
    readonly isMercurial: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Repository or source control url
     */
    readonly repoUrl: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a SiteSourceControlSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteSourceControlSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SiteSourceControlSlot resource.
 */
export interface SiteSourceControlSlotArgs {
    /**
     * Name of branch to use for deployment
     */
    readonly branch?: pulumi.Input<string>;
    /**
     * Whether to manual or continuous integration
     */
    readonly deploymentRollbackEnabled?: pulumi.Input<boolean>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Whether to manual or continuous integration
     */
    readonly isManualIntegration?: pulumi.Input<boolean>;
    /**
     * Mercurial or Git repository type
     */
    readonly isMercurial?: pulumi.Input<boolean>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Repository or source control url
     */
    readonly repoUrl?: pulumi.Input<string>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
}
