// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getTestResultFile(args: GetTestResultFileArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResultFileResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20200210preview:getTestResultFile", {
        "continuationToken": args.continuationToken,
        "downloadAs": args.downloadAs,
        "geoLocationId": args.geoLocationId,
        "resourceGroupName": args.resourceGroupName,
        "testSuccessfulCriteria": args.testSuccessfulCriteria,
        "timeStamp": args.timeStamp,
        "webTestName": args.webTestName,
    }, opts);
}

export interface GetTestResultFileArgs {
    /**
     * The continuation token.
     */
    readonly continuationToken?: string;
    /**
     * The format to use when returning the webtest result.
     */
    readonly downloadAs: string;
    /**
     * The location ID where the webtest was physically run.
     */
    readonly geoLocationId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The success state criteria for the webtest result.
     */
    readonly testSuccessfulCriteria?: boolean;
    /**
     * The posix (epoch) time stamp for the webtest result.
     */
    readonly timeStamp: number;
    /**
     * The name of the Application Insights webtest resource.
     */
    readonly webTestName: string;
}

/**
 * Test result.
 */
export interface GetTestResultFileResult {
    /**
     * File contents.
     */
    readonly data?: string;
    /**
     * The URI that can be used to request the next section of the result file in the event the file is too large for a single request.
     */
    readonly nextLink?: string;
}
