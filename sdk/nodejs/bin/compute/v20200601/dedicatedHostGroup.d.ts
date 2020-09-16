import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.
 */
export declare class DedicatedHostGroup extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHostGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedHostGroup;
    /**
     * Returns true if the given object is an instance of DedicatedHostGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedHostGroup;
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     */
    readonly hosts: pulumi.Output<outputs.compute.v20200601.SubResourceReadOnlyResponse[]>;
    /**
     * The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group.
     */
    readonly instanceView: pulumi.Output<outputs.compute.v20200601.DedicatedHostGroupInstanceViewResponse>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of fault domains that the host group can span.
     */
    readonly platformFaultDomainCount: pulumi.Output<number>;
    /**
     * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'true' when not provided. <br><br>Minimum api-version: 2020-06-01.
     */
    readonly supportAutomaticPlacement: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a DedicatedHostGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DedicatedHostGroup resource.
 */
export interface DedicatedHostGroupArgs {
    /**
     * The name of the dedicated host group.
     */
    readonly hostGroupName: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Number of fault domains that the host group can span.
     */
    readonly platformFaultDomainCount: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'true' when not provided. <br><br>Minimum api-version: 2020-06-01.
     */
    readonly supportAutomaticPlacement?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
