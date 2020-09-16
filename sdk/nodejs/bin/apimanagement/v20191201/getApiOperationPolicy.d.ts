import * as pulumi from "@pulumi/pulumi";
export declare function getApiOperationPolicy(args: GetApiOperationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApiOperationPolicyResult>;
export interface GetApiOperationPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * Policy Export Format.
     */
    readonly format?: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly operationId: string;
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
export interface GetApiOperationPolicyResult {
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
