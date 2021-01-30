// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701

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
	case "azure-nextgen:appplatform/v20200701:App":
		r, err = NewApp(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:appplatform/v20200701:Binding":
		r, err = NewBinding(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:appplatform/v20200701:Certificate":
		r, err = NewCertificate(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:appplatform/v20200701:CustomDomain":
		r, err = NewCustomDomain(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:appplatform/v20200701:Deployment":
		r, err = NewDeployment(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:appplatform/v20200701:Service":
		r, err = NewService(ctx, name, nil, pulumi.URN_(urn))
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
		"appplatform/v20200701",
		&module{version},
	)
}
