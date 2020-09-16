import * as pulumi from "@pulumi/pulumi";
export declare function getApiRelease(args: GetApiReleaseArgs, opts?: pulumi.InvokeOptions): Promise<GetApiReleaseResult>;
export interface GetApiReleaseArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: string;
    /**
     * Release identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly releaseId: string;
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
 * ApiRelease details.
 */
export interface GetApiReleaseResult {
    /**
     * Identifier of the API the release belongs to.
     */
    readonly apiId?: string;
    /**
     * The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Release Notes
     */
    readonly notes?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * The time the API release was updated.
     */
    readonly updatedDateTime: string;
}
