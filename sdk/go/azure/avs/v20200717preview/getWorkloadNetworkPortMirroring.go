// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200717preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWorkloadNetworkPortMirroring(ctx *pulumi.Context, args *LookupWorkloadNetworkPortMirroringArgs, opts ...pulumi.InvokeOption) (*LookupWorkloadNetworkPortMirroringResult, error) {
	var rv LookupWorkloadNetworkPortMirroringResult
	err := ctx.Invoke("azure-nextgen:avs/v20200717preview:getWorkloadNetworkPortMirroring", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWorkloadNetworkPortMirroringArgs struct {
	// NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name
	PortMirroringId string `pulumi:"portMirroringId"`
	// Name of the private cloud
	PrivateCloudName string `pulumi:"privateCloudName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// NSX Port Mirroring
type LookupWorkloadNetworkPortMirroringResult struct {
	// Destination VM Group.
	Destination *string `pulumi:"destination"`
	// Direction of port mirroring profile.
	Direction *string `pulumi:"direction"`
	// Display name of the port mirroring profile.
	DisplayName *string `pulumi:"displayName"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state
	ProvisioningState string `pulumi:"provisioningState"`
	// NSX revision number.
	Revision *int `pulumi:"revision"`
	// Source VM Group.
	Source *string `pulumi:"source"`
	// Port Mirroring Status.
	Status string `pulumi:"status"`
	// Resource type.
	Type string `pulumi:"type"`
}