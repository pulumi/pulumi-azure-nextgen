import * as pulumi from "@pulumi/pulumi";
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
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the domain.
     */
    readonly provisioningState: string;
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
