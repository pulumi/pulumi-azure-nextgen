import * as pulumi from "@pulumi/pulumi";
/**
 * Describes a Private DNS zone.
 */
export declare class PrivateZone extends pulumi.CustomResource {
    /**
     * Get an existing PrivateZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateZone;
    /**
     * Returns true if the given object is an instance of PrivateZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateZone;
    /**
     * The ETag of the zone.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfRecordSets: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinks: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinksWithRegistration: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfRecordSets: pulumi.Output<number>;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinks: pulumi.Output<number>;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinksWithRegistration: pulumi.Output<number>;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PrivateZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateZoneArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateZone resource.
 */
export interface PrivateZoneArgs {
    /**
     * The ETag of the zone.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
