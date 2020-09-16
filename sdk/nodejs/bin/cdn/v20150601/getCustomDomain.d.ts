import * as pulumi from "@pulumi/pulumi";
export declare function getCustomDomain(args: GetCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainResult>;
export interface GetCustomDomainArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    readonly customDomainName: string;
    /**
     * Name of the endpoint within the CDN profile.
     */
    readonly endpointName: string;
    /**
     * Name of the CDN profile within the resource group.
     */
    readonly profileName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * CDN CustomDomain represents a mapping between a user specified domain name and a CDN endpoint. This is to use custom domain names to represent the URLs for branding purposes.
 */
export interface GetCustomDomainResult {
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    readonly hostName: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Provisioning status of the custom domain.
     */
    readonly provisioningState?: string;
    /**
     * Resource status of the custom domain.
     */
    readonly resourceState: string;
    /**
     * Resource type
     */
    readonly type: string;
}
