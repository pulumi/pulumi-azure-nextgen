import * as pulumi from "@pulumi/pulumi";
export declare function listIotDpsResourceKeysForKeyName(args: ListIotDpsResourceKeysForKeyNameArgs, opts?: pulumi.InvokeOptions): Promise<ListIotDpsResourceKeysForKeyNameResult>;
export interface ListIotDpsResourceKeysForKeyNameArgs {
    /**
     * Logical key name to get key-values for.
     */
    readonly keyName: string;
    /**
     * Name of the provisioning service.
     */
    readonly provisioningServiceName: string;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of the shared access key.
 */
export interface ListIotDpsResourceKeysForKeyNameResult {
    /**
     * Name of the key.
     */
    readonly keyName: string;
    /**
     * Primary SAS key value.
     */
    readonly primaryKey?: string;
    /**
     * Rights that this key has.
     */
    readonly rights: string;
    /**
     * Secondary SAS key value.
     */
    readonly secondaryKey?: string;
}
