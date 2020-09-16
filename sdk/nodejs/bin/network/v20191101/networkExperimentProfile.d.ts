import * as pulumi from "@pulumi/pulumi";
/**
 * Defines an Network Experiment Profile and lists of Experiments
 */
export declare class NetworkExperimentProfile extends pulumi.CustomResource {
    /**
     * Get an existing NetworkExperimentProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkExperimentProfile;
    /**
     * Returns true if the given object is an instance of NetworkExperimentProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkExperimentProfile;
    /**
     * The state of the Experiment
     */
    readonly enabledState: pulumi.Output<string | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource status.
     */
    readonly resourceState: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a NetworkExperimentProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkExperimentProfileArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NetworkExperimentProfile resource.
 */
export interface NetworkExperimentProfileArgs {
    /**
     * The state of the Experiment
     */
    readonly enabledState?: pulumi.Input<string>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Profile
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource status.
     */
    readonly resourceState?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
