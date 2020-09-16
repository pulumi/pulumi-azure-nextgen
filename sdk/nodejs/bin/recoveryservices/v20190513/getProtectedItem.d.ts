import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProtectedItem(args: GetProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectedItemResult>;
export interface GetProtectedItemArgs {
    /**
     * Container name associated with the backed up item.
     */
    readonly containerName: string;
    /**
     * Fabric name associated with the backed up item.
     */
    readonly fabricName: string;
    /**
     * OData filter options.
     */
    readonly filter?: string;
    /**
     * Backed up item name whose details are to be fetched.
     */
    readonly protectedItemName: string;
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
 * Base class for backup items.
 */
export interface GetProtectedItemResult {
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
     * ProtectedItemResource properties
     */
    readonly properties: outputs.recoveryservices.v20190513.ProtectedItemResponse;
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
