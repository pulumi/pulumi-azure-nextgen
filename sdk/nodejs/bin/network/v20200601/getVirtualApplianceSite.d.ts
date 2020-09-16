import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualApplianceSite(args: GetVirtualApplianceSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualApplianceSiteResult>;
export interface GetVirtualApplianceSiteArgs {
    /**
     * The name of the Network Virtual Appliance.
     */
    readonly networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the site.
     */
    readonly siteName: string;
}
/**
 * Virtual Appliance Site resource.
 */
export interface GetVirtualApplianceSiteResult {
    /**
     * Address Prefix.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Name of the virtual appliance site.
     */
    readonly name?: string;
    /**
     * Office 365 Policy.
     */
    readonly o365Policy?: outputs.network.v20200601.Office365PolicyPropertiesResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Site type.
     */
    readonly type: string;
}
