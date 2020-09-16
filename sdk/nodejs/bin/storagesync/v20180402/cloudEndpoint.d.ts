import * as pulumi from "@pulumi/pulumi";
/**
 * Cloud Endpoint object.
 */
export declare class CloudEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing CloudEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudEndpoint;
    /**
     * Returns true if the given object is an instance of CloudEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CloudEndpoint;
    /**
     * Backup Enabled
     */
    readonly backupEnabled: pulumi.Output<boolean>;
    /**
     * Friendly Name
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: pulumi.Output<string | undefined>;
    /**
     * CloudEndpoint lastWorkflowId
     */
    readonly lastWorkflowId: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Partnership Id
     */
    readonly partnershipId: pulumi.Output<string | undefined>;
    /**
     * CloudEndpoint Provisioning State
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Storage Account Resource Id
     */
    readonly storageAccountResourceId: pulumi.Output<string | undefined>;
    /**
     * Storage Account Share name
     */
    readonly storageAccountShareName: pulumi.Output<string | undefined>;
    /**
     * Storage Account Tenant Id
     */
    readonly storageAccountTenantId: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CloudEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CloudEndpoint resource.
 */
export interface CloudEndpointArgs {
    /**
     * Name of Cloud Endpoint object.
     */
    readonly cloudEndpointName: pulumi.Input<string>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Storage Account Resource Id
     */
    readonly storageAccountResourceId?: pulumi.Input<string>;
    /**
     * Storage Account Share name
     */
    readonly storageAccountShareName?: pulumi.Input<string>;
    /**
     * Storage Account Tenant Id
     */
    readonly storageAccountTenantId?: pulumi.Input<string>;
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
}
