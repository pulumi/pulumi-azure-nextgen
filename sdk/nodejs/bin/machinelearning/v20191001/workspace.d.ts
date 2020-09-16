import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An object that represents a machine learning workspace.
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * The creation time for this workspace resource.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * The key vault identifier used for encrypted workspaces.
     */
    readonly keyVaultIdentifierId: pulumi.Output<string | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The email id of the owner for this workspace.
     */
    readonly ownerEmail: pulumi.Output<string>;
    /**
     * The sku of the workspace.
     */
    readonly sku: pulumi.Output<outputs.machinelearning.v20191001.SkuResponse | undefined>;
    /**
     * The regional endpoint for the machine learning studio service which hosts this workspace.
     */
    readonly studioEndpoint: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The fully qualified arm id of the storage account associated with this workspace.
     */
    readonly userStorageAccountId: pulumi.Output<string>;
    /**
     * The immutable id associated with this workspace.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * The current state of workspace resource.
     */
    readonly workspaceState: pulumi.Output<string>;
    /**
     * The type of this workspace.
     */
    readonly workspaceType: pulumi.Output<string>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The key vault identifier used for encrypted workspaces.
     */
    readonly keyVaultIdentifierId?: pulumi.Input<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The email id of the owner for this workspace.
     */
    readonly ownerEmail: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the workspace.
     */
    readonly sku?: pulumi.Input<inputs.machinelearning.v20191001.Sku>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The fully qualified arm id of the storage account associated with this workspace.
     */
    readonly userStorageAccountId: pulumi.Input<string>;
    /**
     * The name of the machine learning workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
