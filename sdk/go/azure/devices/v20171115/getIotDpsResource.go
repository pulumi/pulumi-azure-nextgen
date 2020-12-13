// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171115

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIotDpsResource(ctx *pulumi.Context, args *LookupIotDpsResourceArgs, opts ...pulumi.InvokeOption) (*LookupIotDpsResourceResult, error) {
	var rv LookupIotDpsResourceResult
	err := ctx.Invoke("azure-nextgen:devices/v20171115:getIotDpsResource", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIotDpsResourceArgs struct {
	// Name of the provisioning service to retrieve.
	ProvisioningServiceName string `pulumi:"provisioningServiceName"`
	// Resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The description of the provisioning service.
type LookupIotDpsResourceResult struct {
	// The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
	Etag *string `pulumi:"etag"`
	// The resource identifier.
	Id string `pulumi:"id"`
	// The resource location.
	Location string `pulumi:"location"`
	// The resource name.
	Name string `pulumi:"name"`
	// Service specific properties for a provisioning service
	Properties IotDpsPropertiesDescriptionResponse `pulumi:"properties"`
	// SKU info for a provisioning service.
	Sku IotDpsSkuInfoResponse `pulumi:"sku"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The resource type.
	Type string `pulumi:"type"`
}
