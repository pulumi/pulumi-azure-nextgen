import * as pulumi from "@pulumi/pulumi";
/**
 * The top level Linked service resource container.
 */
export declare class LinkedService extends pulumi.CustomResource {
    /**
     * Get an existing LinkedService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LinkedService;
    /**
     * Returns true if the given object is an instance of LinkedService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedService;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the linked service.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
     */
    readonly resourceId: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access
     */
    readonly writeAccessResourceId: pulumi.Output<string | undefined>;
    /**
     * Create a LinkedService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LinkedService resource.
 */
export interface LinkedServiceArgs {
    /**
     * Name of the linkedServices resource
     */
    readonly linkedServiceName: pulumi.Input<string>;
    /**
     * The provisioning state of the linked service.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
     */
    readonly resourceId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access
     */
    readonly writeAccessResourceId?: pulumi.Input<string>;
}
