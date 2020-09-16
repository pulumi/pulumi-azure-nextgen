import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Site REST Resource.
 */
export declare class HyperVSiteSite extends pulumi.CustomResource {
    /**
     * Get an existing HyperVSiteSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HyperVSiteSite;
    /**
     * Returns true if the given object is an instance of HyperVSiteSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HyperVSiteSite;
    /**
     * eTag for concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Azure location in which Sites is created.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Name of the Hyper-V site.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Nested properties of Hyper-V site.
     */
    readonly properties: pulumi.Output<outputs.offazure.v20200707.SitePropertiesResponse>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of resource. Type = Microsoft.OffAzure/HyperVSites.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HyperVSiteSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HyperVSiteSiteArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HyperVSiteSite resource.
 */
export interface HyperVSiteSiteArgs {
    /**
     * eTag for concurrency control.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Azure location in which Sites is created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the Hyper-V site.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Nested properties of Hyper-V site.
     */
    readonly properties?: pulumi.Input<inputs.offazure.v20200707.SiteProperties>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Site name.
     */
    readonly siteName: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
