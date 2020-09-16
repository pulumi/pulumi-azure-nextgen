import * as pulumi from "@pulumi/pulumi";
export declare function getSshPublicKey(args: GetSshPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshPublicKeyResult>;
export interface GetSshPublicKeyArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the SSH public key.
     */
    readonly sshPublicKeyName: string;
}
/**
 * Specifies information about the SSH public key.
 */
export interface GetSshPublicKeyResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    readonly publicKey?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
