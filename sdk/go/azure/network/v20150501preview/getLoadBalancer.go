// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupLoadBalancer(ctx *pulumi.Context, args *LookupLoadBalancerArgs, opts ...pulumi.InvokeOption) (*LookupLoadBalancerResult, error) {
	var rv LookupLoadBalancerResult
	err := ctx.Invoke("azure-nextgen:network/v20150501preview:getLoadBalancer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupLoadBalancerArgs struct {
	// The name of the loadBalancer.
	LoadBalancerName string `pulumi:"loadBalancerName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// LoadBalancer resource
type LookupLoadBalancerResult struct {
	// Gets or sets Pools of backend IP addresses
	BackendAddressPools []BackendAddressPoolResponse `pulumi:"backendAddressPools"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations []FrontendIpConfigurationResponse `pulumi:"frontendIPConfigurations"`
	// Resource Id
	Id string `pulumi:"id"`
	// Gets or sets inbound NAT pools
	InboundNatPools []InboundNatPoolResponse `pulumi:"inboundNatPools"`
	// Gets or sets list of inbound rules
	InboundNatRules []InboundNatRuleResponse `pulumi:"inboundNatRules"`
	// Gets or sets load balancing rules
	LoadBalancingRules []LoadBalancingRuleResponse `pulumi:"loadBalancingRules"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Gets or sets outbound NAT rules
	OutboundNatRules []OutboundNatRuleResponse `pulumi:"outboundNatRules"`
	// Gets or sets list of Load balancer probes
	Probes []ProbeResponse `pulumi:"probes"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
