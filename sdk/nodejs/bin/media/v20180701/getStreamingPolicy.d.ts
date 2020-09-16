import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStreamingPolicy(args: GetStreamingPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingPolicyResult>;
export interface GetStreamingPolicyArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The Streaming Policy name.
     */
    readonly streamingPolicyName: string;
}
/**
 * A Streaming Policy resource
 */
export interface GetStreamingPolicyResult {
    /**
     * Configuration of CommonEncryptionCbcs
     */
    readonly commonEncryptionCbcs?: outputs.media.v20180701.CommonEncryptionCbcsResponse;
    /**
     * Configuration of CommonEncryptionCenc
     */
    readonly commonEncryptionCenc?: outputs.media.v20180701.CommonEncryptionCencResponse;
    /**
     * Creation time of Streaming Policy
     */
    readonly created: string;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    readonly defaultContentKeyPolicyName?: string;
    /**
     * Configuration of EnvelopeEncryption
     */
    readonly envelopeEncryption?: outputs.media.v20180701.EnvelopeEncryptionResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Configurations of NoEncryption
     */
    readonly noEncryption?: outputs.media.v20180701.NoEncryptionResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
