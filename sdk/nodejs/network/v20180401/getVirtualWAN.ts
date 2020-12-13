// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualWAN(args: GetVirtualWANArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWANResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20180401:getVirtualWAN", {
        "resourceGroupName": args.resourceGroupName,
        "virtualWANName": args.virtualWANName,
    }, opts);
}

export interface GetVirtualWANArgs {
    /**
     * The resource group name of the VirtualWan.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VirtualWAN being retrieved.
     */
    readonly virtualWANName: string;
}

/**
 * VirtualWAN Resource.
 */
export interface GetVirtualWANResult {
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    readonly virtualHubs: outputs.network.v20180401.SubResourceResponse[];
    readonly vpnSites: outputs.network.v20180401.SubResourceResponse[];
}
