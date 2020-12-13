// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupTask(ctx *pulumi.Context, args *LookupTaskArgs, opts ...pulumi.InvokeOption) (*LookupTaskResult, error) {
	var rv LookupTaskResult
	err := ctx.Invoke("azure-nextgen:datamigration/latest:getTask", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupTaskArgs struct {
	// Expand the response
	Expand *string `pulumi:"expand"`
	// Name of the resource group
	GroupName string `pulumi:"groupName"`
	// Name of the project
	ProjectName string `pulumi:"projectName"`
	// Name of the service
	ServiceName string `pulumi:"serviceName"`
	// Name of the Task
	TaskName string `pulumi:"taskName"`
}

// A task resource
type LookupTaskResult struct {
	// HTTP strong entity tag value. This is ignored if submitted.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Custom task properties
	Properties interface{} `pulumi:"properties"`
	// Resource type.
	Type string `pulumi:"type"`
}
