import * as pulumi from "@pulumi/pulumi";
export declare function getProperty(args: GetPropertyArgs, opts?: pulumi.InvokeOptions): Promise<GetPropertyResult>;
export interface GetPropertyArgs {
    /**
     * Identifier of the property.
     */
    readonly propId: string;
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
 * Property details.
 */
export interface GetPropertyResult {
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret?: boolean;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    readonly tags?: string[];
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    readonly value: string;
}
