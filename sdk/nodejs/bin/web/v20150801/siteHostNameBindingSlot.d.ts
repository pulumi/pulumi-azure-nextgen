import * as pulumi from "@pulumi/pulumi";
/**
 * A host name binding object
 */
export declare class SiteHostNameBindingSlot extends pulumi.CustomResource {
    /**
     * Get an existing SiteHostNameBindingSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SiteHostNameBindingSlot;
    /**
     * Returns true if the given object is an instance of SiteHostNameBindingSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteHostNameBindingSlot;
    /**
     * Azure resource name
     */
    readonly azureResourceName: pulumi.Output<string | undefined>;
    /**
     * Azure resource type
     */
    readonly azureResourceType: pulumi.Output<string | undefined>;
    /**
     * Custom DNS record type
     */
    readonly customHostNameDnsRecordType: pulumi.Output<string | undefined>;
    /**
     * Fully qualified ARM domain resource URI
     */
    readonly domainId: pulumi.Output<string | undefined>;
    /**
     * Host name type
     */
    readonly hostNameType: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Web app name
     */
    readonly siteName: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a SiteHostNameBindingSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteHostNameBindingSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SiteHostNameBindingSlot resource.
 */
export interface SiteHostNameBindingSlotArgs {
    /**
     * Azure resource name
     */
    readonly azureResourceName?: pulumi.Input<string>;
    /**
     * Azure resource type
     */
    readonly azureResourceType?: pulumi.Input<string>;
    /**
     * Custom DNS record type
     */
    readonly customHostNameDnsRecordType?: pulumi.Input<string>;
    /**
     * Fully qualified ARM domain resource URI
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * Name of host
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Host name type
     */
    readonly hostNameType?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Web app name
     */
    readonly siteName?: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
}
