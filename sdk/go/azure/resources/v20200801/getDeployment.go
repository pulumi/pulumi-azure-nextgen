// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDeployment(ctx *pulumi.Context, args *LookupDeploymentArgs, opts ...pulumi.InvokeOption) (*LookupDeploymentResult, error) {
	var rv LookupDeploymentResult
	err := ctx.Invoke("azure-nextgen:resources/v20200801:getDeployment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDeploymentArgs struct {
	// The name of the deployment.
	DeploymentName string `pulumi:"deploymentName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Deployment information.
type LookupDeploymentResult struct {
	// The ID of the deployment.
	Id string `pulumi:"id"`
	// the location of the deployment.
	Location *string `pulumi:"location"`
	// The name of the deployment.
	Name string `pulumi:"name"`
	// Deployment properties.
	Properties DeploymentPropertiesExtendedResponse `pulumi:"properties"`
	// Deployment tags
	Tags map[string]string `pulumi:"tags"`
	// The type of the deployment.
	Type string `pulumi:"type"`
}
