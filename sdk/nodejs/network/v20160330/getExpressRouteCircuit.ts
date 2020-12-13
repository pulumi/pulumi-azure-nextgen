// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExpressRouteCircuit(args: GetExpressRouteCircuitArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20160330:getExpressRouteCircuit", {
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitArgs {
    /**
     * The name of the circuit.
     */
    readonly circuitName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * ExpressRouteCircuit resource
 */
export interface GetExpressRouteCircuitResult {
    /**
     * allow classic operations
     */
    readonly allowClassicOperations?: boolean;
    /**
     * Gets or sets list of authorizations
     */
    readonly authorizations?: outputs.network.v20160330.ExpressRouteCircuitAuthorizationResponse[];
    /**
     * Gets or sets CircuitProvisioningState state of the resource 
     */
    readonly circuitProvisioningState?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets or sets list of peerings
     */
    readonly peerings?: outputs.network.v20160330.ExpressRouteCircuitPeeringResponse[];
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets ServiceKey
     */
    readonly serviceKey?: string;
    /**
     * Gets or sets ServiceProviderNotes
     */
    readonly serviceProviderNotes?: string;
    /**
     * Gets or sets ServiceProviderProperties
     */
    readonly serviceProviderProperties?: outputs.network.v20160330.ExpressRouteCircuitServiceProviderPropertiesResponse;
    /**
     * Gets or sets ServiceProviderProvisioningState state of the resource 
     */
    readonly serviceProviderProvisioningState?: string;
    /**
     * Gets or sets sku
     */
    readonly sku?: outputs.network.v20160330.ExpressRouteCircuitSkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
