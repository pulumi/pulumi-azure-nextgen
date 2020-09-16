import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProtectionIntent(args: GetProtectionIntentArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionIntentResult>;
export interface GetProtectionIntentArgs {
    /**
     * Fabric name associated with the backed up item.
     */
    readonly fabricName: string;
    /**
     * Backed up item name whose details are to be fetched.
     */
    readonly intentObjectName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly vaultName: string;
}
/**
 * Base class for backup ProtectionIntent.
 */
export interface GetProtectionIntentResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ProtectionIntentResource properties
     */
    readonly properties: outputs.recoveryservices.v20170701.ProtectionIntentResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
