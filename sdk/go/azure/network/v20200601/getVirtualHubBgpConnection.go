// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualHubBgpConnection(ctx *pulumi.Context, args *LookupVirtualHubBgpConnectionArgs, opts ...pulumi.InvokeOption) (*LookupVirtualHubBgpConnectionResult, error) {
	var rv LookupVirtualHubBgpConnectionResult
	err := ctx.Invoke("azure-nextgen:network/v20200601:getVirtualHubBgpConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualHubBgpConnectionArgs struct {
	// The name of the connection.
	ConnectionName string `pulumi:"connectionName"`
	// The resource group name of the VirtualHub.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VirtualHub.
	VirtualHubName string `pulumi:"virtualHubName"`
}

// Virtual Appliance Site resource.
type LookupVirtualHubBgpConnectionResult struct {
	// The current state of the VirtualHub to Peer.
	ConnectionState string `pulumi:"connectionState"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Name of the connection.
	Name *string `pulumi:"name"`
	// Peer ASN.
	PeerAsn *int `pulumi:"peerAsn"`
	// Peer IP.
	PeerIp *string `pulumi:"peerIp"`
	// The provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Connection type.
	Type string `pulumi:"type"`
}
