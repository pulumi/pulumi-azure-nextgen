import * as pulumi from "@pulumi/pulumi";
export declare function getServerAzureADAdministrator(args: GetServerAzureADAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAzureADAdministratorResult>;
export interface GetServerAzureADAdministratorArgs {
    /**
     * Name of the server administrator resource.
     */
    readonly administratorName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * An server Active Directory Administrator.
 */
export interface GetServerAzureADAdministratorResult {
    /**
     * The type of administrator.
     */
    readonly administratorType: string;
    /**
     * The server administrator login value.
     */
    readonly login: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The server administrator Sid (Secure ID).
     */
    readonly sid: string;
    /**
     * The server Active Directory Administrator tenant id.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
