import * as pulumi from "@pulumi/pulumi";
/**
 * Workspace connection.
 */
export declare class WorkspaceConnection extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceConnection;
    /**
     * Returns true if the given object is an instance of WorkspaceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceConnection;
    /**
     * Authorization type of the workspace connection.
     */
    readonly authType: pulumi.Output<string | undefined>;
    /**
     * Category of the workspace connection.
     */
    readonly category: pulumi.Output<string | undefined>;
    /**
     * Friendly name of the workspace connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Target of the workspace connection.
     */
    readonly target: pulumi.Output<string | undefined>;
    /**
     * Resource type of workspace connection.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Value details of the workspace connection.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a WorkspaceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WorkspaceConnection resource.
 */
export interface WorkspaceConnectionArgs {
    /**
     * Authorization type of the workspace connection.
     */
    readonly authType?: pulumi.Input<string>;
    /**
     * Category of the workspace connection.
     */
    readonly category?: pulumi.Input<string>;
    /**
     * Friendly name of the workspace connection
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Friendly name of the workspace connection
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Target of the workspace connection.
     */
    readonly target?: pulumi.Input<string>;
    /**
     * Value details of the workspace connection.
     */
    readonly value?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
