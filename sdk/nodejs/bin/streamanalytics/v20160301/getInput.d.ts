import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getInput(args: GetInputArgs, opts?: pulumi.InvokeOptions): Promise<GetInputResult>;
export interface GetInputArgs {
    /**
     * The name of the input.
     */
    readonly inputName: string;
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
 * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
 */
export interface GetInputResult {
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
     */
    readonly properties: outputs.streamanalytics.v20160301.InputPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
