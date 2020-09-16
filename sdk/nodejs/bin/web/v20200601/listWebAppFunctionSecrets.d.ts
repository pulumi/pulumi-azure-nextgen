import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppFunctionSecrets(args: ListWebAppFunctionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionSecretsResult>;
export interface ListWebAppFunctionSecretsArgs {
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
 * Function secrets.
 */
export interface ListWebAppFunctionSecretsResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
