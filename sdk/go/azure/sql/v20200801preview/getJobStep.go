// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupJobStep(ctx *pulumi.Context, args *LookupJobStepArgs, opts ...pulumi.InvokeOption) (*LookupJobStepResult, error) {
	var rv LookupJobStepResult
	err := ctx.Invoke("azure-nextgen:sql/v20200801preview:getJobStep", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupJobStepArgs struct {
	// The name of the job agent.
	JobAgentName string `pulumi:"jobAgentName"`
	// The name of the job.
	JobName string `pulumi:"jobName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The name of the job step.
	StepName string `pulumi:"stepName"`
}

// A job step.
type LookupJobStepResult struct {
	// The action payload of the job step.
	Action JobStepActionResponse `pulumi:"action"`
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential string `pulumi:"credential"`
	// Execution options for the job step.
	ExecutionOptions *JobStepExecutionOptionsResponse `pulumi:"executionOptions"`
	// Resource name.
	Name string `pulumi:"name"`
	// Output destination properties of the job step.
	Output *JobStepOutputResponse `pulumi:"output"`
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId *int `pulumi:"stepId"`
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup string `pulumi:"targetGroup"`
	// Resource type.
	Type string `pulumi:"type"`
}
