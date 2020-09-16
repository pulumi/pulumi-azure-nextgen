import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Streaming Policy resource
 */
export declare class StreamingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing StreamingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingPolicy;
    /**
     * Returns true if the given object is an instance of StreamingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamingPolicy;
    /**
     * Configuration of CommonEncryptionCbcs
     */
    readonly commonEncryptionCbcs: pulumi.Output<outputs.media.v20200501.CommonEncryptionCbcsResponse | undefined>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    readonly commonEncryptionCenc: pulumi.Output<outputs.media.v20200501.CommonEncryptionCencResponse | undefined>;
    /**
     * Creation time of Streaming Policy
     */
    readonly created: pulumi.Output<string>;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    readonly defaultContentKeyPolicyName: pulumi.Output<string | undefined>;
    /**
     * Configuration of EnvelopeEncryption
     */
    readonly envelopeEncryption: pulumi.Output<outputs.media.v20200501.EnvelopeEncryptionResponse | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Configurations of NoEncryption
     */
    readonly noEncryption: pulumi.Output<outputs.media.v20200501.NoEncryptionResponse | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StreamingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StreamingPolicy resource.
 */
export interface StreamingPolicyArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Configuration of CommonEncryptionCbcs
     */
    readonly commonEncryptionCbcs?: pulumi.Input<inputs.media.v20200501.CommonEncryptionCbcs>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    readonly commonEncryptionCenc?: pulumi.Input<inputs.media.v20200501.CommonEncryptionCenc>;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    readonly defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * Configuration of EnvelopeEncryption
     */
    readonly envelopeEncryption?: pulumi.Input<inputs.media.v20200501.EnvelopeEncryption>;
    /**
     * Configurations of NoEncryption
     */
    readonly noEncryption?: pulumi.Input<inputs.media.v20200501.NoEncryption>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Policy name.
     */
    readonly streamingPolicyName: pulumi.Input<string>;
}
