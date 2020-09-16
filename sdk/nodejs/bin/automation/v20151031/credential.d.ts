import * as pulumi from "@pulumi/pulumi";
/**
 * Definition of the credential.
 */
export declare class Credential extends pulumi.CustomResource {
    /**
     * Get an existing Credential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Credential;
    /**
     * Returns true if the given object is an instance of Credential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Credential;
    /**
     * Gets the creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Gets the user name of the credential.
     */
    readonly userName: pulumi.Output<string>;
    /**
     * Create a Credential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Credential resource.
 */
export interface CredentialArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * The parameters supplied to the create or update credential operation.
     */
    readonly credentialName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the credential.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the credential.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Gets or sets the password of the credential.
     */
    readonly password: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the user name of the credential.
     */
    readonly userName: pulumi.Input<string>;
}
