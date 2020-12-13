// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPublicIPAddress(args: GetPublicIPAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPAddressResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20160330:getPublicIPAddress", {
        "expand": args.expand,
        "publicIpAddressName": args.publicIpAddressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicIPAddressArgs {
    /**
     * expand references resources.
     */
    readonly expand?: string;
    /**
     * The name of the subnet.
     */
    readonly publicIpAddressName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * PublicIPAddress resource
 */
export interface GetPublicIPAddressResult {
    /**
     * Gets or sets FQDN of the DNS record associated with the public IP address
     */
    readonly dnsSettings?: outputs.network.v20160330.PublicIPAddressDnsSettingsResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id?: string;
    /**
     * Gets or sets the idle timeout of the public IP address
     */
    readonly idleTimeoutInMinutes?: number;
    readonly ipAddress?: string;
    /**
     * IPConfiguration
     */
    readonly ipConfiguration?: outputs.network.v20160330.IPConfigurationResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets PublicIP address version (IPv4/IPv6)
     */
    readonly publicIPAddressVersion?: string;
    /**
     * Gets or sets PublicIP allocation method (Static/Dynamic)
     */
    readonly publicIPAllocationMethod?: string;
    /**
     * Gets or sets resource GUID property of the PublicIP resource
     */
    readonly resourceGuid?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
