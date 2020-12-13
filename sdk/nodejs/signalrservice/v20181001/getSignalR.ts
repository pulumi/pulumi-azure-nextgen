// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSignalR(args: GetSignalRArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:signalrservice/v20181001:getSignalR", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSignalRArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the SignalR resource.
     */
    readonly resourceName: string;
}

/**
 * A class represent a SignalR service resource.
 */
export interface GetSignalRResult {
    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    readonly cors?: outputs.signalrservice.v20181001.SignalRCorsSettingsResponse;
    /**
     * The publicly accessible IP of the SignalR service.
     */
    readonly externalIP: string;
    /**
     * List of SignalR featureFlags. e.g. ServiceMode.
     * 
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set. 
     * When a featureFlag is not explicitly set, SignalR service will use its globally default value. 
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    readonly features?: outputs.signalrservice.v20181001.SignalRFeatureResponse[];
    /**
     * FQDN of the SignalR service instance. Format: xxx.service.signalr.net
     */
    readonly hostName: string;
    /**
     * Prefix for the hostName of the SignalR service. Retained for future use.
     * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
     */
    readonly hostNamePrefix?: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The publicly accessible port of the SignalR service which is designed for browser/client side usage.
     */
    readonly publicPort: number;
    /**
     * The publicly accessible port of the SignalR service which is designed for customer server side usage.
     */
    readonly serverPort: number;
    /**
     * SKU of the service.
     */
    readonly sku?: outputs.signalrservice.v20181001.ResourceSkuResponse;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the service - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
    /**
     * Version of the SignalR resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version?: string;
}
