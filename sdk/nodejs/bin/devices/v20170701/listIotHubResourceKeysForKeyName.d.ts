import * as pulumi from "@pulumi/pulumi";
export declare function listIotHubResourceKeysForKeyName(args: ListIotHubResourceKeysForKeyNameArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysForKeyNameResult>;
export interface ListIotHubResourceKeysForKeyNameArgs {
    /**
     * The name of the shared access policy.
     */
    readonly keyName: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The properties of an IoT hub shared access policy.
 */
export interface ListIotHubResourceKeysForKeyNameResult {
    /**
     * The name of the shared access policy.
     */
    readonly keyName: string;
    /**
     * The primary key.
     */
    readonly primaryKey?: string;
    /**
     * The permissions assigned to the shared access policy.
     */
    readonly rights: string;
    /**
     * The secondary key.
     */
    readonly secondaryKey?: string;
}
