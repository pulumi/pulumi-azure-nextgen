import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents a bookmark in Azure Security Insights.
 */
export declare class Bookmark extends pulumi.CustomResource {
    /**
     * Get an existing Bookmark resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Bookmark;
    /**
     * Returns true if the given object is an instance of Bookmark.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Bookmark;
    /**
     * The time the bookmark was created
     */
    readonly created: pulumi.Output<string | undefined>;
    /**
     * Describes a user that created the bookmark
     */
    readonly createdBy: pulumi.Output<outputs.operationalinsights.v20200101.UserInfoResponse | undefined>;
    /**
     * The display name of the bookmark
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Describes an incident that relates to bookmark
     */
    readonly incidentInfo: pulumi.Output<outputs.operationalinsights.v20200101.IncidentInfoResponse | undefined>;
    /**
     * List of labels relevant to this bookmark
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The notes of the bookmark
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * The query of the bookmark.
     */
    readonly query: pulumi.Output<string>;
    /**
     * The query result of the bookmark.
     */
    readonly queryResult: pulumi.Output<string | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The last time the bookmark was updated
     */
    readonly updated: pulumi.Output<string | undefined>;
    /**
     * Describes a user that updated the bookmark
     */
    readonly updatedBy: pulumi.Output<outputs.operationalinsights.v20200101.UserInfoResponse | undefined>;
    /**
     * Create a Bookmark resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BookmarkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Bookmark resource.
 */
export interface BookmarkArgs {
    /**
     * Bookmark ID
     */
    readonly bookmarkId: pulumi.Input<string>;
    /**
     * The time the bookmark was created
     */
    readonly created?: pulumi.Input<string>;
    /**
     * Describes a user that created the bookmark
     */
    readonly createdBy?: pulumi.Input<inputs.operationalinsights.v20200101.UserInfo>;
    /**
     * The display name of the bookmark
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Etag of the azure resource
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Describes an incident that relates to bookmark
     */
    readonly incidentInfo?: pulumi.Input<inputs.operationalinsights.v20200101.IncidentInfo>;
    /**
     * List of labels relevant to this bookmark
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The notes of the bookmark
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The query of the bookmark.
     */
    readonly query: pulumi.Input<string>;
    /**
     * The query result of the bookmark.
     */
    readonly queryResult?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The last time the bookmark was updated
     */
    readonly updated?: pulumi.Input<string>;
    /**
     * Describes a user that updated the bookmark
     */
    readonly updatedBy?: pulumi.Input<inputs.operationalinsights.v20200101.UserInfo>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
