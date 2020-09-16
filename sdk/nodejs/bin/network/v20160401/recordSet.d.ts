import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a DNS record set (a collection of DNS records with the same name and type).
 */
export declare class RecordSet extends pulumi.CustomResource {
    /**
     * Get an existing RecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RecordSet;
    /**
     * Returns true if the given object is an instance of RecordSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RecordSet;
    /**
     * The list of A records in the record set.
     */
    readonly aRecords: pulumi.Output<outputs.network.v20160401.ARecordResponse[] | undefined>;
    /**
     * The list of AAAA records in the record set.
     */
    readonly aaaaRecords: pulumi.Output<outputs.network.v20160401.AaaaRecordResponse[] | undefined>;
    /**
     * The CNAME record in the  record set.
     */
    readonly cnameRecord: pulumi.Output<outputs.network.v20160401.CnameRecordResponse | undefined>;
    /**
     * The etag of the record set.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The metadata attached to the record set.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The list of MX records in the record set.
     */
    readonly mxRecords: pulumi.Output<outputs.network.v20160401.MxRecordResponse[] | undefined>;
    /**
     * The name of the record set.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The list of NS records in the record set.
     */
    readonly nsRecords: pulumi.Output<outputs.network.v20160401.NsRecordResponse[] | undefined>;
    /**
     * The list of PTR records in the record set.
     */
    readonly ptrRecords: pulumi.Output<outputs.network.v20160401.PtrRecordResponse[] | undefined>;
    /**
     * The SOA record in the record set.
     */
    readonly soaRecord: pulumi.Output<outputs.network.v20160401.SoaRecordResponse | undefined>;
    /**
     * The list of SRV records in the record set.
     */
    readonly srvRecords: pulumi.Output<outputs.network.v20160401.SrvRecordResponse[] | undefined>;
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    readonly ttl: pulumi.Output<number | undefined>;
    /**
     * The list of TXT records in the record set.
     */
    readonly txtRecords: pulumi.Output<outputs.network.v20160401.TxtRecordResponse[] | undefined>;
    /**
     * The type of the record set.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a RecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordSetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RecordSet resource.
 */
export interface RecordSetArgs {
    /**
     * The list of A records in the record set.
     */
    readonly aRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.ARecord>[]>;
    /**
     * The list of AAAA records in the record set.
     */
    readonly aaaaRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.AaaaRecord>[]>;
    /**
     * The CNAME record in the  record set.
     */
    readonly cnameRecord?: pulumi.Input<inputs.network.v20160401.CnameRecord>;
    /**
     * The etag of the record set.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The ID of the record set.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The metadata attached to the record set.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The list of MX records in the record set.
     */
    readonly mxRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.MxRecord>[]>;
    /**
     * The name of the record set.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The list of NS records in the record set.
     */
    readonly nsRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.NsRecord>[]>;
    /**
     * The list of PTR records in the record set.
     */
    readonly ptrRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.PtrRecord>[]>;
    /**
     * The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
     */
    readonly recordType: pulumi.Input<string>;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    readonly relativeRecordSetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SOA record in the record set.
     */
    readonly soaRecord?: pulumi.Input<inputs.network.v20160401.SoaRecord>;
    /**
     * The list of SRV records in the record set.
     */
    readonly srvRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.SrvRecord>[]>;
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The list of TXT records in the record set.
     */
    readonly txtRecords?: pulumi.Input<pulumi.Input<inputs.network.v20160401.TxtRecord>[]>;
    /**
     * The type of the record set.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    readonly zoneName: pulumi.Input<string>;
}
