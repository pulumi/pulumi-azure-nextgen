import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppHybridConnectionKeys(args: ListWebAppHybridConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHybridConnectionKeysResult>;
export interface ListWebAppHybridConnectionKeysArgs {
    /**
     * The name of the web app.
     */
    readonly name: string;
    /**
     * The namespace for this hybrid connection.
     */
    readonly namespaceName: string;
    /**
     * The relay name for this hybrid connection.
     */
    readonly relayName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
 */
export interface ListWebAppHybridConnectionKeysResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The name of the send key.
     */
    readonly sendKeyName: string;
    /**
     * The value of the send key.
     */
    readonly sendKeyValue: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
