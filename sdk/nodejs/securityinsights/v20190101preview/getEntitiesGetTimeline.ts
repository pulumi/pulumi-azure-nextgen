// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getEntitiesGetTimeline(args: GetEntitiesGetTimelineArgs, opts?: pulumi.InvokeOptions): Promise<GetEntitiesGetTimelineResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:securityinsights/v20190101preview:getEntitiesGetTimeline", {
        "endTime": args.endTime,
        "entityId": args.entityId,
        "kinds": args.kinds,
        "numberOfBucket": args.numberOfBucket,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "startTime": args.startTime,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetEntitiesGetTimelineArgs {
    /**
     * The end timeline date, so the results returned are before this date.
     */
    readonly endTime: string;
    /**
     * entity ID
     */
    readonly entityId: string;
    /**
     * Array of timeline Item kinds.
     */
    readonly kinds?: string | enums.securityinsights.v20190101preview.EntityTimelineKind[];
    /**
     * The number of bucket for timeline queries aggregation.
     */
    readonly numberOfBucket?: number;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    readonly operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The start timeline date, so the results returned are after this date.
     */
    readonly startTime: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}

/**
 * The entity timeline result operation response.
 */
export interface GetEntitiesGetTimelineResult {
    /**
     * The metadata from the timeline operation results.
     */
    readonly metaData?: outputs.securityinsights.v20190101preview.TimelineResultsMetadataResponse;
    /**
     * The timeline result values.
     */
    readonly value?: outputs.securityinsights.v20190101preview.ActivityTimelineItemResponse | outputs.securityinsights.v20190101preview.BookmarkTimelineItemResponse | outputs.securityinsights.v20190101preview.SecurityAlertTimelineItemResponse[];
}
