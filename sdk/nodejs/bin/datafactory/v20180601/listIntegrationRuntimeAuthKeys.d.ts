import * as pulumi from "@pulumi/pulumi";
export declare function listIntegrationRuntimeAuthKeys(args: ListIntegrationRuntimeAuthKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationRuntimeAuthKeysResult>;
export interface ListIntegrationRuntimeAuthKeysArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The integration runtime name.
     */
    readonly integrationRuntimeName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration runtime authentication keys.
 */
export interface ListIntegrationRuntimeAuthKeysResult {
    /**
     * The primary integration runtime authentication key.
     */
    readonly authKey1?: string;
    /**
     * The secondary integration runtime authentication key.
     */
    readonly authKey2?: string;
}
