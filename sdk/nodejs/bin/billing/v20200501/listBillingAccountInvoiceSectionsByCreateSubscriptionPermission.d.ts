import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listBillingAccountInvoiceSectionsByCreateSubscriptionPermission(args: ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs, opts?: pulumi.InvokeOptions): Promise<ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult>;
export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    readonly billingAccountName: string;
}
/**
 * The list of invoice section properties with create subscription permission.
 */
export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult {
    /**
     * The link (url) to the next page of results.
     */
    readonly nextLink: string;
    /**
     * The list of invoice section properties with create subscription permission.
     */
    readonly value?: outputs.billing.v20200501.InvoiceSectionWithCreateSubPermissionResponse[];
}
