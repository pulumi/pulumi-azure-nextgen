// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getRouteFilter(args: GetRouteFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20190701:getRouteFilter", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "routeFilterName": args.routeFilterName,
    }, opts);
}

export interface GetRouteFilterArgs {
    /**
     * Expands referenced express route bgp peering resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the route filter.
     */
    readonly routeFilterName: string;
}

/**
 * Route Filter Resource.
 */
export interface GetRouteFilterResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * A collection of references to express route circuit ipv6 peerings.
     */
    readonly ipv6Peerings?: outputs.network.v20190701.ExpressRouteCircuitPeeringResponse[];
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A collection of references to express route circuit peerings.
     */
    readonly peerings?: outputs.network.v20190701.ExpressRouteCircuitPeeringResponse[];
    /**
     * The provisioning state of the route filter resource.
     */
    readonly provisioningState: string;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    readonly rules?: outputs.network.v20190701.RouteFilterRuleResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
