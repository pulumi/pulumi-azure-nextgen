// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301preview

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
	case "azure-nextgen:operationalinsights/v20200301preview:Cluster":
		r, err = NewCluster(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:DataExport":
		r, err = NewDataExport(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:DataSource":
		r, err = NewDataSource(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:LinkedService":
		r, err = NewLinkedService(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:LinkedStorageAccount":
		r, err = NewLinkedStorageAccount(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:SavedSearch":
		r, err = NewSavedSearch(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:StorageInsightConfig":
		r, err = NewStorageInsightConfig(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:operationalinsights/v20200301preview:Workspace":
		r, err = NewWorkspace(ctx, name, nil, pulumi.URN_(urn))
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
		"operationalinsights/v20200301preview",
		&module{version},
	)
}
