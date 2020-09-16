import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Custom IP prefix resource.
 */
export declare class CustomIPPrefix extends pulumi.CustomResource {
    /**
     * Get an existing CustomIPPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomIPPrefix;
    /**
     * Returns true if the given object is an instance of CustomIPPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomIPPrefix;
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    readonly cidr: pulumi.Output<string | undefined>;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    readonly commissionedState: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the custom IP prefix resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The list of all referenced PublicIpPrefixes.
     */
    readonly publicIpPrefixes: pulumi.Output<outputs.network.v20200601.SubResourceResponse[]>;
    /**
     * The resource GUID property of the custom IP prefix resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
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
     * Create a CustomIPPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomIPPrefixArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CustomIPPrefix resource.
 */
export interface CustomIPPrefixArgs {
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    readonly cidr?: pulumi.Input<string>;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    readonly commissionedState?: pulumi.Input<string>;
    /**
     * The name of the custom IP prefix.
     */
    readonly customIpPrefixName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
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
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
