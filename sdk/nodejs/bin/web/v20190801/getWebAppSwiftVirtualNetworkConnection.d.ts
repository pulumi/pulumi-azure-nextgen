import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppSwiftVirtualNetworkConnection(args: GetWebAppSwiftVirtualNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSwiftVirtualNetworkConnectionResult>;
export interface GetWebAppSwiftVirtualNetworkConnectionArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
 */
export interface GetWebAppSwiftVirtualNetworkConnectionResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    readonly subnetResourceId?: string;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    readonly swiftSupported?: boolean;
    /**
     * Resource type.
     */
    readonly type: string;
}
