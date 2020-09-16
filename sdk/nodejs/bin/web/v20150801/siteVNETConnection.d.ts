import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
 */
export declare class SiteVNETConnection extends pulumi.CustomResource {
    /**
     * Get an existing SiteVNETConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SiteVNETConnection;
    /**
     * Returns true if the given object is an instance of SiteVNETConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteVNETConnection;
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     *             Point-To-Site VPN connection.
     */
    readonly certBlob: pulumi.Output<string | undefined>;
    /**
     * The client certificate thumbprint
     */
    readonly certThumbprint: pulumi.Output<string | undefined>;
    /**
     * Dns servers to be used by this VNET. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Flag to determine if a resync is required
     */
    readonly resyncRequired: pulumi.Output<boolean | undefined>;
    /**
     * The routes that this virtual network connection uses.
     */
    readonly routes: pulumi.Output<outputs.web.v20150801.VnetRouteResponse[] | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * The vnet resource id
     */
    readonly vnetResourceId: pulumi.Output<string | undefined>;
    /**
     * Create a SiteVNETConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteVNETConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SiteVNETConnection resource.
 */
export interface SiteVNETConnectionArgs {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     *             Point-To-Site VPN connection.
     */
    readonly certBlob?: pulumi.Input<string>;
    /**
     * The client certificate thumbprint
     */
    readonly certThumbprint?: pulumi.Input<string>;
    /**
     * Dns servers to be used by this VNET. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Flag to determine if a resync is required
     */
    readonly resyncRequired?: pulumi.Input<boolean>;
    /**
     * The routes that this virtual network connection uses.
     */
    readonly routes?: pulumi.Input<pulumi.Input<inputs.web.v20150801.VnetRoute>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The name of the Virtual Network
     */
    readonly vnetName: pulumi.Input<string>;
    /**
     * The vnet resource id
     */
    readonly vnetResourceId?: pulumi.Input<string>;
}
