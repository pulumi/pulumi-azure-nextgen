import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicyDefinition(args: GetPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionResult>;
export interface GetPolicyDefinitionArgs {
    /**
     * The policy definition name.
     */
    readonly policyDefinitionName: string;
}
/**
 * Policy definition.
 */
export interface GetPolicyDefinitionResult {
    /**
     * Gets or sets the policy definition name.
     */
    readonly name?: string;
    /**
     * Gets or sets the policy definition properties.
     */
    readonly properties: outputs.authorization.v20151101.PolicyDefinitionPropertiesResponse;
}
