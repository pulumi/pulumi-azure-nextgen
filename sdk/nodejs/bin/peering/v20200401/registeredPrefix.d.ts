import * as pulumi from "@pulumi/pulumi";
/**
 * The customer's prefix that is registered by the peering service provider.
 */
export declare class RegisteredPrefix extends pulumi.CustomResource {
    /**
     * Get an existing RegisteredPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegisteredPrefix;
    /**
     * Returns true if the given object is an instance of RegisteredPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegisteredPrefix;
    /**
     * The error message associated with the validation state, if any.
     */
    readonly errorMessage: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    readonly peeringServicePrefixKey: pulumi.Output<string>;
    /**
     * The customer's prefix from which traffic originates.
     */
    readonly prefix: pulumi.Output<string | undefined>;
    /**
     * The prefix validation state.
     */
    readonly prefixValidationState: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RegisteredPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegisteredPrefixArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RegisteredPrefix resource.
 */
export interface RegisteredPrefixArgs {
    /**
     * The name of the peering.
     */
    readonly peeringName: pulumi.Input<string>;
    /**
     * The customer's prefix from which traffic originates.
     */
    readonly prefix?: pulumi.Input<string>;
    /**
     * The name of the registered prefix.
     */
    readonly registeredPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
