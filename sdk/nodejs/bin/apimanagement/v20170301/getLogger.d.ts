import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getLogger(args: GetLoggerArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggerResult>;
export interface GetLoggerArgs {
    /**
     * Logger identifier. Must be unique in the API Management service instance.
     */
    readonly loggerid: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Logger details.
 */
export interface GetLoggerResult {
    /**
     * The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     */
    readonly credentials: {
        [key: string]: string;
    };
    /**
     * Logger description.
     */
    readonly description?: string;
    /**
     * Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    readonly isBuffered?: boolean;
    /**
     * Logger type.
     */
    readonly loggerType: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Sampling settings for an ApplicationInsights logger.
     */
    readonly sampling?: outputs.apimanagement.v20170301.LoggerSamplingContractResponse;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
