// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * The top level data export resource container.
 */
export class DataExport extends pulumi.CustomResource {
    /**
     * Get an existing DataExport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataExport {
        return new DataExport(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:operationalinsights/latest:DataExport';

    /**
     * Returns true if the given object is an instance of DataExport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataExport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataExport.__pulumiType;
    }

    /**
     * The latest data export rule modification time.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * The data export rule ID.
     */
    public readonly dataExportId!: pulumi.Output<string | undefined>;
    /**
     * Active when enabled.
     */
    public readonly enable!: pulumi.Output<boolean | undefined>;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    public readonly eventHubName!: pulumi.Output<string | undefined>;
    /**
     * Date and time when the export was last modified.
     */
    public readonly lastModifiedDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    public readonly tableNames!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataExport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataExportArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.dataExportName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'dataExportName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.workspaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'workspaceName'");
            }
            inputs["createdDate"] = args ? args.createdDate : undefined;
            inputs["dataExportId"] = args ? args.dataExportId : undefined;
            inputs["dataExportName"] = args ? args.dataExportName : undefined;
            inputs["enable"] = args ? args.enable : undefined;
            inputs["eventHubName"] = args ? args.eventHubName : undefined;
            inputs["lastModifiedDate"] = args ? args.lastModifiedDate : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceId"] = args ? args.resourceId : undefined;
            inputs["tableNames"] = args ? args.tableNames : undefined;
            inputs["workspaceName"] = args ? args.workspaceName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["createdDate"] = undefined /*out*/;
            inputs["dataExportId"] = undefined /*out*/;
            inputs["enable"] = undefined /*out*/;
            inputs["eventHubName"] = undefined /*out*/;
            inputs["lastModifiedDate"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["resourceId"] = undefined /*out*/;
            inputs["tableNames"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:operationalinsights/v20190801preview:DataExport" }, { type: "azure-nextgen:operationalinsights/v20200301preview:DataExport" }, { type: "azure-nextgen:operationalinsights/v20200801:DataExport" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(DataExport.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataExport resource.
 */
export interface DataExportArgs {
    /**
     * The latest data export rule modification time.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The data export rule ID.
     */
    readonly dataExportId?: pulumi.Input<string>;
    /**
     * The data export rule name.
     */
    readonly dataExportName: pulumi.Input<string>;
    /**
     * Active when enabled.
     */
    readonly enable?: pulumi.Input<boolean>;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    readonly eventHubName?: pulumi.Input<string>;
    /**
     * Date and time when the export was last modified.
     */
    readonly lastModifiedDate?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    readonly resourceId: pulumi.Input<string>;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    readonly tableNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
