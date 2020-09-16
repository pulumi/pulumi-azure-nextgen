import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * HubVirtualNetworkConnection Resource.
 */
export declare class HubVirtualNetworkConnection extends pulumi.CustomResource {
    /**
     * Get an existing HubVirtualNetworkConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HubVirtualNetworkConnection;
    /**
     * Returns true if the given object is an instance of HubVirtualNetworkConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HubVirtualNetworkConnection;
    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    readonly allowHubToRemoteVnetTransit: pulumi.Output<boolean | undefined>;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    readonly allowRemoteVnetToUseHubVnetGateways: pulumi.Output<boolean | undefined>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the hub virtual network connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Reference to the remote virtual network.
     */
    readonly remoteVirtualNetwork: pulumi.Output<outputs.network.v20200601.SubResourceResponse | undefined>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration: pulumi.Output<outputs.network.v20200601.RoutingConfigurationResponse | undefined>;
    /**
     * Create a HubVirtualNetworkConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubVirtualNetworkConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HubVirtualNetworkConnection resource.
 */
export interface HubVirtualNetworkConnectionArgs {
    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    readonly allowHubToRemoteVnetTransit?: pulumi.Input<boolean>;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    readonly allowRemoteVnetToUseHubVnetGateways?: pulumi.Input<boolean>;
    /**
     * The name of the HubVirtualNetworkConnection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Reference to the remote virtual network.
     */
    readonly remoteVirtualNetwork?: pulumi.Input<inputs.network.v20200601.SubResource>;
    /**
     * The resource group name of the HubVirtualNetworkConnection.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: pulumi.Input<inputs.network.v20200601.RoutingConfiguration>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}
