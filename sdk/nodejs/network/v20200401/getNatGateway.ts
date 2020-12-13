// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getNatGateway(args: GetNatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewayResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getNatGateway", {
        "expand": args.expand,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
     * Resource ID.
     */
    readonly id?: string;
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
    readonly publicIpAddresses?: outputs.network.v20200401.SubResourceResponse[];
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes?: outputs.network.v20200401.SubResourceResponse[];
    /**
     * The resource GUID property of the NAT gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * The nat gateway SKU.
     */
    readonly sku?: outputs.network.v20200401.NatGatewaySkuResponse;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: outputs.network.v20200401.SubResourceResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones?: string[];
}
