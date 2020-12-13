// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCertificateCsr(ctx *pulumi.Context, args *LookupCertificateCsrArgs, opts ...pulumi.InvokeOption) (*LookupCertificateCsrResult, error) {
	var rv LookupCertificateCsrResult
	err := ctx.Invoke("azure-nextgen:web/latest:getCertificateCsr", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCertificateCsrArgs struct {
	// Name of the certificate.
	Name string `pulumi:"name"`
	// Name of the resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Certificate signing request object
type LookupCertificateCsrResult struct {
	// Actual CSR string created
	CsrString *string `pulumi:"csrString"`
	// Distinguished name of certificate to be created
	DistinguishedName *string `pulumi:"distinguishedName"`
	// Hosting environment
	HostingEnvironment *string `pulumi:"hostingEnvironment"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// PFX password
	Password *string `pulumi:"password"`
	// PFX certificate of created certificate
	PfxBlob *string `pulumi:"pfxBlob"`
	// Hash of the certificates public key
	PublicKeyHash *string `pulumi:"publicKeyHash"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}
