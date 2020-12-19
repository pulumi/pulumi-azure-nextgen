// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The extended info of the manager.
// Latest API Version: 2017-06-01.
type ManagerExtendedInfo struct {
	pulumi.CustomResourceState

	// Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
	Algorithm pulumi.StringOutput `pulumi:"algorithm"`
	// Represents the CEK of the resource.
	EncryptionKey pulumi.StringPtrOutput `pulumi:"encryptionKey"`
	// Represents the Cert thumbprint that was used to encrypt the CEK.
	EncryptionKeyThumbprint pulumi.StringPtrOutput `pulumi:"encryptionKeyThumbprint"`
	// The etag of the resource.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Represents the CIK of the resource.
	IntegrityKey pulumi.StringOutput `pulumi:"integrityKey"`
	// The Kind of the object. Currently only Series8000 is supported
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// The name of the object.
	Name pulumi.StringOutput `pulumi:"name"`
	// Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
	PortalCertificateThumbprint pulumi.StringPtrOutput `pulumi:"portalCertificateThumbprint"`
	// The hierarchical type of the object.
	Type pulumi.StringOutput `pulumi:"type"`
	// The version of the extended info being persisted.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewManagerExtendedInfo registers a new resource with the given unique name, arguments, and options.
func NewManagerExtendedInfo(ctx *pulumi.Context,
	name string, args *ManagerExtendedInfoArgs, opts ...pulumi.ResourceOption) (*ManagerExtendedInfo, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Algorithm == nil {
		return nil, errors.New("invalid value for required argument 'Algorithm'")
	}
	if args.IntegrityKey == nil {
		return nil, errors.New("invalid value for required argument 'IntegrityKey'")
	}
	if args.ManagerName == nil {
		return nil, errors.New("invalid value for required argument 'ManagerName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storsimple/v20161001:ManagerExtendedInfo"),
		},
		{
			Type: pulumi.String("azure-nextgen:storsimple/v20170601:ManagerExtendedInfo"),
		},
	})
	opts = append(opts, aliases)
	var resource ManagerExtendedInfo
	err := ctx.RegisterResource("azure-nextgen:storsimple/latest:ManagerExtendedInfo", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagerExtendedInfo gets an existing ManagerExtendedInfo resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagerExtendedInfo(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagerExtendedInfoState, opts ...pulumi.ResourceOption) (*ManagerExtendedInfo, error) {
	var resource ManagerExtendedInfo
	err := ctx.ReadResource("azure-nextgen:storsimple/latest:ManagerExtendedInfo", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagerExtendedInfo resources.
type managerExtendedInfoState struct {
	// Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
	Algorithm *string `pulumi:"algorithm"`
	// Represents the CEK of the resource.
	EncryptionKey *string `pulumi:"encryptionKey"`
	// Represents the Cert thumbprint that was used to encrypt the CEK.
	EncryptionKeyThumbprint *string `pulumi:"encryptionKeyThumbprint"`
	// The etag of the resource.
	Etag *string `pulumi:"etag"`
	// Represents the CIK of the resource.
	IntegrityKey *string `pulumi:"integrityKey"`
	// The Kind of the object. Currently only Series8000 is supported
	Kind *string `pulumi:"kind"`
	// The name of the object.
	Name *string `pulumi:"name"`
	// Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
	PortalCertificateThumbprint *string `pulumi:"portalCertificateThumbprint"`
	// The hierarchical type of the object.
	Type *string `pulumi:"type"`
	// The version of the extended info being persisted.
	Version *string `pulumi:"version"`
}

type ManagerExtendedInfoState struct {
	// Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
	Algorithm pulumi.StringPtrInput
	// Represents the CEK of the resource.
	EncryptionKey pulumi.StringPtrInput
	// Represents the Cert thumbprint that was used to encrypt the CEK.
	EncryptionKeyThumbprint pulumi.StringPtrInput
	// The etag of the resource.
	Etag pulumi.StringPtrInput
	// Represents the CIK of the resource.
	IntegrityKey pulumi.StringPtrInput
	// The Kind of the object. Currently only Series8000 is supported
	Kind pulumi.StringPtrInput
	// The name of the object.
	Name pulumi.StringPtrInput
	// Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
	PortalCertificateThumbprint pulumi.StringPtrInput
	// The hierarchical type of the object.
	Type pulumi.StringPtrInput
	// The version of the extended info being persisted.
	Version pulumi.StringPtrInput
}

func (ManagerExtendedInfoState) ElementType() reflect.Type {
	return reflect.TypeOf((*managerExtendedInfoState)(nil)).Elem()
}

type managerExtendedInfoArgs struct {
	// Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
	Algorithm string `pulumi:"algorithm"`
	// Represents the CEK of the resource.
	EncryptionKey *string `pulumi:"encryptionKey"`
	// Represents the Cert thumbprint that was used to encrypt the CEK.
	EncryptionKeyThumbprint *string `pulumi:"encryptionKeyThumbprint"`
	// The etag of the resource.
	Etag *string `pulumi:"etag"`
	// Represents the CIK of the resource.
	IntegrityKey string `pulumi:"integrityKey"`
	// The Kind of the object. Currently only Series8000 is supported
	Kind *string `pulumi:"kind"`
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
	PortalCertificateThumbprint *string `pulumi:"portalCertificateThumbprint"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The version of the extended info being persisted.
	Version *string `pulumi:"version"`
}

// The set of arguments for constructing a ManagerExtendedInfo resource.
type ManagerExtendedInfoArgs struct {
	// Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
	Algorithm pulumi.StringInput
	// Represents the CEK of the resource.
	EncryptionKey pulumi.StringPtrInput
	// Represents the Cert thumbprint that was used to encrypt the CEK.
	EncryptionKeyThumbprint pulumi.StringPtrInput
	// The etag of the resource.
	Etag pulumi.StringPtrInput
	// Represents the CIK of the resource.
	IntegrityKey pulumi.StringInput
	// The Kind of the object. Currently only Series8000 is supported
	Kind Kind
	// The manager name
	ManagerName pulumi.StringInput
	// Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
	PortalCertificateThumbprint pulumi.StringPtrInput
	// The resource group name
	ResourceGroupName pulumi.StringInput
	// The version of the extended info being persisted.
	Version pulumi.StringPtrInput
}

func (ManagerExtendedInfoArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managerExtendedInfoArgs)(nil)).Elem()
}

type ManagerExtendedInfoInput interface {
	pulumi.Input

	ToManagerExtendedInfoOutput() ManagerExtendedInfoOutput
	ToManagerExtendedInfoOutputWithContext(ctx context.Context) ManagerExtendedInfoOutput
}

func (*ManagerExtendedInfo) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagerExtendedInfo)(nil))
}

func (i *ManagerExtendedInfo) ToManagerExtendedInfoOutput() ManagerExtendedInfoOutput {
	return i.ToManagerExtendedInfoOutputWithContext(context.Background())
}

func (i *ManagerExtendedInfo) ToManagerExtendedInfoOutputWithContext(ctx context.Context) ManagerExtendedInfoOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagerExtendedInfoOutput)
}

type ManagerExtendedInfoOutput struct {
	*pulumi.OutputState
}

func (ManagerExtendedInfoOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagerExtendedInfo)(nil))
}

func (o ManagerExtendedInfoOutput) ToManagerExtendedInfoOutput() ManagerExtendedInfoOutput {
	return o
}

func (o ManagerExtendedInfoOutput) ToManagerExtendedInfoOutputWithContext(ctx context.Context) ManagerExtendedInfoOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagerExtendedInfoOutput{})
}
