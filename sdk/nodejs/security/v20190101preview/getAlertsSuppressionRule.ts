// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAlertsSuppressionRule(args: GetAlertsSuppressionRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertsSuppressionRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:security/v20190101preview:getAlertsSuppressionRule", {
        "alertsSuppressionRuleName": args.alertsSuppressionRuleName,
    }, opts);
}

export interface GetAlertsSuppressionRuleArgs {
    /**
     * The unique name of the suppression alert rule
     */
    readonly alertsSuppressionRuleName: string;
}

/**
 * Describes the suppression rule
 */
export interface GetAlertsSuppressionRuleResult {
    /**
     * Type of the alert to automatically suppress. For all alert types, use '*'
     */
    readonly alertType: string;
    /**
     * Any comment regarding the rule
     */
    readonly comment?: string;
    /**
     * Expiration date of the rule, if value is not provided or provided as null this field will default to the maximum allowed expiration date.
     */
    readonly expirationDateUtc?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The last time this rule was modified
     */
    readonly lastModifiedUtc: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The reason for dismissing the alert
     */
    readonly reason: string;
    /**
     * Possible states of the rule
     */
    readonly state: string;
    /**
     * The suppression conditions
     */
    readonly suppressionAlertsScope?: outputs.security.v20190101preview.SuppressionAlertsScopeResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
