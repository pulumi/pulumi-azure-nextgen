// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An ADP Data Pool.
type DataPool struct {
	pulumi.CustomResourceState

	// The Data Pool's data-plane ID
	DataPoolId pulumi.StringOutput `pulumi:"dataPoolId"`
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations DataPoolLocationResponseArrayOutput `pulumi:"locations"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets the status of the data pool at the time the operation was called.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDataPool registers a new resource with the given unique name, arguments, and options.
func NewDataPool(ctx *pulumi.Context,
	name string, args *DataPoolArgs, opts ...pulumi.ResourceOption) (*DataPool, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.DataPoolName == nil {
		return nil, errors.New("invalid value for required argument 'DataPoolName'")
	}
	if args.Locations == nil {
		return nil, errors.New("invalid value for required argument 'Locations'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource DataPool
	err := ctx.RegisterResource("azure-nextgen:autonomousdevelopmentplatform/v20200701preview:DataPool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataPool gets an existing DataPool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataPool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataPoolState, opts ...pulumi.ResourceOption) (*DataPool, error) {
	var resource DataPool
	err := ctx.ReadResource("azure-nextgen:autonomousdevelopmentplatform/v20200701preview:DataPool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataPool resources.
type dataPoolState struct {
	// The Data Pool's data-plane ID
	DataPoolId *string `pulumi:"dataPoolId"`
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations []DataPoolLocationResponse `pulumi:"locations"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Gets the status of the data pool at the time the operation was called.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type DataPoolState struct {
	// The Data Pool's data-plane ID
	DataPoolId pulumi.StringPtrInput
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations DataPoolLocationResponseArrayInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Gets the status of the data pool at the time the operation was called.
	ProvisioningState pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (DataPoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataPoolState)(nil)).Elem()
}

type dataPoolArgs struct {
	// The name of the ADP account.
	AccountName string `pulumi:"accountName"`
	// The name of the Data Pool.
	DataPoolName string `pulumi:"dataPoolName"`
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations []DataPoolLocation `pulumi:"locations"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DataPool resource.
type DataPoolArgs struct {
	// The name of the ADP account.
	AccountName pulumi.StringInput
	// The name of the Data Pool.
	DataPoolName pulumi.StringInput
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations DataPoolLocationArrayInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
}

func (DataPoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataPoolArgs)(nil)).Elem()
}

type DataPoolInput interface {
	pulumi.Input

	ToDataPoolOutput() DataPoolOutput
	ToDataPoolOutputWithContext(ctx context.Context) DataPoolOutput
}

func (DataPool) ElementType() reflect.Type {
	return reflect.TypeOf((*DataPool)(nil)).Elem()
}

func (i DataPool) ToDataPoolOutput() DataPoolOutput {
	return i.ToDataPoolOutputWithContext(context.Background())
}

func (i DataPool) ToDataPoolOutputWithContext(ctx context.Context) DataPoolOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DataPoolOutput)
}

type DataPoolOutput struct {
	*pulumi.OutputState
}

func (DataPoolOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DataPoolOutput)(nil)).Elem()
}

func (o DataPoolOutput) ToDataPoolOutput() DataPoolOutput {
	return o
}

func (o DataPoolOutput) ToDataPoolOutputWithContext(ctx context.Context) DataPoolOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DataPoolOutput{})
}
