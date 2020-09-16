import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFirewallPolicy(args: GetFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyResult>;
export interface GetFirewallPolicyArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the Firewall Policy.
     */
    readonly firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * FirewallPolicy Resource.
 */
export interface GetFirewallPolicyResult {
    /**
     * The parent firewall policy from which rules are inherited.
     */
    readonly basePolicy?: outputs.network.v20200601.SubResourceResponse;
    /**
     * List of references to Child Firewall Policies.
     */
    readonly childPolicies: outputs.network.v20200601.SubResourceResponse[];
    /**
     * DNS Proxy Settings definition.
     */
    readonly dnsSettings?: outputs.network.v20200601.DnsSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    readonly firewalls: outputs.network.v20200601.SubResourceResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the firewall policy resource.
     */
    readonly provisioningState: string;
    /**
     * List of references to FirewallPolicyRuleCollectionGroups.
     */
    readonly ruleCollectionGroups: outputs.network.v20200601.SubResourceResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode?: string;
    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    readonly threatIntelWhitelist?: outputs.network.v20200601.FirewallPolicyThreatIntelWhitelistResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
