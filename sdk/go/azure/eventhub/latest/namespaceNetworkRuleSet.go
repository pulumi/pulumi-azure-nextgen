// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of NetworkRuleSet resource.
type NamespaceNetworkRuleSet struct {
	pulumi.CustomResourceState

	// Default Action for Network Rule Set
	DefaultAction pulumi.StringPtrOutput `pulumi:"defaultAction"`
	// List of IpRules
	IpRules NWRuleSetIpRulesResponseArrayOutput `pulumi:"ipRules"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// List VirtualNetwork Rules
	VirtualNetworkRules NWRuleSetVirtualNetworkRulesResponseArrayOutput `pulumi:"virtualNetworkRules"`
}

// NewNamespaceNetworkRuleSet registers a new resource with the given unique name, arguments, and options.
func NewNamespaceNetworkRuleSet(ctx *pulumi.Context,
	name string, args *NamespaceNetworkRuleSetArgs, opts ...pulumi.ResourceOption) (*NamespaceNetworkRuleSet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20170401:NamespaceNetworkRuleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20180101preview:NamespaceNetworkRuleSet"),
		},
	})
	opts = append(opts, aliases)
	var resource NamespaceNetworkRuleSet
	err := ctx.RegisterResource("azure-nextgen:eventhub/latest:NamespaceNetworkRuleSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNamespaceNetworkRuleSet gets an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNamespaceNetworkRuleSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NamespaceNetworkRuleSetState, opts ...pulumi.ResourceOption) (*NamespaceNetworkRuleSet, error) {
	var resource NamespaceNetworkRuleSet
	err := ctx.ReadResource("azure-nextgen:eventhub/latest:NamespaceNetworkRuleSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NamespaceNetworkRuleSet resources.
type namespaceNetworkRuleSetState struct {
	// Default Action for Network Rule Set
	DefaultAction *string `pulumi:"defaultAction"`
	// List of IpRules
	IpRules []NWRuleSetIpRulesResponse `pulumi:"ipRules"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type.
	Type *string `pulumi:"type"`
	// List VirtualNetwork Rules
	VirtualNetworkRules []NWRuleSetVirtualNetworkRulesResponse `pulumi:"virtualNetworkRules"`
}

type NamespaceNetworkRuleSetState struct {
	// Default Action for Network Rule Set
	DefaultAction pulumi.StringPtrInput
	// List of IpRules
	IpRules NWRuleSetIpRulesResponseArrayInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// List VirtualNetwork Rules
	VirtualNetworkRules NWRuleSetVirtualNetworkRulesResponseArrayInput
}

func (NamespaceNetworkRuleSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceNetworkRuleSetState)(nil)).Elem()
}

type namespaceNetworkRuleSetArgs struct {
	// Default Action for Network Rule Set
	DefaultAction *string `pulumi:"defaultAction"`
	// List of IpRules
	IpRules []NWRuleSetIpRules `pulumi:"ipRules"`
	// The Namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the resource group within the azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// List VirtualNetwork Rules
	VirtualNetworkRules []NWRuleSetVirtualNetworkRules `pulumi:"virtualNetworkRules"`
}

// The set of arguments for constructing a NamespaceNetworkRuleSet resource.
type NamespaceNetworkRuleSetArgs struct {
	// Default Action for Network Rule Set
	DefaultAction pulumi.StringPtrInput
	// List of IpRules
	IpRules NWRuleSetIpRulesArrayInput
	// The Namespace name
	NamespaceName pulumi.StringInput
	// Name of the resource group within the azure subscription.
	ResourceGroupName pulumi.StringInput
	// List VirtualNetwork Rules
	VirtualNetworkRules NWRuleSetVirtualNetworkRulesArrayInput
}

func (NamespaceNetworkRuleSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceNetworkRuleSetArgs)(nil)).Elem()
}

type NamespaceNetworkRuleSetInput interface {
	pulumi.Input

	ToNamespaceNetworkRuleSetOutput() NamespaceNetworkRuleSetOutput
	ToNamespaceNetworkRuleSetOutputWithContext(ctx context.Context) NamespaceNetworkRuleSetOutput
}

func (NamespaceNetworkRuleSet) ElementType() reflect.Type {
	return reflect.TypeOf((*NamespaceNetworkRuleSet)(nil)).Elem()
}

func (i NamespaceNetworkRuleSet) ToNamespaceNetworkRuleSetOutput() NamespaceNetworkRuleSetOutput {
	return i.ToNamespaceNetworkRuleSetOutputWithContext(context.Background())
}

func (i NamespaceNetworkRuleSet) ToNamespaceNetworkRuleSetOutputWithContext(ctx context.Context) NamespaceNetworkRuleSetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NamespaceNetworkRuleSetOutput)
}

type NamespaceNetworkRuleSetOutput struct {
	*pulumi.OutputState
}

func (NamespaceNetworkRuleSetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NamespaceNetworkRuleSetOutput)(nil)).Elem()
}

func (o NamespaceNetworkRuleSetOutput) ToNamespaceNetworkRuleSetOutput() NamespaceNetworkRuleSetOutput {
	return o
}

func (o NamespaceNetworkRuleSetOutput) ToNamespaceNetworkRuleSetOutputWithContext(ctx context.Context) NamespaceNetworkRuleSetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NamespaceNetworkRuleSetOutput{})
}
