import * as pulumi from "@pulumi/pulumi";
export declare function getApiSchema(args: GetApiSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetApiSchemaResult>;
export interface GetApiSchemaArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * Schema identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly schemaId: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Schema Contract details.
 */
export interface GetApiSchemaResult {
    /**
     * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).
     */
    readonly contentType: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Json escaped string defining the document representing the Schema.
     */
    readonly value?: string;
}
