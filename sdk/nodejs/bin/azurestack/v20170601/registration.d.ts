import * as pulumi from "@pulumi/pulumi";
/**
 * Registration information.
 */
export declare class Registration extends pulumi.CustomResource {
    /**
     * Get an existing Registration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Registration;
    /**
     * Returns true if the given object is an instance of Registration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Registration;
    /**
     * Specifies the billing mode for the Azure Stack registration.
     */
    readonly billingModel: pulumi.Output<string | undefined>;
    /**
     * The identifier of the registered Azure Stack.
     */
    readonly cloudId: pulumi.Output<string | undefined>;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The object identifier associated with the Azure Stack connecting to Azure.
     */
    readonly objectId: pulumi.Output<string | undefined>;
    /**
     * Custom tags for the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of Resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Registration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Registration resource.
 */
export interface RegistrationArgs {
    /**
     * Location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the Azure Stack registration.
     */
    readonly registrationName: pulumi.Input<string>;
    /**
     * The token identifying registered Azure Stack
     */
    readonly registrationToken: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    readonly resourceGroup: pulumi.Input<string>;
}
