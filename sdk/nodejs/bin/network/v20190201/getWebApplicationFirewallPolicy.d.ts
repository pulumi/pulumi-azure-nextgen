import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebApplicationFirewallPolicy(args: GetWebApplicationFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetWebApplicationFirewallPolicyResult>;
export interface GetWebApplicationFirewallPolicyArgs {
    /**
     * The name of the policy
     */
    readonly policyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Defines web application firewall policy.
 */
export interface GetWebApplicationFirewallPolicyResult {
    /**
     * A collection of references to application gateways.
     */
    readonly applicationGateways: outputs.network.v20190201.ApplicationGatewayResponse[];
    /**
     * Describes custom rules inside the policy
     */
    readonly customRules?: outputs.network.v20190201.WebApplicationFirewallCustomRuleResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes  policySettings for policy
     */
    readonly policySettings?: outputs.network.v20190201.PolicySettingsResponse;
    /**
     * Provisioning state of the WebApplicationFirewallPolicy.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the policy.
     */
    readonly resourceState: string;
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
