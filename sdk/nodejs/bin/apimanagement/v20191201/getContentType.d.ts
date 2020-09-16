import * as pulumi from "@pulumi/pulumi";
export declare function getContentType(args: GetContentTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetContentTypeResult>;
export interface GetContentTypeArgs {
    /**
     * Content type identifier.
     */
    readonly contentTypeId: string;
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
 * Content type contract details.
 */
export interface GetContentTypeResult {
    /**
     * Content type description.
     */
    readonly description?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Content type schema.
     */
    readonly schema?: {
        [key: string]: any;
    };
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Content type version.
     */
    readonly version?: string;
}
