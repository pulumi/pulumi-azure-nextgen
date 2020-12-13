// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDataSet(args: GetDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSetResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datashare/latest:getDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetDataSetArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The name of the dataSet.
     */
    readonly dataSetName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share.
     */
    readonly shareName: string;
}

/**
 * A DataSet data transfer object.
 */
export interface GetDataSetResult {
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set.
     */
    readonly kind: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
