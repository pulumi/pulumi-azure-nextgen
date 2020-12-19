// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200202preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupJob(ctx *pulumi.Context, args *LookupJobArgs, opts ...pulumi.InvokeOption) (*LookupJobResult, error) {
	var rv LookupJobResult
	err := ctx.Invoke("azure-nextgen:sql/v20200202preview:getJob", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupJobArgs struct {
	// The name of the job agent.
	JobAgentName string `pulumi:"jobAgentName"`
	// The name of the job to get.
	JobName string `pulumi:"jobName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// A job.
type LookupJobResult struct {
	// User-defined description of the job.
	Description *string `pulumi:"description"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Schedule properties of the job.
	Schedule *JobScheduleResponse `pulumi:"schedule"`
	// Resource type.
	Type string `pulumi:"type"`
	// The job version number.
	Version int `pulumi:"version"`
}
