import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VpnSite Resource.
 */
export declare class VpnSite extends pulumi.CustomResource {
    /**
     * Get an existing VpnSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnSite;
    /**
     * Returns true if the given object is an instance of VpnSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnSite;
    /**
     * The AddressSpace that contains an array of IP address ranges.
     */
    readonly addressSpace: pulumi.Output<outputs.network.v20181001.AddressSpaceResponse | undefined>;
    /**
     * The set of bgp properties.
     */
    readonly bgpProperties: pulumi.Output<outputs.network.v20181001.BgpSettingsResponse | undefined>;
    /**
     * The device properties
     */
    readonly deviceProperties: pulumi.Output<outputs.network.v20181001.DevicePropertiesResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The ip-address for the vpn-site.
     */
    readonly ipAddress: pulumi.Output<string | undefined>;
    /**
     * IsSecuritySite flag
     */
    readonly isSecuritySite: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The key for vpn-site that can be used for connections.
     */
    readonly siteKey: pulumi.Output<string | undefined>;
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
     * The VirtualWAN to which the vpnSite belongs
     */
    readonly virtualWan: pulumi.Output<outputs.network.v20181001.SubResourceResponse | undefined>;
    /**
     * Create a VpnSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnSiteArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VpnSite resource.
 */
export interface VpnSiteArgs {
    /**
     * The AddressSpace that contains an array of IP address ranges.
     */
    readonly addressSpace?: pulumi.Input<inputs.network.v20181001.AddressSpace>;
    /**
     * The set of bgp properties.
     */
    readonly bgpProperties?: pulumi.Input<inputs.network.v20181001.BgpSettings>;
    /**
     * The device properties
     */
    readonly deviceProperties?: pulumi.Input<inputs.network.v20181001.DeviceProperties>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The ip-address for the vpn-site.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * IsSecuritySite flag
     */
    readonly isSecuritySite?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The resource group name of the VpnSite.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The key for vpn-site that can be used for connections.
     */
    readonly siteKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The VirtualWAN to which the vpnSite belongs
     */
    readonly virtualWan?: pulumi.Input<inputs.network.v20181001.SubResource>;
    /**
     * The name of the VpnSite being created or updated.
     */
    readonly vpnSiteName: pulumi.Input<string>;
}
