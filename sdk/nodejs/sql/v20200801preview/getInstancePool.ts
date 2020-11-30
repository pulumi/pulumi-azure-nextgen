// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

export function getInstancePool(args: GetInstancePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetInstancePoolResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20200801preview:getInstancePool", {
        "instancePoolName": args.instancePoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstancePoolArgs {
    /**
     * The name of the instance pool to be retrieved.
     */
    readonly instancePoolName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
}

/**
 * An Azure SQL instance pool.
 */
export interface GetInstancePoolResult {
    /**
     * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
     */
    readonly licenseType: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name and tier of the SKU.
     */
    readonly sku?: outputs.sql.v20200801preview.SkuResponse;
    /**
     * Resource ID of the subnet to place this instance pool in.
     */
    readonly subnetId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Count of vCores belonging to this instance pool.
     */
    readonly vCores: number;
}
