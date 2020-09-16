import * as pulumi from "@pulumi/pulumi";
/**
 * Maintenance configuration record type
 */
export declare class MaintenanceConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing MaintenanceConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MaintenanceConfiguration;
    /**
     * Returns true if the given object is an instance of MaintenanceConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MaintenanceConfiguration;
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration. This is for future use only and would be a set of key value pairs for additional information e.g. whether to follow SDP etc.
     */
    readonly extensionProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets location of the resource
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets maintenanceScope of the configuration. It represent the impact area of the maintenance
     */
    readonly maintenanceScope: pulumi.Output<string | undefined>;
    /**
     * Name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets namespace of the resource e.g. Microsoft.Maintenance or Microsoft.Sql
     */
    readonly namespace: pulumi.Output<string | undefined>;
    /**
     * Gets or sets tags of the resource
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a MaintenanceConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaintenanceConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a MaintenanceConfiguration resource.
 */
export interface MaintenanceConfigurationArgs {
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration. This is for future use only and would be a set of key value pairs for additional information e.g. whether to follow SDP etc.
     */
    readonly extensionProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Gets or sets location of the resource
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets maintenanceScope of the configuration. It represent the impact area of the maintenance
     */
    readonly maintenanceScope?: pulumi.Input<string>;
    /**
     * Gets or sets namespace of the resource e.g. Microsoft.Maintenance or Microsoft.Sql
     */
    readonly namespace?: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource Identifier
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Gets or sets tags of the resource
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
