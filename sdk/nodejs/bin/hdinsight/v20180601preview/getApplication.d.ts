import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult>;
export interface GetApplicationArgs {
    /**
     * The constant value for the application name.
     */
    readonly applicationName: string;
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
 * The HDInsight cluster application
 */
export interface GetApplicationResult {
    /**
     * The ETag for the application
     */
    readonly etag?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the application.
     */
    readonly properties: outputs.hdinsight.v20180601preview.ApplicationPropertiesResponse;
    /**
     * The tags for the application.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
