import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplication(args: GetReplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationResult>;
export interface GetReplicationArgs {
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the replication.
     */
    readonly replicationName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * An object that represents a replication for a container registry.
 */
export interface GetReplicationResult {
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the replication at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The status of the replication at the time the operation was called.
     */
    readonly status: outputs.containerregistry.v20190501.StatusResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
