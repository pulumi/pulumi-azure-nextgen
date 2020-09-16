import * as pulumi from "@pulumi/pulumi";
export declare function getElasticPool(args: GetElasticPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticPoolResult>;
export interface GetElasticPoolArgs {
    /**
     * The name of the elastic pool to be retrieved.
     */
    readonly elasticPoolName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Represents a database elastic pool.
 */
export interface GetElasticPoolResult {
    /**
     * The creation date of the elastic pool (ISO8601 format).
     */
    readonly creationDate: string;
    /**
     * The maximum DTU any one database can consume.
     */
    readonly databaseDtuMax?: number;
    /**
     * The minimum DTU all databases are guaranteed.
     */
    readonly databaseDtuMin?: number;
    /**
     * The total shared DTU for the database elastic pool.
     */
    readonly dtu?: number;
    /**
     * The edition of the elastic pool.
     */
    readonly edition?: string;
    /**
     * Kind of elastic pool.  This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the elastic pool.
     */
    readonly state: string;
    /**
     * Gets storage limit for the database elastic pool in MB.
     */
    readonly storageMB?: number;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: boolean;
}
