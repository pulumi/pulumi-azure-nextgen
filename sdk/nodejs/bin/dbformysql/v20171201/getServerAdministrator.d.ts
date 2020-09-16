import * as pulumi from "@pulumi/pulumi";
export declare function getServerAdministrator(args: GetServerAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAdministratorResult>;
export interface GetServerAdministratorArgs {
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
 * Represents a and external administrator to be created.
 */
export interface GetServerAdministratorResult {
    /**
     * The type of administrator.
     */
    readonly administratorType: string;
    /**
     * The server administrator login account name.
     */
    readonly login: string;
    /**
     * The name of the resource
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
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
