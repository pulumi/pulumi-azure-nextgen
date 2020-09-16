import * as pulumi from "@pulumi/pulumi";
export declare function getUserAssignedIdentity(args: GetUserAssignedIdentityArgs, opts?: pulumi.InvokeOptions): Promise<GetUserAssignedIdentityResult>;
export interface GetUserAssignedIdentityArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    readonly resourceName: string;
}
/**
 * Describes an identity resource.
 */
export interface GetUserAssignedIdentityResult {
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     */
    readonly clientId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The id of the service principal object associated with the created identity.
     */
    readonly principalId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The id of the tenant which the identity belongs to.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
