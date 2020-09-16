import * as pulumi from "@pulumi/pulumi";
export declare function getTagByApi(args: GetTagByApiArgs, opts?: pulumi.InvokeOptions): Promise<GetTagByApiResult>;
export interface GetTagByApiArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: string;
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
export interface GetTagByApiResult {
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
