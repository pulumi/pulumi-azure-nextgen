import * as pulumi from "@pulumi/pulumi";
/**
 * An HCX Enterprise Site resource
 */
export declare class HcxEnterpriseSite extends pulumi.CustomResource {
    /**
     * Get an existing HcxEnterpriseSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HcxEnterpriseSite;
    /**
     * Returns true if the given object is an instance of HcxEnterpriseSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HcxEnterpriseSite;
    /**
     * The activation key
     */
    readonly activationKey: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The status of the HCX Enterprise Site
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HcxEnterpriseSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HcxEnterpriseSiteArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HcxEnterpriseSite resource.
 */
export interface HcxEnterpriseSiteArgs {
    /**
     * Name of the HCX Enterprise Site in the private cloud
     */
    readonly hcxEnterpriseSiteName: pulumi.Input<string>;
    /**
     * The name of the private cloud.
     */
    readonly privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
