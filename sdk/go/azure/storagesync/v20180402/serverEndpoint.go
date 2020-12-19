// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180402

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Server Endpoint object.
type ServerEndpoint struct {
	pulumi.CustomResourceState

	// Cloud Tiering.
	CloudTiering pulumi.StringPtrOutput `pulumi:"cloudTiering"`
	// Friendly Name
	FriendlyName pulumi.StringPtrOutput `pulumi:"friendlyName"`
	// Resource Last Operation Name
	LastOperationName pulumi.StringPtrOutput `pulumi:"lastOperationName"`
	// ServerEndpoint lastWorkflowId
	LastWorkflowId pulumi.StringPtrOutput `pulumi:"lastWorkflowId"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// ServerEndpoint Provisioning State
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Server Local path.
	ServerLocalPath pulumi.StringPtrOutput `pulumi:"serverLocalPath"`
	// Server Resource Id.
	ServerResourceId pulumi.StringPtrOutput `pulumi:"serverResourceId"`
	// Sync Health Status
	SyncStatus pulumi.AnyOutput `pulumi:"syncStatus"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
	// Level of free space to be maintained by Cloud Tiering if it is enabled.
	VolumeFreeSpacePercent pulumi.IntPtrOutput `pulumi:"volumeFreeSpacePercent"`
}

// NewServerEndpoint registers a new resource with the given unique name, arguments, and options.
func NewServerEndpoint(ctx *pulumi.Context,
	name string, args *ServerEndpointArgs, opts ...pulumi.ResourceOption) (*ServerEndpoint, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerEndpointName == nil {
		return nil, errors.New("invalid value for required argument 'ServerEndpointName'")
	}
	if args.StorageSyncServiceName == nil {
		return nil, errors.New("invalid value for required argument 'StorageSyncServiceName'")
	}
	if args.SyncGroupName == nil {
		return nil, errors.New("invalid value for required argument 'SyncGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storagesync/latest:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20170605preview:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20180701:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20181001:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190201:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190301:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20190601:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20191001:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20200301:ServerEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagesync/v20200901:ServerEndpoint"),
		},
	})
	opts = append(opts, aliases)
	var resource ServerEndpoint
	err := ctx.RegisterResource("azure-nextgen:storagesync/v20180402:ServerEndpoint", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServerEndpoint gets an existing ServerEndpoint resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServerEndpoint(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerEndpointState, opts ...pulumi.ResourceOption) (*ServerEndpoint, error) {
	var resource ServerEndpoint
	err := ctx.ReadResource("azure-nextgen:storagesync/v20180402:ServerEndpoint", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServerEndpoint resources.
type serverEndpointState struct {
	// Cloud Tiering.
	CloudTiering *string `pulumi:"cloudTiering"`
	// Friendly Name
	FriendlyName *string `pulumi:"friendlyName"`
	// Resource Last Operation Name
	LastOperationName *string `pulumi:"lastOperationName"`
	// ServerEndpoint lastWorkflowId
	LastWorkflowId *string `pulumi:"lastWorkflowId"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// ServerEndpoint Provisioning State
	ProvisioningState *string `pulumi:"provisioningState"`
	// Server Local path.
	ServerLocalPath *string `pulumi:"serverLocalPath"`
	// Server Resource Id.
	ServerResourceId *string `pulumi:"serverResourceId"`
	// Sync Health Status
	SyncStatus interface{} `pulumi:"syncStatus"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
	// Level of free space to be maintained by Cloud Tiering if it is enabled.
	VolumeFreeSpacePercent *int `pulumi:"volumeFreeSpacePercent"`
}

type ServerEndpointState struct {
	// Cloud Tiering.
	CloudTiering pulumi.StringPtrInput
	// Friendly Name
	FriendlyName pulumi.StringPtrInput
	// Resource Last Operation Name
	LastOperationName pulumi.StringPtrInput
	// ServerEndpoint lastWorkflowId
	LastWorkflowId pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// ServerEndpoint Provisioning State
	ProvisioningState pulumi.StringPtrInput
	// Server Local path.
	ServerLocalPath pulumi.StringPtrInput
	// Server Resource Id.
	ServerResourceId pulumi.StringPtrInput
	// Sync Health Status
	SyncStatus pulumi.Input
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
	// Level of free space to be maintained by Cloud Tiering if it is enabled.
	VolumeFreeSpacePercent pulumi.IntPtrInput
}

func (ServerEndpointState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverEndpointState)(nil)).Elem()
}

type serverEndpointArgs struct {
	// Cloud Tiering.
	CloudTiering *string `pulumi:"cloudTiering"`
	// Friendly Name
	FriendlyName *string `pulumi:"friendlyName"`
	// Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
	Location *string `pulumi:"location"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Server Endpoint object.
	ServerEndpointName string `pulumi:"serverEndpointName"`
	// Server Local path.
	ServerLocalPath *string `pulumi:"serverLocalPath"`
	// Server Resource Id.
	ServerResourceId *string `pulumi:"serverResourceId"`
	// Name of Storage Sync Service resource.
	StorageSyncServiceName string `pulumi:"storageSyncServiceName"`
	// Name of Sync Group resource.
	SyncGroupName string `pulumi:"syncGroupName"`
	// Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
	Tags map[string]string `pulumi:"tags"`
	// Level of free space to be maintained by Cloud Tiering if it is enabled.
	VolumeFreeSpacePercent *int `pulumi:"volumeFreeSpacePercent"`
}

// The set of arguments for constructing a ServerEndpoint resource.
type ServerEndpointArgs struct {
	// Cloud Tiering.
	CloudTiering pulumi.StringPtrInput
	// Friendly Name
	FriendlyName pulumi.StringPtrInput
	// Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
	Location pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Name of Server Endpoint object.
	ServerEndpointName pulumi.StringInput
	// Server Local path.
	ServerLocalPath pulumi.StringPtrInput
	// Server Resource Id.
	ServerResourceId pulumi.StringPtrInput
	// Name of Storage Sync Service resource.
	StorageSyncServiceName pulumi.StringInput
	// Name of Sync Group resource.
	SyncGroupName pulumi.StringInput
	// Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
	Tags pulumi.StringMapInput
	// Level of free space to be maintained by Cloud Tiering if it is enabled.
	VolumeFreeSpacePercent pulumi.IntPtrInput
}

func (ServerEndpointArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverEndpointArgs)(nil)).Elem()
}

type ServerEndpointInput interface {
	pulumi.Input

	ToServerEndpointOutput() ServerEndpointOutput
	ToServerEndpointOutputWithContext(ctx context.Context) ServerEndpointOutput
}

func (*ServerEndpoint) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerEndpoint)(nil))
}

func (i *ServerEndpoint) ToServerEndpointOutput() ServerEndpointOutput {
	return i.ToServerEndpointOutputWithContext(context.Background())
}

func (i *ServerEndpoint) ToServerEndpointOutputWithContext(ctx context.Context) ServerEndpointOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerEndpointOutput)
}

type ServerEndpointOutput struct {
	*pulumi.OutputState
}

func (ServerEndpointOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerEndpoint)(nil))
}

func (o ServerEndpointOutput) ToServerEndpointOutput() ServerEndpointOutput {
	return o
}

func (o ServerEndpointOutput) ToServerEndpointOutputWithContext(ctx context.Context) ServerEndpointOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServerEndpointOutput{})
}
