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
     * Type of connection monitor.
     */
    readonly connectionMonitorType: pulumi.Output<string>;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination: pulumi.Output<outputs.network.v20191201.ConnectionMonitorDestinationResponse | undefined>;
    /**
     * List of connection monitor endpoints.
     */
    readonly endpoints: pulumi.Output<outputs.network.v20191201.ConnectionMonitorEndpointResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
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
    readonly monitoringStatus: pulumi.Output<string>;
    /**
     * Name of the connection monitor.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Optional notes to be associated with the connection monitor.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * List of connection monitor outputs.
     */
    readonly outputs: pulumi.Output<outputs.network.v20191201.ConnectionMonitorOutputResponse[] | undefined>;
    /**
     * The provisioning state of the connection monitor.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Describes the source of connection monitor.
     */
    readonly source: pulumi.Output<outputs.network.v20191201.ConnectionMonitorSourceResponse | undefined>;
    /**
     * The date and time when the connection monitor was started.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * Connection monitor tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of connection monitor test configurations.
     */
    readonly testConfigurations: pulumi.Output<outputs.network.v20191201.ConnectionMonitorTestConfigurationResponse[] | undefined>;
    /**
     * List of connection monitor test groups.
     */
    readonly testGroups: pulumi.Output<outputs.network.v20191201.ConnectionMonitorTestGroupResponse[] | undefined>;
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
    readonly destination?: pulumi.Input<inputs.network.v20191201.ConnectionMonitorDestination>;
    /**
     * List of connection monitor endpoints.
     */
    readonly endpoints?: pulumi.Input<pulumi.Input<inputs.network.v20191201.ConnectionMonitorEndpoint>[]>;
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
     * Optional notes to be associated with the connection monitor.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * List of connection monitor outputs.
     */
    readonly outputs?: pulumi.Input<pulumi.Input<inputs.network.v20191201.ConnectionMonitorOutput>[]>;
    /**
     * The name of the resource group containing Network Watcher.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the source of connection monitor.
     */
    readonly source?: pulumi.Input<inputs.network.v20191201.ConnectionMonitorSource>;
    /**
     * Connection monitor tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of connection monitor test configurations.
     */
    readonly testConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20191201.ConnectionMonitorTestConfiguration>[]>;
    /**
     * List of connection monitor test groups.
     */
    readonly testGroups?: pulumi.Input<pulumi.Input<inputs.network.v20191201.ConnectionMonitorTestGroup>[]>;
}
