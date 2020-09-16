import * as pulumi from "@pulumi/pulumi";
/**
 * Premier add-on.
 */
export declare class WebAppPremierAddOnSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPremierAddOnSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPremierAddOnSlot;
    /**
     * Returns true if the given object is an instance of WebAppPremierAddOnSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppPremierAddOnSlot;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Premier add on Marketplace offer.
     */
    readonly marketplaceOffer: pulumi.Output<string | undefined>;
    /**
     * Premier add on Marketplace publisher.
     */
    readonly marketplacePublisher: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Premier add on Name.
     */
    readonly premierAddOnName: pulumi.Output<string | undefined>;
    /**
     * Premier add on Product.
     */
    readonly product: pulumi.Output<string | undefined>;
    /**
     * Premier add on SKU.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Premier add on Vendor.
     */
    readonly vendor: pulumi.Output<string | undefined>;
    /**
     * Create a WebAppPremierAddOnSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPremierAddOnSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppPremierAddOnSlot resource.
 */
export interface WebAppPremierAddOnSlotArgs {
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Premier add on Marketplace offer.
     */
    readonly marketplaceOffer?: pulumi.Input<string>;
    /**
     * Premier add on Marketplace publisher.
     */
    readonly marketplacePublisher?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Premier add on Name.
     */
    readonly premierAddOnName: pulumi.Input<string>;
    /**
     * Premier add on Product.
     */
    readonly product?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Premier add on SKU.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Premier add on Vendor.
     */
    readonly vendor?: pulumi.Input<string>;
}
