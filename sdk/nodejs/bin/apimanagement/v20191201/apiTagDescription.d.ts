import * as pulumi from "@pulumi/pulumi";
/**
 * Contract details.
 */
export declare class ApiTagDescription extends pulumi.CustomResource {
    /**
     * Get an existing ApiTagDescription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiTagDescription;
    /**
     * Returns true if the given object is an instance of ApiTagDescription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiTagDescription;
    /**
     * Description of the Tag.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Tag name.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * Description of the external resources describing the tag.
     */
    readonly externalDocsDescription: pulumi.Output<string | undefined>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    readonly externalDocsUrl: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Identifier of the tag in the form of /tags/{tagId}
     */
    readonly tagId: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApiTagDescription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiTagDescriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiTagDescription resource.
 */
export interface ApiTagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Description of the Tag.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Description of the external resources describing the tag.
     */
    readonly externalDocsDescription?: pulumi.Input<string>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    readonly externalDocsUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
     */
    readonly tagDescriptionId: pulumi.Input<string>;
}
