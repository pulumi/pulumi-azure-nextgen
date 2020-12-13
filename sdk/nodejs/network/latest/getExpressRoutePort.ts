// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExpressRoutePort(args: GetExpressRoutePortArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRoutePortResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/latest:getExpressRoutePort", {
        "expressRoutePortName": args.expressRoutePortName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRoutePortArgs {
    /**
     * The name of ExpressRoutePort.
     */
    readonly expressRoutePortName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * ExpressRoutePort resource definition.
 */
export interface GetExpressRoutePortResult {
    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     */
    readonly allocationDate: string;
    /**
     * Bandwidth of procured ports in Gbps.
     */
    readonly bandwidthInGbps?: number;
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    readonly circuits: outputs.network.latest.SubResourceResponse[];
    /**
     * Encapsulation method on physical ports.
     */
    readonly encapsulation?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Ether type of the physical port.
     */
    readonly etherType: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of ExpressRoutePort, if configured.
     */
    readonly identity?: outputs.network.latest.ManagedServiceIdentityResponse;
    /**
     * The set of physical links of the ExpressRoutePort resource.
     */
    readonly links?: outputs.network.latest.ExpressRouteLinkResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Maximum transmission unit of the physical port pair(s).
     */
    readonly mtu: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    readonly peeringLocation?: string;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     */
    readonly provisionedBandwidthInGbps: number;
    /**
     * The provisioning state of the express route port resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the express route port resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
