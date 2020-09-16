import * as pulumi from "@pulumi/pulumi";
export declare function getServerKey(args: GetServerKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetServerKeyResult>;
export interface GetServerKeyArgs {
    /**
     * The name of the MySQL Server key to be retrieved.
     */
    readonly keyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * A MySQL Server key.
 */
export interface GetServerKeyResult {
    /**
     * The key creation date.
     */
    readonly creationDate: string;
    /**
     * Kind of encryption protector used to protect the key.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The key type like 'AzureKeyVault'.
     */
    readonly serverKeyType: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The URI of the key.
     */
    readonly uri?: string;
}
