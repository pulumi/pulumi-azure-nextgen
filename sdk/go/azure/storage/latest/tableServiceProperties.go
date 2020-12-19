// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The properties of a storage account’s Table service.
// Latest API Version: 2019-06-01.
type TableServiceProperties struct {
	pulumi.CustomResourceState

	// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
	Cors CorsRulesResponsePtrOutput `pulumi:"cors"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTableServiceProperties registers a new resource with the given unique name, arguments, and options.
func NewTableServiceProperties(ctx *pulumi.Context,
	name string, args *TableServicePropertiesArgs, opts ...pulumi.ResourceOption) (*TableServiceProperties, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.TableServiceName == nil {
		return nil, errors.New("invalid value for required argument 'TableServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storage/v20190601:TableServiceProperties"),
		},
		{
			Type: pulumi.String("azure-nextgen:storage/v20200801preview:TableServiceProperties"),
		},
	})
	opts = append(opts, aliases)
	var resource TableServiceProperties
	err := ctx.RegisterResource("azure-nextgen:storage/latest:TableServiceProperties", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTableServiceProperties gets an existing TableServiceProperties resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTableServiceProperties(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TableServicePropertiesState, opts ...pulumi.ResourceOption) (*TableServiceProperties, error) {
	var resource TableServiceProperties
	err := ctx.ReadResource("azure-nextgen:storage/latest:TableServiceProperties", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TableServiceProperties resources.
type tableServicePropertiesState struct {
	// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
	Cors *CorsRulesResponse `pulumi:"cors"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type TableServicePropertiesState struct {
	// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
	Cors CorsRulesResponsePtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (TableServicePropertiesState) ElementType() reflect.Type {
	return reflect.TypeOf((*tableServicePropertiesState)(nil)).Elem()
}

type tableServicePropertiesArgs struct {
	// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
	AccountName string `pulumi:"accountName"`
	// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
	Cors *CorsRules `pulumi:"cors"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Table Service within the specified storage account. Table Service Name must be 'default'
	TableServiceName string `pulumi:"tableServiceName"`
}

// The set of arguments for constructing a TableServiceProperties resource.
type TableServicePropertiesArgs struct {
	// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
	AccountName pulumi.StringInput
	// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
	Cors CorsRulesPtrInput
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the Table Service within the specified storage account. Table Service Name must be 'default'
	TableServiceName pulumi.StringInput
}

func (TableServicePropertiesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*tableServicePropertiesArgs)(nil)).Elem()
}

type TableServicePropertiesInput interface {
	pulumi.Input

	ToTableServicePropertiesOutput() TableServicePropertiesOutput
	ToTableServicePropertiesOutputWithContext(ctx context.Context) TableServicePropertiesOutput
}

func (*TableServiceProperties) ElementType() reflect.Type {
	return reflect.TypeOf((*TableServiceProperties)(nil))
}

func (i *TableServiceProperties) ToTableServicePropertiesOutput() TableServicePropertiesOutput {
	return i.ToTableServicePropertiesOutputWithContext(context.Background())
}

func (i *TableServiceProperties) ToTableServicePropertiesOutputWithContext(ctx context.Context) TableServicePropertiesOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TableServicePropertiesOutput)
}

type TableServicePropertiesOutput struct {
	*pulumi.OutputState
}

func (TableServicePropertiesOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TableServiceProperties)(nil))
}

func (o TableServicePropertiesOutput) ToTableServicePropertiesOutput() TableServicePropertiesOutput {
	return o
}

func (o TableServicePropertiesOutput) ToTableServicePropertiesOutputWithContext(ctx context.Context) TableServicePropertiesOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TableServicePropertiesOutput{})
}
