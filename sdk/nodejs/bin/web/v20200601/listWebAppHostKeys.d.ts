import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppHostKeys(args: ListWebAppHostKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHostKeysResult>;
export interface ListWebAppHostKeysArgs {
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
 * Functions host level keys.
 */
export interface ListWebAppHostKeysResult {
    /**
     * Host level function keys.
     */
    readonly functionKeys?: {
        [key: string]: string;
    };
    /**
     * Secret key.
     */
    readonly masterKey?: string;
    /**
     * System keys.
     */
    readonly systemKeys?: {
        [key: string]: string;
    };
}
