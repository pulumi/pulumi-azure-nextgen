// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170605preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Storage Sync Service object.
type StorageSyncService struct {
	pulumi.CustomResourceState

	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Storage Sync service status.
	StorageSyncServiceStatus pulumi.IntOutput `pulumi:"storageSyncServiceStatus"`
	// Storage Sync service Uid
	StorageSyncServiceUid pulumi.StringOutput `pulumi:"storageSyncServiceUid"`
	// The tags of the resource.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The type of the resource
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewStorageSyncService registers a new resource with the given unique name, arguments, and options.
func NewStorageSyncService(ctx *pulumi.Context,
	name string, args *StorageSyncServiceArgs, opts ...pulumi.ResourceOption) (*StorageSyncService, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageSyncServiceName == nil {
		return nil, errors.New("missing required argument 'StorageSyncServiceName'")
	}
	if args == nil {
		args = &StorageSyncServiceArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storagesync/latest:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20180402:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20180701:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20181001:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190201:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190301:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190601:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20191001:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20200301:StorageSyncService"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20200901:StorageSyncService"),
		},
	})
	opts = append(opts, aliases)
	var resource StorageSyncService
	err := ctx.RegisterResource("azure-nextgen:storagesync/v20170605preview:StorageSyncService", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStorageSyncService gets an existing StorageSyncService resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStorageSyncService(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StorageSyncServiceState, opts ...pulumi.ResourceOption) (*StorageSyncService, error) {
	var resource StorageSyncService
	err := ctx.ReadResource("azure-nextgen:storagesync/v20170605preview:StorageSyncService", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageSyncService resources.
type storageSyncServiceState struct {
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Storage Sync service status.
	StorageSyncServiceStatus *int `pulumi:"storageSyncServiceStatus"`
	// Storage Sync service Uid
	StorageSyncServiceUid *string `pulumi:"storageSyncServiceUid"`
	// The tags of the resource.
	Tags map[string]interface{} `pulumi:"tags"`
	// The type of the resource
	Type *string `pulumi:"type"`
}

type StorageSyncServiceState struct {
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Storage Sync service status.
	StorageSyncServiceStatus pulumi.IntPtrInput
	// Storage Sync service Uid
	StorageSyncServiceUid pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.MapInput
	// The type of the resource
	Type pulumi.StringPtrInput
}

func (StorageSyncServiceState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageSyncServiceState)(nil)).Elem()
}

type storageSyncServiceArgs struct {
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Storage Sync Service resource.
	StorageSyncServiceName string `pulumi:"storageSyncServiceName"`
	// The tags of the resource.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a StorageSyncService resource.
type StorageSyncServiceArgs struct {
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Name of Storage Sync Service resource.
	StorageSyncServiceName pulumi.StringInput
	// The tags of the resource.
	Tags pulumi.MapInput
}

func (StorageSyncServiceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storageSyncServiceArgs)(nil)).Elem()
}
