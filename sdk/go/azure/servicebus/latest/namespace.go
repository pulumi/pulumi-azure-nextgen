// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of a namespace resource.
type Namespace struct {
	pulumi.CustomResourceState

	// The time the namespace was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The Geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// Identifier for Azure Insights metrics
	MetricId pulumi.StringOutput `pulumi:"metricId"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state of the namespace.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Endpoint you can use to perform Service Bus operations.
	ServiceBusEndpoint pulumi.StringOutput `pulumi:"serviceBusEndpoint"`
	// Properties of Sku
	Sku SBSkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// The time the namespace was updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewNamespace registers a new resource with the given unique name, arguments, and options.
func NewNamespace(ctx *pulumi.Context,
	name string, args *NamespaceArgs, opts ...pulumi.ResourceOption) (*Namespace, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20140901:Namespace"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20150801:Namespace"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20170401:Namespace"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20180101preview:Namespace"),
		},
	})
	opts = append(opts, aliases)
	var resource Namespace
	err := ctx.RegisterResource("azure-nextgen:servicebus/latest:Namespace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNamespace gets an existing Namespace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNamespace(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NamespaceState, opts ...pulumi.ResourceOption) (*Namespace, error) {
	var resource Namespace
	err := ctx.ReadResource("azure-nextgen:servicebus/latest:Namespace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Namespace resources.
type namespaceState struct {
	// The time the namespace was created.
	CreatedAt *string `pulumi:"createdAt"`
	// The Geo-location where the resource lives
	Location *string `pulumi:"location"`
	// Identifier for Azure Insights metrics
	MetricId *string `pulumi:"metricId"`
	// Resource name
	Name *string `pulumi:"name"`
	// Provisioning state of the namespace.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Endpoint you can use to perform Service Bus operations.
	ServiceBusEndpoint *string `pulumi:"serviceBusEndpoint"`
	// Properties of Sku
	Sku *SBSkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// The time the namespace was updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type NamespaceState struct {
	// The time the namespace was created.
	CreatedAt pulumi.StringPtrInput
	// The Geo-location where the resource lives
	Location pulumi.StringPtrInput
	// Identifier for Azure Insights metrics
	MetricId pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Provisioning state of the namespace.
	ProvisioningState pulumi.StringPtrInput
	// Endpoint you can use to perform Service Bus operations.
	ServiceBusEndpoint pulumi.StringPtrInput
	// Properties of Sku
	Sku SBSkuResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// The time the namespace was updated.
	UpdatedAt pulumi.StringPtrInput
}

func (NamespaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceState)(nil)).Elem()
}

type namespaceArgs struct {
	// The Geo-location where the resource lives
	Location string `pulumi:"location"`
	// The namespace name.
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Properties of Sku
	Sku *SBSku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Namespace resource.
type NamespaceArgs struct {
	// The Geo-location where the resource lives
	Location pulumi.StringInput
	// The namespace name.
	NamespaceName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Properties of Sku
	Sku SBSkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (NamespaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceArgs)(nil)).Elem()
}

type NamespaceInput interface {
	pulumi.Input

	ToNamespaceOutput() NamespaceOutput
	ToNamespaceOutputWithContext(ctx context.Context) NamespaceOutput
}

func (Namespace) ElementType() reflect.Type {
	return reflect.TypeOf((*Namespace)(nil)).Elem()
}

func (i Namespace) ToNamespaceOutput() NamespaceOutput {
	return i.ToNamespaceOutputWithContext(context.Background())
}

func (i Namespace) ToNamespaceOutputWithContext(ctx context.Context) NamespaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NamespaceOutput)
}

type NamespaceOutput struct {
	*pulumi.OutputState
}

func (NamespaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NamespaceOutput)(nil)).Elem()
}

func (o NamespaceOutput) ToNamespaceOutput() NamespaceOutput {
	return o
}

func (o NamespaceOutput) ToNamespaceOutputWithContext(ctx context.Context) NamespaceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NamespaceOutput{})
}
