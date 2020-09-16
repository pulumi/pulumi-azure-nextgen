import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppFunctionKeys(args: ListWebAppFunctionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionKeysResult>;
export interface ListWebAppFunctionKeysArgs {
    /**
     * Function name.
     */
    readonly functionName: string;
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * String dictionary resource.
 */
export interface ListWebAppFunctionKeysResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
