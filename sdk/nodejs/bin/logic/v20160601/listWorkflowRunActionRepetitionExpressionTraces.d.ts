import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWorkflowRunActionRepetitionExpressionTraces(args: ListWorkflowRunActionRepetitionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionRepetitionExpressionTracesResult>;
export interface ListWorkflowRunActionRepetitionExpressionTracesArgs {
    /**
     * The workflow action name.
     */
    readonly actionName: string;
    /**
     * The workflow repetition.
     */
    readonly repetitionName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The workflow run name.
     */
    readonly runName: string;
    /**
     * The workflow name.
     */
    readonly workflowName: string;
}
export interface ListWorkflowRunActionRepetitionExpressionTracesResult {
    readonly inputs?: outputs.logic.v20160601.ExpressionRootResponse[];
}
