// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datalakeanalytics/latest:getFirewallRule", {
        "accountName": args.accountName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: string;
    /**
     * The name of the firewall rule to retrieve.
     */
    readonly firewallRuleName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Data Lake Analytics firewall rule information.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly endIpAddress: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly startIpAddress: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
