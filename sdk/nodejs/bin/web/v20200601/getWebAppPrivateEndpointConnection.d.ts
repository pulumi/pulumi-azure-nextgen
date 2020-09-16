import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebAppPrivateEndpointConnection(args: GetWebAppPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPrivateEndpointConnectionResult>;
export interface GetWebAppPrivateEndpointConnectionArgs {
    /**
     * Name of the site.
     */
    readonly name: string;
    readonly privateEndpointConnectionName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Private Endpoint Connection ARM resource.
 */
export interface GetWebAppPrivateEndpointConnectionResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    readonly privateEndpoint?: outputs.web.v20200601.ArmIdWrapperResponse;
    /**
     * The state of a private link connection
     */
    readonly privateLinkServiceConnectionState?: outputs.web.v20200601.PrivateLinkConnectionStateResponse;
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
