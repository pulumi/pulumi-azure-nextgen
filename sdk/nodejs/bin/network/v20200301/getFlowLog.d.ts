import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFlowLog(args: GetFlowLogArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowLogResult>;
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
    readonly flowAnalyticsConfiguration?: outputs.network.v20200301.TrafficAnalyticsPropertiesResponse;
    /**
     * Parameters that define the flow log format.
     */
    readonly format?: outputs.network.v20200301.FlowLogFormatParametersResponse;
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
    readonly retentionPolicy?: outputs.network.v20200301.RetentionPolicyParametersResponse;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    readonly storageId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
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
