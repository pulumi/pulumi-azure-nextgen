// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSqlPool(args: GetSqlPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:synapse/v20190601preview:getSqlPool", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * SQL pool name
     */
    readonly sqlPoolName: string;
    /**
     * The name of the workspace
     */
    readonly workspaceName: string;
}

/**
 * A SQL Analytics pool
 */
export interface GetSqlPoolResult {
    /**
     * Collation mode
     */
    readonly collation?: string;
    /**
     * What is this?
     */
    readonly createMode?: string;
    /**
     * Date the SQL pool was created
     */
    readonly creationDate?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maximum size in bytes
     */
    readonly maxSizeBytes?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource state
     */
    readonly provisioningState?: string;
    /**
     * Backup database to restore from
     */
    readonly recoverableDatabaseId?: string;
    /**
     * Snapshot time to restore
     */
    readonly restorePointInTime?: string;
    /**
     * SQL pool SKU
     */
    readonly sku?: outputs.synapse.v20190601preview.SkuResponse;
    /**
     * Source database to create from
     */
    readonly sourceDatabaseId?: string;
    /**
     * Resource status
     */
    readonly status?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
