import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a link to virtual network for a Private DNS zone.
 */
export declare class VirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkLink;
    /**
     * Returns true if the given object is an instance of VirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkLink;
    /**
     * The ETag of the virtual network link.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    readonly registrationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The reference of the virtual network.
     */
    readonly virtualNetwork: pulumi.Output<outputs.network.v20180901.SubResourceResponse | undefined>;
    /**
     * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly virtualNetworkLinkState: pulumi.Output<string>;
    /**
     * Create a VirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkLink resource.
 */
export interface VirtualNetworkLinkArgs {
    /**
     * The ETag of the virtual network link.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    readonly registrationEnabled?: pulumi.Input<boolean>;
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
    /**
     * The reference of the virtual network.
     */
    readonly virtualNetwork?: pulumi.Input<inputs.network.v20180901.SubResource>;
    /**
     * The name of the virtual network link.
     */
    readonly virtualNetworkLinkName: pulumi.Input<string>;
}
