// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNetworkSecurityGroup(ctx *pulumi.Context, args *LookupNetworkSecurityGroupArgs, opts ...pulumi.InvokeOption) (*LookupNetworkSecurityGroupResult, error) {
	var rv LookupNetworkSecurityGroupResult
	err := ctx.Invoke("azure-nextgen:network/v20190801:getNetworkSecurityGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNetworkSecurityGroupArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the network security group.
	NetworkSecurityGroupName string `pulumi:"networkSecurityGroupName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// NetworkSecurityGroup resource.
type LookupNetworkSecurityGroupResult struct {
	// The default security rules of network security group.
	DefaultSecurityRules []SecurityRuleResponse `pulumi:"defaultSecurityRules"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// A collection of references to network interfaces.
	NetworkInterfaces []NetworkInterfaceResponse `pulumi:"networkInterfaces"`
	// The provisioning state of the network security group resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the network security group resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// A collection of security rules of the network security group.
	SecurityRules []SecurityRuleResponse `pulumi:"securityRules"`
	// A collection of references to subnets.
	Subnets []SubnetResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
