// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151031

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Definition of the automation account type.
type AutomationAccount struct {
	pulumi.CustomResourceState

	// Gets the creation time.
	CreationTime pulumi.StringOutput `pulumi:"creationTime"`
	// Gets or sets the description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Gets or sets the etag of the resource.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Gets or sets the last modified by.
	LastModifiedBy pulumi.StringPtrOutput `pulumi:"lastModifiedBy"`
	// Gets the last modified time.
	LastModifiedTime pulumi.StringOutput `pulumi:"lastModifiedTime"`
	// The Azure Region where the resource lives
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets the SKU of account.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// Gets status of account.
	State pulumi.StringOutput `pulumi:"state"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAutomationAccount registers a new resource with the given unique name, arguments, and options.
func NewAutomationAccount(ctx *pulumi.Context,
	name string, args *AutomationAccountArgs, opts ...pulumi.ResourceOption) (*AutomationAccount, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AutomationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'AutomationAccountName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:automation/latest:AutomationAccount"),
		},
	})
	opts = append(opts, aliases)
	var resource AutomationAccount
	err := ctx.RegisterResource("azure-nextgen:automation/v20151031:AutomationAccount", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAutomationAccount gets an existing AutomationAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAutomationAccount(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AutomationAccountState, opts ...pulumi.ResourceOption) (*AutomationAccount, error) {
	var resource AutomationAccount
	err := ctx.ReadResource("azure-nextgen:automation/v20151031:AutomationAccount", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AutomationAccount resources.
type automationAccountState struct {
	// Gets the creation time.
	CreationTime *string `pulumi:"creationTime"`
	// Gets or sets the description.
	Description *string `pulumi:"description"`
	// Gets or sets the etag of the resource.
	Etag *string `pulumi:"etag"`
	// Gets or sets the last modified by.
	LastModifiedBy *string `pulumi:"lastModifiedBy"`
	// Gets the last modified time.
	LastModifiedTime *string `pulumi:"lastModifiedTime"`
	// The Azure Region where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Gets or sets the SKU of account.
	Sku *SkuResponse `pulumi:"sku"`
	// Gets status of account.
	State *string `pulumi:"state"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type AutomationAccountState struct {
	// Gets the creation time.
	CreationTime pulumi.StringPtrInput
	// Gets or sets the description.
	Description pulumi.StringPtrInput
	// Gets or sets the etag of the resource.
	Etag pulumi.StringPtrInput
	// Gets or sets the last modified by.
	LastModifiedBy pulumi.StringPtrInput
	// Gets the last modified time.
	LastModifiedTime pulumi.StringPtrInput
	// The Azure Region where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Gets or sets the SKU of account.
	Sku SkuResponsePtrInput
	// Gets status of account.
	State pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (AutomationAccountState) ElementType() reflect.Type {
	return reflect.TypeOf((*automationAccountState)(nil)).Elem()
}

type automationAccountArgs struct {
	// The name of the automation account.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// Gets or sets the location of the resource.
	Location *string `pulumi:"location"`
	// Gets or sets name of the resource.
	Name *string `pulumi:"name"`
	// Name of an Azure Resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets account SKU.
	Sku *Sku `pulumi:"sku"`
	// Gets or sets the tags attached to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a AutomationAccount resource.
type AutomationAccountArgs struct {
	// The name of the automation account.
	AutomationAccountName pulumi.StringInput
	// Gets or sets the location of the resource.
	Location pulumi.StringPtrInput
	// Gets or sets name of the resource.
	Name pulumi.StringPtrInput
	// Name of an Azure Resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets account SKU.
	Sku SkuPtrInput
	// Gets or sets the tags attached to the resource.
	Tags pulumi.StringMapInput
}

func (AutomationAccountArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*automationAccountArgs)(nil)).Elem()
}

type AutomationAccountInput interface {
	pulumi.Input

	ToAutomationAccountOutput() AutomationAccountOutput
	ToAutomationAccountOutputWithContext(ctx context.Context) AutomationAccountOutput
}

func (*AutomationAccount) ElementType() reflect.Type {
	return reflect.TypeOf((*AutomationAccount)(nil))
}

func (i *AutomationAccount) ToAutomationAccountOutput() AutomationAccountOutput {
	return i.ToAutomationAccountOutputWithContext(context.Background())
}

func (i *AutomationAccount) ToAutomationAccountOutputWithContext(ctx context.Context) AutomationAccountOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AutomationAccountOutput)
}

type AutomationAccountOutput struct {
	*pulumi.OutputState
}

func (AutomationAccountOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AutomationAccount)(nil))
}

func (o AutomationAccountOutput) ToAutomationAccountOutput() AutomationAccountOutput {
	return o
}

func (o AutomationAccountOutput) ToAutomationAccountOutputWithContext(ctx context.Context) AutomationAccountOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AutomationAccountOutput{})
}
