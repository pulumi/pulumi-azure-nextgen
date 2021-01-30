// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171201preview

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
	case "azure-nextgen:dbformysql/v20171201preview:Configuration":
		r, err = NewConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:dbformysql/v20171201preview:Database":
		r, err = NewDatabase(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:dbformysql/v20171201preview:FirewallRule":
		r, err = NewFirewallRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:dbformysql/v20171201preview:Server":
		r, err = NewServer(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:dbformysql/v20171201preview:ServerAdministrator":
		r, err = NewServerAdministrator(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:dbformysql/v20171201preview:VirtualNetworkRule":
		r, err = NewVirtualNetworkRule(ctx, name, nil, pulumi.URN_(urn))
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
		"dbformysql/v20171201preview",
		&module{version},
	)
}
