import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult>;
export interface GetPolicyArgs {
    /**
     * The name of the CdnWebApplicationFirewallPolicy.
     */
    readonly policyName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Defines web application firewall policy for Azure CDN.
 */
export interface GetPolicyResult {
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: outputs.cdn.v20200331.CustomRuleListResponse;
    /**
     * Describes Azure CDN endpoints associated with this Web Application Firewall policy.
     */
    readonly endpointLinks: outputs.cdn.v20200331.CdnEndpointResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Describes managed rules inside the policy.
     */
    readonly managedRules?: outputs.cdn.v20200331.ManagedRuleSetListResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes  policySettings for policy
     */
    readonly policySettings?: outputs.cdn.v20200331.PolicySettingsResponse;
    /**
     * Provisioning state of the WebApplicationFirewallPolicy.
     */
    readonly provisioningState: string;
    /**
     * Describes rate limit rules inside the policy.
     */
    readonly rateLimitRules?: outputs.cdn.v20200331.RateLimitRuleListResponse;
    readonly resourceState: string;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
     */
    readonly sku: outputs.cdn.v20200331.SkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
