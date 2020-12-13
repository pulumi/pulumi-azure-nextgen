// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:cdn/v20191231:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
     * Resource ID.
     */
    readonly id: string;
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
    readonly sku: outputs.cdn.v20191231.SkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
