// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAvailabilityGroupListener(ctx *pulumi.Context, args *LookupAvailabilityGroupListenerArgs, opts ...pulumi.InvokeOption) (*LookupAvailabilityGroupListenerResult, error) {
	var rv LookupAvailabilityGroupListenerResult
	err := ctx.Invoke("azure-nextgen:sqlvirtualmachine/v20170301preview:getAvailabilityGroupListener", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAvailabilityGroupListenerArgs struct {
	// Name of the availability group listener.
	AvailabilityGroupListenerName string `pulumi:"availabilityGroupListenerName"`
	// Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the SQL virtual machine group.
	SqlVirtualMachineGroupName string `pulumi:"sqlVirtualMachineGroupName"`
}

// A SQL Server availability group listener.
type LookupAvailabilityGroupListenerResult struct {
	// Name of the availability group.
	AvailabilityGroupName *string `pulumi:"availabilityGroupName"`
	// Create a default availability group if it does not exist.
	CreateDefaultAvailabilityGroupIfNotExist *bool `pulumi:"createDefaultAvailabilityGroupIfNotExist"`
	// Resource ID.
	Id string `pulumi:"id"`
	// List of load balancer configurations for an availability group listener.
	LoadBalancerConfigurations []LoadBalancerConfigurationResponse `pulumi:"loadBalancerConfigurations"`
	// Resource name.
	Name string `pulumi:"name"`
	// Listener port.
	Port *int `pulumi:"port"`
	// Provisioning state to track the async operation status.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource type.
	Type string `pulumi:"type"`
}
