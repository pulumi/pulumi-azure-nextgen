import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteCircuit(args: GetExpressRouteCircuitArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitResult>;
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
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
