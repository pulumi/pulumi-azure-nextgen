// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getNetworkFunction(args: GetNetworkFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:hybridnetwork/v20200101preview:getNetworkFunction", {
        "networkFunctionName": args.networkFunctionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionArgs {
    /**
     * The name of the network function resource.
     */
    readonly networkFunctionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * Network function resource response.
 */
export interface GetNetworkFunctionResult {
    /**
     * The reference to the device resource.
     */
    readonly device?: outputs.hybridnetwork.v20200101preview.SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The resource URI of the managed application.
     */
    readonly managedApplication: outputs.hybridnetwork.v20200101preview.SubResourceResponse;
    /**
     * The parameters for the managed application.
     */
    readonly managedApplicationParameters?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The network function configurations from the user.
     */
    readonly networkFunctionUserConfigurations?: outputs.hybridnetwork.v20200101preview.NetworkFunctionUserConfigurationResponse[];
    /**
     * The provisioning state of the network function resource.
     */
    readonly provisioningState: string;
    /**
     * The service key for the network function resource.
     */
    readonly serviceKey: string;
    /**
     * The sku name for the network function.
     */
    readonly skuName?: string;
    /**
     * The sku type for the network function.
     */
    readonly skuType: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The vendor name for the network function.
     */
    readonly vendorName?: string;
    /**
     * The vendor provisioning state for the network function resource.
     */
    readonly vendorProvisioningState: string;
}
