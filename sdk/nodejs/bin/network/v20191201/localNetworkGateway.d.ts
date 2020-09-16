import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A common class for general resource information.
 */
export declare class LocalNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing LocalNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LocalNetworkGateway;
    /**
     * Returns true if the given object is an instance of LocalNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LocalNetworkGateway;
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings: pulumi.Output<outputs.network.v20191201.BgpSettingsResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * FQDN of local network gateway.
     */
    readonly fqdn: pulumi.Output<string | undefined>;
    /**
     * IP address of local network gateway.
     */
    readonly gatewayIpAddress: pulumi.Output<string | undefined>;
    /**
     * Local network site address space.
     */
    readonly localNetworkAddressSpace: pulumi.Output<outputs.network.v20191201.AddressSpaceResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the local network gateway resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the local network gateway resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LocalNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LocalNetworkGateway resource.
 */
export interface LocalNetworkGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: pulumi.Input<inputs.network.v20191201.BgpSettings>;
    /**
     * FQDN of local network gateway.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * IP address of local network gateway.
     */
    readonly gatewayIpAddress?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Local network site address space.
     */
    readonly localNetworkAddressSpace?: pulumi.Input<inputs.network.v20191201.AddressSpace>;
    /**
     * The name of the local network gateway.
     */
    readonly localNetworkGatewayName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
