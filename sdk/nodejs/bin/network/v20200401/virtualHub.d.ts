import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VirtualHub Resource.
 */
export declare class VirtualHub extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHub;
    /**
     * Returns true if the given object is an instance of VirtualHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHub;
    /**
     * Address-prefix for this VirtualHub.
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * The azureFirewall associated with this VirtualHub.
     */
    readonly azureFirewall: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The expressRouteGateway associated with this VirtualHub.
     */
    readonly expressRouteGateway: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The P2SVpnGateway associated with this VirtualHub.
     */
    readonly p2SVpnGateway: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the virtual hub resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The routeTable associated with this virtual hub.
     */
    readonly routeTable: pulumi.Output<outputs.network.v20200401.VirtualHubRouteTableResponse | undefined>;
    /**
     * The securityPartnerProvider associated with this VirtualHub.
     */
    readonly securityPartnerProvider: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName: pulumi.Output<string | undefined>;
    /**
     * The sku of this VirtualHub.
     */
    readonly sku: pulumi.Output<string | undefined>;
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
     * List of all virtual hub route table v2s associated with this VirtualHub.
     */
    readonly virtualHubRouteTableV2s: pulumi.Output<outputs.network.v20200401.VirtualHubRouteTableV2Response[] | undefined>;
    /**
     * List of all vnet connections with this VirtualHub.
     */
    readonly virtualNetworkConnections: pulumi.Output<outputs.network.v20200401.HubVirtualNetworkConnectionResponse[] | undefined>;
    /**
     * The VirtualWAN to which the VirtualHub belongs.
     */
    readonly virtualWan: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * The VpnGateway associated with this VirtualHub.
     */
    readonly vpnGateway: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * Create a VirtualHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualHub resource.
 */
export interface VirtualHubArgs {
    /**
     * Address-prefix for this VirtualHub.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * The azureFirewall associated with this VirtualHub.
     */
    readonly azureFirewall?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * The expressRouteGateway associated with this VirtualHub.
     */
    readonly expressRouteGateway?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The P2SVpnGateway associated with this VirtualHub.
     */
    readonly p2SVpnGateway?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The routeTable associated with this virtual hub.
     */
    readonly routeTable?: pulumi.Input<inputs.network.v20200401.VirtualHubRouteTable>;
    /**
     * The securityPartnerProvider associated with this VirtualHub.
     */
    readonly securityPartnerProvider?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName?: pulumi.Input<string>;
    /**
     * The sku of this VirtualHub.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
    /**
     * List of all virtual hub route table v2s associated with this VirtualHub.
     */
    readonly virtualHubRouteTableV2s?: pulumi.Input<pulumi.Input<inputs.network.v20200401.VirtualHubRouteTableV2>[]>;
    /**
     * List of all vnet connections with this VirtualHub.
     */
    readonly virtualNetworkConnections?: pulumi.Input<pulumi.Input<inputs.network.v20200401.HubVirtualNetworkConnection>[]>;
    /**
     * The VirtualWAN to which the VirtualHub belongs.
     */
    readonly virtualWan?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * The VpnGateway associated with this VirtualHub.
     */
    readonly vpnGateway?: pulumi.Input<inputs.network.v20200401.SubResource>;
}
