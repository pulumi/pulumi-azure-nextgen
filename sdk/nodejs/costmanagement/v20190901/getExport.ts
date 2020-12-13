// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExport(args: GetExportArgs, opts?: pulumi.InvokeOptions): Promise<GetExportResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:costmanagement/v20190901:getExport", {
        "exportName": args.exportName,
        "scope": args.scope,
    }, opts);
}

export interface GetExportArgs {
    /**
     * Export Name.
     */
    readonly exportName: string;
    /**
     * The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope..
     */
    readonly scope: string;
}

/**
 * A export resource.
 */
export interface GetExportResult {
    /**
     * Has definition for the export.
     */
    readonly definition: outputs.costmanagement.v20190901.QueryDefinitionResponse;
    /**
     * Has delivery information for the export.
     */
    readonly deliveryInfo: outputs.costmanagement.v20190901.ExportDeliveryInfoResponse;
    /**
     * The format of the export being delivered.
     */
    readonly format?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Has schedule information for the export.
     */
    readonly schedule?: outputs.costmanagement.v20190901.ExportScheduleResponse;
    /**
     * Resource tags.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
