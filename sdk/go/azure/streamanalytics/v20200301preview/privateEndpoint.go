// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Complete information about the private endpoint.
type PrivateEndpoint struct {
	pulumi.CustomResourceState

	// Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The properties associated with a private endpoint.
	Properties PrivateEndpointPropertiesResponseOutput `pulumi:"properties"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPrivateEndpoint registers a new resource with the given unique name, arguments, and options.
func NewPrivateEndpoint(ctx *pulumi.Context,
	name string, args *PrivateEndpointArgs, opts ...pulumi.ResourceOption) (*PrivateEndpoint, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClusterName == nil {
		return nil, errors.New("invalid value for required argument 'ClusterName'")
	}
	if args.PrivateEndpointName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateEndpointName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource PrivateEndpoint
	err := ctx.RegisterResource("azure-nextgen:streamanalytics/v20200301preview:PrivateEndpoint", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:streamanalytics/v20200301preview:PrivateEndpoint", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateEndpoint resources.
type privateEndpointState struct {
	// Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
	Etag *string `pulumi:"etag"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The properties associated with a private endpoint.
	Properties *PrivateEndpointPropertiesResponse `pulumi:"properties"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type *string `pulumi:"type"`
}

type PrivateEndpointState struct {
	// Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
	Etag pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The properties associated with a private endpoint.
	Properties PrivateEndpointPropertiesResponsePtrInput
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringPtrInput
}

func (PrivateEndpointState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointState)(nil)).Elem()
}

type privateEndpointArgs struct {
	// The name of the cluster.
	ClusterName string `pulumi:"clusterName"`
	// The name of the private endpoint.
	PrivateEndpointName string `pulumi:"privateEndpointName"`
	// The properties associated with a private endpoint.
	Properties *PrivateEndpointProperties `pulumi:"properties"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a PrivateEndpoint resource.
type PrivateEndpointArgs struct {
	// The name of the cluster.
	ClusterName pulumi.StringInput
	// The name of the private endpoint.
	PrivateEndpointName pulumi.StringInput
	// The properties associated with a private endpoint.
	Properties PrivateEndpointPropertiesPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
}

func (PrivateEndpointArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointArgs)(nil)).Elem()
}

type PrivateEndpointInput interface {
	pulumi.Input

	ToPrivateEndpointOutput() PrivateEndpointOutput
	ToPrivateEndpointOutputWithContext(ctx context.Context) PrivateEndpointOutput
}

func (*PrivateEndpoint) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpoint)(nil))
}

func (i *PrivateEndpoint) ToPrivateEndpointOutput() PrivateEndpointOutput {
	return i.ToPrivateEndpointOutputWithContext(context.Background())
}

func (i *PrivateEndpoint) ToPrivateEndpointOutputWithContext(ctx context.Context) PrivateEndpointOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateEndpointOutput)
}

type PrivateEndpointOutput struct {
	*pulumi.OutputState
}

func (PrivateEndpointOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpoint)(nil))
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
