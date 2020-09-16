import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult>;
export interface GetEnvironmentArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    readonly environmentName: string;
    /**
     * Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service.
     */
    readonly expand?: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource.
 */
export interface GetEnvironmentResult {
    /**
     * The kind of the environment.
     */
    readonly kind: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    readonly sku: outputs.timeseriesinsights.v20200515.SkuResponse;
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
}
