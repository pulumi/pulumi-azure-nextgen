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
    return pulumi.runtime.invoke("azure-nextgen:cdn/v20160402:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileArgs {
    /**
     * Name of the CDN profile within the resource group.
     */
    readonly profileName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * CDN profile represents the top level resource and the entry point into the CDN API. This allows users to set up a logical grouping of endpoints in addition to creating shared configuration settings and selecting pricing tiers and providers.
 */
export interface GetProfileResult {
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
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
     * The SKU (pricing tier) of the CDN profile.
     */
    readonly sku?: outputs.cdn.v20160402.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
