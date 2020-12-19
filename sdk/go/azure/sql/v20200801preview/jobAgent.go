// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure SQL job agent.
type JobAgent struct {
	pulumi.CustomResourceState

	// Resource ID of the database to store job metadata in.
	DatabaseId pulumi.StringOutput `pulumi:"databaseId"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name and tier of the SKU.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// The state of the job agent.
	State pulumi.StringOutput `pulumi:"state"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewJobAgent registers a new resource with the given unique name, arguments, and options.
func NewJobAgent(ctx *pulumi.Context,
	name string, args *JobAgentArgs, opts ...pulumi.ResourceOption) (*JobAgent, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DatabaseId == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseId'")
	}
	if args.JobAgentName == nil {
		return nil, errors.New("invalid value for required argument 'JobAgentName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20170301preview:JobAgent"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200202preview:JobAgent"),
		},
	})
	opts = append(opts, aliases)
	var resource JobAgent
	err := ctx.RegisterResource("azure-nextgen:sql/v20200801preview:JobAgent", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJobAgent gets an existing JobAgent resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJobAgent(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobAgentState, opts ...pulumi.ResourceOption) (*JobAgent, error) {
	var resource JobAgent
	err := ctx.ReadResource("azure-nextgen:sql/v20200801preview:JobAgent", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering JobAgent resources.
type jobAgentState struct {
	// Resource ID of the database to store job metadata in.
	DatabaseId *string `pulumi:"databaseId"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The name and tier of the SKU.
	Sku *SkuResponse `pulumi:"sku"`
	// The state of the job agent.
	State *string `pulumi:"state"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type JobAgentState struct {
	// Resource ID of the database to store job metadata in.
	DatabaseId pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The name and tier of the SKU.
	Sku SkuResponsePtrInput
	// The state of the job agent.
	State pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (JobAgentState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobAgentState)(nil)).Elem()
}

type jobAgentArgs struct {
	// Resource ID of the database to store job metadata in.
	DatabaseId string `pulumi:"databaseId"`
	// The name of the job agent to be created or updated.
	JobAgentName string `pulumi:"jobAgentName"`
	// Resource location.
	Location string `pulumi:"location"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The name and tier of the SKU.
	Sku *Sku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a JobAgent resource.
type JobAgentArgs struct {
	// Resource ID of the database to store job metadata in.
	DatabaseId pulumi.StringInput
	// The name of the job agent to be created or updated.
	JobAgentName pulumi.StringInput
	// Resource location.
	Location pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// The name and tier of the SKU.
	Sku SkuPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (JobAgentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobAgentArgs)(nil)).Elem()
}

type JobAgentInput interface {
	pulumi.Input

	ToJobAgentOutput() JobAgentOutput
	ToJobAgentOutputWithContext(ctx context.Context) JobAgentOutput
}

func (*JobAgent) ElementType() reflect.Type {
	return reflect.TypeOf((*JobAgent)(nil))
}

func (i *JobAgent) ToJobAgentOutput() JobAgentOutput {
	return i.ToJobAgentOutputWithContext(context.Background())
}

func (i *JobAgent) ToJobAgentOutputWithContext(ctx context.Context) JobAgentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(JobAgentOutput)
}

type JobAgentOutput struct {
	*pulumi.OutputState
}

func (JobAgentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*JobAgent)(nil))
}

func (o JobAgentOutput) ToJobAgentOutput() JobAgentOutput {
	return o
}

func (o JobAgentOutput) ToJobAgentOutputWithContext(ctx context.Context) JobAgentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(JobAgentOutput{})
}
