import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeviceSecurityGroup(args: GetDeviceSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceSecurityGroupResult>;
export interface GetDeviceSecurityGroupArgs {
    /**
     * The name of the device security group. Note that the name of the device security group is case insensitive.
     */
    readonly deviceSecurityGroupName: string;
    /**
     * The identifier of the resource.
     */
    readonly resourceId: string;
}
/**
 * The device security group resource
 */
export interface GetDeviceSecurityGroupResult {
    /**
     * The allow-list custom alert rules.
     */
    readonly allowlistRules?: outputs.security.v20190801.AllowlistCustomAlertRuleResponse[];
    /**
     * The deny-list custom alert rules.
     */
    readonly denylistRules?: outputs.security.v20190801.DenylistCustomAlertRuleResponse[];
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The list of custom alert threshold rules.
     */
    readonly thresholdRules?: outputs.security.v20190801.ThresholdCustomAlertRuleResponse[];
    /**
     * The list of custom alert time-window rules.
     */
    readonly timeWindowRules?: outputs.security.v20190801.TimeWindowCustomAlertRuleResponse[];
    /**
     * Resource type
     */
    readonly type: string;
}
