import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProtectionContainer(args: GetProtectionContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionContainerResult>;
export interface GetProtectionContainerArgs {
    /**
     * Name of the container whose details need to be fetched.
     */
    readonly containerName: string;
    /**
     * Name of the fabric where the container belongs.
     */
    readonly fabricName: string;
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
 * Base class for container with backup items. Containers with specific workloads are derived from this class.
 */
export interface GetProtectionContainerResult {
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
     * ProtectionContainerResource properties
     */
    readonly properties: outputs.recoveryservices.v20161201.ProtectionContainerResponse;
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
