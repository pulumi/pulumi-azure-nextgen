import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
export interface GetClusterArgs {
    /**
     * The name of the cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The HDInsight cluster.
 */
export interface GetClusterResult {
    /**
     * The ETag for the resource
     */
    readonly etag?: string;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity?: outputs.hdinsight.v20180601preview.ClusterIdentityResponse;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the cluster.
     */
    readonly properties: outputs.hdinsight.v20180601preview.ClusterGetPropertiesResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
