// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getCustomIPPrefix(args: GetCustomIPPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomIPPrefixResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/latest:getCustomIPPrefix", {
        "customIpPrefixName": args.customIpPrefixName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomIPPrefixArgs {
    /**
     * The name of the custom IP prefix.
     */
    readonly customIpPrefixName: string;
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Custom IP prefix resource.
 */
export interface GetCustomIPPrefixResult {
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    readonly cidr?: string;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    readonly commissionedState?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the custom IP prefix resource.
     */
    readonly provisioningState: string;
    /**
     * The list of all referenced PublicIpPrefixes.
     */
    readonly publicIpPrefixes: outputs.network.latest.SubResourceResponse[];
    /**
     * The resource GUID property of the custom IP prefix resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: string[];
}
