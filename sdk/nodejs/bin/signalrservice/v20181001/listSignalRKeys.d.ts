import * as pulumi from "@pulumi/pulumi";
export declare function listSignalRKeys(args: ListSignalRKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSignalRKeysResult>;
export interface ListSignalRKeysArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the SignalR resource.
     */
    readonly resourceName: string;
}
/**
 * A class represents the access keys of SignalR service.
 */
export interface ListSignalRKeysResult {
    /**
     * SignalR connection string constructed via the primaryKey
     */
    readonly primaryConnectionString?: string;
    /**
     * The primary access key.
     */
    readonly primaryKey?: string;
    /**
     * SignalR connection string constructed via the secondaryKey
     */
    readonly secondaryConnectionString?: string;
    /**
     * The secondary access key.
     */
    readonly secondaryKey?: string;
}
