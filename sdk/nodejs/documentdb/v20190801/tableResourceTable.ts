// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * An Azure Cosmos DB Table.
 */
export class TableResourceTable extends pulumi.CustomResource {
    /**
     * Get an existing TableResourceTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TableResourceTable {
        return new TableResourceTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:documentdb/v20190801:TableResourceTable';

    /**
     * Returns true if the given object is an instance of TableResourceTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TableResourceTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TableResourceTable.__pulumiType;
    }

    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly resource!: pulumi.Output<outputs.documentdb.v20190801.TableGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TableResourceTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableResourceTableArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
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
            if ((!args || args.tableName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'tableName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["resource"] = args ? args.resource : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tableName"] = args ? args.tableName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:documentdb/latest:TableResourceTable" }, { type: "azure-nextgen:documentdb/v20191212:TableResourceTable" }, { type: "azure-nextgen:documentdb/v20200301:TableResourceTable" }, { type: "azure-nextgen:documentdb/v20200401:TableResourceTable" }, { type: "azure-nextgen:documentdb/v20200601preview:TableResourceTable" }, { type: "azure-nextgen:documentdb/v20200901:TableResourceTable" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(TableResourceTable.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a TableResourceTable resource.
 */
export interface TableResourceTableArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    readonly options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a Table
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20190801.TableResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB table name.
     */
    readonly tableName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
