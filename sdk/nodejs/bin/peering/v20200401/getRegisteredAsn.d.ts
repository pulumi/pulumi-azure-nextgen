import * as pulumi from "@pulumi/pulumi";
export declare function getRegisteredAsn(args: GetRegisteredAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetRegisteredAsnResult>;
export interface GetRegisteredAsnArgs {
    /**
     * The name of the peering.
     */
    readonly peeringName: string;
    /**
     * The name of the registered ASN.
     */
    readonly registeredAsnName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The customer's ASN that is registered by the peering service provider.
 */
export interface GetRegisteredAsnResult {
    /**
     * The customer's ASN from which traffic originates.
     */
    readonly asn?: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    readonly peeringServicePrefixKey: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
