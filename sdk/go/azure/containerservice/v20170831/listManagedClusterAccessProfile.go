// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170831

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListManagedClusterAccessProfile(ctx *pulumi.Context, args *ListManagedClusterAccessProfileArgs, opts ...pulumi.InvokeOption) (*ListManagedClusterAccessProfileResult, error) {
	var rv ListManagedClusterAccessProfileResult
	err := ctx.Invoke("azure-nextgen:containerservice/v20170831:listManagedClusterAccessProfile", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListManagedClusterAccessProfileArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the managed cluster resource.
	ResourceName string `pulumi:"resourceName"`
	// The name of the role for managed cluster accessProfile resource.
	RoleName string `pulumi:"roleName"`
}

// Managed cluster Access Profile.
type ListManagedClusterAccessProfileResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Base64-encoded Kubernetes configuration file.
	KubeConfig *string `pulumi:"kubeConfig"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
