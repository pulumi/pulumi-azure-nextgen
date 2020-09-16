import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppPremierAddOnSlot(args: GetWebAppPremierAddOnSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPremierAddOnSlotResult>;
export interface GetWebAppPremierAddOnSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Add-on name.
     */
    readonly premierAddOnName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
     */
    readonly slot: string;
}
/**
 * Premier add-on.
 */
export interface GetWebAppPremierAddOnSlotResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Premier add on Marketplace offer.
     */
    readonly marketplaceOffer?: string;
    /**
     * Premier add on Marketplace publisher.
     */
    readonly marketplacePublisher?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Premier add on Name.
     */
    readonly premierAddOnName?: string;
    /**
     * Premier add on Product.
     */
    readonly product?: string;
    /**
     * Premier add on SKU.
     */
    readonly sku?: string;
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
    /**
     * Premier add on Vendor.
     */
    readonly vendor?: string;
}
