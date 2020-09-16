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
    readonly backupEnabled: pulumi.Output<string>;
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
}
