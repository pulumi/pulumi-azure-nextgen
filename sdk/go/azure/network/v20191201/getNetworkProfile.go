// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNetworkProfile(ctx *pulumi.Context, args *LookupNetworkProfileArgs, opts ...pulumi.InvokeOption) (*LookupNetworkProfileResult, error) {
	var rv LookupNetworkProfileResult
	err := ctx.Invoke("azure-nextgen:network/v20191201:getNetworkProfile", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNetworkProfileArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the public IP prefix.
	NetworkProfileName string `pulumi:"networkProfileName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Network profile resource.
type LookupNetworkProfileResult struct {
	// List of chid container network interface configurations.
	ContainerNetworkInterfaceConfigurations []ContainerNetworkInterfaceConfigurationResponse `pulumi:"containerNetworkInterfaceConfigurations"`
	// List of child container network interfaces.
	ContainerNetworkInterfaces []ContainerNetworkInterfaceResponse `pulumi:"containerNetworkInterfaces"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the network profile resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the network profile resource.
	ResourceGuid string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
