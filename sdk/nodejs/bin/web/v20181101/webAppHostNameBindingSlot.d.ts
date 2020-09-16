import * as pulumi from "@pulumi/pulumi";
/**
 * A hostname binding object.
 */
export declare class WebAppHostNameBindingSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppHostNameBindingSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppHostNameBindingSlot;
    /**
     * Returns true if the given object is an instance of WebAppHostNameBindingSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppHostNameBindingSlot;
    /**
     * Azure resource name.
     */
    readonly azureResourceName: pulumi.Output<string | undefined>;
    /**
     * Azure resource type.
     */
    readonly azureResourceType: pulumi.Output<string | undefined>;
    /**
     * Custom DNS record type.
     */
    readonly customHostNameDnsRecordType: pulumi.Output<string | undefined>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    readonly domainId: pulumi.Output<string | undefined>;
    /**
     * Hostname type.
     */
    readonly hostNameType: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * App Service app name.
     */
    readonly siteName: pulumi.Output<string | undefined>;
    /**
     * SSL type
     */
    readonly sslState: pulumi.Output<string | undefined>;
    /**
     * SSL certificate thumbprint
     */
    readonly thumbprint: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    readonly virtualIP: pulumi.Output<string>;
    /**
     * Create a WebAppHostNameBindingSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppHostNameBindingSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppHostNameBindingSlot resource.
 */
export interface WebAppHostNameBindingSlotArgs {
    /**
     * Azure resource name.
     */
    readonly azureResourceName?: pulumi.Input<string>;
    /**
     * Azure resource type.
     */
    readonly azureResourceType?: pulumi.Input<string>;
    /**
     * Custom DNS record type.
     */
    readonly customHostNameDnsRecordType?: pulumi.Input<string>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * Hostname in the hostname binding.
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Hostname type.
     */
    readonly hostNameType?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * App Service app name.
     */
    readonly siteName?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * SSL type
     */
    readonly sslState?: pulumi.Input<string>;
    /**
     * SSL certificate thumbprint
     */
    readonly thumbprint?: pulumi.Input<string>;
}
