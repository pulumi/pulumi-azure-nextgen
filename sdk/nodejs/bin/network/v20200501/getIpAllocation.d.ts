import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIpAllocation(args: GetIpAllocationArgs, opts?: pulumi.InvokeOptions): Promise<GetIpAllocationResult>;
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
    readonly allocationTags?: {
        [key: string]: string;
    };
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
    readonly subnet: outputs.network.v20200501.SubResourceResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    readonly virtualNetwork: outputs.network.v20200501.SubResourceResponse;
}
