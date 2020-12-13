// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A job step.
 */
export class JobStep extends pulumi.CustomResource {
    /**
     * Get an existing JobStep resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobStep {
        return new JobStep(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sql/v20200801preview:JobStep';

    /**
     * Returns true if the given object is an instance of JobStep.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobStep {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobStep.__pulumiType;
    }

    /**
     * The action payload of the job step.
     */
    public readonly action!: pulumi.Output<outputs.sql.v20200801preview.JobStepActionResponse>;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    public readonly credential!: pulumi.Output<string>;
    /**
     * Execution options for the job step.
     */
    public readonly executionOptions!: pulumi.Output<outputs.sql.v20200801preview.JobStepExecutionOptionsResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Output destination properties of the job step.
     */
    public readonly output!: pulumi.Output<outputs.sql.v20200801preview.JobStepOutputResponse | undefined>;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    public readonly stepId!: pulumi.Output<number | undefined>;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    public readonly targetGroup!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobStep resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobStepArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.action === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.credential === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'credential'");
            }
            if ((!args || args.jobAgentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.jobName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'jobName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.stepName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'stepName'");
            }
            if ((!args || args.targetGroup === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'targetGroup'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["credential"] = args ? args.credential : undefined;
            inputs["executionOptions"] = args ? args.executionOptions : undefined;
            inputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            inputs["jobName"] = args ? args.jobName : undefined;
            inputs["output"] = args ? args.output : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["stepId"] = args ? args.stepId : undefined;
            inputs["stepName"] = args ? args.stepName : undefined;
            inputs["targetGroup"] = args ? args.targetGroup : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["action"] = undefined /*out*/;
            inputs["credential"] = undefined /*out*/;
            inputs["executionOptions"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["output"] = undefined /*out*/;
            inputs["stepId"] = undefined /*out*/;
            inputs["targetGroup"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:sql/v20170301preview:JobStep" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(JobStep.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobStep resource.
 */
export interface JobStepArgs {
    /**
     * The action payload of the job step.
     */
    readonly action: pulumi.Input<inputs.sql.v20200801preview.JobStepAction>;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    readonly credential: pulumi.Input<string>;
    /**
     * Execution options for the job step.
     */
    readonly executionOptions?: pulumi.Input<inputs.sql.v20200801preview.JobStepExecutionOptions>;
    /**
     * The name of the job agent.
     */
    readonly jobAgentName: pulumi.Input<string>;
    /**
     * The name of the job.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * Output destination properties of the job step.
     */
    readonly output?: pulumi.Input<inputs.sql.v20200801preview.JobStepOutput>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    readonly stepId?: pulumi.Input<number>;
    /**
     * The name of the job step.
     */
    readonly stepName: pulumi.Input<string>;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    readonly targetGroup: pulumi.Input<string>;
}
