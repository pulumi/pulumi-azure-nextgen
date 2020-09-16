import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDedicatedHostGroup(args: GetDedicatedHostGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedHostGroupResult>;
export interface GetDedicatedHostGroupArgs {
    /**
     * The name of the dedicated host group.
     */
    readonly hostGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.
 */
export interface GetDedicatedHostGroupResult {
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     */
    readonly hosts: outputs.compute.v20191201.SubResourceReadOnlyResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Number of fault domains that the host group can span.
     */
    readonly platformFaultDomainCount: number;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    readonly zones?: string[];
}
