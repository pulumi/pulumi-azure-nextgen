// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getIpAllocation(args: GetIpAllocationArgs, opts?: pulumi.InvokeOptions): Promise<GetIpAllocationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getIpAllocation", {
        "expand": args.expand,
        "ipAllocationName": args.ipAllocationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpAllocationArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the IpAllocation.
     */
    readonly ipAllocationName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * IpAllocation resource.
 */
export interface GetIpAllocationResult {
    /**
     * IpAllocation tags.
     */
    readonly allocationTags?: {[key: string]: string};
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The IPAM allocation ID.
     */
    readonly ipamAllocationId?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The address prefix for the IpAllocation.
     */
    readonly prefix?: string;
    /**
     * The address prefix length for the IpAllocation.
     */
    readonly prefixLength?: number;
    /**
     * The address prefix Type for the IpAllocation.
     */
    readonly prefixType?: string;
    /**
     * The Subnet that using the prefix of this IpAllocation resource.
     */
    readonly subnet: outputs.network.v20200401.SubResourceResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    readonly virtualNetwork: outputs.network.v20200401.SubResourceResponse;
}
