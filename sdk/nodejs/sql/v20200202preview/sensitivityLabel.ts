// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A sensitivity label.
 */
export class SensitivityLabel extends pulumi.CustomResource {
    /**
     * Get an existing SensitivityLabel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SensitivityLabel {
        return new SensitivityLabel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sql/v20200202preview:SensitivityLabel';

    /**
     * Returns true if the given object is an instance of SensitivityLabel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SensitivityLabel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SensitivityLabel.__pulumiType;
    }

    /**
     * The column name.
     */
    public readonly columnName!: pulumi.Output<string>;
    /**
     * The information type.
     */
    public readonly informationType!: pulumi.Output<string | undefined>;
    /**
     * The information type ID.
     */
    public readonly informationTypeId!: pulumi.Output<string | undefined>;
    /**
     * Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
     */
    public /*out*/ readonly isDisabled!: pulumi.Output<boolean>;
    /**
     * The label ID.
     */
    public readonly labelId!: pulumi.Output<string | undefined>;
    /**
     * The label name.
     */
    public readonly labelName!: pulumi.Output<string | undefined>;
    /**
     * Resource that manages the sensitivity label.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly rank!: pulumi.Output<string | undefined>;
    /**
     * The schema name.
     */
    public readonly schemaName!: pulumi.Output<string>;
    /**
     * The table name.
     */
    public readonly tableName!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SensitivityLabel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SensitivityLabelArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.columnName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'columnName'");
            }
            if ((!args || args.databaseName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.sensitivityLabelSource === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sensitivityLabelSource'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.tableName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'tableName'");
            }
            inputs["columnName"] = args ? args.columnName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["informationType"] = args ? args.informationType : undefined;
            inputs["informationTypeId"] = args ? args.informationTypeId : undefined;
            inputs["labelId"] = args ? args.labelId : undefined;
            inputs["labelName"] = args ? args.labelName : undefined;
            inputs["rank"] = args ? args.rank : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["schemaName"] = args ? args.schemaName : undefined;
            inputs["sensitivityLabelSource"] = args ? args.sensitivityLabelSource : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["tableName"] = args ? args.tableName : undefined;
            inputs["isDisabled"] = undefined /*out*/;
            inputs["managedBy"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["columnName"] = undefined /*out*/;
            inputs["informationType"] = undefined /*out*/;
            inputs["informationTypeId"] = undefined /*out*/;
            inputs["isDisabled"] = undefined /*out*/;
            inputs["labelId"] = undefined /*out*/;
            inputs["labelName"] = undefined /*out*/;
            inputs["managedBy"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["rank"] = undefined /*out*/;
            inputs["schemaName"] = undefined /*out*/;
            inputs["tableName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:sql/v20170301preview:SensitivityLabel" }, { type: "azure-nextgen:sql/v20200801preview:SensitivityLabel" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SensitivityLabel.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SensitivityLabel resource.
 */
export interface SensitivityLabelArgs {
    /**
     * The name of the column.
     */
    readonly columnName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The information type.
     */
    readonly informationType?: pulumi.Input<string>;
    /**
     * The information type ID.
     */
    readonly informationTypeId?: pulumi.Input<string>;
    /**
     * The label ID.
     */
    readonly labelId?: pulumi.Input<string>;
    /**
     * The label name.
     */
    readonly labelName?: pulumi.Input<string>;
    readonly rank?: pulumi.Input<enums.sql.v20200202preview.SensitivityLabelRank>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schema.
     */
    readonly schemaName: pulumi.Input<string>;
    /**
     * The source of the sensitivity label.
     */
    readonly sensitivityLabelSource: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    readonly tableName: pulumi.Input<string>;
}