// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190510

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDeploymentAtManagementGroupScope(ctx *pulumi.Context, args *LookupDeploymentAtManagementGroupScopeArgs, opts ...pulumi.InvokeOption) (*LookupDeploymentAtManagementGroupScopeResult, error) {
	var rv LookupDeploymentAtManagementGroupScopeResult
	err := ctx.Invoke("azure-nextgen:management/v20190510:getDeploymentAtManagementGroupScope", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDeploymentAtManagementGroupScopeArgs struct {
	// The name of the deployment.
	DeploymentName string `pulumi:"deploymentName"`
	// The management group ID.
	GroupId string `pulumi:"groupId"`
}

// Deployment information.
type LookupDeploymentAtManagementGroupScopeResult struct {
	// The ID of the deployment.
	Id string `pulumi:"id"`
	// the location of the deployment.
	Location *string `pulumi:"location"`
	// The name of the deployment.
	Name string `pulumi:"name"`
	// Deployment properties.
	Properties DeploymentPropertiesExtendedResponse `pulumi:"properties"`
	// The type of the deployment.
	Type string `pulumi:"type"`
}
