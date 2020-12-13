// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180915

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A Disk.
type Disk struct {
	pulumi.CustomResourceState

	// The creation date of the disk.
	CreatedDate pulumi.StringOutput `pulumi:"createdDate"`
	// When backed by a blob, the name of the VHD blob without extension.
	DiskBlobName pulumi.StringPtrOutput `pulumi:"diskBlobName"`
	// The size of the disk in GibiBytes.
	DiskSizeGiB pulumi.IntPtrOutput `pulumi:"diskSizeGiB"`
	// The storage type for the disk (i.e. Standard, Premium).
	DiskType pulumi.StringPtrOutput `pulumi:"diskType"`
	// When backed by a blob, the URI of underlying blob.
	DiskUri pulumi.StringPtrOutput `pulumi:"diskUri"`
	// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
	HostCaching pulumi.StringPtrOutput `pulumi:"hostCaching"`
	// The resource ID of the VM to which this disk is leased.
	LeasedByLabVmId pulumi.StringPtrOutput `pulumi:"leasedByLabVmId"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// When backed by managed disk, this is the ID of the compute disk resource.
	ManagedDiskId pulumi.StringPtrOutput `pulumi:"managedDiskId"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringOutput `pulumi:"uniqueIdentifier"`
}

// NewDisk registers a new resource with the given unique name, arguments, and options.
func NewDisk(ctx *pulumi.Context,
	name string, args *DiskArgs, opts ...pulumi.ResourceOption) (*Disk, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LabName == nil {
		return nil, errors.New("invalid value for required argument 'LabName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.UserName == nil {
		return nil, errors.New("invalid value for required argument 'UserName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/latest:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:Disk"),
		},
	})
	opts = append(opts, aliases)
	var resource Disk
	err := ctx.RegisterResource("azure-nextgen:devtestlab/v20180915:Disk", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDisk gets an existing Disk resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDisk(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DiskState, opts ...pulumi.ResourceOption) (*Disk, error) {
	var resource Disk
	err := ctx.ReadResource("azure-nextgen:devtestlab/v20180915:Disk", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Disk resources.
type diskState struct {
	// The creation date of the disk.
	CreatedDate *string `pulumi:"createdDate"`
	// When backed by a blob, the name of the VHD blob without extension.
	DiskBlobName *string `pulumi:"diskBlobName"`
	// The size of the disk in GibiBytes.
	DiskSizeGiB *int `pulumi:"diskSizeGiB"`
	// The storage type for the disk (i.e. Standard, Premium).
	DiskType *string `pulumi:"diskType"`
	// When backed by a blob, the URI of underlying blob.
	DiskUri *string `pulumi:"diskUri"`
	// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
	HostCaching *string `pulumi:"hostCaching"`
	// The resource ID of the VM to which this disk is leased.
	LeasedByLabVmId *string `pulumi:"leasedByLabVmId"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// When backed by managed disk, this is the ID of the compute disk resource.
	ManagedDiskId *string `pulumi:"managedDiskId"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
}

type DiskState struct {
	// The creation date of the disk.
	CreatedDate pulumi.StringPtrInput
	// When backed by a blob, the name of the VHD blob without extension.
	DiskBlobName pulumi.StringPtrInput
	// The size of the disk in GibiBytes.
	DiskSizeGiB pulumi.IntPtrInput
	// The storage type for the disk (i.e. Standard, Premium).
	DiskType pulumi.StringPtrInput
	// When backed by a blob, the URI of underlying blob.
	DiskUri pulumi.StringPtrInput
	// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
	HostCaching pulumi.StringPtrInput
	// The resource ID of the VM to which this disk is leased.
	LeasedByLabVmId pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// When backed by managed disk, this is the ID of the compute disk resource.
	ManagedDiskId pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
}

func (DiskState) ElementType() reflect.Type {
	return reflect.TypeOf((*diskState)(nil)).Elem()
}

type diskArgs struct {
	// When backed by a blob, the name of the VHD blob without extension.
	DiskBlobName *string `pulumi:"diskBlobName"`
	// The size of the disk in GibiBytes.
	DiskSizeGiB *int `pulumi:"diskSizeGiB"`
	// The storage type for the disk (i.e. Standard, Premium).
	DiskType *string `pulumi:"diskType"`
	// When backed by a blob, the URI of underlying blob.
	DiskUri *string `pulumi:"diskUri"`
	// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
	HostCaching *string `pulumi:"hostCaching"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The resource ID of the VM to which this disk is leased.
	LeasedByLabVmId *string `pulumi:"leasedByLabVmId"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// When backed by managed disk, this is the ID of the compute disk resource.
	ManagedDiskId *string `pulumi:"managedDiskId"`
	// The name of the disk.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The name of the user profile.
	UserName string `pulumi:"userName"`
}

// The set of arguments for constructing a Disk resource.
type DiskArgs struct {
	// When backed by a blob, the name of the VHD blob without extension.
	DiskBlobName pulumi.StringPtrInput
	// The size of the disk in GibiBytes.
	DiskSizeGiB pulumi.IntPtrInput
	// The storage type for the disk (i.e. Standard, Premium).
	DiskType pulumi.StringPtrInput
	// When backed by a blob, the URI of underlying blob.
	DiskUri pulumi.StringPtrInput
	// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
	HostCaching pulumi.StringPtrInput
	// The name of the lab.
	LabName pulumi.StringInput
	// The resource ID of the VM to which this disk is leased.
	LeasedByLabVmId pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// When backed by managed disk, this is the ID of the compute disk resource.
	ManagedDiskId pulumi.StringPtrInput
	// The name of the disk.
	Name pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The name of the user profile.
	UserName pulumi.StringInput
}

func (DiskArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*diskArgs)(nil)).Elem()
}

type DiskInput interface {
	pulumi.Input

	ToDiskOutput() DiskOutput
	ToDiskOutputWithContext(ctx context.Context) DiskOutput
}

func (Disk) ElementType() reflect.Type {
	return reflect.TypeOf((*Disk)(nil)).Elem()
}

func (i Disk) ToDiskOutput() DiskOutput {
	return i.ToDiskOutputWithContext(context.Background())
}

func (i Disk) ToDiskOutputWithContext(ctx context.Context) DiskOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DiskOutput)
}

type DiskOutput struct {
	*pulumi.OutputState
}

func (DiskOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DiskOutput)(nil)).Elem()
}

func (o DiskOutput) ToDiskOutput() DiskOutput {
	return o
}

func (o DiskOutput) ToDiskOutputWithContext(ctx context.Context) DiskOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DiskOutput{})
}
