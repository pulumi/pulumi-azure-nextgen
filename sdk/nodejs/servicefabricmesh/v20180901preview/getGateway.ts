// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicefabricmesh/v20180901preview:getGateway", {
        "gatewayResourceName": args.gatewayResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * The identity of the gateway.
     */
    readonly gatewayResourceName: string;
    /**
     * Azure resource group name
     */
    readonly resourceGroupName: string;
}

/**
 * This type describes a gateway resource.
 */
export interface GetGatewayResult {
    /**
     * User readable description of the gateway.
     */
    readonly description?: string;
    /**
     * Network that the Application is using.
     */
    readonly destinationNetwork: outputs.servicefabricmesh.v20180901preview.NetworkRefResponse;
    /**
     * Configuration for http connectivity for this gateway.
     */
    readonly http?: outputs.servicefabricmesh.v20180901preview.HttpConfigResponse[];
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IP address of the gateway. This is populated in the response and is ignored for incoming requests.
     */
    readonly ipAddress: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Network the gateway should listen on for requests.
     */
    readonly sourceNetwork: outputs.servicefabricmesh.v20180901preview.NetworkRefResponse;
    /**
     * Status of the resource.
     */
    readonly status: string;
    /**
     * Gives additional information about the current status of the gateway.
     */
    readonly statusDetails: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Configuration for tcp connectivity for this gateway.
     */
    readonly tcp?: outputs.servicefabricmesh.v20180901preview.TcpConfigResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
