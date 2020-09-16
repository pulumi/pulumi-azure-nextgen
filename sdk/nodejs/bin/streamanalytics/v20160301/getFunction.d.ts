import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFunction(args: GetFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionResult>;
export interface GetFunctionArgs {
    /**
     * The name of the function.
     */
    readonly functionName: string;
    /**
     * The name of the streaming job.
     */
    readonly jobName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
}
/**
 * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
 */
export interface GetFunctionResult {
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * The properties that are associated with a function.
     */
    readonly properties: outputs.streamanalytics.v20160301.FunctionPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
