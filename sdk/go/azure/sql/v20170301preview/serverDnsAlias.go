// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A server DNS alias.
type ServerDnsAlias struct {
	pulumi.CustomResourceState

	// The fully qualified DNS record for alias
	AzureDnsRecord pulumi.StringOutput `pulumi:"azureDnsRecord"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewServerDnsAlias registers a new resource with the given unique name, arguments, and options.
func NewServerDnsAlias(ctx *pulumi.Context,
	name string, args *ServerDnsAliasArgs, opts ...pulumi.ResourceOption) (*ServerDnsAlias, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DnsAliasName == nil {
		return nil, errors.New("invalid value for required argument 'DnsAliasName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20200202preview:ServerDnsAlias"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:ServerDnsAlias"),
		},
	})
	opts = append(opts, aliases)
	var resource ServerDnsAlias
	err := ctx.RegisterResource("azure-nextgen:sql/v20170301preview:ServerDnsAlias", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServerDnsAlias gets an existing ServerDnsAlias resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServerDnsAlias(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerDnsAliasState, opts ...pulumi.ResourceOption) (*ServerDnsAlias, error) {
	var resource ServerDnsAlias
	err := ctx.ReadResource("azure-nextgen:sql/v20170301preview:ServerDnsAlias", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServerDnsAlias resources.
type serverDnsAliasState struct {
	// The fully qualified DNS record for alias
	AzureDnsRecord *string `pulumi:"azureDnsRecord"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ServerDnsAliasState struct {
	// The fully qualified DNS record for alias
	AzureDnsRecord pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ServerDnsAliasState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverDnsAliasState)(nil)).Elem()
}

type serverDnsAliasArgs struct {
	// The name of the server DNS alias.
	DnsAliasName string `pulumi:"dnsAliasName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server that the alias is pointing to.
	ServerName string `pulumi:"serverName"`
}

// The set of arguments for constructing a ServerDnsAlias resource.
type ServerDnsAliasArgs struct {
	// The name of the server DNS alias.
	DnsAliasName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server that the alias is pointing to.
	ServerName pulumi.StringInput
}

func (ServerDnsAliasArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverDnsAliasArgs)(nil)).Elem()
}

type ServerDnsAliasInput interface {
	pulumi.Input

	ToServerDnsAliasOutput() ServerDnsAliasOutput
	ToServerDnsAliasOutputWithContext(ctx context.Context) ServerDnsAliasOutput
}

func (*ServerDnsAlias) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerDnsAlias)(nil))
}

func (i *ServerDnsAlias) ToServerDnsAliasOutput() ServerDnsAliasOutput {
	return i.ToServerDnsAliasOutputWithContext(context.Background())
}

func (i *ServerDnsAlias) ToServerDnsAliasOutputWithContext(ctx context.Context) ServerDnsAliasOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerDnsAliasOutput)
}

type ServerDnsAliasOutput struct {
	*pulumi.OutputState
}

func (ServerDnsAliasOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerDnsAlias)(nil))
}

func (o ServerDnsAliasOutput) ToServerDnsAliasOutput() ServerDnsAliasOutput {
	return o
}

func (o ServerDnsAliasOutput) ToServerDnsAliasOutputWithContext(ctx context.Context) ServerDnsAliasOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServerDnsAliasOutput{})
}
