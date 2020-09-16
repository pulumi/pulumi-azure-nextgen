import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getMachineLearningCompute(args: GetMachineLearningComputeArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineLearningComputeResult>;
export interface GetMachineLearningComputeArgs {
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
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export interface GetMachineLearningComputeResult {
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.machinelearningservices.v20200101.IdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Compute properties
     */
    readonly properties: outputs.machinelearningservices.v20200101.ComputeResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: outputs.machinelearningservices.v20200101.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
