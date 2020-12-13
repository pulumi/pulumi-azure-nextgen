// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listWorkflowRunActionExpressionTraces(args: ListWorkflowRunActionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionExpressionTracesResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/v20190501:listWorkflowRunActionExpressionTraces", {
        "actionName": args.actionName,
        "resourceGroupName": args.resourceGroupName,
        "runName": args.runName,
        "workflowName": args.workflowName,
    }, opts);
}

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
