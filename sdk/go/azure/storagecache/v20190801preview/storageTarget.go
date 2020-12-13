// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A storage system being cached by a Cache.
type StorageTarget struct {
	pulumi.CustomResourceState

	// Properties when clfs target.
	Clfs ClfsTargetResponsePtrOutput `pulumi:"clfs"`
	// List of cache namespace to target namespace associations.
	Junctions NamespaceJunctionResponseArrayOutput `pulumi:"junctions"`
	// A fully qualified URL.
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties when nfs3 target.
	Nfs3 Nfs3TargetResponsePtrOutput `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Type for storage target.
	TargetType pulumi.StringPtrOutput `pulumi:"targetType"`
	// Type for the storage target; Microsoft.StorageCache/Cache/StorageTarget
	Type pulumi.StringOutput `pulumi:"type"`
	// Properties when unknown target.
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
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storagecache/latest:StorageTarget"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20191101:StorageTarget"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20200301:StorageTarget"),
		},
	})
	opts = append(opts, aliases)
	var resource StorageTarget
	err := ctx.RegisterResource("azure-nextgen:storagecache/v20190801preview:StorageTarget", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:storagecache/v20190801preview:StorageTarget", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageTarget resources.
type storageTargetState struct {
	// Properties when clfs target.
	Clfs *ClfsTargetResponse `pulumi:"clfs"`
	// List of cache namespace to target namespace associations.
	Junctions []NamespaceJunctionResponse `pulumi:"junctions"`
	// A fully qualified URL.
	Name *string `pulumi:"name"`
	// Properties when nfs3 target.
	Nfs3 *Nfs3TargetResponse `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Type for storage target.
	TargetType *string `pulumi:"targetType"`
	// Type for the storage target; Microsoft.StorageCache/Cache/StorageTarget
	Type *string `pulumi:"type"`
	// Properties when unknown target.
	Unknown *UnknownTargetResponse `pulumi:"unknown"`
}

type StorageTargetState struct {
	// Properties when clfs target.
	Clfs ClfsTargetResponsePtrInput
	// List of cache namespace to target namespace associations.
	Junctions NamespaceJunctionResponseArrayInput
	// A fully qualified URL.
	Name pulumi.StringPtrInput
	// Properties when nfs3 target.
	Nfs3 Nfs3TargetResponsePtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// Type for storage target.
	TargetType pulumi.StringPtrInput
	// Type for the storage target; Microsoft.StorageCache/Cache/StorageTarget
	Type pulumi.StringPtrInput
	// Properties when unknown target.
	Unknown UnknownTargetResponsePtrInput
}

func (StorageTargetState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageTargetState)(nil)).Elem()
}

type storageTargetArgs struct {
	// Name of cache.
	CacheName string `pulumi:"cacheName"`
	// Properties when clfs target.
	Clfs *ClfsTarget `pulumi:"clfs"`
	// List of cache namespace to target namespace associations.
	Junctions []NamespaceJunction `pulumi:"junctions"`
	// Properties when nfs3 target.
	Nfs3 *Nfs3Target `pulumi:"nfs3"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Target resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of storage target.
	StorageTargetName string `pulumi:"storageTargetName"`
	// Type for storage target.
	TargetType *string `pulumi:"targetType"`
	// Properties when unknown target.
	Unknown *UnknownTarget `pulumi:"unknown"`
}

// The set of arguments for constructing a StorageTarget resource.
type StorageTargetArgs struct {
	// Name of cache.
	CacheName pulumi.StringInput
	// Properties when clfs target.
	Clfs ClfsTargetPtrInput
	// List of cache namespace to target namespace associations.
	Junctions NamespaceJunctionArrayInput
	// Properties when nfs3 target.
	Nfs3 Nfs3TargetPtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// Target resource group.
	ResourceGroupName pulumi.StringInput
	// Name of storage target.
	StorageTargetName pulumi.StringInput
	// Type for storage target.
	TargetType pulumi.StringPtrInput
	// Properties when unknown target.
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
