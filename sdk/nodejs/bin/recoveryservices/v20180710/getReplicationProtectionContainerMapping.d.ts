import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationProtectionContainerMapping(args: GetReplicationProtectionContainerMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationProtectionContainerMappingResult>;
export interface GetReplicationProtectionContainerMappingArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: string;
    /**
     * Protection Container mapping name.
     */
    readonly mappingName: string;
    /**
     * Protection container name.
     */
    readonly protectionContainerName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: string;
}
/**
 * Protection container mapping object.
 */
export interface GetReplicationProtectionContainerMappingResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The custom data.
     */
    readonly properties: outputs.recoveryservices.v20180710.ProtectionContainerMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
