// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplicationType(ctx *pulumi.Context, args *LookupApplicationTypeArgs, opts ...pulumi.InvokeOption) (*LookupApplicationTypeResult, error) {
	var rv LookupApplicationTypeResult
	err := ctx.Invoke("azure-nextgen:servicefabric/v20191101preview:getApplicationType", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationTypeArgs struct {
	// The name of the application type name resource.
	ApplicationTypeName string `pulumi:"applicationTypeName"`
	// The name of the cluster resource.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The application type name resource
type LookupApplicationTypeResult struct {
	// Azure resource etag.
	Etag string `pulumi:"etag"`
	// Azure resource identifier.
	Id string `pulumi:"id"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location *string `pulumi:"location"`
	// Azure resource name.
	Name string `pulumi:"name"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type.
	Type string `pulumi:"type"`
}
