import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Public IP prefix resource.
 */
export declare class PublicIPPrefix extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPPrefix;
    /**
     * Returns true if the given object is an instance of PublicIPPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicIPPrefix;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The allocated Prefix.
     */
    readonly ipPrefix: pulumi.Output<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    readonly ipTags: pulumi.Output<outputs.network.v20200501.IpTagResponse[] | undefined>;
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    readonly loadBalancerFrontendIpConfiguration: pulumi.Output<outputs.network.v20200501.SubResourceResponse>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    readonly prefixLength: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the public IP prefix resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion: pulumi.Output<string | undefined>;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    readonly publicIPAddresses: pulumi.Output<outputs.network.v20200501.ReferencedPublicIpAddressResponse[]>;
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * The public IP prefix SKU.
     */
    readonly sku: pulumi.Output<outputs.network.v20200501.PublicIPPrefixSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a PublicIPPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPPrefixArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PublicIPPrefix resource.
 */
export interface PublicIPPrefixArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    readonly ipTags?: pulumi.Input<pulumi.Input<inputs.network.v20200501.IpTag>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    readonly prefixLength?: pulumi.Input<number>;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: pulumi.Input<string>;
    /**
     * The name of the public IP prefix.
     */
    readonly publicIpPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The public IP prefix SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.v20200501.PublicIPPrefixSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
