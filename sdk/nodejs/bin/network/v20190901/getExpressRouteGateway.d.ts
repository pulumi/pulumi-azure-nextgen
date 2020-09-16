import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteGateway(args: GetExpressRouteGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteGatewayResult>;
export interface GetExpressRouteGatewayArgs {
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * ExpressRoute gateway resource.
 */
export interface GetExpressRouteGatewayResult {
    /**
     * Configuration for auto scaling.
     */
    readonly autoScaleConfiguration?: outputs.network.v20190901.ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     */
    readonly expressRouteConnections: outputs.network.v20190901.ExpressRouteConnectionResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the express route gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    readonly virtualHub: outputs.network.v20190901.VirtualHubIdResponse;
}
