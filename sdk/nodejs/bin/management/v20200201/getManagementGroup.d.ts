import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagementGroup(args: GetManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupResult>;
export interface GetManagementGroupArgs {
    /**
     * The $expand=children query string parameter allows clients to request inclusion of children in the response payload.  $expand=path includes the path from the root group to the current group.
     */
    readonly expand?: string;
    /**
     * A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
     */
    readonly filter?: string;
    /**
     * Management Group ID.
     */
    readonly groupId: string;
    /**
     * The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
     */
    readonly recurse?: boolean;
}
/**
 * The management group details.
 */
export interface GetManagementGroupResult {
    /**
     * The list of children.
     */
    readonly children?: outputs.management.v20200201.ManagementGroupChildInfoResponse[];
    /**
     * The details of a management group.
     */
    readonly details?: outputs.management.v20200201.ManagementGroupDetailsResponse;
    /**
     * The friendly name of the management group.
     */
    readonly displayName?: string;
    /**
     * The name of the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly name: string;
    /**
     * The path from the root to the current group.
     */
    readonly path?: outputs.management.v20200201.ManagementGroupPathElementResponse[];
    /**
     * The role definitions associated with the management group.
     */
    readonly roles?: string[];
    /**
     * The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenantId?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups
     */
    readonly type: string;
}
