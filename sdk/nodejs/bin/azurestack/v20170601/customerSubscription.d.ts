import * as pulumi from "@pulumi/pulumi";
/**
 * Customer subscription.
 */
export declare class CustomerSubscription extends pulumi.CustomResource {
    /**
     * Get an existing CustomerSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomerSubscription;
    /**
     * Returns true if the given object is an instance of CustomerSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomerSubscription;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Tenant Id.
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * Type of Resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CustomerSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomerSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CustomerSubscription resource.
 */
export interface CustomerSubscriptionArgs {
    /**
     * Name of the product.
     */
    readonly customerSubscriptionName: pulumi.Input<string>;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Name of the Azure Stack registration.
     */
    readonly registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    readonly resourceGroup: pulumi.Input<string>;
    /**
     * Tenant Id.
     */
    readonly tenantId?: pulumi.Input<string>;
}
