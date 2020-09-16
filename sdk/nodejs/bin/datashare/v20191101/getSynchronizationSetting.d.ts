import * as pulumi from "@pulumi/pulumi";
export declare function getSynchronizationSetting(args: GetSynchronizationSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetSynchronizationSettingResult>;
export interface GetSynchronizationSettingArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share.
     */
    readonly shareName: string;
    /**
     * The name of the synchronizationSetting.
     */
    readonly synchronizationSettingName: string;
}
/**
 * A Synchronization Setting data transfer object.
 */
export interface GetSynchronizationSettingResult {
    /**
     * Kind of synchronization
     */
    readonly kind: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
