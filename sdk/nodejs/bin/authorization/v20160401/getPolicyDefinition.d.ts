import * as pulumi from "@pulumi/pulumi";
export declare function getPolicyDefinition(args: GetPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionResult>;
export interface GetPolicyDefinitionArgs {
    /**
     * The name of the policy definition to get.
     */
    readonly policyDefinitionName: string;
}
/**
 * The policy definition.
 */
export interface GetPolicyDefinitionResult {
    /**
     * The policy definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy definition.
     */
    readonly displayName?: string;
    /**
     * The name of the policy definition. If you do not specify a value for name, the value is inferred from the name value in the request URI.
     */
    readonly name?: string;
    /**
     * The policy rule.
     */
    readonly policyRule?: {
        [key: string]: any;
    };
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: string;
}
