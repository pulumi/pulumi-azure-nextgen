import * as pulumi from "@pulumi/pulumi";
export declare function getCredential(args: GetCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialResult>;
export interface GetCredentialArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The name of credential.
     */
    readonly credentialName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the credential.
 */
export interface GetCredentialResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets the user name of the credential.
     */
    readonly userName: string;
}
