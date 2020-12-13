// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160402

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// CDN CustomDomain represents a mapping between a user specified domain name and a CDN endpoint. This is to use custom domain names to represent the URLs for branding purposes.
type CustomDomain struct {
	pulumi.CustomResourceState

	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringOutput `pulumi:"hostName"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning status of the custom domain.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource status of the custom domain.
	ResourceState pulumi.StringOutput `pulumi:"resourceState"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewCustomDomain registers a new resource with the given unique name, arguments, and options.
func NewCustomDomain(ctx *pulumi.Context,
	name string, args *CustomDomainArgs, opts ...pulumi.ResourceOption) (*CustomDomain, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CustomDomainName == nil {
		return nil, errors.New("invalid value for required argument 'CustomDomainName'")
	}
	if args.EndpointName == nil {
		return nil, errors.New("invalid value for required argument 'EndpointName'")
	}
	if args.HostName == nil {
		return nil, errors.New("invalid value for required argument 'HostName'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20150601:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20161002:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20170402:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20171012:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190415:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190615:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190615preview:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20191231:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200331:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200415:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200901:CustomDomain"),
		},
	})
	opts = append(opts, aliases)
	var resource CustomDomain
	err := ctx.RegisterResource("azure-nextgen:cdn/v20160402:CustomDomain", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomDomain gets an existing CustomDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomDomain(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomDomainState, opts ...pulumi.ResourceOption) (*CustomDomain, error) {
	var resource CustomDomain
	err := ctx.ReadResource("azure-nextgen:cdn/v20160402:CustomDomain", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomDomain resources.
type customDomainState struct {
	// The host name of the custom domain. Must be a domain name.
	HostName *string `pulumi:"hostName"`
	// Resource name
	Name *string `pulumi:"name"`
	// Provisioning status of the custom domain.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource status of the custom domain.
	ResourceState *string `pulumi:"resourceState"`
	// Resource type
	Type *string `pulumi:"type"`
}

type CustomDomainState struct {
	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Provisioning status of the custom domain.
	ProvisioningState pulumi.StringPtrInput
	// Resource status of the custom domain.
	ResourceState pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (CustomDomainState) ElementType() reflect.Type {
	return reflect.TypeOf((*customDomainState)(nil)).Elem()
}

type customDomainArgs struct {
	// Name of the custom domain within an endpoint.
	CustomDomainName string `pulumi:"customDomainName"`
	// Name of the endpoint within the CDN profile.
	EndpointName string `pulumi:"endpointName"`
	// The host name of the custom domain. Must be a domain name.
	HostName string `pulumi:"hostName"`
	// Name of the CDN profile within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a CustomDomain resource.
type CustomDomainArgs struct {
	// Name of the custom domain within an endpoint.
	CustomDomainName pulumi.StringInput
	// Name of the endpoint within the CDN profile.
	EndpointName pulumi.StringInput
	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringInput
	// Name of the CDN profile within the resource group.
	ProfileName pulumi.StringInput
	// Name of the resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
}

func (CustomDomainArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customDomainArgs)(nil)).Elem()
}

type CustomDomainInput interface {
	pulumi.Input

	ToCustomDomainOutput() CustomDomainOutput
	ToCustomDomainOutputWithContext(ctx context.Context) CustomDomainOutput
}

func (CustomDomain) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomDomain)(nil)).Elem()
}

func (i CustomDomain) ToCustomDomainOutput() CustomDomainOutput {
	return i.ToCustomDomainOutputWithContext(context.Background())
}

func (i CustomDomain) ToCustomDomainOutputWithContext(ctx context.Context) CustomDomainOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomDomainOutput)
}

type CustomDomainOutput struct {
	*pulumi.OutputState
}

func (CustomDomainOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomDomainOutput)(nil)).Elem()
}

func (o CustomDomainOutput) ToCustomDomainOutput() CustomDomainOutput {
	return o
}

func (o CustomDomainOutput) ToCustomDomainOutputWithContext(ctx context.Context) CustomDomainOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CustomDomainOutput{})
}
