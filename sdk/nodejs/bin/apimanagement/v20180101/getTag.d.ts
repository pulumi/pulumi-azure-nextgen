import * as pulumi from "@pulumi/pulumi";
export declare function getTag(args: GetTagArgs, opts?: pulumi.InvokeOptions): Promise<GetTagResult>;
export interface GetTagArgs {
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
export interface GetTagResult {
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
