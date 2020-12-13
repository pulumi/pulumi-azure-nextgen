// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPacketCapture(ctx *pulumi.Context, args *LookupPacketCaptureArgs, opts ...pulumi.InvokeOption) (*LookupPacketCaptureResult, error) {
	var rv LookupPacketCaptureResult
	err := ctx.Invoke("azure-nextgen:network/v20180801:getPacketCapture", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPacketCaptureArgs struct {
	// The name of the network watcher.
	NetworkWatcherName string `pulumi:"networkWatcherName"`
	// The name of the packet capture session.
	PacketCaptureName string `pulumi:"packetCaptureName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Information about packet capture session.
type LookupPacketCaptureResult struct {
	// Number of bytes captured per packet, the remaining bytes are truncated.
	BytesToCapturePerPacket *int                          `pulumi:"bytesToCapturePerPacket"`
	Etag                    *string                       `pulumi:"etag"`
	Filters                 []PacketCaptureFilterResponse `pulumi:"filters"`
	// ID of the packet capture operation.
	Id string `pulumi:"id"`
	// Name of the packet capture session.
	Name string `pulumi:"name"`
	// The provisioning state of the packet capture session.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Describes the storage location for a packet capture session.
	StorageLocation PacketCaptureStorageLocationResponse `pulumi:"storageLocation"`
	// The ID of the targeted resource, only VM is currently supported.
	Target string `pulumi:"target"`
	// Maximum duration of the capture session in seconds.
	TimeLimitInSeconds *int `pulumi:"timeLimitInSeconds"`
	// Maximum size of the capture output.
	TotalBytesPerSession *int `pulumi:"totalBytesPerSession"`
}
