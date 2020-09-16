import * as pulumi from "@pulumi/pulumi";
/**
 * A notebook workspace resource
 */
export declare class NotebookWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing NotebookWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotebookWorkspace;
    /**
     * Returns true if the given object is an instance of NotebookWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotebookWorkspace;
    /**
     * The name of the database account.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly notebookServerEndpoint: pulumi.Output<string>;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The type of Azure resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a NotebookWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotebookWorkspaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NotebookWorkspace resource.
 */
export interface NotebookWorkspaceArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the notebook workspace resource.
     */
    readonly notebookWorkspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
