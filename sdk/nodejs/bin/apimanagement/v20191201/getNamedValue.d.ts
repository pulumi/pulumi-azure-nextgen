import * as pulumi from "@pulumi/pulumi";
export declare function getNamedValue(args: GetNamedValueArgs, opts?: pulumi.InvokeOptions): Promise<GetNamedValueResult>;
export interface GetNamedValueArgs {
    /**
     * Identifier of the NamedValue.
     */
    readonly namedValueId: string;
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
 * NamedValue details.
 */
export interface GetNamedValueResult {
    /**
     * Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
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
     * Optional tags that when provided can be used to filter the NamedValue list.
     */
    readonly tags?: string[];
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly value?: string;
}
