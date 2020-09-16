import * as pulumi from "@pulumi/pulumi";
export declare function getEventSource(args: GetEventSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetEventSourceResult>;
export interface GetEventSourceArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    readonly environmentName: string;
    /**
     * The name of the Time Series Insights event source associated with the specified environment.
     */
    readonly eventSourceName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * An environment receives data from one or more event sources. Each event source has associated connection info that allows the Time Series Insights ingress pipeline to connect to and pull data from the event source
 */
export interface GetEventSourceResult {
    /**
     * The kind of the event source.
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
