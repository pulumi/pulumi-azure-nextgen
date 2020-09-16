import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult>;
export interface GetProfileArgs {
    /**
     * The name of the Traffic Manager profile.
     */
    readonly profileName: string;
    /**
     * The name of the resource group containing the Traffic Manager profile.
     */
    readonly resourceGroupName: string;
}
/**
 * Class representing a Traffic Manager profile.
 */
export interface GetProfileResult {
    /**
     * Gets or sets the DNS settings of the Traffic Manager profile.
     */
    readonly dnsConfig?: outputs.network.v20151101.DnsConfigResponse;
    /**
     * Gets or sets the list of endpoints in the Traffic Manager profile.
     */
    readonly endpoints?: outputs.network.v20151101.EndpointResponse[];
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
     */
    readonly monitorConfig?: outputs.network.v20151101.MonitorConfigResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
     */
    readonly profileStatus?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
     */
    readonly trafficRoutingMethod?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
