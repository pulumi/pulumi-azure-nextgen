// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDomainTopic(ctx *pulumi.Context, args *LookupDomainTopicArgs, opts ...pulumi.InvokeOption) (*LookupDomainTopicResult, error) {
	var rv LookupDomainTopicResult
	err := ctx.Invoke("azure-nextgen:eventgrid/latest:getDomainTopic", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDomainTopicArgs struct {
	// Name of the domain.
	DomainName string `pulumi:"domainName"`
	// Name of the topic.
	DomainTopicName string `pulumi:"domainTopicName"`
	// The name of the resource group within the user's subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Domain Topic.
type LookupDomainTopicResult struct {
	// Fully qualified identifier of the resource.
	Id string `pulumi:"id"`
	// Name of the resource.
	Name string `pulumi:"name"`
	// Provisioning state of the domain topic.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Type of the resource.
	Type string `pulumi:"type"`
}
