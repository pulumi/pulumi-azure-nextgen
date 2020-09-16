import * as pulumi from "@pulumi/pulumi";
export declare function getHcxEnterpriseSite(args: GetHcxEnterpriseSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetHcxEnterpriseSiteResult>;
export interface GetHcxEnterpriseSiteArgs {
    /**
     * Name of the HCX Enterprise Site in the private cloud
     */
    readonly hcxEnterpriseSiteName: string;
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
 * An HCX Enterprise Site resource
 */
export interface GetHcxEnterpriseSiteResult {
    /**
     * The activation key
     */
    readonly activationKey: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The status of the HCX Enterprise Site
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
