// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191109

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
	case "azure-nextgen:kusto/v20191109:AttachedDatabaseConfiguration":
		r, err = NewAttachedDatabaseConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:kusto/v20191109:Cluster":
		r, err = NewCluster(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:kusto/v20191109:ClusterPrincipalAssignment":
		r, err = NewClusterPrincipalAssignment(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:kusto/v20191109:DataConnection":
		r, err = NewDataConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:kusto/v20191109:Database":
		r, err = NewDatabase(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:kusto/v20191109:DatabasePrincipalAssignment":
		r, err = NewDatabasePrincipalAssignment(ctx, name, nil, pulumi.URN_(urn))
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
		"kusto/v20191109",
		&module{version},
	)
}
