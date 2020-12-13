// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupOpenIdConnectProvider(ctx *pulumi.Context, args *LookupOpenIdConnectProviderArgs, opts ...pulumi.InvokeOption) (*LookupOpenIdConnectProviderResult, error) {
	var rv LookupOpenIdConnectProviderResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20200601preview:getOpenIdConnectProvider", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupOpenIdConnectProviderArgs struct {
	// Identifier of the OpenID Connect Provider.
	Opid string `pulumi:"opid"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// OpenId Connect Provider details.
type LookupOpenIdConnectProviderResult struct {
	// Client ID of developer console which is the client application.
	ClientId string `pulumi:"clientId"`
	// Client Secret of developer console which is the client application.
	ClientSecret *string `pulumi:"clientSecret"`
	// User-friendly description of OpenID Connect Provider.
	Description *string `pulumi:"description"`
	// User-friendly OpenID Connect Provider name.
	DisplayName string `pulumi:"displayName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Metadata endpoint URI.
	MetadataEndpoint string `pulumi:"metadataEndpoint"`
	// Resource name.
	Name string `pulumi:"name"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
}
