import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Value object for saved search results.
 */
export declare class SavedSearch extends pulumi.CustomResource {
    /**
     * Get an existing SavedSearch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SavedSearch;
    /**
     * Returns true if the given object is an instance of SavedSearch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SavedSearch;
    /**
     * The category of the saved search. This helps the user to find a saved search faster.
     */
    readonly category: pulumi.Output<string>;
    /**
     * Saved search display name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The ETag of the saved search.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The function alias if query serves as a function.
     */
    readonly functionAlias: pulumi.Output<string | undefined>;
    /**
     * The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
     */
    readonly functionParameters: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The query expression for the saved search.
     */
    readonly query: pulumi.Output<string>;
    /**
     * The tags attached to the saved search.
     */
    readonly tags: pulumi.Output<outputs.operationalinsights.v20200801.TagResponse[] | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    readonly version: pulumi.Output<number | undefined>;
    /**
     * Create a SavedSearch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SavedSearchArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SavedSearch resource.
 */
export interface SavedSearchArgs {
    /**
     * The category of the saved search. This helps the user to find a saved search faster.
     */
    readonly category: pulumi.Input<string>;
    /**
     * Saved search display name.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The ETag of the saved search.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The function alias if query serves as a function.
     */
    readonly functionAlias?: pulumi.Input<string>;
    /**
     * The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
     */
    readonly functionParameters?: pulumi.Input<string>;
    /**
     * The query expression for the saved search.
     */
    readonly query: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The id of the saved search.
     */
    readonly savedSearchId: pulumi.Input<string>;
    /**
     * The tags attached to the saved search.
     */
    readonly tags?: pulumi.Input<pulumi.Input<inputs.operationalinsights.v20200801.Tag>[]>;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    readonly version?: pulumi.Input<number>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
