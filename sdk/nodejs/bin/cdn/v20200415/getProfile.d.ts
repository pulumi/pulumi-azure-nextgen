import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult>;
export interface GetProfileArgs {
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * CDN profile is a logical grouping of endpoints that share the same settings, such as CDN provider and pricing tier.
 */
export interface GetProfileResult {
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status of the profile.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the profile.
     */
    readonly resourceState: string;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
     */
    readonly sku: outputs.cdn.v20200415.SkuResponse;
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
}
