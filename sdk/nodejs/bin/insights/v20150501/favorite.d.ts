import * as pulumi from "@pulumi/pulumi";
/**
 * Properties that define a favorite that is associated to an Application Insights component.
 */
export declare class Favorite extends pulumi.CustomResource {
    /**
     * Get an existing Favorite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Favorite;
    /**
     * Returns true if the given object is an instance of Favorite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Favorite;
    /**
     * Favorite category, as defined by the user at creation time.
     */
    readonly category: pulumi.Output<string | undefined>;
    /**
     * Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
     */
    readonly config: pulumi.Output<string | undefined>;
    /**
     * Internally assigned unique id of the favorite definition.
     */
    readonly favoriteId: pulumi.Output<string>;
    /**
     * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly favoriteType: pulumi.Output<string | undefined>;
    /**
     * Flag denoting wether or not this favorite was generated from a template.
     */
    readonly isGeneratedFromTemplate: pulumi.Output<boolean | undefined>;
    /**
     * The user-defined name of the favorite.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The source of the favorite definition.
     */
    readonly sourceType: pulumi.Output<string | undefined>;
    /**
     * A list of 0 or more tags that are associated with this favorite definition
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Date and time in UTC of the last modification that was made to this favorite definition.
     */
    readonly timeModified: pulumi.Output<string>;
    /**
     * Unique user id of the specific user that owns this favorite.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a Favorite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FavoriteArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Favorite resource.
 */
export interface FavoriteArgs {
    /**
     * Favorite category, as defined by the user at creation time.
     */
    readonly category?: pulumi.Input<string>;
    /**
     * Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
     */
    readonly config?: pulumi.Input<string>;
    /**
     * The Id of a specific favorite defined in the Application Insights component
     */
    readonly favoriteId: pulumi.Input<string>;
    /**
     * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly favoriteType?: pulumi.Input<string>;
    /**
     * Flag denoting wether or not this favorite was generated from a template.
     */
    readonly isGeneratedFromTemplate?: pulumi.Input<boolean>;
    /**
     * The user-defined name of the favorite.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The source of the favorite definition.
     */
    readonly sourceType?: pulumi.Input<string>;
    /**
     * A list of 0 or more tags that are associated with this favorite definition
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.
     */
    readonly version?: pulumi.Input<string>;
}
