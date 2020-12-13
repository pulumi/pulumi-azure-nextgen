// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Type of the Storage Target.
type StorageTarget struct {
	pulumi.CustomResourceState

	// Properties when targetType is clfs.
	Clfs ClfsTargetResponsePtrOutput `pulumi:"clfs"`
	// List of Cache namespace junctions to target for namespace associations.
	Junctions NamespaceJunctionResponseArrayOutput `pulumi:"junctions"`
	// Region name string.
	Location pulumi.StringOutput `pulumi:"location"`
	// Name of the Storage Target.
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties when targetType is nfs3.
	Nfs3 Nfs3TargetResponsePtrOutput `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The system meta data relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Type of the Storage Target.
	TargetType pulumi.StringOutput `pulumi:"targetType"`
	// Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
	Type pulumi.StringOutput `pulumi:"type"`
	// Properties when targetType is unknown.
	Unknown UnknownTargetResponsePtrOutput `pulumi:"unknown"`
}

// NewStorageTarget registers a new resource with the given unique name, arguments, and options.
func NewStorageTarget(ctx *pulumi.Context,
	name string, args *StorageTargetArgs, opts ...pulumi.ResourceOption) (*StorageTarget, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CacheName == nil {
		return nil, errors.New("invalid value for required argument 'CacheName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.StorageTargetName == nil {
		return nil, errors.New("invalid value for required argument 'StorageTargetName'")
	}
	if args.TargetType == nil {
		return nil, errors.New("invalid value for required argument 'TargetType'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storagecache/latest:StorageTarget"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20190801preview:StorageTarget"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20191101:StorageTarget"),
		},
	})
	opts = append(opts, aliases)
	var resource StorageTarget
	err := ctx.RegisterResource("azure-nextgen:storagecache/v20200301:StorageTarget", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStorageTarget gets an existing StorageTarget resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStorageTarget(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StorageTargetState, opts ...pulumi.ResourceOption) (*StorageTarget, error) {
	var resource StorageTarget
	err := ctx.ReadResource("azure-nextgen:storagecache/v20200301:StorageTarget", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageTarget resources.
type storageTargetState struct {
	// Properties when targetType is clfs.
	Clfs *ClfsTargetResponse `pulumi:"clfs"`
	// List of Cache namespace junctions to target for namespace associations.
	Junctions []NamespaceJunctionResponse `pulumi:"junctions"`
	// Region name string.
	Location *string `pulumi:"location"`
	// Name of the Storage Target.
	Name *string `pulumi:"name"`
	// Properties when targetType is nfs3.
	Nfs3 *Nfs3TargetResponse `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// The system meta data relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Type of the Storage Target.
	TargetType *string `pulumi:"targetType"`
	// Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
	Type *string `pulumi:"type"`
	// Properties when targetType is unknown.
	Unknown *UnknownTargetResponse `pulumi:"unknown"`
}

type StorageTargetState struct {
	// Properties when targetType is clfs.
	Clfs ClfsTargetResponsePtrInput
	// List of Cache namespace junctions to target for namespace associations.
	Junctions NamespaceJunctionResponseArrayInput
	// Region name string.
	Location pulumi.StringPtrInput
	// Name of the Storage Target.
	Name pulumi.StringPtrInput
	// Properties when targetType is nfs3.
	Nfs3 Nfs3TargetResponsePtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// The system meta data relating to this resource.
	SystemData SystemDataResponsePtrInput
	// Type of the Storage Target.
	TargetType pulumi.StringPtrInput
	// Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
	Type pulumi.StringPtrInput
	// Properties when targetType is unknown.
	Unknown UnknownTargetResponsePtrInput
}

func (StorageTargetState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageTargetState)(nil)).Elem()
}

type storageTargetArgs struct {
	// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
	CacheName string `pulumi:"cacheName"`
	// Properties when targetType is clfs.
	Clfs *ClfsTarget `pulumi:"clfs"`
	// List of Cache namespace junctions to target for namespace associations.
	Junctions []NamespaceJunction `pulumi:"junctions"`
	// Properties when targetType is nfs3.
	Nfs3 *Nfs3Target `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Target resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
	StorageTargetName string `pulumi:"storageTargetName"`
	// Type of the Storage Target.
	TargetType string `pulumi:"targetType"`
	// Properties when targetType is unknown.
	Unknown *UnknownTarget `pulumi:"unknown"`
}

// The set of arguments for constructing a StorageTarget resource.
type StorageTargetArgs struct {
	// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
	CacheName pulumi.StringInput
	// Properties when targetType is clfs.
	Clfs ClfsTargetPtrInput
	// List of Cache namespace junctions to target for namespace associations.
	Junctions NamespaceJunctionArrayInput
	// Properties when targetType is nfs3.
	Nfs3 Nfs3TargetPtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// Target resource group.
	ResourceGroupName pulumi.StringInput
	// Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
	StorageTargetName pulumi.StringInput
	// Type of the Storage Target.
	TargetType pulumi.StringInput
	// Properties when targetType is unknown.
	Unknown UnknownTargetPtrInput
}

func (StorageTargetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storageTargetArgs)(nil)).Elem()
}

type StorageTargetInput interface {
	pulumi.Input

	ToStorageTargetOutput() StorageTargetOutput
	ToStorageTargetOutputWithContext(ctx context.Context) StorageTargetOutput
}

func (StorageTarget) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageTarget)(nil)).Elem()
}

func (i StorageTarget) ToStorageTargetOutput() StorageTargetOutput {
	return i.ToStorageTargetOutputWithContext(context.Background())
}

func (i StorageTarget) ToStorageTargetOutputWithContext(ctx context.Context) StorageTargetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StorageTargetOutput)
}

type StorageTargetOutput struct {
	*pulumi.OutputState
}

func (StorageTargetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageTargetOutput)(nil)).Elem()
}

func (o StorageTargetOutput) ToStorageTargetOutput() StorageTargetOutput {
	return o
}

func (o StorageTargetOutput) ToStorageTargetOutputWithContext(ctx context.Context) StorageTargetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(StorageTargetOutput{})
}
