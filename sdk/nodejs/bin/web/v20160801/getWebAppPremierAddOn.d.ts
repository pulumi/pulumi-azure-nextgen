import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppPremierAddOn(args: GetWebAppPremierAddOnArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPremierAddOnResult>;
export interface GetWebAppPremierAddOnArgs {
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
}
/**
 * Premier add-on.
 */
export interface GetWebAppPremierAddOnResult {
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
