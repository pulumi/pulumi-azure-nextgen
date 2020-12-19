// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The integration account.
// Latest API Version: 2019-05-01.
type IntegrationAccount struct {
	pulumi.CustomResourceState

	// The integration service environment.
	IntegrationServiceEnvironment IntegrationServiceEnvironmentResponsePtrOutput `pulumi:"integrationServiceEnvironment"`
	// The resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Gets the resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The sku.
	Sku IntegrationAccountSkuResponsePtrOutput `pulumi:"sku"`
	// The workflow state.
	State pulumi.StringPtrOutput `pulumi:"state"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Gets the resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewIntegrationAccount registers a new resource with the given unique name, arguments, and options.
func NewIntegrationAccount(ctx *pulumi.Context,
	name string, args *IntegrationAccountArgs, opts ...pulumi.ResourceOption) (*IntegrationAccount, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.IntegrationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'IntegrationAccountName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:logic/v20150801preview:IntegrationAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20160601:IntegrationAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20180701preview:IntegrationAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20190501:IntegrationAccount"),
		},
	})
	opts = append(opts, aliases)
	var resource IntegrationAccount
	err := ctx.RegisterResource("azure-nextgen:logic/latest:IntegrationAccount", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIntegrationAccount gets an existing IntegrationAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIntegrationAccount(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IntegrationAccountState, opts ...pulumi.ResourceOption) (*IntegrationAccount, error) {
	var resource IntegrationAccount
	err := ctx.ReadResource("azure-nextgen:logic/latest:IntegrationAccount", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IntegrationAccount resources.
type integrationAccountState struct {
	// The integration service environment.
	IntegrationServiceEnvironment *IntegrationServiceEnvironmentResponse `pulumi:"integrationServiceEnvironment"`
	// The resource location.
	Location *string `pulumi:"location"`
	// Gets the resource name.
	Name *string `pulumi:"name"`
	// The sku.
	Sku *IntegrationAccountSkuResponse `pulumi:"sku"`
	// The workflow state.
	State *string `pulumi:"state"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Gets the resource type.
	Type *string `pulumi:"type"`
}

type IntegrationAccountState struct {
	// The integration service environment.
	IntegrationServiceEnvironment IntegrationServiceEnvironmentResponsePtrInput
	// The resource location.
	Location pulumi.StringPtrInput
	// Gets the resource name.
	Name pulumi.StringPtrInput
	// The sku.
	Sku IntegrationAccountSkuResponsePtrInput
	// The workflow state.
	State pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// Gets the resource type.
	Type pulumi.StringPtrInput
}

func (IntegrationAccountState) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationAccountState)(nil)).Elem()
}

type integrationAccountArgs struct {
	// The integration account name.
	IntegrationAccountName string `pulumi:"integrationAccountName"`
	// The integration service environment.
	IntegrationServiceEnvironment *IntegrationServiceEnvironmentType `pulumi:"integrationServiceEnvironment"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The sku.
	Sku *IntegrationAccountSku `pulumi:"sku"`
	// The workflow state.
	State *string `pulumi:"state"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a IntegrationAccount resource.
type IntegrationAccountArgs struct {
	// The integration account name.
	IntegrationAccountName pulumi.StringInput
	// The integration service environment.
	IntegrationServiceEnvironment IntegrationServiceEnvironmentTypePtrInput
	// The resource location.
	Location pulumi.StringPtrInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The sku.
	Sku IntegrationAccountSkuPtrInput
	// The workflow state.
	State pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
}

func (IntegrationAccountArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationAccountArgs)(nil)).Elem()
}

type IntegrationAccountInput interface {
	pulumi.Input

	ToIntegrationAccountOutput() IntegrationAccountOutput
	ToIntegrationAccountOutputWithContext(ctx context.Context) IntegrationAccountOutput
}

func (*IntegrationAccount) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationAccount)(nil))
}

func (i *IntegrationAccount) ToIntegrationAccountOutput() IntegrationAccountOutput {
	return i.ToIntegrationAccountOutputWithContext(context.Background())
}

func (i *IntegrationAccount) ToIntegrationAccountOutputWithContext(ctx context.Context) IntegrationAccountOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IntegrationAccountOutput)
}

type IntegrationAccountOutput struct {
	*pulumi.OutputState
}

func (IntegrationAccountOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationAccount)(nil))
}

func (o IntegrationAccountOutput) ToIntegrationAccountOutput() IntegrationAccountOutput {
	return o
}

func (o IntegrationAccountOutput) ToIntegrationAccountOutputWithContext(ctx context.Context) IntegrationAccountOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IntegrationAccountOutput{})
}
