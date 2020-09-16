import * as pulumi from "@pulumi/pulumi";
export declare function getCustomerSubscription(args: GetCustomerSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerSubscriptionResult>;
export interface GetCustomerSubscriptionArgs {
    /**
     * Name of the product.
     */
    readonly customerSubscriptionName: string;
    /**
     * Name of the Azure Stack registration.
     */
    readonly registrationName: string;
    /**
     * Name of the resource group.
     */
    readonly resourceGroup: string;
}
/**
 * Customer subscription.
 */
export interface GetCustomerSubscriptionResult {
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Tenant Id.
     */
    readonly tenantId?: string;
    /**
     * Type of Resource.
     */
    readonly type: string;
}
