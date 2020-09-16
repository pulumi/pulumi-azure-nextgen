import * as pulumi from "@pulumi/pulumi";
export declare function listMediaServiceKeys(args: ListMediaServiceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListMediaServiceKeysResult>;
export interface ListMediaServiceKeysArgs {
    /**
     * Name of the Media Service.
     */
    readonly mediaServiceName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * The response body for a ListKeys API.
 */
export interface ListMediaServiceKeysResult {
    /**
     * The primary authorization endpoint.
     */
    readonly primaryAuthEndpoint?: string;
    /**
     * The primary key for the Media Service resource.
     */
    readonly primaryKey?: string;
    /**
     * The authorization scope.
     */
    readonly scope?: string;
    /**
     * The secondary authorization endpoint.
     */
    readonly secondaryAuthEndpoint?: string;
    /**
     * The secondary key for the Media Service resource.
     */
    readonly secondaryKey?: string;
}
