import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ExpressRoutePort resource definition.
 */
export declare class ExpressRoutePort extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRoutePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRoutePort;
    /**
     * Returns true if the given object is an instance of ExpressRoutePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRoutePort;
    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     */
    readonly allocationDate: pulumi.Output<string>;
    /**
     * Bandwidth of procured ports in Gbps
     */
    readonly bandwidthInGbps: pulumi.Output<number | undefined>;
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    readonly circuits: pulumi.Output<outputs.network.v20180801.SubResourceResponse[]>;
    /**
     * Encapsulation method on physical ports.
     */
    readonly encapsulation: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Ether type of the physical port.
     */
    readonly etherType: pulumi.Output<string>;
    /**
     * The set of physical links of the ExpressRoutePort resource
     */
    readonly links: pulumi.Output<outputs.network.v20180801.ExpressRouteLinkResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Maximum transmission unit of the physical port pair(s)
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    readonly peeringLocation: pulumi.Output<string | undefined>;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     */
    readonly provisionedBandwidthInGbps: pulumi.Output<number>;
    /**
     * The provisioning state of the ExpressRoutePort resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the ExpressRoutePort resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
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
     * Create a ExpressRoutePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRoutePortArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRoutePort resource.
 */
export interface ExpressRoutePortArgs {
    /**
     * Bandwidth of procured ports in Gbps
     */
    readonly bandwidthInGbps?: pulumi.Input<number>;
    /**
     * Encapsulation method on physical ports.
     */
    readonly encapsulation?: pulumi.Input<string>;
    /**
     * The name of the ExpressRoutePort resource.
     */
    readonly expressRoutePortName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The set of physical links of the ExpressRoutePort resource
     */
    readonly links?: pulumi.Input<pulumi.Input<inputs.network.v20180801.ExpressRouteLink>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    readonly peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the ExpressRoutePort resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
