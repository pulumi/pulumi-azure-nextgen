import * as pulumi from "@pulumi/pulumi";
export declare function getTrafficManagerUserMetricsKey(args?: GetTrafficManagerUserMetricsKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficManagerUserMetricsKeyResult>;
export interface GetTrafficManagerUserMetricsKeyArgs {
}
/**
 * Class representing Traffic Manager User Metrics.
 */
export interface GetTrafficManagerUserMetricsKeyResult {
    /**
     * The key returned by the User Metrics operation.
     */
    readonly key?: string;
    /**
     * The name of the resource
     */
    readonly name?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type?: string;
}
