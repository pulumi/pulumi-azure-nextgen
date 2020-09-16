import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
export interface GetClusterArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The top level Log Analytics cluster resource container.
 */
export interface GetClusterResult {
    /**
     * The ID associated with the cluster.
     */
    readonly clusterId: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.operationalinsights.v20200801.IdentityResponse;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties?: outputs.operationalinsights.v20200801.KeyVaultPropertiesResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The link used to get the next page of recommendations.
     */
    readonly nextLink?: string;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: string;
    /**
     * The sku properties.
     */
    readonly sku?: outputs.operationalinsights.v20200801.ClusterSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
