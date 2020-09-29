// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200808preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupControllerDetails(ctx *pulumi.Context, args *LookupControllerDetailsArgs, opts ...pulumi.InvokeOption) (*LookupControllerDetailsResult, error) {
	var rv LookupControllerDetailsResult
	err := ctx.Invoke("azure-nextgen:delegatednetwork/v20200808preview:getControllerDetails", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupControllerDetailsArgs struct {
	// The name of the Azure Resource group of which a given DelegatedNetwork resource is part. This name must be at least 1 character in length, and no more than 90.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
	ResourceName string `pulumi:"resourceName"`
}

// Represents an instance of a DNC controller.
type LookupControllerDetailsResult struct {
	// dnc application id should be used by customer to authenticate with dnc gateway.
	DncAppId string `pulumi:"dncAppId"`
	// dnc endpoint url that customers can use to connect to
	DncEndpoint string `pulumi:"dncEndpoint"`
	// tenant id of dnc application id
	DncTenantId string `pulumi:"dncTenantId"`
	// Location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The current state of dnc controller resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource guid.
	ResourceGuid string `pulumi:"resourceGuid"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of resource.
	Type string `pulumi:"type"`
}
