import * as pulumi from "@pulumi/pulumi";
/**
 * Registered Server resource.
 */
export declare class RegisteredServer extends pulumi.CustomResource {
    /**
     * Get an existing RegisteredServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegisteredServer;
    /**
     * Returns true if the given object is an instance of RegisteredServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegisteredServer;
    /**
     * Registered Server Agent Version
     */
    readonly agentVersion: pulumi.Output<string | undefined>;
    /**
     * Registered Server clusterId
     */
    readonly clusterId: pulumi.Output<string | undefined>;
    /**
     * Registered Server clusterName
     */
    readonly clusterName: pulumi.Output<string | undefined>;
    /**
     * Resource discoveryEndpointUri
     */
    readonly discoveryEndpointUri: pulumi.Output<string | undefined>;
    /**
     * Friendly Name
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Registered Server last heart beat
     */
    readonly lastHeartBeat: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: pulumi.Output<string | undefined>;
    /**
     * Registered Server lastWorkflowId
     */
    readonly lastWorkflowId: pulumi.Output<string | undefined>;
    /**
     * Management Endpoint Uri
     */
    readonly managementEndpointUri: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Registered Server Provisioning State
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly resourceLocation: pulumi.Output<string | undefined>;
    /**
     * Registered Server Certificate
     */
    readonly serverCertificate: pulumi.Output<string | undefined>;
    /**
     * Registered Server serverId
     */
    readonly serverId: pulumi.Output<string | undefined>;
    /**
     * Registered Server Management Error Code
     */
    readonly serverManagementtErrorCode: pulumi.Output<number | undefined>;
    /**
     * Registered Server OS Version
     */
    readonly serverOSVersion: pulumi.Output<string | undefined>;
    /**
     * Registered Server serverRole
     */
    readonly serverRole: pulumi.Output<string | undefined>;
    /**
     * Service Location
     */
    readonly serviceLocation: pulumi.Output<string | undefined>;
    /**
     * Registered Server storageSyncServiceUid
     */
    readonly storageSyncServiceUid: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RegisteredServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegisteredServerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RegisteredServer resource.
 */
export interface RegisteredServerArgs {
    /**
     * Registered Server Agent Version
     */
    readonly agentVersion?: pulumi.Input<string>;
    /**
     * Registered Server clusterId
     */
    readonly clusterId?: pulumi.Input<string>;
    /**
     * Registered Server clusterName
     */
    readonly clusterName?: pulumi.Input<string>;
    /**
     * Friendly Name
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * Registered Server last heart beat
     */
    readonly lastHeartBeat?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Registered Server Certificate
     */
    readonly serverCertificate?: pulumi.Input<string>;
    /**
     * Registered Server serverId
     */
    readonly serverId: pulumi.Input<string>;
    /**
     * Registered Server OS Version
     */
    readonly serverOSVersion?: pulumi.Input<string>;
    /**
     * Registered Server serverRole
     */
    readonly serverRole?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: pulumi.Input<string>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
