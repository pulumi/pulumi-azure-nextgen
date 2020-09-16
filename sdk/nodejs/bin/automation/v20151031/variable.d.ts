import * as pulumi from "@pulumi/pulumi";
/**
 * Definition of the variable.
 */
export declare class Variable extends pulumi.CustomResource {
    /**
     * Get an existing Variable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Variable;
    /**
     * Returns true if the given object is an instance of Variable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Variable;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the encrypted flag of the variable.
     */
    readonly isEncrypted: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Gets or sets the value of the variable.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a Variable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VariableArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Variable resource.
 */
export interface VariableArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the variable.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the encrypted flag of the variable.
     */
    readonly isEncrypted?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the variable.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the value of the variable.
     */
    readonly value?: pulumi.Input<string>;
    /**
     * The variable name.
     */
    readonly variableName: pulumi.Input<string>;
}
