import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource.
 */
export declare class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Environment;
    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Environment;
    /**
     * The time the resource was created.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    readonly dataAccessFqdn: pulumi.Output<string>;
    /**
     * An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    readonly dataAccessId: pulumi.Output<string>;
    /**
     * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
     */
    readonly dataRetentionTime: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of partition keys according to which the data in the environment will be ordered.
     */
    readonly partitionKeyProperties: pulumi.Output<outputs.timeseriesinsights.v20171115.PartitionKeyPropertyResponse[] | undefined>;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The sku determines the capacity of the environment, the SLA (in queries-per-minute and total capacity), and the billing rate.
     */
    readonly sku: pulumi.Output<outputs.timeseriesinsights.v20171115.SkuResponse | undefined>;
    /**
     * An object that represents the status of the environment, and its internal state in the Time Series Insights service.
     */
    readonly status: pulumi.Output<outputs.timeseriesinsights.v20171115.EnvironmentStatusResponse | undefined>;
    /**
     * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
     */
    readonly storageLimitExceededBehavior: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
     */
    readonly dataRetentionTime: pulumi.Input<string>;
    /**
     * Name of the environment
     */
    readonly environmentName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The list of partition keys according to which the data in the environment will be ordered.
     */
    readonly partitionKeyProperties?: pulumi.Input<pulumi.Input<inputs.timeseriesinsights.v20171115.PartitionKeyProperty>[]>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku determines the capacity of the environment, the SLA (in queries-per-minute and total capacity), and the billing rate.
     */
    readonly sku: pulumi.Input<inputs.timeseriesinsights.v20171115.Sku>;
    /**
     * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
     */
    readonly storageLimitExceededBehavior?: pulumi.Input<string>;
    /**
     * Key-value pairs of additional properties for the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
