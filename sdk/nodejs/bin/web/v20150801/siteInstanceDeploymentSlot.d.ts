import * as pulumi from "@pulumi/pulumi";
/**
 * Represents user credentials used for publishing activity
 */
export declare class SiteInstanceDeploymentSlot extends pulumi.CustomResource {
    /**
     * Get an existing SiteInstanceDeploymentSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SiteInstanceDeploymentSlot;
    /**
     * Returns true if the given object is an instance of SiteInstanceDeploymentSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteInstanceDeploymentSlot;
    /**
     * Active
     */
    readonly active: pulumi.Output<boolean | undefined>;
    /**
     * Author
     */
    readonly author: pulumi.Output<string | undefined>;
    /**
     * AuthorEmail
     */
    readonly authorEmail: pulumi.Output<string | undefined>;
    /**
     * Deployer
     */
    readonly deployer: pulumi.Output<string | undefined>;
    /**
     * Detail
     */
    readonly details: pulumi.Output<string | undefined>;
    /**
     * EndTime
     */
    readonly endTime: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Message
     */
    readonly message: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * StartTime
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * Status
     */
    readonly status: pulumi.Output<number | undefined>;
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
     * Create a SiteInstanceDeploymentSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteInstanceDeploymentSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SiteInstanceDeploymentSlot resource.
 */
export interface SiteInstanceDeploymentSlotArgs {
    /**
     * Active
     */
    readonly active?: pulumi.Input<boolean>;
    /**
     * Author
     */
    readonly author?: pulumi.Input<string>;
    /**
     * AuthorEmail
     */
    readonly authorEmail?: pulumi.Input<string>;
    /**
     * Deployer
     */
    readonly deployer?: pulumi.Input<string>;
    /**
     * Detail
     */
    readonly details?: pulumi.Input<string>;
    /**
     * EndTime
     */
    readonly endTime?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id: pulumi.Input<string>;
    /**
     * Id of web app instance
     */
    readonly instanceId: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Message
     */
    readonly message?: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * StartTime
     */
    readonly startTime?: pulumi.Input<string>;
    /**
     * Status
     */
    readonly status?: pulumi.Input<number>;
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
