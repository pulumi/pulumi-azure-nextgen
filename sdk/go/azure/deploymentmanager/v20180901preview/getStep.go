// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStep(ctx *pulumi.Context, args *LookupStepArgs, opts ...pulumi.InvokeOption) (*LookupStepResult, error) {
	var rv LookupStepResult
	err := ctx.Invoke("azure-nextgen:deploymentmanager/v20180901preview:getStep", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStepArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the deployment step.
	StepName string `pulumi:"stepName"`
}

// The resource representation of a rollout step.
type LookupStepResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The properties that define the step.
	Properties WaitStepPropertiesResponse `pulumi:"properties"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
