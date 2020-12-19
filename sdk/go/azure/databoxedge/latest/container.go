// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a container on the  Data Box Edge/Gateway device.
// Latest API Version: 2019-08-01.
type Container struct {
	pulumi.CustomResourceState

	// Current status of the container.
	ContainerStatus pulumi.StringOutput `pulumi:"containerStatus"`
	// The UTC time when container got created.
	CreatedDateTime pulumi.StringOutput `pulumi:"createdDateTime"`
	// DataFormat for Container
	DataFormat pulumi.StringOutput `pulumi:"dataFormat"`
	// The object name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Details of the refresh job on this container.
	RefreshDetails RefreshDetailsResponseOutput `pulumi:"refreshDetails"`
	// The hierarchical type of the object.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewContainer registers a new resource with the given unique name, arguments, and options.
func NewContainer(ctx *pulumi.Context,
	name string, args *ContainerArgs, opts ...pulumi.ResourceOption) (*Container, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ContainerName == nil {
		return nil, errors.New("invalid value for required argument 'ContainerName'")
	}
	if args.DataFormat == nil {
		return nil, errors.New("invalid value for required argument 'DataFormat'")
	}
	if args.DeviceName == nil {
		return nil, errors.New("invalid value for required argument 'DeviceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.StorageAccountName == nil {
		return nil, errors.New("invalid value for required argument 'StorageAccountName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190801:Container"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20200501preview:Container"),
		},
	})
	opts = append(opts, aliases)
	var resource Container
	err := ctx.RegisterResource("azure-nextgen:databoxedge/latest:Container", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetContainer gets an existing Container resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetContainer(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ContainerState, opts ...pulumi.ResourceOption) (*Container, error) {
	var resource Container
	err := ctx.ReadResource("azure-nextgen:databoxedge/latest:Container", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Container resources.
type containerState struct {
	// Current status of the container.
	ContainerStatus *string `pulumi:"containerStatus"`
	// The UTC time when container got created.
	CreatedDateTime *string `pulumi:"createdDateTime"`
	// DataFormat for Container
	DataFormat *string `pulumi:"dataFormat"`
	// The object name.
	Name *string `pulumi:"name"`
	// Details of the refresh job on this container.
	RefreshDetails *RefreshDetailsResponse `pulumi:"refreshDetails"`
	// The hierarchical type of the object.
	Type *string `pulumi:"type"`
}

type ContainerState struct {
	// Current status of the container.
	ContainerStatus pulumi.StringPtrInput
	// The UTC time when container got created.
	CreatedDateTime pulumi.StringPtrInput
	// DataFormat for Container
	DataFormat pulumi.StringPtrInput
	// The object name.
	Name pulumi.StringPtrInput
	// Details of the refresh job on this container.
	RefreshDetails RefreshDetailsResponsePtrInput
	// The hierarchical type of the object.
	Type pulumi.StringPtrInput
}

func (ContainerState) ElementType() reflect.Type {
	return reflect.TypeOf((*containerState)(nil)).Elem()
}

type containerArgs struct {
	// The container name.
	ContainerName string `pulumi:"containerName"`
	// DataFormat for Container
	DataFormat string `pulumi:"dataFormat"`
	// The device name.
	DeviceName string `pulumi:"deviceName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Storage Account Name
	StorageAccountName string `pulumi:"storageAccountName"`
}

// The set of arguments for constructing a Container resource.
type ContainerArgs struct {
	// The container name.
	ContainerName pulumi.StringInput
	// DataFormat for Container
	DataFormat pulumi.StringInput
	// The device name.
	DeviceName pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The Storage Account Name
	StorageAccountName pulumi.StringInput
}

func (ContainerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*containerArgs)(nil)).Elem()
}

type ContainerInput interface {
	pulumi.Input

	ToContainerOutput() ContainerOutput
	ToContainerOutputWithContext(ctx context.Context) ContainerOutput
}

func (*Container) ElementType() reflect.Type {
	return reflect.TypeOf((*Container)(nil))
}

func (i *Container) ToContainerOutput() ContainerOutput {
	return i.ToContainerOutputWithContext(context.Background())
}

func (i *Container) ToContainerOutputWithContext(ctx context.Context) ContainerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ContainerOutput)
}

type ContainerOutput struct {
	*pulumi.OutputState
}

func (ContainerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Container)(nil))
}

func (o ContainerOutput) ToContainerOutput() ContainerOutput {
	return o
}

func (o ContainerOutput) ToContainerOutputWithContext(ctx context.Context) ContainerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ContainerOutput{})
}
