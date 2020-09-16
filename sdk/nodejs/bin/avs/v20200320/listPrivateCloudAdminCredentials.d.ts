import * as pulumi from "@pulumi/pulumi";
export declare function listPrivateCloudAdminCredentials(args: ListPrivateCloudAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateCloudAdminCredentialsResult>;
export interface ListPrivateCloudAdminCredentialsArgs {
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Administrative credentials for accessing vCenter and NSX-T
 */
export interface ListPrivateCloudAdminCredentialsResult {
    /**
     * NSX-T Manager password
     */
    readonly nsxtPassword: string;
    /**
     * NSX-T Manager username
     */
    readonly nsxtUsername: string;
    /**
     * vCenter admin password
     */
    readonly vcenterPassword: string;
    /**
     * vCenter admin username
     */
    readonly vcenterUsername: string;
}
