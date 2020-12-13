// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualApplianceSite(args: GetVirtualApplianceSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualApplianceSiteResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200501:getVirtualApplianceSite", {
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

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
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the virtual appliance site.
     */
    readonly name?: string;
    /**
     * Office 365 Policy.
     */
    readonly o365Policy?: outputs.network.v20200501.Office365PolicyPropertiesResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Site type.
     */
    readonly type: string;
}
