// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A container group.
type ContainerGroup struct {
	pulumi.CustomResourceState

	// The containers within the container group.
	Containers ContainerResponseArrayOutput `pulumi:"containers"`
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials ImageRegistryCredentialResponseArrayOutput `pulumi:"imageRegistryCredentials"`
	// The instance view of the container group. Only valid in response.
	InstanceView ContainerGroupResponseInstanceViewOutput `pulumi:"instanceView"`
	// The IP address type of the container group.
	IpAddress IpAddressResponsePtrOutput `pulumi:"ipAddress"`
	// The resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// The resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The operating system type required by the containers in the container group.
	OsType pulumi.StringOutput `pulumi:"osType"`
	// The provisioning state of the container group. This only appears in the response.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy pulumi.StringPtrOutput `pulumi:"restartPolicy"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The list of volumes that can be mounted by containers in this container group.
	Volumes VolumeResponseArrayOutput `pulumi:"volumes"`
}

// NewContainerGroup registers a new resource with the given unique name, arguments, and options.
func NewContainerGroup(ctx *pulumi.Context,
	name string, args *ContainerGroupArgs, opts ...pulumi.ResourceOption) (*ContainerGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ContainerGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ContainerGroupName'")
	}
	if args.Containers == nil {
		return nil, errors.New("invalid value for required argument 'Containers'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.OsType == nil {
		return nil, errors.New("invalid value for required argument 'OsType'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerinstance/latest:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20170801preview:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20171001preview:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20180201preview:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20180401:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20180601:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20180901:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20181001:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20191201:ContainerGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerinstance/v20201101:ContainerGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource ContainerGroup
	err := ctx.RegisterResource("azure-nextgen:containerinstance/v20171201preview:ContainerGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetContainerGroup gets an existing ContainerGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetContainerGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ContainerGroupState, opts ...pulumi.ResourceOption) (*ContainerGroup, error) {
	var resource ContainerGroup
	err := ctx.ReadResource("azure-nextgen:containerinstance/v20171201preview:ContainerGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ContainerGroup resources.
type containerGroupState struct {
	// The containers within the container group.
	Containers []ContainerResponse `pulumi:"containers"`
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials []ImageRegistryCredentialResponse `pulumi:"imageRegistryCredentials"`
	// The instance view of the container group. Only valid in response.
	InstanceView *ContainerGroupResponseInstanceView `pulumi:"instanceView"`
	// The IP address type of the container group.
	IpAddress *IpAddressResponse `pulumi:"ipAddress"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The resource name.
	Name *string `pulumi:"name"`
	// The operating system type required by the containers in the container group.
	OsType *string `pulumi:"osType"`
	// The provisioning state of the container group. This only appears in the response.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy *string `pulumi:"restartPolicy"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The resource type.
	Type *string `pulumi:"type"`
	// The list of volumes that can be mounted by containers in this container group.
	Volumes []VolumeResponse `pulumi:"volumes"`
}

type ContainerGroupState struct {
	// The containers within the container group.
	Containers ContainerResponseArrayInput
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials ImageRegistryCredentialResponseArrayInput
	// The instance view of the container group. Only valid in response.
	InstanceView ContainerGroupResponseInstanceViewPtrInput
	// The IP address type of the container group.
	IpAddress IpAddressResponsePtrInput
	// The resource location.
	Location pulumi.StringPtrInput
	// The resource name.
	Name pulumi.StringPtrInput
	// The operating system type required by the containers in the container group.
	OsType pulumi.StringPtrInput
	// The provisioning state of the container group. This only appears in the response.
	ProvisioningState pulumi.StringPtrInput
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The resource type.
	Type pulumi.StringPtrInput
	// The list of volumes that can be mounted by containers in this container group.
	Volumes VolumeResponseArrayInput
}

func (ContainerGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*containerGroupState)(nil)).Elem()
}

type containerGroupArgs struct {
	// The name of the container group.
	ContainerGroupName string `pulumi:"containerGroupName"`
	// The containers within the container group.
	Containers []Container `pulumi:"containers"`
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials []ImageRegistryCredential `pulumi:"imageRegistryCredentials"`
	// The IP address type of the container group.
	IpAddress *IpAddress `pulumi:"ipAddress"`
	// The resource location.
	Location string `pulumi:"location"`
	// The operating system type required by the containers in the container group.
	OsType string `pulumi:"osType"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy *string `pulumi:"restartPolicy"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The list of volumes that can be mounted by containers in this container group.
	Volumes []Volume `pulumi:"volumes"`
}

// The set of arguments for constructing a ContainerGroup resource.
type ContainerGroupArgs struct {
	// The name of the container group.
	ContainerGroupName pulumi.StringInput
	// The containers within the container group.
	Containers ContainerArrayInput
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials ImageRegistryCredentialArrayInput
	// The IP address type of the container group.
	IpAddress IpAddressPtrInput
	// The resource location.
	Location pulumi.StringInput
	// The operating system type required by the containers in the container group.
	OsType pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The list of volumes that can be mounted by containers in this container group.
	Volumes VolumeArrayInput
}

func (ContainerGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*containerGroupArgs)(nil)).Elem()
}

type ContainerGroupInput interface {
	pulumi.Input

	ToContainerGroupOutput() ContainerGroupOutput
	ToContainerGroupOutputWithContext(ctx context.Context) ContainerGroupOutput
}

func (ContainerGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*ContainerGroup)(nil)).Elem()
}

func (i ContainerGroup) ToContainerGroupOutput() ContainerGroupOutput {
	return i.ToContainerGroupOutputWithContext(context.Background())
}

func (i ContainerGroup) ToContainerGroupOutputWithContext(ctx context.Context) ContainerGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ContainerGroupOutput)
}

type ContainerGroupOutput struct {
	*pulumi.OutputState
}

func (ContainerGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ContainerGroupOutput)(nil)).Elem()
}

func (o ContainerGroupOutput) ToContainerGroupOutput() ContainerGroupOutput {
	return o
}

func (o ContainerGroupOutput) ToContainerGroupOutputWithContext(ctx context.Context) ContainerGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ContainerGroupOutput{})
}
