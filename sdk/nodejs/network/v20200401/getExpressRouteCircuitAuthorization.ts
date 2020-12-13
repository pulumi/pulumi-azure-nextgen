// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExpressRouteCircuitAuthorization(args: GetExpressRouteCircuitAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitAuthorizationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getExpressRouteCircuitAuthorization", {
        "authorizationName": args.authorizationName,
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    readonly authorizationName: string;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitAuthorizationResult {
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the authorization resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
