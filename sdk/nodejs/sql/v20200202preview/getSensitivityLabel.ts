// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSensitivityLabel(args: GetSensitivityLabelArgs, opts?: pulumi.InvokeOptions): Promise<GetSensitivityLabelResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20200202preview:getSensitivityLabel", {
        "columnName": args.columnName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "serverName": args.serverName,
        "tableName": args.tableName,
    }, opts);
}

export interface GetSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    readonly columnName: string;
    /**
     * The name of the database.
     */
    readonly databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the schema.
     */
    readonly schemaName: string;
    /**
     * The source of the sensitivity label.
     */
    readonly sensitivityLabelSource: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
    /**
     * The name of the table.
     */
    readonly tableName: string;
}

/**
 * A sensitivity label.
 */
export interface GetSensitivityLabelResult {
    /**
     * The column name.
     */
    readonly columnName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The information type.
     */
    readonly informationType?: string;
    /**
     * The information type ID.
     */
    readonly informationTypeId?: string;
    /**
     * Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
     */
    readonly isDisabled: boolean;
    /**
     * The label ID.
     */
    readonly labelId?: string;
    /**
     * The label name.
     */
    readonly labelName?: string;
    /**
     * Resource that manages the sensitivity label.
     */
    readonly managedBy: string;
    /**
     * Resource name.
     */
    readonly name: string;
    readonly rank?: string;
    /**
     * The schema name.
     */
    readonly schemaName: string;
    /**
     * The table name.
     */
    readonly tableName: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
