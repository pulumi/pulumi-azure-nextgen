import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class WorkspaceCollection extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceCollection;
    /**
     * Returns true if the given object is an instance of WorkspaceCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceCollection;
    /**
     * Azure location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Workspace collection name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Properties
     */
    readonly properties: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly sku: pulumi.Output<outputs.powerbi.v20160129.AzureSkuResponse | undefined>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a WorkspaceCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceCollectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WorkspaceCollection resource.
 */
export interface WorkspaceCollectionArgs {
    /**
     * Azure location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Azure resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    readonly sku?: pulumi.Input<inputs.powerbi.v20160129.AzureSku>;
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Power BI Embedded Workspace Collection name
     */
    readonly workspaceCollectionName: pulumi.Input<string>;
}
