import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A flow log resource.
 */
export declare class FlowLog extends pulumi.CustomResource {
    /**
     * Get an existing FlowLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FlowLog;
    /**
     * Returns true if the given object is an instance of FlowLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlowLog;
    /**
     * Flag to enable/disable flow logging.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    readonly flowAnalyticsConfiguration: pulumi.Output<outputs.network.v20200601.TrafficAnalyticsPropertiesResponse | undefined>;
    /**
     * Parameters that define the flow log format.
     */
    readonly format: pulumi.Output<outputs.network.v20200601.FlowLogFormatParametersResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the flow log.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Parameters that define the retention policy for flow log.
     */
    readonly retentionPolicy: pulumi.Output<outputs.network.v20200601.RetentionPolicyParametersResponse | undefined>;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    readonly storageId: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Guid of network security group to which flow log will be applied.
     */
    readonly targetResourceGuid: pulumi.Output<string>;
    /**
     * ID of network security group to which flow log will be applied.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a FlowLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlowLogArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FlowLog resource.
 */
export interface FlowLogArgs {
    /**
     * Flag to enable/disable flow logging.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    readonly flowAnalyticsConfiguration?: pulumi.Input<inputs.network.v20200601.TrafficAnalyticsProperties>;
    /**
     * The name of the flow log.
     */
    readonly flowLogName: pulumi.Input<string>;
    /**
     * Parameters that define the flow log format.
     */
    readonly format?: pulumi.Input<inputs.network.v20200601.FlowLogFormatParameters>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the network watcher.
     */
    readonly networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Parameters that define the retention policy for flow log.
     */
    readonly retentionPolicy?: pulumi.Input<inputs.network.v20200601.RetentionPolicyParameters>;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    readonly storageId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * ID of network security group to which flow log will be applied.
     */
    readonly targetResourceId: pulumi.Input<string>;
}
