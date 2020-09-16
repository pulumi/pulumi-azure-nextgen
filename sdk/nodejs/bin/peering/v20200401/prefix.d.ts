import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * The peering service prefix class.
 */
export declare class Prefix extends pulumi.CustomResource {
    /**
     * Get an existing Prefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Prefix;
    /**
     * Returns true if the given object is an instance of Prefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Prefix;
    /**
     * The error message for validation state
     */
    readonly errorMessage: pulumi.Output<string>;
    /**
     * The list of events for peering service prefix
     */
    readonly events: pulumi.Output<outputs.peering.v20200401.PeeringServicePrefixEventResponse[]>;
    /**
     * The prefix learned type
     */
    readonly learnedType: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The peering service prefix key
     */
    readonly peeringServicePrefixKey: pulumi.Output<string | undefined>;
    /**
     * The prefix from which your traffic originates.
     */
    readonly prefix: pulumi.Output<string | undefined>;
    /**
     * The prefix validation state
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
     * Create a Prefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrefixArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Prefix resource.
 */
export interface PrefixArgs {
    /**
     * The name of the peering service.
     */
    readonly peeringServiceName: pulumi.Input<string>;
    /**
     * The peering service prefix key
     */
    readonly peeringServicePrefixKey?: pulumi.Input<string>;
    /**
     * The prefix from which your traffic originates.
     */
    readonly prefix?: pulumi.Input<string>;
    /**
     * The name of the prefix.
     */
    readonly prefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
