import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Single Namespace item in List or Get Operation
 */
export declare class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Namespace;
    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Namespace;
    /**
     * The time the Namespace was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Value that indicates whether AutoInflate is enabled for eventhub namespace.
     */
    readonly isAutoInflateEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether Kafka is enabled for eventhub namespace.
     */
    readonly kafkaEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
     */
    readonly maximumThroughputUnits: pulumi.Output<number | undefined>;
    /**
     * Identifier for Azure Insights metrics.
     */
    readonly metricId: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    readonly serviceBusEndpoint: pulumi.Output<string>;
    /**
     * Properties of sku resource
     */
    readonly sku: pulumi.Output<outputs.eventhub.v20170401.SkuResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The time the Namespace was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Value that indicates whether AutoInflate is enabled for eventhub namespace.
     */
    readonly isAutoInflateEnabled?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether Kafka is enabled for eventhub namespace.
     */
    readonly kafkaEnabled?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
     */
    readonly maximumThroughputUnits?: pulumi.Input<number>;
    /**
     * The Namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Properties of sku resource
     */
    readonly sku?: pulumi.Input<inputs.eventhub.v20170401.Sku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
