// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Job Resource.
type Job struct {
	pulumi.CustomResourceState

	// Reason for cancellation.
	CancellationReason pulumi.StringOutput `pulumi:"cancellationReason"`
	// Delivery Info of Job.
	DeliveryInfo JobDeliveryInfoResponsePtrOutput `pulumi:"deliveryInfo"`
	// Delivery type of Job.
	DeliveryType pulumi.StringPtrOutput `pulumi:"deliveryType"`
	// Details of a job run. This field will only be sent for expand details filter.
	Details pulumi.AnyOutput `pulumi:"details"`
	// Top level error for the job.
	Error ErrorResponseOutput `pulumi:"error"`
	// Describes whether the job is cancellable or not.
	IsCancellable pulumi.BoolOutput `pulumi:"isCancellable"`
	// Flag to indicate cancellation of scheduled job.
	IsCancellableWithoutFee pulumi.BoolOutput `pulumi:"isCancellableWithoutFee"`
	// Describes whether the job is deletable or not.
	IsDeletable pulumi.BoolOutput `pulumi:"isDeletable"`
	// Describes whether the shipping address is editable or not.
	IsShippingAddressEditable pulumi.BoolOutput `pulumi:"isShippingAddressEditable"`
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location pulumi.StringOutput `pulumi:"location"`
	// Name of the object.
	Name pulumi.StringOutput `pulumi:"name"`
	// The sku type.
	Sku SkuResponseOutput `pulumi:"sku"`
	// Time at which the job was started in UTC ISO 8601 format.
	StartTime pulumi.StringOutput `pulumi:"startTime"`
	// Name of the stage which is in progress.
	Status pulumi.StringOutput `pulumi:"status"`
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Type of the object.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewJob registers a new resource with the given unique name, arguments, and options.
func NewJob(ctx *pulumi.Context,
	name string, args *JobArgs, opts ...pulumi.ResourceOption) (*Job, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.JobName == nil {
		return nil, errors.New("invalid value for required argument 'JobName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:databox/latest:Job"),
		},
		{
			Type: pulumi.String("azure-nextgen:databox/v20180101:Job"),
		},
		{
			Type: pulumi.String("azure-nextgen:databox/v20200401:Job"),
		},
		{
			Type: pulumi.String("azure-nextgen:databox/v20201101:Job"),
		},
	})
	opts = append(opts, aliases)
	var resource Job
	err := ctx.RegisterResource("azure-nextgen:databox/v20190901:Job", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJob gets an existing Job resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJob(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobState, opts ...pulumi.ResourceOption) (*Job, error) {
	var resource Job
	err := ctx.ReadResource("azure-nextgen:databox/v20190901:Job", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Job resources.
type jobState struct {
	// Reason for cancellation.
	CancellationReason *string `pulumi:"cancellationReason"`
	// Delivery Info of Job.
	DeliveryInfo *JobDeliveryInfoResponse `pulumi:"deliveryInfo"`
	// Delivery type of Job.
	DeliveryType *string `pulumi:"deliveryType"`
	// Details of a job run. This field will only be sent for expand details filter.
	Details interface{} `pulumi:"details"`
	// Top level error for the job.
	Error *ErrorResponse `pulumi:"error"`
	// Describes whether the job is cancellable or not.
	IsCancellable *bool `pulumi:"isCancellable"`
	// Flag to indicate cancellation of scheduled job.
	IsCancellableWithoutFee *bool `pulumi:"isCancellableWithoutFee"`
	// Describes whether the job is deletable or not.
	IsDeletable *bool `pulumi:"isDeletable"`
	// Describes whether the shipping address is editable or not.
	IsShippingAddressEditable *bool `pulumi:"isShippingAddressEditable"`
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location *string `pulumi:"location"`
	// Name of the object.
	Name *string `pulumi:"name"`
	// The sku type.
	Sku *SkuResponse `pulumi:"sku"`
	// Time at which the job was started in UTC ISO 8601 format.
	StartTime *string `pulumi:"startTime"`
	// Name of the stage which is in progress.
	Status *string `pulumi:"status"`
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags map[string]string `pulumi:"tags"`
	// Type of the object.
	Type *string `pulumi:"type"`
}

type JobState struct {
	// Reason for cancellation.
	CancellationReason pulumi.StringPtrInput
	// Delivery Info of Job.
	DeliveryInfo JobDeliveryInfoResponsePtrInput
	// Delivery type of Job.
	DeliveryType pulumi.StringPtrInput
	// Details of a job run. This field will only be sent for expand details filter.
	Details pulumi.Input
	// Top level error for the job.
	Error ErrorResponsePtrInput
	// Describes whether the job is cancellable or not.
	IsCancellable pulumi.BoolPtrInput
	// Flag to indicate cancellation of scheduled job.
	IsCancellableWithoutFee pulumi.BoolPtrInput
	// Describes whether the job is deletable or not.
	IsDeletable pulumi.BoolPtrInput
	// Describes whether the shipping address is editable or not.
	IsShippingAddressEditable pulumi.BoolPtrInput
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location pulumi.StringPtrInput
	// Name of the object.
	Name pulumi.StringPtrInput
	// The sku type.
	Sku SkuResponsePtrInput
	// Time at which the job was started in UTC ISO 8601 format.
	StartTime pulumi.StringPtrInput
	// Name of the stage which is in progress.
	Status pulumi.StringPtrInput
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags pulumi.StringMapInput
	// Type of the object.
	Type pulumi.StringPtrInput
}

func (JobState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobState)(nil)).Elem()
}

type jobArgs struct {
	// Delivery Info of Job.
	DeliveryInfo *JobDeliveryInfo `pulumi:"deliveryInfo"`
	// Delivery type of Job.
	DeliveryType *string `pulumi:"deliveryType"`
	// Details of a job run. This field will only be sent for expand details filter.
	Details interface{} `pulumi:"details"`
	// The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
	JobName string `pulumi:"jobName"`
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location string `pulumi:"location"`
	// The Resource Group Name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The sku type.
	Sku Sku `pulumi:"sku"`
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Job resource.
type JobArgs struct {
	// Delivery Info of Job.
	DeliveryInfo JobDeliveryInfoPtrInput
	// Delivery type of Job.
	DeliveryType pulumi.StringPtrInput
	// Details of a job run. This field will only be sent for expand details filter.
	Details pulumi.Input
	// The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
	JobName pulumi.StringInput
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location pulumi.StringInput
	// The Resource Group Name
	ResourceGroupName pulumi.StringInput
	// The sku type.
	Sku SkuInput
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags pulumi.StringMapInput
}

func (JobArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobArgs)(nil)).Elem()
}

type JobInput interface {
	pulumi.Input

	ToJobOutput() JobOutput
	ToJobOutputWithContext(ctx context.Context) JobOutput
}

func (Job) ElementType() reflect.Type {
	return reflect.TypeOf((*Job)(nil)).Elem()
}

func (i Job) ToJobOutput() JobOutput {
	return i.ToJobOutputWithContext(context.Background())
}

func (i Job) ToJobOutputWithContext(ctx context.Context) JobOutput {
	return pulumi.ToOutputWithContext(ctx, i).(JobOutput)
}

type JobOutput struct {
	*pulumi.OutputState
}

func (JobOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*JobOutput)(nil)).Elem()
}

func (o JobOutput) ToJobOutput() JobOutput {
	return o
}

func (o JobOutput) ToJobOutputWithContext(ctx context.Context) JobOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(JobOutput{})
}
