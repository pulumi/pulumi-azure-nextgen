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
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
    readonly peerings: outputs.network.v20170301.ExpressRouteCircuitPeeringResponse[];
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    readonly rules?: outputs.network.v20170301.RouteFilterRuleResponse[];
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
