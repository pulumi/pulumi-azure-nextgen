import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The base class for backup policy. Workload-specific backup policies are derived from this class.
 */
export declare class ProtectionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ProtectionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectionPolicy;
    /**
     * Returns true if the given object is an instance of ProtectionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProtectionPolicy;
    /**
     * Optional ETag.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The base class for a backup policy. Workload-specific backup policies are derived from this class.
     */
    readonly properties: pulumi.Output<outputs.recoveryservices.v20160601.ProtectionPolicyResponse>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a ProtectionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectionPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ProtectionPolicy resource.
 */
export interface ProtectionPolicyArgs {
    /**
     * Optional ETag.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Resource ID represents the complete path to the resource.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Resource name associated with the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The backup policy to be created.
     */
    readonly policyName: pulumi.Input<string>;
    /**
     * The base class for a backup policy. Workload-specific backup policies are derived from this class.
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.v20160601.ProtectionPolicy>;
    /**
     * The name of the resource group associated with the Recovery Services vault.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The name of the Recovery Services vault.
     */
    readonly vaultName: pulumi.Input<string>;
}
