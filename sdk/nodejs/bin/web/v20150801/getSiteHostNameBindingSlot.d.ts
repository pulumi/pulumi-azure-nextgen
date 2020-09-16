import * as pulumi from "@pulumi/pulumi";
export declare function getSiteHostNameBindingSlot(args: GetSiteHostNameBindingSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteHostNameBindingSlotResult>;
export interface GetSiteHostNameBindingSlotArgs {
    /**
     * Name of host
     */
    readonly hostName: string;
    /**
     * Name of web app
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: string;
}
/**
 * A host name binding object
 */
export interface GetSiteHostNameBindingSlotResult {
    /**
     * Azure resource name
     */
    readonly azureResourceName?: string;
    /**
     * Azure resource type
     */
    readonly azureResourceType?: string;
    /**
     * Custom DNS record type
     */
    readonly customHostNameDnsRecordType?: string;
    /**
     * Fully qualified ARM domain resource URI
     */
    readonly domainId?: string;
    /**
     * Host name type
     */
    readonly hostNameType?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Web app name
     */
    readonly siteName?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
