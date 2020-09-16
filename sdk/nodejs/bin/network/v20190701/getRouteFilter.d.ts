import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRouteFilter(args: GetRouteFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterResult>;
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
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
