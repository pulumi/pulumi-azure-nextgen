import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * IpAllocation resource.
 */
export declare class IpAllocation extends pulumi.CustomResource {
    /**
     * Get an existing IpAllocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IpAllocation;
    /**
     * Returns true if the given object is an instance of IpAllocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpAllocation;
    /**
     * IpAllocation tags.
     */
    readonly allocationTags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The IPAM allocation ID.
     */
    readonly ipamAllocationId: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The address prefix for the IpAllocation.
     */
    readonly prefix: pulumi.Output<string | undefined>;
    /**
     * The address prefix length for the IpAllocation.
     */
    readonly prefixLength: pulumi.Output<number | undefined>;
    /**
     * The address prefix Type for the IpAllocation.
     */
    readonly prefixType: pulumi.Output<string | undefined>;
    /**
     * The Subnet that using the prefix of this IpAllocation resource.
     */
    readonly subnet: pulumi.Output<outputs.network.v20200501.SubResourceResponse>;
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
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    readonly virtualNetwork: pulumi.Output<outputs.network.v20200501.SubResourceResponse>;
    /**
     * Create a IpAllocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpAllocationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IpAllocation resource.
 */
export interface IpAllocationArgs {
    /**
     * IpAllocation tags.
     */
    readonly allocationTags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the IpAllocation.
     */
    readonly ipAllocationName: pulumi.Input<string>;
    /**
     * The IPAM allocation ID.
     */
    readonly ipamAllocationId?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The address prefix for the IpAllocation.
     */
    readonly prefix?: pulumi.Input<string>;
    /**
     * The address prefix length for the IpAllocation.
     */
    readonly prefixLength?: pulumi.Input<number>;
    /**
     * The address prefix Type for the IpAllocation.
     */
    readonly prefixType?: pulumi.Input<string>;
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
     * The type for the IpAllocation.
     */
    readonly type?: pulumi.Input<string>;
}
