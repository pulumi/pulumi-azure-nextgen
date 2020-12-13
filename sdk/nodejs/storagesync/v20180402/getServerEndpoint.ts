// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getServerEndpoint(args: GetServerEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetServerEndpointResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:storagesync/v20180402:getServerEndpoint", {
        "resourceGroupName": args.resourceGroupName,
        "serverEndpointName": args.serverEndpointName,
        "storageSyncServiceName": args.storageSyncServiceName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetServerEndpointArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Server Endpoint object.
     */
    readonly serverEndpointName: string;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: string;
    /**
     * Name of Sync Group resource.
     */
    readonly syncGroupName: string;
}

/**
 * Server Endpoint object.
 */
export interface GetServerEndpointResult {
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: string;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName?: string;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState?: string;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: string;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: string;
    /**
     * Sync Health Status
     */
    readonly syncStatus?: any;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: number;
}
