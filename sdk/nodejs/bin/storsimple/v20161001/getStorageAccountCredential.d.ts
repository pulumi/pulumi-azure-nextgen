import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageAccountCredential(args: GetStorageAccountCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountCredentialResult>;
export interface GetStorageAccountCredentialArgs {
    /**
     * The name of storage account credential to be fetched.
     */
    readonly credentialName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * The storage account credential
 */
export interface GetStorageAccountCredentialResult {
    /**
     * The details of the storage account password
     */
    readonly accessKey?: outputs.storsimple.v20161001.AsymmetricEncryptedSecretResponse;
    /**
     * The cloud service provider
     */
    readonly cloudType: string;
    /**
     * SSL needs to be enabled or not
     */
    readonly enableSSL: string;
    /**
     * The storage endpoint
     */
    readonly endPoint: string;
    /**
     * The storage account's geo location
     */
    readonly location?: string;
    /**
     * The storage account login
     */
    readonly login: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The type.
     */
    readonly type: string;
}
