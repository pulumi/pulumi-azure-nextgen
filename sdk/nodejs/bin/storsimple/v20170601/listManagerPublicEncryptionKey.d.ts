import * as pulumi from "@pulumi/pulumi";
export declare function listManagerPublicEncryptionKey(args: ListManagerPublicEncryptionKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListManagerPublicEncryptionKeyResult>;
export interface ListManagerPublicEncryptionKeyArgs {
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
 * Represents the secrets encrypted using Symmetric Encryption Key.
 */
export interface ListManagerPublicEncryptionKeyResult {
    /**
     * The algorithm used to encrypt the "Value".
     */
    readonly encryptionAlgorithm: string;
    /**
     * The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none.
     */
    readonly value: string;
    /**
     * The thumbprint of the cert that was used to encrypt "Value".
     */
    readonly valueCertificateThumbprint?: string;
}
