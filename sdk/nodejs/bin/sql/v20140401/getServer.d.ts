import * as pulumi from "@pulumi/pulumi";
export declare function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult>;
export interface GetServerArgs {
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
 * Represents a server.
 */
export interface GetServerResult {
    /**
     * Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * The administrator login password (required for server creation).
     */
    readonly administratorLoginPassword?: string;
    /**
     * The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
     */
    readonly externalAdministratorLogin: string;
    /**
     * The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
     */
    readonly externalAdministratorSid: string;
    /**
     * The fully qualified domain name of the server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * Kind of sql server.  This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the server.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The version of the server.
     */
    readonly version?: string;
}
