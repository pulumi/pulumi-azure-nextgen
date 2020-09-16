import * as pulumi from "@pulumi/pulumi";
export declare function getDatabasePrincipalAssignment(args: GetDatabasePrincipalAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabasePrincipalAssignmentResult>;
export interface GetDatabasePrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    readonly databaseName: string;
    /**
     * The name of the Kusto principalAssignment.
     */
    readonly principalAssignmentName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: string;
}
/**
 * Class representing a database principal assignment.
 */
export interface GetDatabasePrincipalAssignmentResult {
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
     */
    readonly principalId: string;
    /**
     * The principal name
     */
    readonly principalName: string;
    /**
     * Principal type.
     */
    readonly principalType: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Database principal role.
     */
    readonly role: string;
    /**
     * The tenant id of the principal
     */
    readonly tenantId?: string;
    /**
     * The tenant name of the principal
     */
    readonly tenantName: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
