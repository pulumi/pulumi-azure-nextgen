import * as pulumi from "@pulumi/pulumi";
/**
 * Server Endpoint object.
 */
export declare class ServerEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ServerEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerEndpoint;
    /**
     * Returns true if the given object is an instance of ServerEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerEndpoint;
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering: pulumi.Output<string | undefined>;
    /**
     * Friendly Name
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: pulumi.Output<string | undefined>;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Server Local path.
     */
    readonly serverLocalPath: pulumi.Output<string | undefined>;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId: pulumi.Output<string | undefined>;
    /**
     * Sync Health Status
     */
    readonly syncStatus: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent: pulumi.Output<number | undefined>;
    /**
     * Create a ServerEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerEndpoint resource.
 */
export interface ServerEndpointArgs {
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: pulumi.Input<string>;
    /**
     * Friendly Name
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Server Endpoint object.
     */
    readonly serverEndpointName: pulumi.Input<string>;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: pulumi.Input<string>;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    readonly syncGroupName: pulumi.Input<string>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: pulumi.Input<number>;
}
