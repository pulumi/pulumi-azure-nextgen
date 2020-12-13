// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190701

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Private endpoint resource.
type PrivateEndpoint struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
	ManualPrivateLinkServiceConnections PrivateLinkServiceConnectionResponseArrayOutput `pulumi:"manualPrivateLinkServiceConnections"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// An array of references to the network interfaces created for this private endpoint.
	NetworkInterfaces NetworkInterfaceResponseArrayOutput `pulumi:"networkInterfaces"`
	// A grouping of information about the connection to the remote resource.
	PrivateLinkServiceConnections PrivateLinkServiceConnectionResponseArrayOutput `pulumi:"privateLinkServiceConnections"`
	// The provisioning state of the private endpoint resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The ID of the subnet from which the private IP will be allocated.
	Subnet SubnetResponsePtrOutput `pulumi:"subnet"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPrivateEndpoint registers a new resource with the given unique name, arguments, and options.
func NewPrivateEndpoint(ctx *pulumi.Context,
	name string, args *PrivateEndpointArgs, opts ...pulumi.ResourceOption) (*PrivateEndpoint, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PrivateEndpointName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateEndpointName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:PrivateEndpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:PrivateEndpoint"),
		},
	})
	opts = append(opts, aliases)
	var resource PrivateEndpoint
	err := ctx.RegisterResource("azure-nextgen:network/v20190701:PrivateEndpoint", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateEndpoint gets an existing PrivateEndpoint resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateEndpoint(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateEndpointState, opts ...pulumi.ResourceOption) (*PrivateEndpoint, error) {
	var resource PrivateEndpoint
	err := ctx.ReadResource("azure-nextgen:network/v20190701:PrivateEndpoint", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateEndpoint resources.
type privateEndpointState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
	ManualPrivateLinkServiceConnections []PrivateLinkServiceConnectionResponse `pulumi:"manualPrivateLinkServiceConnections"`
	// Resource name.
	Name *string `pulumi:"name"`
	// An array of references to the network interfaces created for this private endpoint.
	NetworkInterfaces []NetworkInterfaceResponse `pulumi:"networkInterfaces"`
	// A grouping of information about the connection to the remote resource.
	PrivateLinkServiceConnections []PrivateLinkServiceConnectionResponse `pulumi:"privateLinkServiceConnections"`
	// The provisioning state of the private endpoint resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The ID of the subnet from which the private IP will be allocated.
	Subnet *SubnetResponse `pulumi:"subnet"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type PrivateEndpointState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
	ManualPrivateLinkServiceConnections PrivateLinkServiceConnectionResponseArrayInput
	// Resource name.
	Name pulumi.StringPtrInput
	// An array of references to the network interfaces created for this private endpoint.
	NetworkInterfaces NetworkInterfaceResponseArrayInput
	// A grouping of information about the connection to the remote resource.
	PrivateLinkServiceConnections PrivateLinkServiceConnectionResponseArrayInput
	// The provisioning state of the private endpoint resource.
	ProvisioningState pulumi.StringPtrInput
	// The ID of the subnet from which the private IP will be allocated.
	Subnet SubnetResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (PrivateEndpointState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointState)(nil)).Elem()
}

type privateEndpointArgs struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
	ManualPrivateLinkServiceConnections []PrivateLinkServiceConnection `pulumi:"manualPrivateLinkServiceConnections"`
	// The name of the private endpoint.
	PrivateEndpointName string `pulumi:"privateEndpointName"`
	// A grouping of information about the connection to the remote resource.
	PrivateLinkServiceConnections []PrivateLinkServiceConnection `pulumi:"privateLinkServiceConnections"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ID of the subnet from which the private IP will be allocated.
	Subnet *SubnetType `pulumi:"subnet"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a PrivateEndpoint resource.
type PrivateEndpointArgs struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
	ManualPrivateLinkServiceConnections PrivateLinkServiceConnectionArrayInput
	// The name of the private endpoint.
	PrivateEndpointName pulumi.StringInput
	// A grouping of information about the connection to the remote resource.
	PrivateLinkServiceConnections PrivateLinkServiceConnectionArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The ID of the subnet from which the private IP will be allocated.
	Subnet SubnetTypePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (PrivateEndpointArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointArgs)(nil)).Elem()
}

type PrivateEndpointInput interface {
	pulumi.Input

	ToPrivateEndpointOutput() PrivateEndpointOutput
	ToPrivateEndpointOutputWithContext(ctx context.Context) PrivateEndpointOutput
}

func (PrivateEndpoint) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpoint)(nil)).Elem()
}

func (i PrivateEndpoint) ToPrivateEndpointOutput() PrivateEndpointOutput {
	return i.ToPrivateEndpointOutputWithContext(context.Background())
}

func (i PrivateEndpoint) ToPrivateEndpointOutputWithContext(ctx context.Context) PrivateEndpointOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateEndpointOutput)
}

type PrivateEndpointOutput struct {
	*pulumi.OutputState
}

func (PrivateEndpointOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpointOutput)(nil)).Elem()
}

func (o PrivateEndpointOutput) ToPrivateEndpointOutput() PrivateEndpointOutput {
	return o
}

func (o PrivateEndpointOutput) ToPrivateEndpointOutputWithContext(ctx context.Context) PrivateEndpointOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateEndpointOutput{})
}
