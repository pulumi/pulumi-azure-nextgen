import * as pulumi from "@pulumi/pulumi";
/**
 * Api Version Set Contract details.
 */
export declare class ApiVersionSet extends pulumi.CustomResource {
    /**
     * Get an existing ApiVersionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiVersionSet;
    /**
     * Returns true if the given object is an instance of ApiVersionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiVersionSet;
    /**
     * Description of API Version Set.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Name of API Version Set
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    readonly versionHeaderName: pulumi.Output<string | undefined>;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    readonly versionQueryName: pulumi.Output<string | undefined>;
    /**
     * An value that determines where the API Version identifer will be located in a HTTP request.
     */
    readonly versioningScheme: pulumi.Output<string>;
    /**
     * Create a ApiVersionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiVersionSetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiVersionSet resource.
 */
export interface ApiVersionSetArgs {
    /**
     * Description of API Version Set.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name of API Version Set
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    readonly versionHeaderName?: pulumi.Input<string>;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    readonly versionQueryName?: pulumi.Input<string>;
    /**
     * Api Version Set identifier. Must be unique in the current API Management service instance.
     */
    readonly versionSetId: pulumi.Input<string>;
    /**
     * An value that determines where the API Version identifer will be located in a HTTP request.
     */
    readonly versioningScheme: pulumi.Input<string>;
}
