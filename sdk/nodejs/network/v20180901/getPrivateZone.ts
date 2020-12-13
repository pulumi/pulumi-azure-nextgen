// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPrivateZone(args: GetPrivateZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateZoneResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20180901:getPrivateZone", {
        "privateZoneName": args.privateZoneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateZoneArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Describes a Private DNS zone.
 */
export interface GetPrivateZoneResult {
    /**
     * The ETag of the zone.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
     */
    readonly id: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfRecordSets: number;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinks: number;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinksWithRegistration: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfRecordSets: number;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinks: number;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinksWithRegistration: number;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
}
