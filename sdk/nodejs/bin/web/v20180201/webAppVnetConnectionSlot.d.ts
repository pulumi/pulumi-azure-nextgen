import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Virtual Network information contract.
 */
export declare class WebAppVnetConnectionSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppVnetConnectionSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppVnetConnectionSlot;
    /**
     * Returns true if the given object is an instance of WebAppVnetConnectionSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppVnetConnectionSlot;
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     * Point-To-Site VPN connection.
     */
    readonly certBlob: pulumi.Output<string | undefined>;
    /**
     * The client certificate thumbprint.
     */
    readonly certThumbprint: pulumi.Output<string>;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers: pulumi.Output<string | undefined>;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    readonly isSwift: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * <code>true</code> if a resync is required; otherwise, <code>false</code>.
     */
    readonly resyncRequired: pulumi.Output<boolean>;
    /**
     * The routes that this Virtual Network connection uses.
     */
    readonly routes: pulumi.Output<outputs.web.v20180201.VnetRouteResponse[]>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The Virtual Network's resource ID.
     */
    readonly vnetResourceId: pulumi.Output<string | undefined>;
    /**
     * Create a WebAppVnetConnectionSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppVnetConnectionSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppVnetConnectionSlot resource.
 */
export interface WebAppVnetConnectionSlotArgs {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     * Point-To-Site VPN connection.
     */
    readonly certBlob?: pulumi.Input<string>;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers?: pulumi.Input<string>;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    readonly isSwift?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Name of an existing Virtual Network.
     */
    readonly vnetName: pulumi.Input<string>;
    /**
     * The Virtual Network's resource ID.
     */
    readonly vnetResourceId?: pulumi.Input<string>;
}
