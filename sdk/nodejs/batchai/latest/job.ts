// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Information about a Job.
 * Latest API Version: 2018-05-01.
 */
export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:batchai/latest:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * Caffe2 job settings.
     */
    public readonly caffe2Settings!: pulumi.Output<outputs.batchai.latest.Caffe2SettingsResponse | undefined>;
    /**
     * Caffe job settings.
     */
    public readonly caffeSettings!: pulumi.Output<outputs.batchai.latest.CaffeSettingsResponse | undefined>;
    /**
     * Chainer job settings.
     */
    public readonly chainerSettings!: pulumi.Output<outputs.batchai.latest.ChainerSettingsResponse | undefined>;
    /**
     * Resource ID of the cluster associated with the job.
     */
    public readonly cluster!: pulumi.Output<outputs.batchai.latest.ResourceIdResponse | undefined>;
    /**
     * CNTK (aka Microsoft Cognitive Toolkit) job settings.
     */
    public readonly cntkSettings!: pulumi.Output<outputs.batchai.latest.CNTKsettingsResponse | undefined>;
    /**
     * Constraints associated with the Job.
     */
    public readonly constraints!: pulumi.Output<outputs.batchai.latest.JobPropertiesResponseConstraints | undefined>;
    /**
     * If the container was downloaded as part of cluster setup then the same container image will be used. If not provided, the job will run on the VM.
     */
    public readonly containerSettings!: pulumi.Output<outputs.batchai.latest.ContainerSettingsResponse | undefined>;
    /**
     * The creation time of the job.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Custom MPI job settings.
     */
    public readonly customMpiSettings!: pulumi.Output<outputs.batchai.latest.CustomMpiSettingsResponse | undefined>;
    /**
     * Custom tool kit job settings.
     */
    public readonly customToolkitSettings!: pulumi.Output<outputs.batchai.latest.CustomToolkitSettingsResponse | undefined>;
    /**
     * A collection of user defined environment variables to be setup for the job.
     */
    public readonly environmentVariables!: pulumi.Output<outputs.batchai.latest.EnvironmentVariableResponse[] | undefined>;
    /**
     * Information about the execution of a job.
     */
    public /*out*/ readonly executionInfo!: pulumi.Output<outputs.batchai.latest.JobPropertiesResponseExecutionInfo | undefined>;
    /**
     * The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job.
     */
    public /*out*/ readonly executionState!: pulumi.Output<string>;
    /**
     * The time at which the job entered its current execution state.
     */
    public /*out*/ readonly executionStateTransitionTime!: pulumi.Output<string>;
    /**
     * Specifies the settings for Horovod job.
     */
    public readonly horovodSettings!: pulumi.Output<outputs.batchai.latest.HorovodSettingsResponse | undefined>;
    /**
     * A list of input directories for the job.
     */
    public readonly inputDirectories!: pulumi.Output<outputs.batchai.latest.InputDirectoryResponse[] | undefined>;
    /**
     * A segment of job's output directories path created by Batch AI. Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem.
     */
    public /*out*/ readonly jobOutputDirectoryPathSegment!: pulumi.Output<string>;
    /**
     * The specified actions will run on all the nodes that are part of the job
     */
    public readonly jobPreparation!: pulumi.Output<outputs.batchai.latest.JobPreparationResponse | undefined>;
    /**
     * Collection of mount volumes available to the job during execution. These volumes are mounted before the job execution and unmounted after the job completion. The volumes are mounted at location specified by $AZ_BATCHAI_JOB_MOUNT_ROOT environment variable.
     */
    public readonly mountVolumes!: pulumi.Output<outputs.batchai.latest.MountVolumesResponse | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The job will be gang scheduled on that many compute nodes
     */
    public readonly nodeCount!: pulumi.Output<number | undefined>;
    /**
     * A list of output directories for the job.
     */
    public readonly outputDirectories!: pulumi.Output<outputs.batchai.latest.OutputDirectoryResponse[] | undefined>;
    /**
     * The provisioned state of the Batch AI job
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The time at which the job entered its current provisioning state.
     */
    public /*out*/ readonly provisioningStateTransitionTime!: pulumi.Output<string>;
    /**
     * pyTorch job settings.
     */
    public readonly pyTorchSettings!: pulumi.Output<outputs.batchai.latest.PyTorchSettingsResponse | undefined>;
    /**
     * Scheduling priority associated with the job.
     */
    public readonly schedulingPriority!: pulumi.Output<string | undefined>;
    /**
     * A collection of user defined environment variables with secret values to be setup for the job. Server will never report values of these variables back.
     */
    public readonly secrets!: pulumi.Output<outputs.batchai.latest.EnvironmentVariableWithSecretValueResponse[] | undefined>;
    /**
     * The path where the Batch AI service stores stdout, stderror and execution log of the job.
     */
    public readonly stdOutErrPathPrefix!: pulumi.Output<string | undefined>;
    /**
     * TensorFlow job settings.
     */
    public readonly tensorFlowSettings!: pulumi.Output<outputs.batchai.latest.TensorFlowSettingsResponse | undefined>;
    /**
     * Possible values are: cntk, tensorflow, caffe, caffe2, chainer, pytorch, custom, custommpi, horovod.
     */
    public /*out*/ readonly toolType!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.cluster === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'cluster'");
            }
            if ((!args || args.experimentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'experimentName'");
            }
            if ((!args || args.jobName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'jobName'");
            }
            if ((!args || args.nodeCount === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'nodeCount'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.stdOutErrPathPrefix === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'stdOutErrPathPrefix'");
            }
            if ((!args || args.workspaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'workspaceName'");
            }
            inputs["caffe2Settings"] = args ? args.caffe2Settings : undefined;
            inputs["caffeSettings"] = args ? args.caffeSettings : undefined;
            inputs["chainerSettings"] = args ? args.chainerSettings : undefined;
            inputs["cluster"] = args ? args.cluster : undefined;
            inputs["cntkSettings"] = args ? args.cntkSettings : undefined;
            inputs["constraints"] = args ? args.constraints : undefined;
            inputs["containerSettings"] = args ? args.containerSettings : undefined;
            inputs["customMpiSettings"] = args ? args.customMpiSettings : undefined;
            inputs["customToolkitSettings"] = args ? args.customToolkitSettings : undefined;
            inputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            inputs["experimentName"] = args ? args.experimentName : undefined;
            inputs["horovodSettings"] = args ? args.horovodSettings : undefined;
            inputs["inputDirectories"] = args ? args.inputDirectories : undefined;
            inputs["jobName"] = args ? args.jobName : undefined;
            inputs["jobPreparation"] = args ? args.jobPreparation : undefined;
            inputs["mountVolumes"] = args ? args.mountVolumes : undefined;
            inputs["nodeCount"] = args ? args.nodeCount : undefined;
            inputs["outputDirectories"] = args ? args.outputDirectories : undefined;
            inputs["pyTorchSettings"] = args ? args.pyTorchSettings : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["schedulingPriority"] = args ? args.schedulingPriority : undefined;
            inputs["secrets"] = args ? args.secrets : undefined;
            inputs["stdOutErrPathPrefix"] = args ? args.stdOutErrPathPrefix : undefined;
            inputs["tensorFlowSettings"] = args ? args.tensorFlowSettings : undefined;
            inputs["workspaceName"] = args ? args.workspaceName : undefined;
            inputs["creationTime"] = undefined /*out*/;
            inputs["executionInfo"] = undefined /*out*/;
            inputs["executionState"] = undefined /*out*/;
            inputs["executionStateTransitionTime"] = undefined /*out*/;
            inputs["jobOutputDirectoryPathSegment"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["provisioningStateTransitionTime"] = undefined /*out*/;
            inputs["toolType"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["caffe2Settings"] = undefined /*out*/;
            inputs["caffeSettings"] = undefined /*out*/;
            inputs["chainerSettings"] = undefined /*out*/;
            inputs["cluster"] = undefined /*out*/;
            inputs["cntkSettings"] = undefined /*out*/;
            inputs["constraints"] = undefined /*out*/;
            inputs["containerSettings"] = undefined /*out*/;
            inputs["creationTime"] = undefined /*out*/;
            inputs["customMpiSettings"] = undefined /*out*/;
            inputs["customToolkitSettings"] = undefined /*out*/;
            inputs["environmentVariables"] = undefined /*out*/;
            inputs["executionInfo"] = undefined /*out*/;
            inputs["executionState"] = undefined /*out*/;
            inputs["executionStateTransitionTime"] = undefined /*out*/;
            inputs["horovodSettings"] = undefined /*out*/;
            inputs["inputDirectories"] = undefined /*out*/;
            inputs["jobOutputDirectoryPathSegment"] = undefined /*out*/;
            inputs["jobPreparation"] = undefined /*out*/;
            inputs["mountVolumes"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["nodeCount"] = undefined /*out*/;
            inputs["outputDirectories"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["provisioningStateTransitionTime"] = undefined /*out*/;
            inputs["pyTorchSettings"] = undefined /*out*/;
            inputs["schedulingPriority"] = undefined /*out*/;
            inputs["secrets"] = undefined /*out*/;
            inputs["stdOutErrPathPrefix"] = undefined /*out*/;
            inputs["tensorFlowSettings"] = undefined /*out*/;
            inputs["toolType"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:batchai/v20180501:Job" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Job.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * Settings for Caffe2 job.
     */
    readonly caffe2Settings?: pulumi.Input<inputs.batchai.latest.Caffe2Settings>;
    /**
     * Settings for Caffe job.
     */
    readonly caffeSettings?: pulumi.Input<inputs.batchai.latest.CaffeSettings>;
    /**
     * Settings for Chainer job.
     */
    readonly chainerSettings?: pulumi.Input<inputs.batchai.latest.ChainerSettings>;
    /**
     * Resource ID of the cluster on which this job will run.
     */
    readonly cluster: pulumi.Input<inputs.batchai.latest.ResourceId>;
    /**
     * Settings for CNTK (aka Microsoft Cognitive Toolkit) job.
     */
    readonly cntkSettings?: pulumi.Input<inputs.batchai.latest.CNTKsettings>;
    /**
     * Constraints associated with the Job.
     */
    readonly constraints?: pulumi.Input<inputs.batchai.latest.JobBasePropertiesConstraints>;
    /**
     * Docker container settings for the job. If not provided, the job will run directly on the node.
     */
    readonly containerSettings?: pulumi.Input<inputs.batchai.latest.ContainerSettings>;
    /**
     * Settings for custom MPI job.
     */
    readonly customMpiSettings?: pulumi.Input<inputs.batchai.latest.CustomMpiSettings>;
    /**
     * Settings for custom tool kit job.
     */
    readonly customToolkitSettings?: pulumi.Input<inputs.batchai.latest.CustomToolkitSettings>;
    /**
     * A list of user defined environment variables which will be setup for the job.
     */
    readonly environmentVariables?: pulumi.Input<pulumi.Input<inputs.batchai.latest.EnvironmentVariable>[]>;
    /**
     * The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly experimentName: pulumi.Input<string>;
    /**
     * Settings for Horovod job.
     */
    readonly horovodSettings?: pulumi.Input<inputs.batchai.latest.HorovodSettings>;
    /**
     * A list of input directories for the job.
     */
    readonly inputDirectories?: pulumi.Input<pulumi.Input<inputs.batchai.latest.InputDirectory>[]>;
    /**
     * The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * A command line to be executed on each node allocated for the job before tool kit is launched.
     */
    readonly jobPreparation?: pulumi.Input<inputs.batchai.latest.JobPreparation>;
    /**
     * Information on mount volumes to be used by the job. These volumes will be mounted before the job execution and will be unmounted after the job completion. The volumes will be mounted at location specified by $AZ_BATCHAI_JOB_MOUNT_ROOT environment variable.
     */
    readonly mountVolumes?: pulumi.Input<inputs.batchai.latest.MountVolumes>;
    /**
     * Number of compute nodes to run the job on. The job will be gang scheduled on that many compute nodes.
     */
    readonly nodeCount: pulumi.Input<number>;
    /**
     * A list of output directories for the job.
     */
    readonly outputDirectories?: pulumi.Input<pulumi.Input<inputs.batchai.latest.OutputDirectory>[]>;
    /**
     * Settings for pyTorch job.
     */
    readonly pyTorchSettings?: pulumi.Input<inputs.batchai.latest.PyTorchSettings>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Scheduling priority associated with the job. Possible values: low, normal, high.
     */
    readonly schedulingPriority?: pulumi.Input<string | enums.batchai.latest.JobPriority>;
    /**
     * A list of user defined environment variables with secret values which will be setup for the job. Server will never report values of these variables back.
     */
    readonly secrets?: pulumi.Input<pulumi.Input<inputs.batchai.latest.EnvironmentVariableWithSecretValue>[]>;
    /**
     * The path where the Batch AI service will store stdout, stderror and execution log of the job.
     */
    readonly stdOutErrPathPrefix: pulumi.Input<string>;
    /**
     * Settings for Tensor Flow job.
     */
    readonly tensorFlowSettings?: pulumi.Input<inputs.batchai.latest.TensorFlowSettings>;
    /**
     * The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly workspaceName: pulumi.Input<string>;
}
