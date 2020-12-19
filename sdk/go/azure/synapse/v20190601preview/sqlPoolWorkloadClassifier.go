// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Workload classifier operations for a data warehouse
type SqlPoolWorkloadClassifier struct {
	pulumi.CustomResourceState

	// The workload classifier context.
	Context pulumi.StringPtrOutput `pulumi:"context"`
	// The workload classifier end time for classification.
	EndTime pulumi.StringPtrOutput `pulumi:"endTime"`
	// The workload classifier importance.
	Importance pulumi.StringPtrOutput `pulumi:"importance"`
	// The workload classifier label.
	Label pulumi.StringPtrOutput `pulumi:"label"`
	// The workload classifier member name.
	MemberName pulumi.StringOutput `pulumi:"memberName"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The workload classifier start time for classification.
	StartTime pulumi.StringPtrOutput `pulumi:"startTime"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSqlPoolWorkloadClassifier registers a new resource with the given unique name, arguments, and options.
func NewSqlPoolWorkloadClassifier(ctx *pulumi.Context,
	name string, args *SqlPoolWorkloadClassifierArgs, opts ...pulumi.ResourceOption) (*SqlPoolWorkloadClassifier, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.MemberName == nil {
		return nil, errors.New("invalid value for required argument 'MemberName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SqlPoolName == nil {
		return nil, errors.New("invalid value for required argument 'SqlPoolName'")
	}
	if args.WorkloadClassifierName == nil {
		return nil, errors.New("invalid value for required argument 'WorkloadClassifierName'")
	}
	if args.WorkloadGroupName == nil {
		return nil, errors.New("invalid value for required argument 'WorkloadGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	var resource SqlPoolWorkloadClassifier
	err := ctx.RegisterResource("azure-nextgen:synapse/v20190601preview:SqlPoolWorkloadClassifier", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSqlPoolWorkloadClassifier gets an existing SqlPoolWorkloadClassifier resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSqlPoolWorkloadClassifier(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SqlPoolWorkloadClassifierState, opts ...pulumi.ResourceOption) (*SqlPoolWorkloadClassifier, error) {
	var resource SqlPoolWorkloadClassifier
	err := ctx.ReadResource("azure-nextgen:synapse/v20190601preview:SqlPoolWorkloadClassifier", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SqlPoolWorkloadClassifier resources.
type sqlPoolWorkloadClassifierState struct {
	// The workload classifier context.
	Context *string `pulumi:"context"`
	// The workload classifier end time for classification.
	EndTime *string `pulumi:"endTime"`
	// The workload classifier importance.
	Importance *string `pulumi:"importance"`
	// The workload classifier label.
	Label *string `pulumi:"label"`
	// The workload classifier member name.
	MemberName *string `pulumi:"memberName"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The workload classifier start time for classification.
	StartTime *string `pulumi:"startTime"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type SqlPoolWorkloadClassifierState struct {
	// The workload classifier context.
	Context pulumi.StringPtrInput
	// The workload classifier end time for classification.
	EndTime pulumi.StringPtrInput
	// The workload classifier importance.
	Importance pulumi.StringPtrInput
	// The workload classifier label.
	Label pulumi.StringPtrInput
	// The workload classifier member name.
	MemberName pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The workload classifier start time for classification.
	StartTime pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (SqlPoolWorkloadClassifierState) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlPoolWorkloadClassifierState)(nil)).Elem()
}

type sqlPoolWorkloadClassifierArgs struct {
	// The workload classifier context.
	Context *string `pulumi:"context"`
	// The workload classifier end time for classification.
	EndTime *string `pulumi:"endTime"`
	// The workload classifier importance.
	Importance *string `pulumi:"importance"`
	// The workload classifier label.
	Label *string `pulumi:"label"`
	// The workload classifier member name.
	MemberName string `pulumi:"memberName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// SQL pool name
	SqlPoolName string `pulumi:"sqlPoolName"`
	// The workload classifier start time for classification.
	StartTime *string `pulumi:"startTime"`
	// The name of the workload classifier.
	WorkloadClassifierName string `pulumi:"workloadClassifierName"`
	// The name of the workload group.
	WorkloadGroupName string `pulumi:"workloadGroupName"`
	// The name of the workspace
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a SqlPoolWorkloadClassifier resource.
type SqlPoolWorkloadClassifierArgs struct {
	// The workload classifier context.
	Context pulumi.StringPtrInput
	// The workload classifier end time for classification.
	EndTime pulumi.StringPtrInput
	// The workload classifier importance.
	Importance pulumi.StringPtrInput
	// The workload classifier label.
	Label pulumi.StringPtrInput
	// The workload classifier member name.
	MemberName pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// SQL pool name
	SqlPoolName pulumi.StringInput
	// The workload classifier start time for classification.
	StartTime pulumi.StringPtrInput
	// The name of the workload classifier.
	WorkloadClassifierName pulumi.StringInput
	// The name of the workload group.
	WorkloadGroupName pulumi.StringInput
	// The name of the workspace
	WorkspaceName pulumi.StringInput
}

func (SqlPoolWorkloadClassifierArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlPoolWorkloadClassifierArgs)(nil)).Elem()
}

type SqlPoolWorkloadClassifierInput interface {
	pulumi.Input

	ToSqlPoolWorkloadClassifierOutput() SqlPoolWorkloadClassifierOutput
	ToSqlPoolWorkloadClassifierOutputWithContext(ctx context.Context) SqlPoolWorkloadClassifierOutput
}

func (*SqlPoolWorkloadClassifier) ElementType() reflect.Type {
	return reflect.TypeOf((*SqlPoolWorkloadClassifier)(nil))
}

func (i *SqlPoolWorkloadClassifier) ToSqlPoolWorkloadClassifierOutput() SqlPoolWorkloadClassifierOutput {
	return i.ToSqlPoolWorkloadClassifierOutputWithContext(context.Background())
}

func (i *SqlPoolWorkloadClassifier) ToSqlPoolWorkloadClassifierOutputWithContext(ctx context.Context) SqlPoolWorkloadClassifierOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SqlPoolWorkloadClassifierOutput)
}

type SqlPoolWorkloadClassifierOutput struct {
	*pulumi.OutputState
}

func (SqlPoolWorkloadClassifierOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SqlPoolWorkloadClassifier)(nil))
}

func (o SqlPoolWorkloadClassifierOutput) ToSqlPoolWorkloadClassifierOutput() SqlPoolWorkloadClassifierOutput {
	return o
}

func (o SqlPoolWorkloadClassifierOutput) ToSqlPoolWorkloadClassifierOutputWithContext(ctx context.Context) SqlPoolWorkloadClassifierOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SqlPoolWorkloadClassifierOutput{})
}
