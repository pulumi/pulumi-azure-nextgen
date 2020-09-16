import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listMachineLearningComputeNodes(args: ListMachineLearningComputeNodesArgs, opts?: pulumi.InvokeOptions): Promise<ListMachineLearningComputeNodesResult>;
export interface ListMachineLearningComputeNodesArgs {
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
 * Compute node information related to a AmlCompute.
 */
export interface ListMachineLearningComputeNodesResult {
    /**
     * The type of compute
     */
    readonly computeType: string;
    /**
     * The continuation token.
     */
    readonly nextLink: string;
    /**
     * The collection of returned AmlCompute nodes details.
     */
    readonly nodes: outputs.machinelearningservices.v20190501.AmlComputeNodeInformationResponse[];
}
