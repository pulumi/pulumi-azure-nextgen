// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Single item in List or Get Event Hub operation
type EventHub struct {
	pulumi.CustomResourceState

	// Properties of capture description
	CaptureDescription CaptureDescriptionResponsePtrOutput `pulumi:"captureDescription"`
	// Exact time the Event Hub was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Number of days to retain the events for this Event Hub, value should be 1 to 7 days
	MessageRetentionInDays pulumi.IntPtrOutput `pulumi:"messageRetentionInDays"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
	PartitionCount pulumi.IntPtrOutput `pulumi:"partitionCount"`
	// Current number of shards on the Event Hub.
	PartitionIds pulumi.StringArrayOutput `pulumi:"partitionIds"`
	// Enumerates the possible values for the status of the Event Hub.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewEventHub registers a new resource with the given unique name, arguments, and options.
func NewEventHub(ctx *pulumi.Context,
	name string, args *EventHubArgs, opts ...pulumi.ResourceOption) (*EventHub, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EventHubName == nil {
		return nil, errors.New("invalid value for required argument 'EventHubName'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:eventhub/latest:EventHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20140901:EventHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20150801:EventHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20170401:EventHub"),
		},
	})
	opts = append(opts, aliases)
	var resource EventHub
	err := ctx.RegisterResource("azure-nextgen:eventhub/v20180101preview:EventHub", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEventHub gets an existing EventHub resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHub(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EventHubState, opts ...pulumi.ResourceOption) (*EventHub, error) {
	var resource EventHub
	err := ctx.ReadResource("azure-nextgen:eventhub/v20180101preview:EventHub", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EventHub resources.
type eventHubState struct {
	// Properties of capture description
	CaptureDescription *CaptureDescriptionResponse `pulumi:"captureDescription"`
	// Exact time the Event Hub was created.
	CreatedAt *string `pulumi:"createdAt"`
	// Number of days to retain the events for this Event Hub, value should be 1 to 7 days
	MessageRetentionInDays *int `pulumi:"messageRetentionInDays"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
	PartitionCount *int `pulumi:"partitionCount"`
	// Current number of shards on the Event Hub.
	PartitionIds []string `pulumi:"partitionIds"`
	// Enumerates the possible values for the status of the Event Hub.
	Status *string `pulumi:"status"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type EventHubState struct {
	// Properties of capture description
	CaptureDescription CaptureDescriptionResponsePtrInput
	// Exact time the Event Hub was created.
	CreatedAt pulumi.StringPtrInput
	// Number of days to retain the events for this Event Hub, value should be 1 to 7 days
	MessageRetentionInDays pulumi.IntPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
	PartitionCount pulumi.IntPtrInput
	// Current number of shards on the Event Hub.
	PartitionIds pulumi.StringArrayInput
	// Enumerates the possible values for the status of the Event Hub.
	Status pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The exact time the message was updated.
	UpdatedAt pulumi.StringPtrInput
}

func (EventHubState) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubState)(nil)).Elem()
}

type eventHubArgs struct {
	// Properties of capture description
	CaptureDescription *CaptureDescription `pulumi:"captureDescription"`
	// The Event Hub name
	EventHubName string `pulumi:"eventHubName"`
	// Number of days to retain the events for this Event Hub, value should be 1 to 7 days
	MessageRetentionInDays *int `pulumi:"messageRetentionInDays"`
	// The Namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
	PartitionCount *int `pulumi:"partitionCount"`
	// Name of the resource group within the azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Enumerates the possible values for the status of the Event Hub.
	Status *string `pulumi:"status"`
}

// The set of arguments for constructing a EventHub resource.
type EventHubArgs struct {
	// Properties of capture description
	CaptureDescription CaptureDescriptionPtrInput
	// The Event Hub name
	EventHubName pulumi.StringInput
	// Number of days to retain the events for this Event Hub, value should be 1 to 7 days
	MessageRetentionInDays pulumi.IntPtrInput
	// The Namespace name
	NamespaceName pulumi.StringInput
	// Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
	PartitionCount pulumi.IntPtrInput
	// Name of the resource group within the azure subscription.
	ResourceGroupName pulumi.StringInput
	// Enumerates the possible values for the status of the Event Hub.
	Status EntityStatus
}

func (EventHubArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubArgs)(nil)).Elem()
}

type EventHubInput interface {
	pulumi.Input

	ToEventHubOutput() EventHubOutput
	ToEventHubOutputWithContext(ctx context.Context) EventHubOutput
}

func (EventHub) ElementType() reflect.Type {
	return reflect.TypeOf((*EventHub)(nil)).Elem()
}

func (i EventHub) ToEventHubOutput() EventHubOutput {
	return i.ToEventHubOutputWithContext(context.Background())
}

func (i EventHub) ToEventHubOutputWithContext(ctx context.Context) EventHubOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EventHubOutput)
}

type EventHubOutput struct {
	*pulumi.OutputState
}

func (EventHubOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EventHubOutput)(nil)).Elem()
}

func (o EventHubOutput) ToEventHubOutput() EventHubOutput {
	return o
}

func (o EventHubOutput) ToEventHubOutputWithContext(ctx context.Context) EventHubOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(EventHubOutput{})
}
