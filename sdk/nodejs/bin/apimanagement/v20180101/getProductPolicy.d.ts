import * as pulumi from "@pulumi/pulumi";
export declare function getProductPolicy(args: GetProductPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetProductPolicyResult>;
export interface GetProductPolicyArgs {
    /**
     * The identifier of the Policy.
     */
    readonly policyId: string;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    readonly productId: string;
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
export interface GetProductPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly contentFormat?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Json escaped Xml Encoded contents of the Policy.
     */
    readonly policyContent: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
