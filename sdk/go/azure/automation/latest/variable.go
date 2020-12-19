// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Definition of the variable.
// Latest API Version: 2015-10-31.
type Variable struct {
	pulumi.CustomResourceState

	// Gets or sets the creation time.
	CreationTime pulumi.StringPtrOutput `pulumi:"creationTime"`
	// Gets or sets the description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted pulumi.BoolPtrOutput `pulumi:"isEncrypted"`
	// Gets or sets the last modified time.
	LastModifiedTime pulumi.StringPtrOutput `pulumi:"lastModifiedTime"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Gets or sets the value of the variable.
	Value pulumi.StringPtrOutput `pulumi:"value"`
}

// NewVariable registers a new resource with the given unique name, arguments, and options.
func NewVariable(ctx *pulumi.Context,
	name string, args *VariableArgs, opts ...pulumi.ResourceOption) (*Variable, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AutomationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'AutomationAccountName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VariableName == nil {
		return nil, errors.New("invalid value for required argument 'VariableName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:automation/v20151031:Variable"),
		},
	})
	opts = append(opts, aliases)
	var resource Variable
	err := ctx.RegisterResource("azure-nextgen:automation/latest:Variable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVariable gets an existing Variable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVariable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VariableState, opts ...pulumi.ResourceOption) (*Variable, error) {
	var resource Variable
	err := ctx.ReadResource("azure-nextgen:automation/latest:Variable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Variable resources.
type variableState struct {
	// Gets or sets the creation time.
	CreationTime *string `pulumi:"creationTime"`
	// Gets or sets the description.
	Description *string `pulumi:"description"`
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted *bool `pulumi:"isEncrypted"`
	// Gets or sets the last modified time.
	LastModifiedTime *string `pulumi:"lastModifiedTime"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// Gets or sets the value of the variable.
	Value *string `pulumi:"value"`
}

type VariableState struct {
	// Gets or sets the creation time.
	CreationTime pulumi.StringPtrInput
	// Gets or sets the description.
	Description pulumi.StringPtrInput
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted pulumi.BoolPtrInput
	// Gets or sets the last modified time.
	LastModifiedTime pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// Gets or sets the value of the variable.
	Value pulumi.StringPtrInput
}

func (VariableState) ElementType() reflect.Type {
	return reflect.TypeOf((*variableState)(nil)).Elem()
}

type variableArgs struct {
	// The name of the automation account.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// Gets or sets the description of the variable.
	Description *string `pulumi:"description"`
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted *bool `pulumi:"isEncrypted"`
	// Gets or sets the name of the variable.
	Name string `pulumi:"name"`
	// Name of an Azure Resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets the value of the variable.
	Value *string `pulumi:"value"`
	// The variable name.
	VariableName string `pulumi:"variableName"`
}

// The set of arguments for constructing a Variable resource.
type VariableArgs struct {
	// The name of the automation account.
	AutomationAccountName pulumi.StringInput
	// Gets or sets the description of the variable.
	Description pulumi.StringPtrInput
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted pulumi.BoolPtrInput
	// Gets or sets the name of the variable.
	Name pulumi.StringInput
	// Name of an Azure Resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets the value of the variable.
	Value pulumi.StringPtrInput
	// The variable name.
	VariableName pulumi.StringInput
}

func (VariableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*variableArgs)(nil)).Elem()
}

type VariableInput interface {
	pulumi.Input

	ToVariableOutput() VariableOutput
	ToVariableOutputWithContext(ctx context.Context) VariableOutput
}

func (*Variable) ElementType() reflect.Type {
	return reflect.TypeOf((*Variable)(nil))
}

func (i *Variable) ToVariableOutput() VariableOutput {
	return i.ToVariableOutputWithContext(context.Background())
}

func (i *Variable) ToVariableOutputWithContext(ctx context.Context) VariableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VariableOutput)
}

type VariableOutput struct {
	*pulumi.OutputState
}

func (VariableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Variable)(nil))
}

func (o VariableOutput) ToVariableOutput() VariableOutput {
	return o
}

func (o VariableOutput) ToVariableOutputWithContext(ctx context.Context) VariableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VariableOutput{})
}
