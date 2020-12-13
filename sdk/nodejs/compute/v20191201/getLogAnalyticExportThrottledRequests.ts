// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getLogAnalyticExportThrottledRequests(args: GetLogAnalyticExportThrottledRequestsArgs, opts?: pulumi.InvokeOptions): Promise<GetLogAnalyticExportThrottledRequestsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:compute/v20191201:getLogAnalyticExportThrottledRequests", {
        "blobContainerSasUri": args.blobContainerSasUri,
        "fromTime": args.fromTime,
        "groupByOperationName": args.groupByOperationName,
        "groupByResourceName": args.groupByResourceName,
        "groupByThrottlePolicy": args.groupByThrottlePolicy,
        "location": args.location,
        "toTime": args.toTime,
    }, opts);
}

export interface GetLogAnalyticExportThrottledRequestsArgs {
    /**
     * SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
     */
    readonly blobContainerSasUri: string;
    /**
     * From time of the query
     */
    readonly fromTime: string;
    /**
     * Group query result by Operation Name.
     */
    readonly groupByOperationName?: boolean;
    /**
     * Group query result by Resource Name.
     */
    readonly groupByResourceName?: boolean;
    /**
     * Group query result by Throttle Policy applied.
     */
    readonly groupByThrottlePolicy?: boolean;
    /**
     * The location upon which virtual-machine-sizes is queried.
     */
    readonly location: string;
    /**
     * To time of the query
     */
    readonly toTime: string;
}

/**
 * LogAnalytics operation status response
 */
export interface GetLogAnalyticExportThrottledRequestsResult {
    /**
     * LogAnalyticsOutput
     */
    readonly properties: outputs.compute.v20191201.LogAnalyticsOutputResponse;
}
