// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getFlowLog(args: GetFlowLogArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowLogResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200701:getFlowLog", {
        "flowLogName": args.flowLogName,
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowLogArgs {
    /**
     * The name of the flow log resource.
     */
    readonly flowLogName: string;
    /**
     * The name of the network watcher.
     */
    readonly networkWatcherName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A flow log resource.
 */
export interface GetFlowLogResult {
    /**
     * Flag to enable/disable flow logging.
     */
    readonly enabled?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    readonly flowAnalyticsConfiguration?: outputs.network.v20200701.TrafficAnalyticsPropertiesResponse;
    /**
     * Parameters that define the flow log format.
     */
    readonly format?: outputs.network.v20200701.FlowLogFormatParametersResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the flow log.
     */
    readonly provisioningState: string;
    /**
     * Parameters that define the retention policy for flow log.
     */
    readonly retentionPolicy?: outputs.network.v20200701.RetentionPolicyParametersResponse;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    readonly storageId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Guid of network security group to which flow log will be applied.
     */
    readonly targetResourceGuid: string;
    /**
     * ID of network security group to which flow log will be applied.
     */
    readonly targetResourceId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
