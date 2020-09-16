import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConnectionMonitor(args: GetConnectionMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionMonitorResult>;
export interface GetConnectionMonitorArgs {
    /**
     * The name of the connection monitor.
     */
    readonly connectionMonitorName: string;
    /**
     * The name of the Network Watcher resource.
     */
    readonly networkWatcherName: string;
    /**
     * The name of the resource group containing Network Watcher.
     */
    readonly resourceGroupName: string;
}
/**
 * Information about the connection monitor.
 */
export interface GetConnectionMonitorResult {
    /**
     * Determines if the connection monitor will start automatically once created.
     */
    readonly autoStart?: boolean;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination: outputs.network.v20171001.ConnectionMonitorDestinationResponse;
    readonly etag?: string;
    /**
     * Connection monitor location.
     */
    readonly location?: string;
    /**
     * Monitoring interval in seconds.
     */
    readonly monitoringIntervalInSeconds?: number;
    /**
     * The monitoring status of the connection monitor.
     */
    readonly monitoringStatus?: string;
    /**
     * Name of the connection monitor.
     */
    readonly name: string;
    /**
     * The provisioning state of the connection monitor.
     */
    readonly provisioningState?: string;
    /**
     * Describes the source of connection monitor.
     */
    readonly source: outputs.network.v20171001.ConnectionMonitorSourceResponse;
    /**
     * The date and time when the connection monitor was started.
     */
    readonly startTime?: string;
    /**
     * Connection monitor tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Connection monitor type.
     */
    readonly type: string;
}
