import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a server.
 */
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin: pulumi.Output<string | undefined>;
    /**
     * The administrator login password (required for server creation).
     */
    readonly administratorLoginPassword: pulumi.Output<string | undefined>;
    /**
     * The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
     */
    readonly externalAdministratorLogin: pulumi.Output<string>;
    /**
     * The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
     */
    readonly externalAdministratorSid: pulumi.Output<string>;
    /**
     * The fully qualified domain name of the server.
     */
    readonly fullyQualifiedDomainName: pulumi.Output<string>;
    /**
     * Kind of sql server.  This is metadata used for the Azure portal experience.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The state of the server.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The version of the server.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for server creation).
     */
    readonly administratorLoginPassword?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The version of the server.
     */
    readonly version?: pulumi.Input<string>;
}
