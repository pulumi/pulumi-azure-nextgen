import * as pulumi from "@pulumi/pulumi";
/**
 * A share subscription data transfer object.
 */
export declare class ShareSubscription extends pulumi.CustomResource {
    /**
     * Get an existing ShareSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ShareSubscription;
    /**
     * Returns true if the given object is an instance of ShareSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ShareSubscription;
    /**
     * Time at which the share subscription was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The invitation id.
     */
    readonly invitationId: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Email of the provider who created the resource
     */
    readonly providerEmail: pulumi.Output<string>;
    /**
     * Name of the provider who created the resource
     */
    readonly providerName: pulumi.Output<string>;
    /**
     * Tenant name of the provider who created the resource
     */
    readonly providerTenantName: pulumi.Output<string>;
    /**
     * Provisioning state of the share subscription
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Description of share
     */
    readonly shareDescription: pulumi.Output<string>;
    /**
     * Kind of share
     */
    readonly shareKind: pulumi.Output<string>;
    /**
     * Name of the share
     */
    readonly shareName: pulumi.Output<string>;
    /**
     * Gets the current status of share subscription.
     */
    readonly shareSubscriptionStatus: pulumi.Output<string>;
    /**
     * Terms of a share
     */
    readonly shareTerms: pulumi.Output<string>;
    /**
     * Source share location.
     */
    readonly sourceShareLocation: pulumi.Output<string>;
    /**
     * Type of the azure resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    readonly userName: pulumi.Output<string>;
    /**
     * Create a ShareSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ShareSubscription resource.
 */
export interface ShareSubscriptionArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The invitation id.
     */
    readonly invitationId: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    readonly shareSubscriptionName: pulumi.Input<string>;
    /**
     * Source share location.
     */
    readonly sourceShareLocation: pulumi.Input<string>;
}
