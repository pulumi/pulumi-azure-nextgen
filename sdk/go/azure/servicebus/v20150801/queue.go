// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of queue Resource.
type Queue struct {
	pulumi.CustomResourceState

	// Last time a message was sent, or the last time there was a receive request to this queue.
	AccessedAt pulumi.StringOutput `pulumi:"accessedAt"`
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrOutput `pulumi:"autoDeleteOnIdle"`
	// Message Count Details.
	CountDetails MessageCountDetailsResponseOutput `pulumi:"countDetails"`
	// The exact time the message was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// A value that indicates whether this queue has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrOutput `pulumi:"deadLetteringOnMessageExpiration"`
	// The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrOutput `pulumi:"defaultMessageTimeToLive"`
	// TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrOutput `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// A value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrOutput `pulumi:"enableBatchedOperations"`
	// A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
	EnableExpress pulumi.BoolPtrOutput `pulumi:"enableExpress"`
	// A value that indicates whether the queue is to be partitioned across multiple message brokers.
	EnablePartitioning pulumi.BoolPtrOutput `pulumi:"enablePartitioning"`
	// Entity availability status for the queue.
	EntityAvailabilityStatus pulumi.StringPtrOutput `pulumi:"entityAvailabilityStatus"`
	// A value that indicates whether the message is accessible anonymously.
	IsAnonymousAccessible pulumi.BoolPtrOutput `pulumi:"isAnonymousAccessible"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
	LockDuration pulumi.StringPtrOutput `pulumi:"lockDuration"`
	// The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
	MaxDeliveryCount pulumi.IntPtrOutput `pulumi:"maxDeliveryCount"`
	// The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
	MaxSizeInMegabytes pulumi.IntPtrOutput `pulumi:"maxSizeInMegabytes"`
	// The number of messages in the queue.
	MessageCount pulumi.IntOutput `pulumi:"messageCount"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection pulumi.BoolPtrOutput `pulumi:"requiresDuplicateDetection"`
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession pulumi.BoolPtrOutput `pulumi:"requiresSession"`
	// The size of the queue, in bytes.
	SizeInBytes pulumi.IntOutput `pulumi:"sizeInBytes"`
	// Enumerates the possible values for the status of a messaging entity.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// A value that indicates whether the queue supports ordering.
	SupportOrdering pulumi.BoolPtrOutput `pulumi:"supportOrdering"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewQueue registers a new resource with the given unique name, arguments, and options.
func NewQueue(ctx *pulumi.Context,
	name string, args *QueueArgs, opts ...pulumi.ResourceOption) (*Queue, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.QueueName == nil {
		return nil, errors.New("invalid value for required argument 'QueueName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicebus/latest:Queue"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20140901:Queue"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20170401:Queue"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20180101preview:Queue"),
		},
	})
	opts = append(opts, aliases)
	var resource Queue
	err := ctx.RegisterResource("azure-nextgen:servicebus/v20150801:Queue", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetQueue gets an existing Queue resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetQueue(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *QueueState, opts ...pulumi.ResourceOption) (*Queue, error) {
	var resource Queue
	err := ctx.ReadResource("azure-nextgen:servicebus/v20150801:Queue", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Queue resources.
type queueState struct {
	// Last time a message was sent, or the last time there was a receive request to this queue.
	AccessedAt *string `pulumi:"accessedAt"`
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle *string `pulumi:"autoDeleteOnIdle"`
	// Message Count Details.
	CountDetails *MessageCountDetailsResponse `pulumi:"countDetails"`
	// The exact time the message was created.
	CreatedAt *string `pulumi:"createdAt"`
	// A value that indicates whether this queue has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration *bool `pulumi:"deadLetteringOnMessageExpiration"`
	// The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive *string `pulumi:"defaultMessageTimeToLive"`
	// TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow *string `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// A value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations *bool `pulumi:"enableBatchedOperations"`
	// A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
	EnableExpress *bool `pulumi:"enableExpress"`
	// A value that indicates whether the queue is to be partitioned across multiple message brokers.
	EnablePartitioning *bool `pulumi:"enablePartitioning"`
	// Entity availability status for the queue.
	EntityAvailabilityStatus *string `pulumi:"entityAvailabilityStatus"`
	// A value that indicates whether the message is accessible anonymously.
	IsAnonymousAccessible *bool `pulumi:"isAnonymousAccessible"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
	LockDuration *string `pulumi:"lockDuration"`
	// The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
	MaxDeliveryCount *int `pulumi:"maxDeliveryCount"`
	// The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
	MaxSizeInMegabytes *int `pulumi:"maxSizeInMegabytes"`
	// The number of messages in the queue.
	MessageCount *int `pulumi:"messageCount"`
	// Resource name
	Name *string `pulumi:"name"`
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection *bool `pulumi:"requiresDuplicateDetection"`
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession *bool `pulumi:"requiresSession"`
	// The size of the queue, in bytes.
	SizeInBytes *int `pulumi:"sizeInBytes"`
	// Enumerates the possible values for the status of a messaging entity.
	Status *string `pulumi:"status"`
	// A value that indicates whether the queue supports ordering.
	SupportOrdering *bool `pulumi:"supportOrdering"`
	// Resource type
	Type *string `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type QueueState struct {
	// Last time a message was sent, or the last time there was a receive request to this queue.
	AccessedAt pulumi.StringPtrInput
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrInput
	// Message Count Details.
	CountDetails MessageCountDetailsResponsePtrInput
	// The exact time the message was created.
	CreatedAt pulumi.StringPtrInput
	// A value that indicates whether this queue has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrInput
	// The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrInput
	// TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrInput
	// A value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrInput
	// A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
	EnableExpress pulumi.BoolPtrInput
	// A value that indicates whether the queue is to be partitioned across multiple message brokers.
	EnablePartitioning pulumi.BoolPtrInput
	// Entity availability status for the queue.
	EntityAvailabilityStatus pulumi.StringPtrInput
	// A value that indicates whether the message is accessible anonymously.
	IsAnonymousAccessible pulumi.BoolPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
	LockDuration pulumi.StringPtrInput
	// The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
	MaxDeliveryCount pulumi.IntPtrInput
	// The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
	MaxSizeInMegabytes pulumi.IntPtrInput
	// The number of messages in the queue.
	MessageCount pulumi.IntPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection pulumi.BoolPtrInput
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession pulumi.BoolPtrInput
	// The size of the queue, in bytes.
	SizeInBytes pulumi.IntPtrInput
	// Enumerates the possible values for the status of a messaging entity.
	Status pulumi.StringPtrInput
	// A value that indicates whether the queue supports ordering.
	SupportOrdering pulumi.BoolPtrInput
	// Resource type
	Type pulumi.StringPtrInput
	// The exact time the message was updated.
	UpdatedAt pulumi.StringPtrInput
}

func (QueueState) ElementType() reflect.Type {
	return reflect.TypeOf((*queueState)(nil)).Elem()
}

type queueArgs struct {
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle *string `pulumi:"autoDeleteOnIdle"`
	// A value that indicates whether this queue has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration *bool `pulumi:"deadLetteringOnMessageExpiration"`
	// The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive *string `pulumi:"defaultMessageTimeToLive"`
	// TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow *string `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// A value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations *bool `pulumi:"enableBatchedOperations"`
	// A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
	EnableExpress *bool `pulumi:"enableExpress"`
	// A value that indicates whether the queue is to be partitioned across multiple message brokers.
	EnablePartitioning *bool `pulumi:"enablePartitioning"`
	// Entity availability status for the queue.
	EntityAvailabilityStatus *string `pulumi:"entityAvailabilityStatus"`
	// A value that indicates whether the message is accessible anonymously.
	IsAnonymousAccessible *bool `pulumi:"isAnonymousAccessible"`
	// location of the resource.
	Location string `pulumi:"location"`
	// The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
	LockDuration *string `pulumi:"lockDuration"`
	// The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
	MaxDeliveryCount *int `pulumi:"maxDeliveryCount"`
	// The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
	MaxSizeInMegabytes *int `pulumi:"maxSizeInMegabytes"`
	// Queue name.
	Name *string `pulumi:"name"`
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// The queue name.
	QueueName string `pulumi:"queueName"`
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection *bool `pulumi:"requiresDuplicateDetection"`
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession *bool `pulumi:"requiresSession"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Enumerates the possible values for the status of a messaging entity.
	Status *string `pulumi:"status"`
	// A value that indicates whether the queue supports ordering.
	SupportOrdering *bool `pulumi:"supportOrdering"`
}

// The set of arguments for constructing a Queue resource.
type QueueArgs struct {
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrInput
	// A value that indicates whether this queue has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrInput
	// The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrInput
	// TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrInput
	// A value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrInput
	// A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
	EnableExpress pulumi.BoolPtrInput
	// A value that indicates whether the queue is to be partitioned across multiple message brokers.
	EnablePartitioning pulumi.BoolPtrInput
	// Entity availability status for the queue.
	EntityAvailabilityStatus EntityAvailabilityStatus
	// A value that indicates whether the message is accessible anonymously.
	IsAnonymousAccessible pulumi.BoolPtrInput
	// location of the resource.
	Location pulumi.StringInput
	// The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
	LockDuration pulumi.StringPtrInput
	// The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
	MaxDeliveryCount pulumi.IntPtrInput
	// The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
	MaxSizeInMegabytes pulumi.IntPtrInput
	// Queue name.
	Name pulumi.StringPtrInput
	// The namespace name
	NamespaceName pulumi.StringInput
	// The queue name.
	QueueName pulumi.StringInput
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection pulumi.BoolPtrInput
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession pulumi.BoolPtrInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Enumerates the possible values for the status of a messaging entity.
	Status EntityStatus
	// A value that indicates whether the queue supports ordering.
	SupportOrdering pulumi.BoolPtrInput
}

func (QueueArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*queueArgs)(nil)).Elem()
}

type QueueInput interface {
	pulumi.Input

	ToQueueOutput() QueueOutput
	ToQueueOutputWithContext(ctx context.Context) QueueOutput
}

func (*Queue) ElementType() reflect.Type {
	return reflect.TypeOf((*Queue)(nil))
}

func (i *Queue) ToQueueOutput() QueueOutput {
	return i.ToQueueOutputWithContext(context.Background())
}

func (i *Queue) ToQueueOutputWithContext(ctx context.Context) QueueOutput {
	return pulumi.ToOutputWithContext(ctx, i).(QueueOutput)
}

type QueueOutput struct {
	*pulumi.OutputState
}

func (QueueOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Queue)(nil))
}

func (o QueueOutput) ToQueueOutput() QueueOutput {
	return o
}

func (o QueueOutput) ToQueueOutputWithContext(ctx context.Context) QueueOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(QueueOutput{})
}
