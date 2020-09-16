import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VirtualHubRouteTableV2 Resource.
 */
export declare class VirtualHubRouteTableV2 extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubRouteTableV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubRouteTableV2;
    /**
     * Returns true if the given object is an instance of VirtualHubRouteTableV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHubRouteTableV2;
    /**
     * List of all connections attached to this route table v2.
     */
    readonly attachedConnections: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * List of all routes.
     */
    readonly routes: pulumi.Output<outputs.network.v20200401.VirtualHubRouteV2Response[] | undefined>;
    /**
     * Create a VirtualHubRouteTableV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubRouteTableV2Args, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualHubRouteTableV2 resource.
 */
export interface VirtualHubRouteTableV2Args {
    /**
     * List of all connections attached to this route table v2.
     */
    readonly attachedConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHubRouteTableV2.
     */
    readonly routeTableName: pulumi.Input<string>;
    /**
     * List of all routes.
     */
    readonly routes?: pulumi.Input<pulumi.Input<inputs.network.v20200401.VirtualHubRouteV2>[]>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}
