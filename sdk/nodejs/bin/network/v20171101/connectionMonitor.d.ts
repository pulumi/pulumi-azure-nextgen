import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about the connection monitor.
 */
export declare class ConnectionMonitor extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionMonitor;
    /**
     * Returns true if the given object is an instance of ConnectionMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionMonitor;
    /**
     * Determines if the connection monitor will start automatically once created.
     */
    readonly autoStart: pulumi.Output<boolean | undefined>;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination: pulumi.Output<outputs.network.v20171101.ConnectionMonitorDestinationResponse>;
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Connection monitor location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Monitoring interval in seconds.
     */
    readonly monitoringIntervalInSeconds: pulumi.Output<number | undefined>;
    /**
     * The monitoring status of the connection monitor.
     */
    readonly monitoringStatus: pulumi.Output<string | undefined>;
    /**
     * Name of the connection monitor.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the connection monitor.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Describes the source of connection monitor.
     */
    readonly source: pulumi.Output<outputs.network.v20171101.ConnectionMonitorSourceResponse>;
    /**
     * The date and time when the connection monitor was started.
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * Connection monitor tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Connection monitor type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ConnectionMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionMonitorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ConnectionMonitor resource.
 */
export interface ConnectionMonitorArgs {
    /**
     * Determines if the connection monitor will start automatically once created.
     */
    readonly autoStart?: pulumi.Input<boolean>;
    /**
     * The name of the connection monitor.
     */
    readonly connectionMonitorName: pulumi.Input<string>;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination: pulumi.Input<inputs.network.v20171101.ConnectionMonitorDestination>;
    /**
     * Connection monitor location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Monitoring interval in seconds.
     */
    readonly monitoringIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The name of the Network Watcher resource.
     */
    readonly networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group containing Network Watcher.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the source of connection monitor.
     */
    readonly source: pulumi.Input<inputs.network.v20171101.ConnectionMonitorSource>;
    /**
     * Connection monitor tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
