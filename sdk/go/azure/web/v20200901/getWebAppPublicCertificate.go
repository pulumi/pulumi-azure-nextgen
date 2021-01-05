// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppPublicCertificate(ctx *pulumi.Context, args *LookupWebAppPublicCertificateArgs, opts ...pulumi.InvokeOption) (*LookupWebAppPublicCertificateResult, error) {
	var rv LookupWebAppPublicCertificateResult
	err := ctx.Invoke("azure-nextgen:web/v20200901:getWebAppPublicCertificate", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppPublicCertificateArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Public certificate name.
	PublicCertificateName string `pulumi:"publicCertificateName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Public certificate object
type LookupWebAppPublicCertificateResult struct {
	// Public Certificate byte array
	Blob *string `pulumi:"blob"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Public Certificate Location
	PublicCertificateLocation *string `pulumi:"publicCertificateLocation"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Certificate Thumbprint
	Thumbprint string `pulumi:"thumbprint"`
	// Resource type.
	Type string `pulumi:"type"`
}