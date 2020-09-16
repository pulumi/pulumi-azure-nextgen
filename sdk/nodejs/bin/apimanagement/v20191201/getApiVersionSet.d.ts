import * as pulumi from "@pulumi/pulumi";
export declare function getApiVersionSet(args: GetApiVersionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetApiVersionSetResult>;
export interface GetApiVersionSetArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Api Version Set identifier. Must be unique in the current API Management service instance.
     */
    readonly versionSetId: string;
}
/**
 * Api Version Set Contract details.
 */
export interface GetApiVersionSetResult {
    /**
     * Description of API Version Set.
     */
    readonly description?: string;
    /**
     * Name of API Version Set
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
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    readonly versionHeaderName?: string;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    readonly versionQueryName?: string;
    /**
     * An value that determines where the API Version identifer will be located in a HTTP request.
     */
    readonly versioningScheme: string;
}
