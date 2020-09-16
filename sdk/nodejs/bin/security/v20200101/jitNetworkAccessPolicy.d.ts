import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class JitNetworkAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing JitNetworkAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JitNetworkAccessPolicy;
    /**
     * Returns true if the given object is an instance of JitNetworkAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JitNetworkAccessPolicy;
    /**
     * Kind of the resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the Just-in-Time policy.
     */
    readonly provisioningState: pulumi.Output<string>;
    readonly requests: pulumi.Output<outputs.security.v20200101.JitNetworkAccessRequestResponse[] | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    readonly virtualMachines: pulumi.Output<outputs.security.v20200101.JitNetworkAccessPolicyVirtualMachineResponse[]>;
    /**
     * Create a JitNetworkAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JitNetworkAccessPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a JitNetworkAccessPolicy resource.
 */
export interface JitNetworkAccessPolicyArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    readonly ascLocation: pulumi.Input<string>;
    /**
     * Name of a Just-in-Time access configuration policy.
     */
    readonly jitNetworkAccessPolicyName: pulumi.Input<string>;
    /**
     * Kind of the resource
     */
    readonly kind?: pulumi.Input<string>;
    readonly requests?: pulumi.Input<pulumi.Input<inputs.security.v20200101.JitNetworkAccessRequest>[]>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    readonly virtualMachines: pulumi.Input<pulumi.Input<inputs.security.v20200101.JitNetworkAccessPolicyVirtualMachine>[]>;
}
