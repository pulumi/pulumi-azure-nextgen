import * as pulumi from "@pulumi/pulumi";
export declare function getLinkedStorageAccount(args: GetLinkedStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedStorageAccountResult>;
export interface GetLinkedStorageAccountArgs {
    /**
     * Linked storage accounts type.
     */
    readonly dataSourceType: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * Linked storage accounts top level resource container.
 */
export interface GetLinkedStorageAccountResult {
    /**
     * Linked storage accounts type.
     */
    readonly dataSourceType: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Linked storage accounts resources ids.
     */
    readonly storageAccountIds?: string[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
