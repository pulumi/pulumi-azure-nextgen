// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The X509 Certificate.
type DpsCertificate struct {
	pulumi.CustomResourceState

	// The entity tag.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The name of the certificate.
	Name pulumi.StringOutput `pulumi:"name"`
	// properties of a certificate
	Properties CertificatePropertiesResponseOutput `pulumi:"properties"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDpsCertificate registers a new resource with the given unique name, arguments, and options.
func NewDpsCertificate(ctx *pulumi.Context,
	name string, args *DpsCertificateArgs, opts ...pulumi.ResourceOption) (*DpsCertificate, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CertificateName == nil {
		return nil, errors.New("invalid value for required argument 'CertificateName'")
	}
	if args.ProvisioningServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ProvisioningServiceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devices/latest:DpsCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:devices/v20170821preview:DpsCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:devices/v20171115:DpsCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:devices/v20180122:DpsCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:devices/v20200301:DpsCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:devices/v20200901preview:DpsCertificate"),
		},
	})
	opts = append(opts, aliases)
	var resource DpsCertificate
	err := ctx.RegisterResource("azure-nextgen:devices/v20200101:DpsCertificate", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDpsCertificate gets an existing DpsCertificate resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDpsCertificate(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DpsCertificateState, opts ...pulumi.ResourceOption) (*DpsCertificate, error) {
	var resource DpsCertificate
	err := ctx.ReadResource("azure-nextgen:devices/v20200101:DpsCertificate", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DpsCertificate resources.
type dpsCertificateState struct {
	// The entity tag.
	Etag *string `pulumi:"etag"`
	// The name of the certificate.
	Name *string `pulumi:"name"`
	// properties of a certificate
	Properties *CertificatePropertiesResponse `pulumi:"properties"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type DpsCertificateState struct {
	// The entity tag.
	Etag pulumi.StringPtrInput
	// The name of the certificate.
	Name pulumi.StringPtrInput
	// properties of a certificate
	Properties CertificatePropertiesResponsePtrInput
	// The resource type.
	Type pulumi.StringPtrInput
}

func (DpsCertificateState) ElementType() reflect.Type {
	return reflect.TypeOf((*dpsCertificateState)(nil)).Elem()
}

type dpsCertificateArgs struct {
	// Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
	Certificate *string `pulumi:"certificate"`
	// The name of the certificate create or update.
	CertificateName string `pulumi:"certificateName"`
	// The name of the provisioning service.
	ProvisioningServiceName string `pulumi:"provisioningServiceName"`
	// Resource group identifier.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DpsCertificate resource.
type DpsCertificateArgs struct {
	// Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
	Certificate pulumi.StringPtrInput
	// The name of the certificate create or update.
	CertificateName pulumi.StringInput
	// The name of the provisioning service.
	ProvisioningServiceName pulumi.StringInput
	// Resource group identifier.
	ResourceGroupName pulumi.StringInput
}

func (DpsCertificateArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dpsCertificateArgs)(nil)).Elem()
}

type DpsCertificateInput interface {
	pulumi.Input

	ToDpsCertificateOutput() DpsCertificateOutput
	ToDpsCertificateOutputWithContext(ctx context.Context) DpsCertificateOutput
}

func (DpsCertificate) ElementType() reflect.Type {
	return reflect.TypeOf((*DpsCertificate)(nil)).Elem()
}

func (i DpsCertificate) ToDpsCertificateOutput() DpsCertificateOutput {
	return i.ToDpsCertificateOutputWithContext(context.Background())
}

func (i DpsCertificate) ToDpsCertificateOutputWithContext(ctx context.Context) DpsCertificateOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DpsCertificateOutput)
}

type DpsCertificateOutput struct {
	*pulumi.OutputState
}

func (DpsCertificateOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DpsCertificateOutput)(nil)).Elem()
}

func (o DpsCertificateOutput) ToDpsCertificateOutput() DpsCertificateOutput {
	return o
}

func (o DpsCertificateOutput) ToDpsCertificateOutputWithContext(ctx context.Context) DpsCertificateOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DpsCertificateOutput{})
}
