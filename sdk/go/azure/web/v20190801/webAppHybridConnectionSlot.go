// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Hybrid Connection contract. This is used to configure a Hybrid Connection.
type WebAppHybridConnectionSlot struct {
	pulumi.CustomResourceState

	// The hostname of the endpoint.
	Hostname pulumi.StringPtrOutput `pulumi:"hostname"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The port of the endpoint.
	Port pulumi.IntPtrOutput `pulumi:"port"`
	// The ARM URI to the Service Bus relay.
	RelayArmUri pulumi.StringPtrOutput `pulumi:"relayArmUri"`
	// The name of the Service Bus relay.
	RelayName pulumi.StringPtrOutput `pulumi:"relayName"`
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName pulumi.StringPtrOutput `pulumi:"sendKeyName"`
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue pulumi.StringPtrOutput `pulumi:"sendKeyValue"`
	// The name of the Service Bus namespace.
	ServiceBusNamespace pulumi.StringPtrOutput `pulumi:"serviceBusNamespace"`
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix pulumi.StringPtrOutput `pulumi:"serviceBusSuffix"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebAppHybridConnectionSlot registers a new resource with the given unique name, arguments, and options.
func NewWebAppHybridConnectionSlot(ctx *pulumi.Context,
	name string, args *WebAppHybridConnectionSlotArgs, opts ...pulumi.ResourceOption) (*WebAppHybridConnectionSlot, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.RelayName == nil {
		return nil, errors.New("invalid value for required argument 'RelayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Slot == nil {
		return nil, errors.New("invalid value for required argument 'Slot'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppHybridConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppHybridConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppHybridConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppHybridConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppHybridConnectionSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:WebAppHybridConnectionSlot"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppHybridConnectionSlot
	err := ctx.RegisterResource("azure-nextgen:web/v20190801:WebAppHybridConnectionSlot", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppHybridConnectionSlot gets an existing WebAppHybridConnectionSlot resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppHybridConnectionSlot(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppHybridConnectionSlotState, opts ...pulumi.ResourceOption) (*WebAppHybridConnectionSlot, error) {
	var resource WebAppHybridConnectionSlot
	err := ctx.ReadResource("azure-nextgen:web/v20190801:WebAppHybridConnectionSlot", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppHybridConnectionSlot resources.
type webAppHybridConnectionSlotState struct {
	// The hostname of the endpoint.
	Hostname *string `pulumi:"hostname"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// The port of the endpoint.
	Port *int `pulumi:"port"`
	// The ARM URI to the Service Bus relay.
	RelayArmUri *string `pulumi:"relayArmUri"`
	// The name of the Service Bus relay.
	RelayName *string `pulumi:"relayName"`
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName *string `pulumi:"sendKeyName"`
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue *string `pulumi:"sendKeyValue"`
	// The name of the Service Bus namespace.
	ServiceBusNamespace *string `pulumi:"serviceBusNamespace"`
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix *string `pulumi:"serviceBusSuffix"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type WebAppHybridConnectionSlotState struct {
	// The hostname of the endpoint.
	Hostname pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// The port of the endpoint.
	Port pulumi.IntPtrInput
	// The ARM URI to the Service Bus relay.
	RelayArmUri pulumi.StringPtrInput
	// The name of the Service Bus relay.
	RelayName pulumi.StringPtrInput
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName pulumi.StringPtrInput
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue pulumi.StringPtrInput
	// The name of the Service Bus namespace.
	ServiceBusNamespace pulumi.StringPtrInput
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (WebAppHybridConnectionSlotState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppHybridConnectionSlotState)(nil)).Elem()
}

type webAppHybridConnectionSlotArgs struct {
	// The hostname of the endpoint.
	Hostname *string `pulumi:"hostname"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// The name of the web app.
	Name string `pulumi:"name"`
	// The namespace for this hybrid connection.
	NamespaceName string `pulumi:"namespaceName"`
	// The port of the endpoint.
	Port *int `pulumi:"port"`
	// The ARM URI to the Service Bus relay.
	RelayArmUri *string `pulumi:"relayArmUri"`
	// The name of the Service Bus relay.
	RelayName string `pulumi:"relayName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName *string `pulumi:"sendKeyName"`
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue *string `pulumi:"sendKeyValue"`
	// The name of the Service Bus namespace.
	ServiceBusNamespace *string `pulumi:"serviceBusNamespace"`
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix *string `pulumi:"serviceBusSuffix"`
	// The name of the slot for the web app.
	Slot string `pulumi:"slot"`
}

// The set of arguments for constructing a WebAppHybridConnectionSlot resource.
type WebAppHybridConnectionSlotArgs struct {
	// The hostname of the endpoint.
	Hostname pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// The name of the web app.
	Name pulumi.StringInput
	// The namespace for this hybrid connection.
	NamespaceName pulumi.StringInput
	// The port of the endpoint.
	Port pulumi.IntPtrInput
	// The ARM URI to the Service Bus relay.
	RelayArmUri pulumi.StringPtrInput
	// The name of the Service Bus relay.
	RelayName pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName pulumi.StringPtrInput
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue pulumi.StringPtrInput
	// The name of the Service Bus namespace.
	ServiceBusNamespace pulumi.StringPtrInput
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix pulumi.StringPtrInput
	// The name of the slot for the web app.
	Slot pulumi.StringInput
}

func (WebAppHybridConnectionSlotArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppHybridConnectionSlotArgs)(nil)).Elem()
}

type WebAppHybridConnectionSlotInput interface {
	pulumi.Input

	ToWebAppHybridConnectionSlotOutput() WebAppHybridConnectionSlotOutput
	ToWebAppHybridConnectionSlotOutputWithContext(ctx context.Context) WebAppHybridConnectionSlotOutput
}

func (*WebAppHybridConnectionSlot) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppHybridConnectionSlot)(nil))
}

func (i *WebAppHybridConnectionSlot) ToWebAppHybridConnectionSlotOutput() WebAppHybridConnectionSlotOutput {
	return i.ToWebAppHybridConnectionSlotOutputWithContext(context.Background())
}

func (i *WebAppHybridConnectionSlot) ToWebAppHybridConnectionSlotOutputWithContext(ctx context.Context) WebAppHybridConnectionSlotOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppHybridConnectionSlotOutput)
}

type WebAppHybridConnectionSlotOutput struct {
	*pulumi.OutputState
}

func (WebAppHybridConnectionSlotOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppHybridConnectionSlot)(nil))
}

func (o WebAppHybridConnectionSlotOutput) ToWebAppHybridConnectionSlotOutput() WebAppHybridConnectionSlotOutput {
	return o
}

func (o WebAppHybridConnectionSlotOutput) ToWebAppHybridConnectionSlotOutputWithContext(ctx context.Context) WebAppHybridConnectionSlotOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppHybridConnectionSlotOutput{})
}
