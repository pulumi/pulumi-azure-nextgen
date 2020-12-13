// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupOrigin(ctx *pulumi.Context, args *LookupOriginArgs, opts ...pulumi.InvokeOption) (*LookupOriginResult, error) {
	var rv LookupOriginResult
	err := ctx.Invoke("azure-nextgen:cdn/v20200901:getOrigin", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupOriginArgs struct {
	// Name of the endpoint under the profile which is unique globally.
	EndpointName string `pulumi:"endpointName"`
	// Name of the origin which is unique within the endpoint.
	OriginName string `pulumi:"originName"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
type LookupOriginResult struct {
	// Origin is enabled for load balancing or not
	Enabled *bool `pulumi:"enabled"`
	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
	HostName string `pulumi:"hostName"`
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort *int `pulumi:"httpPort"`
	// The value of the HTTPS port. Must be between 1 and 65535.
	HttpsPort *int `pulumi:"httpsPort"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
	OriginHostHeader *string `pulumi:"originHostHeader"`
	// Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
	Priority *int `pulumi:"priority"`
	// The approval status for the connection to the Private Link
	PrivateEndpointStatus string `pulumi:"privateEndpointStatus"`
	// The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
	PrivateLinkAlias *string `pulumi:"privateLinkAlias"`
	// A custom message to be included in the approval request to connect to the Private Link.
	PrivateLinkApprovalMessage *string `pulumi:"privateLinkApprovalMessage"`
	// The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
	PrivateLinkLocation *string `pulumi:"privateLinkLocation"`
	// The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
	PrivateLinkResourceId *string `pulumi:"privateLinkResourceId"`
	// Provisioning status of the origin.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource status of the origin.
	ResourceState string `pulumi:"resourceState"`
	// Read only system data
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
	// Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
	Weight *int `pulumi:"weight"`
}
