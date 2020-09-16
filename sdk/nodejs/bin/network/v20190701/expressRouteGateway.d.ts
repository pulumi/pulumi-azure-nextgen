import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ExpressRoute gateway resource.
 */
export declare class ExpressRouteGateway extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteGateway;
    /**
     * Returns true if the given object is an instance of ExpressRouteGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteGateway;
    /**
     * Configuration for auto scaling.
     */
    readonly autoScaleConfiguration: pulumi.Output<outputs.network.v20190701.ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     */
    readonly expressRouteConnections: pulumi.Output<outputs.network.v20190701.ExpressRouteConnectionResponse[]>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the express route gateway resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
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
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    readonly virtualHub: pulumi.Output<outputs.network.v20190701.VirtualHubIdResponse>;
    /**
     * Create a ExpressRouteGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteGateway resource.
 */
export interface ExpressRouteGatewayArgs {
    /**
     * Configuration for auto scaling.
     */
    readonly autoScaleConfiguration?: pulumi.Input<inputs.network.v20190701.ExpressRouteGatewayPropertiesAutoScaleConfiguration>;
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The provisioning state of the express route gateway resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
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
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    readonly virtualHub: pulumi.Input<inputs.network.v20190701.VirtualHubId>;
}
