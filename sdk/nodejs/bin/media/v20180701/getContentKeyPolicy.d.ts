import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getContentKeyPolicy(args: GetContentKeyPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetContentKeyPolicyResult>;
export interface GetContentKeyPolicyArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Content Key Policy name.
     */
    readonly contentKeyPolicyName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * A Content Key Policy resource.
 */
export interface GetContentKeyPolicyResult {
    /**
     * The creation date of the Policy
     */
    readonly created: string;
    /**
     * A description for the Policy.
     */
    readonly description?: string;
    /**
     * The last modified date of the Policy
     */
    readonly lastModified: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The Key Policy options.
     */
    readonly options: outputs.media.v20180701.ContentKeyPolicyOptionResponse[];
    /**
     * The legacy Policy ID.
     */
    readonly policyId: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
