import * as pulumi from "@pulumi/pulumi";
export declare function getRegisteredPrefix(args: GetRegisteredPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetRegisteredPrefixResult>;
export interface GetRegisteredPrefixArgs {
    /**
     * The name of the peering.
     */
    readonly peeringName: string;
    /**
     * The name of the registered prefix.
     */
    readonly registeredPrefixName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The customer's prefix that is registered by the peering service provider.
 */
export interface GetRegisteredPrefixResult {
    /**
     * The error message associated with the validation state, if any.
     */
    readonly errorMessage: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    readonly peeringServicePrefixKey: string;
    /**
     * The customer's prefix from which traffic originates.
     */
    readonly prefix?: string;
    /**
     * The prefix validation state.
     */
    readonly prefixValidationState: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
