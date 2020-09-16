import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWorkflowRunActionExpressionTraces(args: ListWorkflowRunActionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionExpressionTracesResult>;
export interface ListWorkflowRunActionExpressionTracesArgs {
    /**
     * The workflow action name.
     */
    readonly actionName: string;
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
/**
 * The expression traces.
 */
export interface ListWorkflowRunActionExpressionTracesResult {
    readonly inputs?: outputs.logic.v20190501.ExpressionRootResponse[];
}
