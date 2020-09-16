import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a database elastic pool.
 */
export declare class ElasticPool extends pulumi.CustomResource {
    /**
     * Get an existing ElasticPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ElasticPool;
    /**
     * Returns true if the given object is an instance of ElasticPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ElasticPool;
    /**
     * The creation date of the elastic pool (ISO8601 format).
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The maximum DTU any one database can consume.
     */
    readonly databaseDtuMax: pulumi.Output<number | undefined>;
    /**
     * The minimum DTU all databases are guaranteed.
     */
    readonly databaseDtuMin: pulumi.Output<number | undefined>;
    /**
     * The total shared DTU for the database elastic pool.
     */
    readonly dtu: pulumi.Output<number | undefined>;
    /**
     * The edition of the elastic pool.
     */
    readonly edition: pulumi.Output<string | undefined>;
    /**
     * Kind of elastic pool.  This is metadata used for the Azure portal experience.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The state of the elastic pool.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Gets storage limit for the database elastic pool in MB.
     */
    readonly storageMB: pulumi.Output<number | undefined>;
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
     * Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant: pulumi.Output<boolean | undefined>;
    /**
     * Create a ElasticPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticPoolArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * The maximum DTU any one database can consume.
     */
    readonly databaseDtuMax?: pulumi.Input<number>;
    /**
     * The minimum DTU all databases are guaranteed.
     */
    readonly databaseDtuMin?: pulumi.Input<number>;
    /**
     * The total shared DTU for the database elastic pool.
     */
    readonly dtu?: pulumi.Input<number>;
    /**
     * The edition of the elastic pool.
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * The name of the elastic pool to be operated on (updated or created).
     */
    readonly elasticPoolName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * Gets storage limit for the database elastic pool in MB.
     */
    readonly storageMB?: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: pulumi.Input<boolean>;
}
