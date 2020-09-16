import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * RouteTable resource in a virtual hub.
 */
export declare class HubRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing HubRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HubRouteTable;
    /**
     * Returns true if the given object is an instance of HubRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HubRouteTable;
    /**
     * List of all connections associated with this route table.
     */
    readonly associatedConnections: pulumi.Output<outputs.network.v20200601.SubResourceResponse[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * List of labels associated with this route table.
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * List of all connections that advertise to this route table.
     */
    readonly propagatingConnections: pulumi.Output<outputs.network.v20200601.SubResourceResponse[]>;
    /**
     * The provisioning state of the RouteTable resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * List of all routes.
     */
    readonly routes: pulumi.Output<outputs.network.v20200601.HubRouteResponse[] | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HubRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubRouteTableArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HubRouteTable resource.
 */
export interface HubRouteTableArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * List of labels associated with this route table.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RouteTable.
     */
    readonly routeTableName: pulumi.Input<string>;
    /**
     * List of all routes.
     */
    readonly routes?: pulumi.Input<pulumi.Input<inputs.network.v20200601.HubRoute>[]>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}
