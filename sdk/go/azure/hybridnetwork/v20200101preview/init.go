// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

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
	case "azure-nextgen:hybridnetwork/v20200101preview:Device":
		r, err = NewDevice(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:hybridnetwork/v20200101preview:NetworkFunction":
		r, err = NewNetworkFunction(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:hybridnetwork/v20200101preview:Vendor":
		r, err = NewVendor(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:hybridnetwork/v20200101preview:VendorSkuPreview":
		r, err = NewVendorSkuPreview(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:hybridnetwork/v20200101preview:VendorSkus":
		r, err = NewVendorSkus(ctx, name, nil, pulumi.URN_(urn))
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
		"hybridnetwork/v20200101preview",
		&module{version},
	)
}
