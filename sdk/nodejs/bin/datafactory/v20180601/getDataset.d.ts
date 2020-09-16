import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDataset(args: GetDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetResult>;
export interface GetDatasetArgs {
    /**
     * The dataset name.
     */
    readonly datasetName: string;
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Dataset resource type.
 */
export interface GetDatasetResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Dataset properties.
     */
    readonly properties: outputs.datafactory.v20180601.DatasetResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
