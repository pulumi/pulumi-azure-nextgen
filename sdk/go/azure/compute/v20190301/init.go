// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190301

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
	case "azure-nextgen:compute/v20190301:AvailabilitySet":
		r, err = NewAvailabilitySet(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:DedicatedHost":
		r, err = NewDedicatedHost(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:DedicatedHostGroup":
		r, err = NewDedicatedHostGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:Disk":
		r, err = NewDisk(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:Gallery":
		r, err = NewGallery(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:GalleryApplication":
		r, err = NewGalleryApplication(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:GalleryApplicationVersion":
		r, err = NewGalleryApplicationVersion(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:GalleryImage":
		r, err = NewGalleryImage(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:GalleryImageVersion":
		r, err = NewGalleryImageVersion(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:Image":
		r, err = NewImage(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:ProximityPlacementGroup":
		r, err = NewProximityPlacementGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:Snapshot":
		r, err = NewSnapshot(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:VirtualMachine":
		r, err = NewVirtualMachine(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:VirtualMachineExtension":
		r, err = NewVirtualMachineExtension(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:VirtualMachineScaleSet":
		r, err = NewVirtualMachineScaleSet(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:VirtualMachineScaleSetExtension":
		r, err = NewVirtualMachineScaleSetExtension(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:compute/v20190301:VirtualMachineScaleSetVM":
		r, err = NewVirtualMachineScaleSetVM(ctx, name, nil, pulumi.URN_(urn))
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
		"compute/v20190301",
		&module{version},
	)
}
