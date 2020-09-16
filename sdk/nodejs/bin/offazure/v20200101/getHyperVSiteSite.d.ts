import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getHyperVSiteSite(args: GetHyperVSiteSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperVSiteSiteResult>;
export interface GetHyperVSiteSiteArgs {
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
export interface GetHyperVSiteSiteResult {
    /**
     * eTag for concurrency control.
     */
    readonly eTag?: string;
    /**
     * Azure location in which Sites is created.
     */
    readonly location?: string;
    /**
     * Name of the Hyper-V site.
     */
    readonly name?: string;
    /**
     * Nested properties of Hyper-V site.
     */
    readonly properties: outputs.offazure.v20200101.SitePropertiesResponse;
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of resource. Type = Microsoft.OffAzure/HyperVSites.
     */
    readonly type: string;
}
