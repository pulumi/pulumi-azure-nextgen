import * as pulumi from "@pulumi/pulumi";
export declare function getDataSet(args: GetDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSetResult>;
export interface GetDataSetArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The name of the dataSet.
     */
    readonly dataSetName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share.
     */
    readonly shareName: string;
}
/**
 * A DataSet data transfer object.
 */
export interface GetDataSetResult {
    /**
     * Kind of data set.
     */
    readonly kind: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
