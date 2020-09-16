import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Virtual Appliance Site resource.
 */
export declare class VirtualApplianceSite extends pulumi.CustomResource {
    /**
     * Get an existing VirtualApplianceSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualApplianceSite;
    /**
     * Returns true if the given object is an instance of VirtualApplianceSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualApplianceSite;
    /**
     * Address Prefix.
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Name of the virtual appliance site.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Office 365 Policy.
     */
    readonly o365Policy: pulumi.Output<outputs.network.v20200501.Office365PolicyPropertiesResponse | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Site type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a VirtualApplianceSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualApplianceSiteArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualApplianceSite resource.
 */
export interface VirtualApplianceSiteArgs {
    /**
     * Address Prefix.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Name of the virtual appliance site.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Network Virtual Appliance.
     */
    readonly networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * Office 365 Policy.
     */
    readonly o365Policy?: pulumi.Input<inputs.network.v20200501.Office365PolicyProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the site.
     */
    readonly siteName: pulumi.Input<string>;
}
