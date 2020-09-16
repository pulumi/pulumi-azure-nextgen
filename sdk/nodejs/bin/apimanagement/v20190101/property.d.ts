import * as pulumi from "@pulumi/pulumi";
/**
 * Property details.
 */
export declare class Property extends pulumi.CustomResource {
    /**
     * Get an existing Property resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Property;
    /**
     * Returns true if the given object is an instance of Property.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Property;
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret: pulumi.Output<boolean | undefined>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a Property resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Property resource.
 */
export interface PropertyArgs {
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Identifier of the property.
     */
    readonly propId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret?: pulumi.Input<boolean>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    readonly value: pulumi.Input<string>;
}
