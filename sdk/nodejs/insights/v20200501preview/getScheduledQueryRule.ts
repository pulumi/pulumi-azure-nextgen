// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getScheduledQueryRule(args: GetScheduledQueryRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledQueryRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20200501preview:getScheduledQueryRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetScheduledQueryRuleArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the rule.
     */
    readonly ruleName: string;
}

/**
 * The scheduled query rule resource.
 */
export interface GetScheduledQueryRuleResult {
    readonly actions?: outputs.insights.v20200501preview.ActionResponse[];
    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    readonly criteria: outputs.insights.v20200501preview.ScheduledQueryRuleCriteriaResponse;
    /**
     * The description of the scheduled query rule.
     */
    readonly description?: string;
    /**
     * The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
     */
    readonly enabled: boolean;
    /**
     * How often the scheduled query rule is evaluated represented in ISO 8601 duration format.
     */
    readonly evaluationFrequency: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired.
     */
    readonly muteActionsDuration?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of resource id's that this scheduled query rule is scoped to.
     */
    readonly scopes: string[];
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest
     */
    readonly severity: number;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria
     */
    readonly targetResourceTypes?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size).
     */
    readonly windowSize: string;
}
