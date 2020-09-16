import * as pulumi from "@pulumi/pulumi";
/**
 * Issue Contract details.
 */
export declare class ApiIssue extends pulumi.CustomResource {
    /**
     * Get an existing ApiIssue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiIssue;
    /**
     * Returns true if the given object is an instance of ApiIssue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiIssue;
    /**
     * A resource identifier for the API the issue was created for.
     */
    readonly apiId: pulumi.Output<string | undefined>;
    /**
     * Date and time when the issue was created.
     */
    readonly createdDate: pulumi.Output<string | undefined>;
    /**
     * Text describing the issue.
     */
    readonly description: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Status of the issue.
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * The issue title.
     */
    readonly title: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A resource identifier for the user created the issue.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * Create a ApiIssue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiIssueArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiIssue resource.
 */
export interface ApiIssueArgs {
    /**
     * A resource identifier for the API the issue was created for.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Date and time when the issue was created.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * Text describing the issue.
     */
    readonly description: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    readonly issueId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Status of the issue.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * The issue title.
     */
    readonly title: pulumi.Input<string>;
    /**
     * A resource identifier for the user created the issue.
     */
    readonly userId: pulumi.Input<string>;
}
