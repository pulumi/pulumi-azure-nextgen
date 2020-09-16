import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteCircuit(args: GetExpressRouteCircuitArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitResult>;
export interface GetExpressRouteCircuitArgs {
    /**
     * The name of express route circuit.
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
     * Allow classic operations
     */
    readonly allowClassicOperations?: boolean;
    /**
     * The list of authorizations.
     */
    readonly authorizations?: outputs.network.v20170601.ExpressRouteCircuitAuthorizationResponse[];
    /**
     * The CircuitProvisioningState state of the resource.
     */
    readonly circuitProvisioningState?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The list of peerings.
     */
    readonly peerings?: outputs.network.v20170601.ExpressRouteCircuitPeeringResponse[];
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The ServiceKey.
     */
    readonly serviceKey?: string;
    /**
     * The ServiceProviderNotes.
     */
    readonly serviceProviderNotes?: string;
    /**
     * The ServiceProviderProperties.
     */
    readonly serviceProviderProperties?: outputs.network.v20170601.ExpressRouteCircuitServiceProviderPropertiesResponse;
    /**
     * The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
     */
    readonly serviceProviderProvisioningState?: string;
    /**
     * The SKU.
     */
    readonly sku?: outputs.network.v20170601.ExpressRouteCircuitSkuResponse;
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
