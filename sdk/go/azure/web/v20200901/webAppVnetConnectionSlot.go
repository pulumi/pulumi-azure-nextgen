// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Virtual Network information contract.
type WebAppVnetConnectionSlot struct {
	pulumi.CustomResourceState

	// A certificate file (.cer) blob containing the public key of the private key used to authenticate a
	// Point-To-Site VPN connection.
	CertBlob pulumi.StringPtrOutput `pulumi:"certBlob"`
	// The client certificate thumbprint.
	CertThumbprint pulumi.StringOutput `pulumi:"certThumbprint"`
	// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
	DnsServers pulumi.StringPtrOutput `pulumi:"dnsServers"`
	// Flag that is used to denote if this is VNET injection
	IsSwift pulumi.BoolPtrOutput `pulumi:"isSwift"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// <code>true</code> if a resync is required; otherwise, <code>false</code>.
	ResyncRequired pulumi.BoolOutput `pulumi:"resyncRequired"`
	// The routes that this Virtual Network connection uses.
	Routes VnetRouteResponseArrayOutput `pulumi:"routes"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The Virtual Network's resource ID.
	VnetResourceId pulumi.StringPtrOutput `pulumi:"vnetResourceId"`
}

// NewWebAppVnetConnectionSlot registers a new resource with the given unique name, arguments, and options.
func NewWebAppVnetConnectionSlot(ctx *pulumi.Context,
	name string, args *WebAppVnetConnectionSlotArgs, opts ...pulumi.ResourceOption) (*WebAppVnetConnectionSlot, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Slot == nil {
		return nil, errors.New("invalid value for required argument 'Slot'")
	}
	if args.VnetName == nil {
		return nil, errors.New("invalid value for required argument 'VnetName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebAppVnetConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppVnetConnectionSlot"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppVnetConnectionSlot
	err := ctx.RegisterResource("azure-nextgen:web/v20200901:WebAppVnetConnectionSlot", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppVnetConnectionSlot gets an existing WebAppVnetConnectionSlot resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppVnetConnectionSlot(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppVnetConnectionSlotState, opts ...pulumi.ResourceOption) (*WebAppVnetConnectionSlot, error) {
	var resource WebAppVnetConnectionSlot
	err := ctx.ReadResource("azure-nextgen:web/v20200901:WebAppVnetConnectionSlot", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppVnetConnectionSlot resources.
type webAppVnetConnectionSlotState struct {
	// A certificate file (.cer) blob containing the public key of the private key used to authenticate a
	// Point-To-Site VPN connection.
	CertBlob *string `pulumi:"certBlob"`
	// The client certificate thumbprint.
	CertThumbprint *string `pulumi:"certThumbprint"`
	// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
	DnsServers *string `pulumi:"dnsServers"`
	// Flag that is used to denote if this is VNET injection
	IsSwift *bool `pulumi:"isSwift"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// <code>true</code> if a resync is required; otherwise, <code>false</code>.
	ResyncRequired *bool `pulumi:"resyncRequired"`
	// The routes that this Virtual Network connection uses.
	Routes []VnetRouteResponse `pulumi:"routes"`
	// The system metadata relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The Virtual Network's resource ID.
	VnetResourceId *string `pulumi:"vnetResourceId"`
}

type WebAppVnetConnectionSlotState struct {
	// A certificate file (.cer) blob containing the public key of the private key used to authenticate a
	// Point-To-Site VPN connection.
	CertBlob pulumi.StringPtrInput
	// The client certificate thumbprint.
	CertThumbprint pulumi.StringPtrInput
	// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
	DnsServers pulumi.StringPtrInput
	// Flag that is used to denote if this is VNET injection
	IsSwift pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// <code>true</code> if a resync is required; otherwise, <code>false</code>.
	ResyncRequired pulumi.BoolPtrInput
	// The routes that this Virtual Network connection uses.
	Routes VnetRouteResponseArrayInput
	// The system metadata relating to this resource.
	SystemData SystemDataResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The Virtual Network's resource ID.
	VnetResourceId pulumi.StringPtrInput
}

func (WebAppVnetConnectionSlotState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppVnetConnectionSlotState)(nil)).Elem()
}

type webAppVnetConnectionSlotArgs struct {
	// A certificate file (.cer) blob containing the public key of the private key used to authenticate a
	// Point-To-Site VPN connection.
	CertBlob *string `pulumi:"certBlob"`
	// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
	DnsServers *string `pulumi:"dnsServers"`
	// Flag that is used to denote if this is VNET injection
	IsSwift *bool `pulumi:"isSwift"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
	Slot string `pulumi:"slot"`
	// Name of an existing Virtual Network.
	VnetName string `pulumi:"vnetName"`
	// The Virtual Network's resource ID.
	VnetResourceId *string `pulumi:"vnetResourceId"`
}

// The set of arguments for constructing a WebAppVnetConnectionSlot resource.
type WebAppVnetConnectionSlotArgs struct {
	// A certificate file (.cer) blob containing the public key of the private key used to authenticate a
	// Point-To-Site VPN connection.
	CertBlob pulumi.StringPtrInput
	// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
	DnsServers pulumi.StringPtrInput
	// Flag that is used to denote if this is VNET injection
	IsSwift pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the app.
	Name pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
	Slot pulumi.StringInput
	// Name of an existing Virtual Network.
	VnetName pulumi.StringInput
	// The Virtual Network's resource ID.
	VnetResourceId pulumi.StringPtrInput
}

func (WebAppVnetConnectionSlotArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppVnetConnectionSlotArgs)(nil)).Elem()
}

type WebAppVnetConnectionSlotInput interface {
	pulumi.Input

	ToWebAppVnetConnectionSlotOutput() WebAppVnetConnectionSlotOutput
	ToWebAppVnetConnectionSlotOutputWithContext(ctx context.Context) WebAppVnetConnectionSlotOutput
}

func (WebAppVnetConnectionSlot) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppVnetConnectionSlot)(nil)).Elem()
}

func (i WebAppVnetConnectionSlot) ToWebAppVnetConnectionSlotOutput() WebAppVnetConnectionSlotOutput {
	return i.ToWebAppVnetConnectionSlotOutputWithContext(context.Background())
}

func (i WebAppVnetConnectionSlot) ToWebAppVnetConnectionSlotOutputWithContext(ctx context.Context) WebAppVnetConnectionSlotOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppVnetConnectionSlotOutput)
}

type WebAppVnetConnectionSlotOutput struct {
	*pulumi.OutputState
}

func (WebAppVnetConnectionSlotOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppVnetConnectionSlotOutput)(nil)).Elem()
}

func (o WebAppVnetConnectionSlotOutput) ToWebAppVnetConnectionSlotOutput() WebAppVnetConnectionSlotOutput {
	return o
}

func (o WebAppVnetConnectionSlotOutput) ToWebAppVnetConnectionSlotOutputWithContext(ctx context.Context) WebAppVnetConnectionSlotOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppVnetConnectionSlotOutput{})
}
