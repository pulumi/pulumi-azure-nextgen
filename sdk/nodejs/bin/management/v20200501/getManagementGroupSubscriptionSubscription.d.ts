import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagementGroupSubscriptionSubscription(args: GetManagementGroupSubscriptionSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupSubscriptionSubscriptionResult>;
export interface GetManagementGroupSubscriptionSubscriptionArgs {
    /**
     * Management Group ID.
     */
    readonly groupId: string;
}
/**
 * The details of subscription under management group.
 */
export interface GetManagementGroupSubscriptionSubscriptionResult {
    /**
     * The friendly name of the subscription.
     */
    readonly displayName?: string;
    /**
     * The stringified id of the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly name: string;
    /**
     * The ID of the parent management group.
     */
    readonly parent?: outputs.management.v20200501.DescendantParentGroupInfoResponse;
    /**
     * The state of the subscription.
     */
    readonly state?: string;
    /**
     * The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenant?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/subscriptions
     */
    readonly type: string;
}
