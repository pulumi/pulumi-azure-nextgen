import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationStorageClassificationMapping(args: GetReplicationStorageClassificationMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationStorageClassificationMappingResult>;
export interface GetReplicationStorageClassificationMappingArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: string;
    /**
     * Storage classification mapping name.
     */
    readonly storageClassificationMappingName: string;
    /**
     * Storage classification name.
     */
    readonly storageClassificationName: string;
}
/**
 * Storage mapping object.
 */
export interface GetReplicationStorageClassificationMappingResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Properties of the storage mapping object.
     */
    readonly properties: outputs.recoveryservices.v20180710.StorageClassificationMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
