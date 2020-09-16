import * as pulumi from "@pulumi/pulumi";
/**
 * OpenId Connect Provider details.
 */
export declare class OpenIdConnectProvider extends pulumi.CustomResource {
    /**
     * Get an existing OpenIdConnectProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenIdConnectProvider;
    /**
     * Returns true if the given object is an instance of OpenIdConnectProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OpenIdConnectProvider;
    /**
     * Client ID of developer console which is the client application.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * Client Secret of developer console which is the client application.
     */
    readonly clientSecret: pulumi.Output<string | undefined>;
    /**
     * User-friendly description of OpenID Connect Provider.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * User-friendly OpenID Connect Provider name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Metadata endpoint URI.
     */
    readonly metadataEndpoint: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a OpenIdConnectProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenIdConnectProviderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a OpenIdConnectProvider resource.
 */
export interface OpenIdConnectProviderArgs {
    /**
     * Client ID of developer console which is the client application.
     */
    readonly clientId: pulumi.Input<string>;
    /**
     * Client Secret of developer console which is the client application.
     */
    readonly clientSecret?: pulumi.Input<string>;
    /**
     * User-friendly description of OpenID Connect Provider.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * User-friendly OpenID Connect Provider name.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Metadata endpoint URI.
     */
    readonly metadataEndpoint: pulumi.Input<string>;
    /**
     * Identifier of the OpenID Connect Provider.
     */
    readonly opid: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
}
