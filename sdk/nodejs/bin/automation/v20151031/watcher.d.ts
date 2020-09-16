import * as pulumi from "@pulumi/pulumi";
/**
 * Definition of the watcher type.
 */
export declare class Watcher extends pulumi.CustomResource {
    /**
     * Get an existing Watcher resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Watcher;
    /**
     * Returns true if the given object is an instance of Watcher.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Watcher;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the frequency at which the watcher is invoked.
     */
    readonly executionFrequencyInSeconds: pulumi.Output<number | undefined>;
    /**
     * Details of the user who last modified the watcher.
     */
    readonly lastModifiedBy: pulumi.Output<string>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
     */
    readonly scriptName: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the parameters of the script.
     */
    readonly scriptParameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets the name of the hybrid worker group the watcher will run on.
     */
    readonly scriptRunOn: pulumi.Output<string | undefined>;
    /**
     * Gets the current status of the watcher.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Watcher resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WatcherArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Watcher resource.
 */
export interface WatcherArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Gets or sets the frequency at which the watcher is invoked.
     */
    readonly executionFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
     */
    readonly scriptName?: pulumi.Input<string>;
    /**
     * Gets or sets the parameters of the script.
     */
    readonly scriptParameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Gets or sets the name of the hybrid worker group the watcher will run on.
     */
    readonly scriptRunOn?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The watcher name.
     */
    readonly watcherName: pulumi.Input<string>;
}
