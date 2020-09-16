import * as pulumi from "@pulumi/pulumi";
export declare function listMachineLearningComputeKeys(args: ListMachineLearningComputeKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListMachineLearningComputeKeysResult>;
export interface ListMachineLearningComputeKeysArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    readonly computeName: string;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: string;
}
/**
 * Secrets related to a Machine Learning compute. Might differ for every type of compute.
 */
export interface ListMachineLearningComputeKeysResult {
    /**
     * The type of compute
     */
    readonly computeType: string;
}
