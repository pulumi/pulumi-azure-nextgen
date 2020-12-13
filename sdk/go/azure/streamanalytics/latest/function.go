// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A function object, containing all information associated with the named function. All functions are contained under a streaming job.
type Function struct {
	pulumi.CustomResourceState

	// Resource name
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The properties that are associated with a function.
	Properties ScalarFunctionPropertiesResponseOutput `pulumi:"properties"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewFunction registers a new resource with the given unique name, arguments, and options.
func NewFunction(ctx *pulumi.Context,
	name string, args *FunctionArgs, opts ...pulumi.ResourceOption) (*Function, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FunctionName == nil {
		return nil, errors.New("invalid value for required argument 'FunctionName'")
	}
	if args.JobName == nil {
		return nil, errors.New("invalid value for required argument 'JobName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:streamanalytics/v20160301:Function"),
		},
		{
			Type: pulumi.String("azure-nextgen:streamanalytics/v20170401preview:Function"),
		},
	})
	opts = append(opts, aliases)
	var resource Function
	err := ctx.RegisterResource("azure-nextgen:streamanalytics/latest:Function", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFunction gets an existing Function resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFunction(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FunctionState, opts ...pulumi.ResourceOption) (*Function, error) {
	var resource Function
	err := ctx.ReadResource("azure-nextgen:streamanalytics/latest:Function", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Function resources.
type functionState struct {
	// Resource name
	Name *string `pulumi:"name"`
	// The properties that are associated with a function.
	Properties *ScalarFunctionPropertiesResponse `pulumi:"properties"`
	// Resource type
	Type *string `pulumi:"type"`
}

type FunctionState struct {
	// Resource name
	Name pulumi.StringPtrInput
	// The properties that are associated with a function.
	Properties ScalarFunctionPropertiesResponsePtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (FunctionState) ElementType() reflect.Type {
	return reflect.TypeOf((*functionState)(nil)).Elem()
}

type functionArgs struct {
	// The name of the function.
	FunctionName string `pulumi:"functionName"`
	// The name of the streaming job.
	JobName string `pulumi:"jobName"`
	// Resource name
	Name *string `pulumi:"name"`
	// The properties that are associated with a function.
	Properties *ScalarFunctionProperties `pulumi:"properties"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a Function resource.
type FunctionArgs struct {
	// The name of the function.
	FunctionName pulumi.StringInput
	// The name of the streaming job.
	JobName pulumi.StringInput
	// Resource name
	Name pulumi.StringPtrInput
	// The properties that are associated with a function.
	Properties ScalarFunctionPropertiesPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
}

func (FunctionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*functionArgs)(nil)).Elem()
}

type FunctionInput interface {
	pulumi.Input

	ToFunctionOutput() FunctionOutput
	ToFunctionOutputWithContext(ctx context.Context) FunctionOutput
}

func (Function) ElementType() reflect.Type {
	return reflect.TypeOf((*Function)(nil)).Elem()
}

func (i Function) ToFunctionOutput() FunctionOutput {
	return i.ToFunctionOutputWithContext(context.Background())
}

func (i Function) ToFunctionOutputWithContext(ctx context.Context) FunctionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(FunctionOutput)
}

type FunctionOutput struct {
	*pulumi.OutputState
}

func (FunctionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*FunctionOutput)(nil)).Elem()
}

func (o FunctionOutput) ToFunctionOutput() FunctionOutput {
	return o
}

func (o FunctionOutput) ToFunctionOutputWithContext(ctx context.Context) FunctionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(FunctionOutput{})
}
