import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
export interface GetClusterArgs {
    /**
     * Name of the cluster in the private cloud
     */
    readonly clusterName: string;
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * A cluster resource
 */
export interface GetClusterResult {
    /**
     * The identity
     */
    readonly clusterId: number;
    /**
     * The cluster size
     */
    readonly clusterSize: number;
    /**
     * The hosts
     */
    readonly hosts: string[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: string;
    /**
     * The cluster SKU
     */
    readonly sku: outputs.avs.v20200320.SkuResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
