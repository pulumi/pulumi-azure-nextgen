import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNatGateway(args: GetNatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewayResult>;
export interface GetNatGatewayArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the nat gateway.
     */
    readonly natGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Nat Gateway resource.
 */
export interface GetNatGatewayResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The idle timeout of the nat gateway.
     */
    readonly idleTimeoutInMinutes?: number;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the NAT gateway resource.
     */
    readonly provisioningState: string;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    readonly publicIpAddresses?: outputs.network.v20200301.SubResourceResponse[];
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes?: outputs.network.v20200301.SubResourceResponse[];
    /**
     * The resource GUID property of the NAT gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * The nat gateway SKU.
     */
    readonly sku?: outputs.network.v20200301.NatGatewaySkuResponse;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: outputs.network.v20200301.SubResourceResponse[];
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
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones?: string[];
}
