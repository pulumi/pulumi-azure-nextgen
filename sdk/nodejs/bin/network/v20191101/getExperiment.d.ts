import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExperiment(args: GetExperimentArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentResult>;
export interface GetExperimentArgs {
    /**
     * The Experiment identifier associated with the Experiment
     */
    readonly experimentName: string;
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    readonly profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Defines the properties of an Experiment
 */
export interface GetExperimentResult {
    /**
     * The description of the details or intents of the Experiment
     */
    readonly description?: string;
    /**
     * The state of the Experiment
     */
    readonly enabledState?: string;
    /**
     * The endpoint A of an experiment
     */
    readonly endpointA?: outputs.network.v20191101.EndpointResponse;
    /**
     * The endpoint B of an experiment
     */
    readonly endpointB?: outputs.network.v20191101.EndpointResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource status.
     */
    readonly resourceState?: string;
    /**
     * The uri to the Script used in the Experiment
     */
    readonly scriptFileUri: string;
    /**
     * The description of Experiment status from the server side
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
