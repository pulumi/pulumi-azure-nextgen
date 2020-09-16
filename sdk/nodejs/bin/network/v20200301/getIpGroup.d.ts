import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIpGroup(args: GetIpGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIpGroupResult>;
export interface GetIpGroupArgs {
    /**
     * Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.
     */
    readonly expand?: string;
    /**
     * The name of the ipGroups.
     */
    readonly ipGroupsName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The IpGroups resource information.
 */
export interface GetIpGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of references to Azure resources that this IpGroups is associated with.
     */
    readonly firewalls: outputs.network.v20200301.SubResourceResponse[];
    /**
     * IpAddresses/IpAddressPrefixes in the IpGroups resource.
     */
    readonly ipAddresses?: string[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the IpGroups resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
