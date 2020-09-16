import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSite(args: GetSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteResult>;
export interface GetSiteArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Site name.
     */
    readonly siteName: string;
}
/**
 * Site REST Resource.
 */
export interface GetSiteResult {
    /**
     * eTag for concurrency control.
     */
    readonly eTag?: string;
    /**
     * Azure location in which Sites is created.
     */
    readonly location?: string;
    /**
     * Name of the VMware site.
     */
    readonly name?: string;
    /**
     * Nested properties of VMWare site.
     */
    readonly properties: outputs.offazure.v20200707.SitePropertiesResponse;
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of resource. Type = Microsoft.OffAzure/VMWareSites.
     */
    readonly type: string;
}
