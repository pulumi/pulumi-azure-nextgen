// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIotDpsResourcePrivateEndpointConnection(ctx *pulumi.Context, args *LookupIotDpsResourcePrivateEndpointConnectionArgs, opts ...pulumi.InvokeOption) (*LookupIotDpsResourcePrivateEndpointConnectionResult, error) {
	var rv LookupIotDpsResourcePrivateEndpointConnectionResult
	err := ctx.Invoke("azure-nextgen:devices/v20200301:getIotDpsResourcePrivateEndpointConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIotDpsResourcePrivateEndpointConnectionArgs struct {
	// The name of the private endpoint connection
	PrivateEndpointConnectionName string `pulumi:"privateEndpointConnectionName"`
	// The name of the resource group that contains the provisioning service.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the provisioning service.
	ResourceName string `pulumi:"resourceName"`
}

// The private endpoint connection of a provisioning service
type LookupIotDpsResourcePrivateEndpointConnectionResult struct {
	// The resource identifier.
	Id string `pulumi:"id"`
	// The resource name.
	Name string `pulumi:"name"`
	// The properties of a private endpoint connection
	Properties PrivateEndpointConnectionPropertiesResponse `pulumi:"properties"`
	// The resource type.
	Type string `pulumi:"type"`
}
