import * as pulumi from "@pulumi/pulumi";
/**
 * An server Active Directory Administrator.
 */
export declare class ServerAzureADAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ServerAzureADAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAzureADAdministrator;
    /**
     * Returns true if the given object is an instance of ServerAzureADAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerAzureADAdministrator;
    /**
     * The type of administrator.
     */
    readonly administratorType: pulumi.Output<string>;
    /**
     * The server administrator login value.
     */
    readonly login: pulumi.Output<string>;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ServerAzureADAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAzureADAdministratorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerAzureADAdministrator resource.
 */
export interface ServerAzureADAdministratorArgs {
    /**
     * Name of the server administrator resource.
     */
    readonly administratorName: pulumi.Input<string>;
    /**
     * The type of administrator.
     */
    readonly administratorType: pulumi.Input<string>;
    /**
     * The server administrator login value.
     */
    readonly login: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
