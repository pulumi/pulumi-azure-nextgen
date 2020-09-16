import * as pulumi from "@pulumi/pulumi";
/**
 * Class representing an attached database configuration.
 */
export declare class AttachedDatabaseConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing AttachedDatabaseConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttachedDatabaseConfiguration;
    /**
     * Returns true if the given object is an instance of AttachedDatabaseConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AttachedDatabaseConfiguration;
    /**
     * The list of databases from the clusterResourceId which are currently attached to the cluster.
     */
    readonly attachedDatabaseNames: pulumi.Output<string[]>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    readonly clusterResourceId: pulumi.Output<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The default principals modification kind
     */
    readonly defaultPrincipalsModificationKind: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a AttachedDatabaseConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttachedDatabaseConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AttachedDatabaseConfiguration resource.
 */
export interface AttachedDatabaseConfigurationArgs {
    /**
     * The name of the attached database configuration.
     */
    readonly attachedDatabaseConfigurationName: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    readonly clusterResourceId: pulumi.Input<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The default principals modification kind
     */
    readonly defaultPrincipalsModificationKind: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
