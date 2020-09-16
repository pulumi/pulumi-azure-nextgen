import * as pulumi from "@pulumi/pulumi";
export declare function getApiPolicy(args: GetApiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApiPolicyResult>;
export interface GetApiPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * Policy Export Format.
     */
    readonly format?: string;
    /**
     * The identifier of the Policy.
     */
    readonly policyId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Policy Contract details.
 */
export interface GetApiPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly format?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Contents of the Policy as defined by the format.
     */
    readonly value: string;
}
