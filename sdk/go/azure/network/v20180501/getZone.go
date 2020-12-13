// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupZone(ctx *pulumi.Context, args *LookupZoneArgs, opts ...pulumi.InvokeOption) (*LookupZoneResult, error) {
	var rv LookupZoneResult
	err := ctx.Invoke("azure-nextgen:network/v20180501:getZone", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupZoneArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the DNS zone (without a terminating dot).
	ZoneName string `pulumi:"zoneName"`
}

// Describes a DNS zone.
type LookupZoneResult struct {
	// The etag of the zone.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfRecordSets int `pulumi:"maxNumberOfRecordSets"`
	// The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfRecordsPerRecordSet int `pulumi:"maxNumberOfRecordsPerRecordSet"`
	// Resource name.
	Name string `pulumi:"name"`
	// The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NameServers []string `pulumi:"nameServers"`
	// The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
	NumberOfRecordSets int `pulumi:"numberOfRecordSets"`
	// A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
	RegistrationVirtualNetworks []SubResourceResponse `pulumi:"registrationVirtualNetworks"`
	// A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
	ResolutionVirtualNetworks []SubResourceResponse `pulumi:"resolutionVirtualNetworks"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The type of this DNS zone (Public or Private).
	ZoneType *string `pulumi:"zoneType"`
}
