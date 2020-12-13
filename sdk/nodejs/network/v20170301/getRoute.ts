// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getRoute(args: GetRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20170301:getRoute", {
        "resourceGroupName": args.resourceGroupName,
        "routeName": args.routeName,
        "routeTableName": args.routeTableName,
    }, opts);
}

export interface GetRouteArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the route.
     */
    readonly routeName: string;
    /**
     * The name of the route table.
     */
    readonly routeTableName: string;
}

/**
 * Route resource
 */
export interface GetRouteResult {
    /**
     * The destination CIDR to which the route applies.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    readonly nextHopIpAddress?: string;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
     */
    readonly nextHopType: string;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
}
