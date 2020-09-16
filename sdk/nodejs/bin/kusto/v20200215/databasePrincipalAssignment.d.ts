import * as pulumi from "@pulumi/pulumi";
/**
 * Class representing a database principal assignment.
 */
export declare class DatabasePrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing DatabasePrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabasePrincipalAssignment;
    /**
     * Returns true if the given object is an instance of DatabasePrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabasePrincipalAssignment;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
     */
    readonly principalId: pulumi.Output<string>;
    /**
     * The principal name
     */
    readonly principalName: pulumi.Output<string>;
    /**
     * Principal type.
     */
    readonly principalType: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Database principal role.
     */
    readonly role: pulumi.Output<string>;
    /**
     * The tenant id of the principal
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * The tenant name of the principal
     */
    readonly tenantName: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DatabasePrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabasePrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DatabasePrincipalAssignment resource.
 */
export interface DatabasePrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    readonly principalAssignmentName: pulumi.Input<string>;
    /**
     * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
     */
    readonly principalId: pulumi.Input<string>;
    /**
     * Principal type.
     */
    readonly principalType: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Database principal role.
     */
    readonly role: pulumi.Input<string>;
    /**
     * The tenant id of the principal
     */
    readonly tenantId?: pulumi.Input<string>;
}
