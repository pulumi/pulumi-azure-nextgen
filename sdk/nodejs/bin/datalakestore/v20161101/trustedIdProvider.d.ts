import * as pulumi from "@pulumi/pulumi";
/**
 * Data Lake Store trusted identity provider information.
 */
export declare class TrustedIdProvider extends pulumi.CustomResource {
    /**
     * Get an existing TrustedIdProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrustedIdProvider;
    /**
     * Returns true if the given object is an instance of TrustedIdProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TrustedIdProvider;
    /**
     * The URL of this trusted identity provider.
     */
    readonly idProvider: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a TrustedIdProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrustedIdProviderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a TrustedIdProvider resource.
 */
export interface TrustedIdProviderArgs {
    /**
     * The name of the Data Lake Store account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The URL of this trusted identity provider.
     */
    readonly idProvider: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the trusted identity provider. This is used for differentiation of providers in the account.
     */
    readonly trustedIdProviderName: pulumi.Input<string>;
}
