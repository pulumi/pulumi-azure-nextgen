import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult>;
export interface GetPolicyArgs {
    /**
     * The name of the Web Application Firewall Policy.
     */
    readonly policyName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Defines web application firewall policy.
 */
export interface GetPolicyResult {
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: outputs.network.v20190301.CustomRuleListResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Describes Frontend Endpoints associated with this Web Application Firewall policy.
     */
    readonly frontendEndpointLinks: outputs.network.v20190301.FrontendEndpointLinkResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Describes managed rules inside the policy.
     */
    readonly managedRules?: outputs.network.v20190301.ManagedRuleSetListResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes settings for the policy.
     */
    readonly policySettings?: outputs.network.v20190301.PolicySettingsResponse;
    /**
     * Provisioning state of the policy.
     */
    readonly provisioningState: string;
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
