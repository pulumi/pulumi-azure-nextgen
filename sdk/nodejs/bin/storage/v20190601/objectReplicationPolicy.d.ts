import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The replication policy between two storage accounts. Multiple rules can be defined in one policy.
 */
export declare class ObjectReplicationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ObjectReplicationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ObjectReplicationPolicy;
    /**
     * Returns true if the given object is an instance of ObjectReplicationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ObjectReplicationPolicy;
    /**
     * Required. Destination account name.
     */
    readonly destinationAccount: pulumi.Output<string>;
    /**
     * Indicates when the policy is enabled on the source account.
     */
    readonly enabledTime: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * A unique id for object replication policy.
     */
    readonly policyId: pulumi.Output<string>;
    /**
     * The storage account object replication rules.
     */
    readonly rules: pulumi.Output<outputs.storage.v20190601.ObjectReplicationPolicyRuleResponse[] | undefined>;
    /**
     * Required. Source account name.
     */
    readonly sourceAccount: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ObjectReplicationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectReplicationPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ObjectReplicationPolicy resource.
 */
export interface ObjectReplicationPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Required. Destination account name.
     */
    readonly destinationAccount: pulumi.Input<string>;
    /**
     * The ID of object replication policy or 'default' if the policy ID is unknown.
     */
    readonly objectReplicationPolicyId: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account object replication rules.
     */
    readonly rules?: pulumi.Input<pulumi.Input<inputs.storage.v20190601.ObjectReplicationPolicyRule>[]>;
    /**
     * Required. Source account name.
     */
    readonly sourceAccount: pulumi.Input<string>;
}
