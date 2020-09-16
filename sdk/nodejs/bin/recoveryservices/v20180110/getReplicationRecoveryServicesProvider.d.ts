import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationRecoveryServicesProvider(args: GetReplicationRecoveryServicesProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryServicesProviderResult>;
export interface GetReplicationRecoveryServicesProviderArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: string;
    /**
     * Recovery services provider name
     */
    readonly providerName: string;
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
 * Provider details.
 */
export interface GetReplicationRecoveryServicesProviderResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Provider properties.
     */
    readonly properties: outputs.recoveryservices.v20180110.RecoveryServicesProviderPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
