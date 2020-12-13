// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type VMwareCollector struct {
	pulumi.CustomResourceState

	ETag       pulumi.StringPtrOutput            `pulumi:"eTag"`
	Name       pulumi.StringOutput               `pulumi:"name"`
	Properties CollectorPropertiesResponseOutput `pulumi:"properties"`
	Type       pulumi.StringOutput               `pulumi:"type"`
}

// NewVMwareCollector registers a new resource with the given unique name, arguments, and options.
func NewVMwareCollector(ctx *pulumi.Context,
	name string, args *VMwareCollectorArgs, opts ...pulumi.ResourceOption) (*VMwareCollector, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProjectName == nil {
		return nil, errors.New("invalid value for required argument 'ProjectName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VmWareCollectorName == nil {
		return nil, errors.New("invalid value for required argument 'VmWareCollectorName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:migrate/latest:VMwareCollector"),
		},
	})
	opts = append(opts, aliases)
	var resource VMwareCollector
	err := ctx.RegisterResource("azure-nextgen:migrate/v20191001:VMwareCollector", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVMwareCollector gets an existing VMwareCollector resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVMwareCollector(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VMwareCollectorState, opts ...pulumi.ResourceOption) (*VMwareCollector, error) {
	var resource VMwareCollector
	err := ctx.ReadResource("azure-nextgen:migrate/v20191001:VMwareCollector", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VMwareCollector resources.
type vmwareCollectorState struct {
	ETag       *string                      `pulumi:"eTag"`
	Name       *string                      `pulumi:"name"`
	Properties *CollectorPropertiesResponse `pulumi:"properties"`
	Type       *string                      `pulumi:"type"`
}

type VMwareCollectorState struct {
	ETag       pulumi.StringPtrInput
	Name       pulumi.StringPtrInput
	Properties CollectorPropertiesResponsePtrInput
	Type       pulumi.StringPtrInput
}

func (VMwareCollectorState) ElementType() reflect.Type {
	return reflect.TypeOf((*vmwareCollectorState)(nil)).Elem()
}

type vmwareCollectorArgs struct {
	ETag *string `pulumi:"eTag"`
	// Name of the Azure Migrate project.
	ProjectName string               `pulumi:"projectName"`
	Properties  *CollectorProperties `pulumi:"properties"`
	// Name of the Azure Resource Group that project is part of.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Unique name of a VMware collector within a project.
	VmWareCollectorName string `pulumi:"vmWareCollectorName"`
}

// The set of arguments for constructing a VMwareCollector resource.
type VMwareCollectorArgs struct {
	ETag pulumi.StringPtrInput
	// Name of the Azure Migrate project.
	ProjectName pulumi.StringInput
	Properties  CollectorPropertiesPtrInput
	// Name of the Azure Resource Group that project is part of.
	ResourceGroupName pulumi.StringInput
	// Unique name of a VMware collector within a project.
	VmWareCollectorName pulumi.StringInput
}

func (VMwareCollectorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*vmwareCollectorArgs)(nil)).Elem()
}

type VMwareCollectorInput interface {
	pulumi.Input

	ToVMwareCollectorOutput() VMwareCollectorOutput
	ToVMwareCollectorOutputWithContext(ctx context.Context) VMwareCollectorOutput
}

func (VMwareCollector) ElementType() reflect.Type {
	return reflect.TypeOf((*VMwareCollector)(nil)).Elem()
}

func (i VMwareCollector) ToVMwareCollectorOutput() VMwareCollectorOutput {
	return i.ToVMwareCollectorOutputWithContext(context.Background())
}

func (i VMwareCollector) ToVMwareCollectorOutputWithContext(ctx context.Context) VMwareCollectorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VMwareCollectorOutput)
}

type VMwareCollectorOutput struct {
	*pulumi.OutputState
}

func (VMwareCollectorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VMwareCollectorOutput)(nil)).Elem()
}

func (o VMwareCollectorOutput) ToVMwareCollectorOutput() VMwareCollectorOutput {
	return o
}

func (o VMwareCollectorOutput) ToVMwareCollectorOutputWithContext(ctx context.Context) VMwareCollectorOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VMwareCollectorOutput{})
}
