import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageAccountCredential(args: GetStorageAccountCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountCredentialResult>;
export interface GetStorageAccountCredentialArgs {
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The name of storage account credential to be fetched.
     */
    readonly storageAccountCredentialName: string;
}
/**
 * The storage account credential.
 */
export interface GetStorageAccountCredentialResult {
    /**
     * The details of the storage account password.
     */
    readonly accessKey?: outputs.storsimple.v20170601.AsymmetricEncryptedSecretResponse;
    /**
     * The storage endpoint
     */
    readonly endPoint: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The count of volumes using this storage account credential.
     */
    readonly volumesCount: number;
}
