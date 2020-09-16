import * as pulumi from "@pulumi/pulumi";
export declare function getTagByOperation(args: GetTagByOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetTagByOperationResult>;
export interface GetTagByOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly operationId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    readonly tagId: string;
}
/**
 * Tag Contract details.
 */
export interface GetTagByOperationResult {
    /**
     * Tag name.
     */
    readonly displayName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
