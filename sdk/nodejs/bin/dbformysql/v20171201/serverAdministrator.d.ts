import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a and external administrator to be created.
 */
export declare class ServerAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ServerAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAdministrator;
    /**
     * Returns true if the given object is an instance of ServerAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerAdministrator;
    /**
     * The type of administrator.
     */
    readonly administratorType: pulumi.Output<string>;
    /**
     * The server administrator login account name.
     */
    readonly login: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    readonly sid: pulumi.Output<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ServerAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAdministratorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerAdministrator resource.
 */
export interface ServerAdministratorArgs {
    /**
     * The type of administrator.
     */
    readonly administratorType: pulumi.Input<string>;
    /**
     * The server administrator login account name.
     */
    readonly login: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    readonly sid: pulumi.Input<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    readonly tenantId: pulumi.Input<string>;
}
