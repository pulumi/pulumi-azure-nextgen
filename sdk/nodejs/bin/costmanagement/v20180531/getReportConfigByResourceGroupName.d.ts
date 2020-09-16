import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReportConfigByResourceGroupName(args: GetReportConfigByResourceGroupNameArgs, opts?: pulumi.InvokeOptions): Promise<GetReportConfigByResourceGroupNameResult>;
export interface GetReportConfigByResourceGroupNameArgs {
    /**
     * Report Config Name.
     */
    readonly reportConfigName: string;
    /**
     * Azure Resource Group Name.
     */
    readonly resourceGroupName: string;
}
/**
 * A report config resource.
 */
export interface GetReportConfigByResourceGroupNameResult {
    /**
     * Has definition for the report config.
     */
    readonly definition: outputs.costmanagement.v20180531.ReportConfigDefinitionResponse;
    /**
     * Has delivery information for the report config.
     */
    readonly deliveryInfo: outputs.costmanagement.v20180531.ReportConfigDeliveryInfoResponse;
    /**
     * The format of the report being delivered.
     */
    readonly format?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Has schedule information for the report config.
     */
    readonly schedule?: outputs.costmanagement.v20180531.ReportConfigScheduleResponse;
    /**
     * Resource tags.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
