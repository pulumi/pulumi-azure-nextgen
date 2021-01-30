// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-azure-nextgen/sdk/go/azure"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "azure-nextgen:storage/v20200801preview:BlobContainer":
		r, err = NewBlobContainer(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:BlobContainerImmutabilityPolicy":
		r, err = NewBlobContainerImmutabilityPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:BlobInventoryPolicy":
		r, err = NewBlobInventoryPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:BlobServiceProperties":
		r, err = NewBlobServiceProperties(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:FileServiceProperties":
		r, err = NewFileServiceProperties(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:FileShare":
		r, err = NewFileShare(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:ManagementPolicy":
		r, err = NewManagementPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:ObjectReplicationPolicy":
		r, err = NewObjectReplicationPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:PrivateEndpointConnection":
		r, err = NewPrivateEndpointConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:Queue":
		r, err = NewQueue(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:QueueServiceProperties":
		r, err = NewQueueServiceProperties(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:StorageAccount":
		r, err = NewStorageAccount(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:Table":
		r, err = NewTable(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:storage/v20200801preview:TableServiceProperties":
		r, err = NewTableServiceProperties(ctx, name, nil, pulumi.URN_(urn))
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	return
}

func init() {
	version, err := azure.PkgVersion()
	if err != nil {
		fmt.Println("failed to determine package version. defaulting to v1: %v", err)
	}
	pulumi.RegisterResourceModule(
		"azure-nextgen",
		"storage/v20200801preview",
		&module{version},
	)
}
