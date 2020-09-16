import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult>;
export interface GetNamespaceArgs {
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * The time the namespace was created.
     */
    readonly createdAt: string;
    /**
     * The Geo-location where the resource lives
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
     * Provisioning state of the namespace.
     */
    readonly provisioningState: string;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    readonly serviceBusEndpoint: string;
    /**
     * Properties of Sku
     */
    readonly sku?: outputs.servicebus.v20170401.SBSkuResponse;
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
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
}
