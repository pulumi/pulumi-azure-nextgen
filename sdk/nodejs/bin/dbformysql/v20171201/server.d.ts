import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents a server.
 */
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin: pulumi.Output<string | undefined>;
    /**
     * Status showing whether the server data encryption is enabled with customer-managed keys.
     */
    readonly byokEnforcement: pulumi.Output<string>;
    /**
     * Earliest restore point creation time (ISO8601 format)
     */
    readonly earliestRestoreDate: pulumi.Output<string | undefined>;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName: pulumi.Output<string | undefined>;
    /**
     * The Azure Active Directory identity of the server.
     */
    readonly identity: pulumi.Output<outputs.dbformysql.v20171201.ResourceIdentityResponse | undefined>;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    readonly infrastructureEncryption: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * The master server id of a replica server.
     */
    readonly masterServerId: pulumi.Output<string | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    readonly minimalTlsVersion: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of private endpoint connections on a server
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.dbformysql.v20171201.ServerPrivateEndpointConnectionResponse[]>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly publicNetworkAccess: pulumi.Output<string | undefined>;
    /**
     * The maximum number of replicas that a master server can have.
     */
    readonly replicaCapacity: pulumi.Output<number | undefined>;
    /**
     * The replication role of the server.
     */
    readonly replicationRole: pulumi.Output<string | undefined>;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku: pulumi.Output<outputs.dbformysql.v20171201.SkuResponse | undefined>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    readonly sslEnforcement: pulumi.Output<string | undefined>;
    /**
     * Storage profile of a server.
     */
    readonly storageProfile: pulumi.Output<outputs.dbformysql.v20171201.StorageProfileResponse | undefined>;
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
     * A state of a server that is visible to user.
     */
    readonly userVisibleState: pulumi.Output<string | undefined>;
    /**
     * Server version.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The Azure Active Directory identity of the server.
     */
    readonly identity?: pulumi.Input<inputs.dbformysql.v20171201.ResourceIdentity>;
    /**
     * The location the resource resides in.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Properties of the server.
     */
    readonly properties: pulumi.Input<inputs.dbformysql.v20171201.ServerPropertiesForCreate>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: pulumi.Input<inputs.dbformysql.v20171201.Sku>;
    /**
     * Application-specific metadata in the form of key-value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
