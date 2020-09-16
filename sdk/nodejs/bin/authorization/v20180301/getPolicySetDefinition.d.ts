import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicySetDefinition(args: GetPolicySetDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionResult>;
export interface GetPolicySetDefinitionArgs {
    /**
     * The name of the policy set definition to get.
     */
    readonly policySetDefinitionName: string;
}
/**
 * The policy set definition.
 */
export interface GetPolicySetDefinitionResult {
    /**
     * The policy set definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: string;
    /**
     * The policy set definition metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * The name of the policy set definition.
     */
    readonly name: string;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters?: {
        [key: string]: any;
    };
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: outputs.authorization.v20180301.PolicyDefinitionReferenceResponse[];
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    readonly type: string;
}
