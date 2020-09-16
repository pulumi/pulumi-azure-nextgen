import * as pulumi from "@pulumi/pulumi";
/**
 * The description of the Windows IoT Device Service.
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * Windows IoT Device Service OEM AAD domain
     */
    readonly adminDomainName: pulumi.Output<string | undefined>;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    readonly billingDomainName: pulumi.Output<string | undefined>;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Windows IoT Device Service notes.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * Windows IoT Device Service device allocation,
     */
    readonly quantity: pulumi.Output<number | undefined>;
    /**
     * Windows IoT Device Service start date,
     */
    readonly startDate: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Windows IoT Device Service OEM AAD domain
     */
    readonly adminDomainName?: pulumi.Input<string>;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    readonly billingDomainName?: pulumi.Input<string>;
    /**
     * The name of the Windows IoT Device Service.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * Windows IoT Device Service notes.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * Windows IoT Device Service device allocation,
     */
    readonly quantity?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the Windows IoT Device Service.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
