// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getRecordSet(args: GetRecordSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRecordSetResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/latest:getRecordSet", {
        "privateZoneName": args.privateZoneName,
        "recordType": args.recordType,
        "relativeRecordSetName": args.relativeRecordSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRecordSetArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: string;
    /**
     * The type of DNS record in this record set.
     */
    readonly recordType: string;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    readonly relativeRecordSetName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone.
 */
export interface GetRecordSetResult {
    /**
     * The list of A records in the record set.
     */
    readonly aRecords?: outputs.network.latest.ARecordResponse[];
    /**
     * The list of AAAA records in the record set.
     */
    readonly aaaaRecords?: outputs.network.latest.AaaaRecordResponse[];
    /**
     * The CNAME record in the record set.
     */
    readonly cnameRecord?: outputs.network.latest.CnameRecordResponse;
    /**
     * The ETag of the record set.
     */
    readonly etag?: string;
    /**
     * Fully qualified domain name of the record set.
     */
    readonly fqdn: string;
    /**
     * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
     */
    readonly id: string;
    /**
     * Is the record set auto-registered in the Private DNS zone through a virtual network link?
     */
    readonly isAutoRegistered: boolean;
    /**
     * The metadata attached to the record set.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The list of MX records in the record set.
     */
    readonly mxRecords?: outputs.network.latest.MxRecordResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of PTR records in the record set.
     */
    readonly ptrRecords?: outputs.network.latest.PtrRecordResponse[];
    /**
     * The SOA record in the record set.
     */
    readonly soaRecord?: outputs.network.latest.SoaRecordResponse;
    /**
     * The list of SRV records in the record set.
     */
    readonly srvRecords?: outputs.network.latest.SrvRecordResponse[];
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    readonly ttl?: number;
    /**
     * The list of TXT records in the record set.
     */
    readonly txtRecords?: outputs.network.latest.TxtRecordResponse[];
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
}
