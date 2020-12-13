// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * An Azure Cosmos DB storedProcedure.
 */
export class SqlResourceSqlStoredProcedure extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlStoredProcedure resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlStoredProcedure {
        return new SqlResourceSqlStoredProcedure(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:documentdb/v20191212:SqlResourceSqlStoredProcedure';

    /**
     * Returns true if the given object is an instance of SqlResourceSqlStoredProcedure.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlResourceSqlStoredProcedure {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlResourceSqlStoredProcedure.__pulumiType;
    }

    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly resource!: pulumi.Output<outputs.documentdb.v20191212.SqlStoredProcedureGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlResourceSqlStoredProcedure resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlStoredProcedureArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.containerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.databaseName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.options === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.resource === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storedProcedureName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storedProcedureName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["containerName"] = args ? args.containerName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["resource"] = args ? args.resource : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storedProcedureName"] = args ? args.storedProcedureName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["resource"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:documentdb/latest:SqlResourceSqlStoredProcedure" }, { type: "azure-nextgen:documentdb/v20190801:SqlResourceSqlStoredProcedure" }, { type: "azure-nextgen:documentdb/v20200301:SqlResourceSqlStoredProcedure" }, { type: "azure-nextgen:documentdb/v20200401:SqlResourceSqlStoredProcedure" }, { type: "azure-nextgen:documentdb/v20200601preview:SqlResourceSqlStoredProcedure" }, { type: "azure-nextgen:documentdb/v20200901:SqlResourceSqlStoredProcedure" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SqlResourceSqlStoredProcedure.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlResourceSqlStoredProcedure resource.
 */
export interface SqlResourceSqlStoredProcedureArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Cosmos DB container name.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    readonly options: pulumi.Input<inputs.documentdb.v20191212.CreateUpdateOptions>;
    /**
     * The standard JSON format of a storedProcedure
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20191212.SqlStoredProcedureResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB storedProcedure name.
     */
    readonly storedProcedureName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
