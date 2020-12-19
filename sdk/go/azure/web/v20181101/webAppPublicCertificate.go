// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Public certificate object
type WebAppPublicCertificate struct {
	pulumi.CustomResourceState

	// Public Certificate byte array
	Blob pulumi.StringPtrOutput `pulumi:"blob"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Public Certificate Location
	PublicCertificateLocation pulumi.StringPtrOutput `pulumi:"publicCertificateLocation"`
	// Certificate Thumbprint
	Thumbprint pulumi.StringOutput `pulumi:"thumbprint"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebAppPublicCertificate registers a new resource with the given unique name, arguments, and options.
func NewWebAppPublicCertificate(ctx *pulumi.Context,
	name string, args *WebAppPublicCertificateArgs, opts ...pulumi.ResourceOption) (*WebAppPublicCertificate, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.PublicCertificateName == nil {
		return nil, errors.New("invalid value for required argument 'PublicCertificateName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppPublicCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppPublicCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppPublicCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebAppPublicCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppPublicCertificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:WebAppPublicCertificate"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppPublicCertificate
	err := ctx.RegisterResource("azure-nextgen:web/v20181101:WebAppPublicCertificate", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppPublicCertificate gets an existing WebAppPublicCertificate resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppPublicCertificate(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppPublicCertificateState, opts ...pulumi.ResourceOption) (*WebAppPublicCertificate, error) {
	var resource WebAppPublicCertificate
	err := ctx.ReadResource("azure-nextgen:web/v20181101:WebAppPublicCertificate", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppPublicCertificate resources.
type webAppPublicCertificateState struct {
	// Public Certificate byte array
	Blob *string `pulumi:"blob"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// Public Certificate Location
	PublicCertificateLocation *string `pulumi:"publicCertificateLocation"`
	// Certificate Thumbprint
	Thumbprint *string `pulumi:"thumbprint"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type WebAppPublicCertificateState struct {
	// Public Certificate byte array
	Blob pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// Public Certificate Location
	PublicCertificateLocation pulumi.StringPtrInput
	// Certificate Thumbprint
	Thumbprint pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (WebAppPublicCertificateState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppPublicCertificateState)(nil)).Elem()
}

type webAppPublicCertificateArgs struct {
	// Public Certificate byte array
	Blob *string `pulumi:"blob"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Public Certificate Location
	PublicCertificateLocation *string `pulumi:"publicCertificateLocation"`
	// Public certificate name.
	PublicCertificateName string `pulumi:"publicCertificateName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a WebAppPublicCertificate resource.
type WebAppPublicCertificateArgs struct {
	// Public Certificate byte array
	Blob pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the app.
	Name pulumi.StringInput
	// Public Certificate Location
	PublicCertificateLocation PublicCertificateLocation
	// Public certificate name.
	PublicCertificateName pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
}

func (WebAppPublicCertificateArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppPublicCertificateArgs)(nil)).Elem()
}

type WebAppPublicCertificateInput interface {
	pulumi.Input

	ToWebAppPublicCertificateOutput() WebAppPublicCertificateOutput
	ToWebAppPublicCertificateOutputWithContext(ctx context.Context) WebAppPublicCertificateOutput
}

func (*WebAppPublicCertificate) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppPublicCertificate)(nil))
}

func (i *WebAppPublicCertificate) ToWebAppPublicCertificateOutput() WebAppPublicCertificateOutput {
	return i.ToWebAppPublicCertificateOutputWithContext(context.Background())
}

func (i *WebAppPublicCertificate) ToWebAppPublicCertificateOutputWithContext(ctx context.Context) WebAppPublicCertificateOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppPublicCertificateOutput)
}

type WebAppPublicCertificateOutput struct {
	*pulumi.OutputState
}

func (WebAppPublicCertificateOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppPublicCertificate)(nil))
}

func (o WebAppPublicCertificateOutput) ToWebAppPublicCertificateOutput() WebAppPublicCertificateOutput {
	return o
}

func (o WebAppPublicCertificateOutput) ToWebAppPublicCertificateOutputWithContext(ctx context.Context) WebAppPublicCertificateOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppPublicCertificateOutput{})
}
