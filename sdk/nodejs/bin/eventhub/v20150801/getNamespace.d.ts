import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult>;
export interface GetNamespaceArgs {
    /**
     * The Namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Single Namespace item in List or Get Operation
 */
export interface GetNamespaceResult {
    /**
     * The time the Namespace was created.
     */
    readonly createdAt?: string;
    /**
     * Specifies whether this instance is enabled.
     */
    readonly enabled?: boolean;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Identifier for Azure Insights metrics
     */
    readonly metricId: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState?: string;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    readonly serviceBusEndpoint?: string;
    /**
     * SKU parameters supplied to the create Namespace operation
     */
    readonly sku?: outputs.eventhub.v20150801.SkuResponse;
    /**
     * State of the Namespace.
     */
    readonly status?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The time the Namespace was updated.
     */
    readonly updatedAt?: string;
}
