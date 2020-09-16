import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSmartDetectorAlertRule(args: GetSmartDetectorAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSmartDetectorAlertRuleResult>;
export interface GetSmartDetectorAlertRuleArgs {
    /**
     * The name of the alert rule.
     */
    readonly alertRuleName: string;
    /**
     * Indicates if Smart Detector should be expanded.
     */
    readonly expandDetector?: boolean;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The alert rule information
 */
export interface GetSmartDetectorAlertRuleResult {
    /**
     * The alert rule actions.
     */
    readonly actionGroups: outputs.alertsmanagement.v20190301.ActionGroupsInformationResponse;
    /**
     * The alert rule description.
     */
    readonly description?: string;
    /**
     * The alert rule's detector.
     */
    readonly detector: outputs.alertsmanagement.v20190301.DetectorResponse;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    readonly frequency: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The alert rule resources scope.
     */
    readonly scope: string[];
    /**
     * The alert rule severity.
     */
    readonly severity: string;
    /**
     * The alert rule state.
     */
    readonly state: string;
    /**
     * The alert rule throttling information.
     */
    readonly throttling?: outputs.alertsmanagement.v20190301.ThrottlingInformationResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
