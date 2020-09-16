import * as pulumi from "@pulumi/pulumi";
export declare function getPrivateZone(args: GetPrivateZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateZoneResult>;
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
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
}
