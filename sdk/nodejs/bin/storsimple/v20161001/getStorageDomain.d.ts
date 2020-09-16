import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageDomain(args: GetStorageDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageDomainResult>;
export interface GetStorageDomainArgs {
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The storage domain name.
     */
    readonly storageDomainName: string;
}
/**
 * The storage domain.
 */
export interface GetStorageDomainResult {
    /**
     * The encryption key used to encrypt the data. This is a user secret.
     */
    readonly encryptionKey?: outputs.storsimple.v20161001.AsymmetricEncryptedSecretResponse;
    /**
     * The encryption status "Enabled | Disabled".
     */
    readonly encryptionStatus: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The storage account credentials.
     */
    readonly storageAccountCredentialIds: string[];
    /**
     * The type.
     */
    readonly type: string;
}
