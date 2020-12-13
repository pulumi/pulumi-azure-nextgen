// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160402

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
type Origin struct {
	pulumi.CustomResourceState

	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
	HostName pulumi.StringOutput `pulumi:"hostName"`
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort pulumi.IntPtrOutput `pulumi:"httpPort"`
	// The value of the https port. Must be between 1 and 65535.
	HttpsPort pulumi.IntPtrOutput `pulumi:"httpsPort"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning status of the origin.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource status of the origin.
	ResourceState pulumi.StringOutput `pulumi:"resourceState"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewOrigin registers a new resource with the given unique name, arguments, and options.
func NewOrigin(ctx *pulumi.Context,
	name string, args *OriginArgs, opts ...pulumi.ResourceOption) (*Origin, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EndpointName == nil {
		return nil, errors.New("invalid value for required argument 'EndpointName'")
	}
	if args.HostName == nil {
		return nil, errors.New("invalid value for required argument 'HostName'")
	}
	if args.OriginName == nil {
		return nil, errors.New("invalid value for required argument 'OriginName'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:Origin"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20150601:Origin"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20191231:Origin"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200331:Origin"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200415:Origin"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200901:Origin"),
		},
	})
	opts = append(opts, aliases)
	var resource Origin
	err := ctx.RegisterResource("azure-nextgen:cdn/v20160402:Origin", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetOrigin gets an existing Origin resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOrigin(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *OriginState, opts ...pulumi.ResourceOption) (*Origin, error) {
	var resource Origin
	err := ctx.ReadResource("azure-nextgen:cdn/v20160402:Origin", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Origin resources.
type originState struct {
	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
	HostName *string `pulumi:"hostName"`
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort *int `pulumi:"httpPort"`
	// The value of the https port. Must be between 1 and 65535.
	HttpsPort *int `pulumi:"httpsPort"`
	// Resource name
	Name *string `pulumi:"name"`
	// Provisioning status of the origin.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource status of the origin.
	ResourceState *string `pulumi:"resourceState"`
	// Resource type
	Type *string `pulumi:"type"`
}

type OriginState struct {
	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
	HostName pulumi.StringPtrInput
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort pulumi.IntPtrInput
	// The value of the https port. Must be between 1 and 65535.
	HttpsPort pulumi.IntPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Provisioning status of the origin.
	ProvisioningState pulumi.StringPtrInput
	// Resource status of the origin.
	ResourceState pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (OriginState) ElementType() reflect.Type {
	return reflect.TypeOf((*originState)(nil)).Elem()
}

type originArgs struct {
	// Name of the endpoint within the CDN profile.
	EndpointName string `pulumi:"endpointName"`
	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
	HostName string `pulumi:"hostName"`
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort *int `pulumi:"httpPort"`
	// The value of the HTTPS port. Must be between 1 and 65535.
	HttpsPort *int `pulumi:"httpsPort"`
	// Name of the origin, an arbitrary value but it needs to be unique under endpoint
	OriginName string `pulumi:"originName"`
	// Name of the CDN profile within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a Origin resource.
type OriginArgs struct {
	// Name of the endpoint within the CDN profile.
	EndpointName pulumi.StringInput
	// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
	HostName pulumi.StringInput
	// The value of the HTTP port. Must be between 1 and 65535.
	HttpPort pulumi.IntPtrInput
	// The value of the HTTPS port. Must be between 1 and 65535.
	HttpsPort pulumi.IntPtrInput
	// Name of the origin, an arbitrary value but it needs to be unique under endpoint
	OriginName pulumi.StringInput
	// Name of the CDN profile within the resource group.
	ProfileName pulumi.StringInput
	// Name of the resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
}

func (OriginArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*originArgs)(nil)).Elem()
}

type OriginInput interface {
	pulumi.Input

	ToOriginOutput() OriginOutput
	ToOriginOutputWithContext(ctx context.Context) OriginOutput
}

func (Origin) ElementType() reflect.Type {
	return reflect.TypeOf((*Origin)(nil)).Elem()
}

func (i Origin) ToOriginOutput() OriginOutput {
	return i.ToOriginOutputWithContext(context.Background())
}

func (i Origin) ToOriginOutputWithContext(ctx context.Context) OriginOutput {
	return pulumi.ToOutputWithContext(ctx, i).(OriginOutput)
}

type OriginOutput struct {
	*pulumi.OutputState
}

func (OriginOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*OriginOutput)(nil)).Elem()
}

func (o OriginOutput) ToOriginOutput() OriginOutput {
	return o
}

func (o OriginOutput) ToOriginOutputWithContext(ctx context.Context) OriginOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(OriginOutput{})
}
