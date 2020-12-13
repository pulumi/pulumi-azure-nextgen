// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSignalR(ctx *pulumi.Context, args *LookupSignalRArgs, opts ...pulumi.InvokeOption) (*LookupSignalRResult, error) {
	var rv LookupSignalRResult
	err := ctx.Invoke("azure-nextgen:signalrservice/v20180301preview:getSignalR", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSignalRArgs struct {
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the SignalR resource.
	ResourceName string `pulumi:"resourceName"`
}

// A class represent a SignalR service resource.
type LookupSignalRResult struct {
	// The publicly accessible IP of the SignalR service.
	ExternalIP string `pulumi:"externalIP"`
	// FQDN of the SignalR service instance. Format: xxx.service.signalr.net
	HostName string `pulumi:"hostName"`
	// Prefix for the hostName of the SignalR service. Retained for future use.
	// The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
	HostNamePrefix *string `pulumi:"hostNamePrefix"`
	// Fully qualified resource Id for the resource.
	Id string `pulumi:"id"`
	// The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// Provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The publicly accessibly port of the SignalR service which is designed for browser/client side usage.
	PublicPort int `pulumi:"publicPort"`
	// The publicly accessibly port of the SignalR service which is designed for customer server side usage.
	ServerPort int `pulumi:"serverPort"`
	// SKU of the service.
	Sku *ResourceSkuResponse `pulumi:"sku"`
	// Tags of the service which is a list of key value pairs that describe the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the service - e.g. "Microsoft.SignalRService/SignalR"
	Type string `pulumi:"type"`
	// Version of the SignalR resource. Probably you need the same or higher version of client SDKs.
	Version *string `pulumi:"version"`
}
