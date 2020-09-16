import * as pulumi from "@pulumi/pulumi";
export declare function getPrivateStoreOffer(args: GetPrivateStoreOfferArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateStoreOfferResult>;
export interface GetPrivateStoreOfferArgs {
    /**
     * The offer ID to update or delete
     */
    readonly offerId: string;
    /**
     * The store ID - must use the tenant ID
     */
    readonly privateStoreId: string;
}
/**
 * The privateStore offer data structure.
 */
export interface GetPrivateStoreOfferResult {
    /**
     * Private store offer creator name
     */
    readonly createdBy: string;
    /**
     * Private store offer created date
     */
    readonly createdDate: string;
    /**
     * Identifier for purposes of race condition
     */
    readonly eTag?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * It will be displayed prominently in the marketplace
     */
    readonly offerDisplayName: string;
    /**
     * Private store unique id
     */
    readonly privateStoreId: string;
    /**
     * Publisher name that will be displayed prominently in the marketplace
     */
    readonly publisherDisplayName: string;
    /**
     * Plan ids limitation for this offer
     */
    readonly specificPlanIdsLimitation?: string[];
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Offers unique id
     */
    readonly uniqueOfferId: string;
}
