import * as pulumi from "@pulumi/pulumi";
export declare function getExperiment(args: GetExperimentArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentResult>;
export interface GetExperimentArgs {
    /**
     * The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly experimentName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly workspaceName: string;
}
/**
 * Experiment information.
 */
export interface GetExperimentResult {
    /**
     * Time when the Experiment was created.
     */
    readonly creationTime: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioned state of the experiment
     */
    readonly provisioningState: string;
    /**
     * The time at which the experiment entered its current provisioning state.
     */
    readonly provisioningStateTransitionTime: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
