import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPublicIPPrefix(args: GetPublicIPPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPPrefixResult>;
export interface GetPublicIPPrefixArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the public IP prefix.
     */
    readonly publicIpPrefixName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Public IP prefix resource.
 */
export interface GetPublicIPPrefixResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The allocated Prefix.
     */
    readonly ipPrefix?: string;
    /**
     * The list of tags associated with the public IP prefix.
     */
    readonly ipTags?: outputs.network.v20190801.IpTagResponse[];
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    readonly loadBalancerFrontendIpConfiguration: outputs.network.v20190801.SubResourceResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The Length of the Public IP Prefix.
     */
    readonly prefixLength?: number;
    /**
     * The provisioning state of the public IP prefix resource.
     */
    readonly provisioningState?: string;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: string;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    readonly publicIPAddresses?: outputs.network.v20190801.ReferencedPublicIpAddressResponse[];
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    readonly resourceGuid?: string;
    /**
     * The public IP prefix SKU.
     */
    readonly sku?: outputs.network.v20190801.PublicIPPrefixSkuResponse;
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
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: string[];
}
