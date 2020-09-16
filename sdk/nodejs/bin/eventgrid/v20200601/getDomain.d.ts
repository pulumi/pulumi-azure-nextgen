import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult>;
export interface GetDomainArgs {
    /**
     * Name of the domain.
     */
    readonly domainName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * EventGrid Domain.
 */
export interface GetDomainResult {
    /**
     * Endpoint for the domain.
     */
    readonly endpoint: string;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: outputs.eventgrid.v20200601.InboundIpRuleResponse[];
    /**
     * This determines the format that Event Grid should expect for incoming events published to the domain.
     */
    readonly inputSchema?: string;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    readonly inputSchemaMapping?: outputs.eventgrid.v20200601.InputSchemaMappingResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the domain.
     */
    readonly metricResourceId: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: outputs.eventgrid.v20200601.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the domain.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * Tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of the resource.
     */
    readonly type: string;
}
