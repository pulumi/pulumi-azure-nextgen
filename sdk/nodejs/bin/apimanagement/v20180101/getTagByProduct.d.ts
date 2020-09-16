import * as pulumi from "@pulumi/pulumi";
export declare function getTagByProduct(args: GetTagByProductArgs, opts?: pulumi.InvokeOptions): Promise<GetTagByProductResult>;
export interface GetTagByProductArgs {
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
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    readonly tagId: string;
}
/**
 * Tag Contract details.
 */
export interface GetTagByProductResult {
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
