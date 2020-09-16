import * as pulumi from "@pulumi/pulumi";
export declare function getDomainTopic(args: GetDomainTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicResult>;
export interface GetDomainTopicArgs {
    /**
     * Name of the domain.
     */
    readonly domainName: string;
    /**
     * Name of the topic.
     */
    readonly domainTopicName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Domain Topic.
 */
export interface GetDomainTopicResult {
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the domain topic.
     */
    readonly provisioningState?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
