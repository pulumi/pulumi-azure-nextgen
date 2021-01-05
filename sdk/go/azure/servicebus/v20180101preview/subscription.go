// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of subscription resource.
type Subscription struct {
	pulumi.CustomResourceState

	// Last time there was a receive request to this subscription.
	AccessedAt pulumi.StringOutput `pulumi:"accessedAt"`
	// ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrOutput `pulumi:"autoDeleteOnIdle"`
	// Message count details
	CountDetails MessageCountDetailsResponseOutput `pulumi:"countDetails"`
	// Exact time the message was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
	DeadLetteringOnFilterEvaluationExceptions pulumi.BoolPtrOutput `pulumi:"deadLetteringOnFilterEvaluationExceptions"`
	// Value that indicates whether a subscription has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrOutput `pulumi:"deadLetteringOnMessageExpiration"`
	// ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrOutput `pulumi:"defaultMessageTimeToLive"`
	// ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrOutput `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// Value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrOutput `pulumi:"enableBatchedOperations"`
	// Queue/Topic name to forward the Dead Letter message
	ForwardDeadLetteredMessagesTo pulumi.StringPtrOutput `pulumi:"forwardDeadLetteredMessagesTo"`
	// Queue/Topic name to forward the messages
	ForwardTo pulumi.StringPtrOutput `pulumi:"forwardTo"`
	// ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
	LockDuration pulumi.StringPtrOutput `pulumi:"lockDuration"`
	// Number of maximum deliveries.
	MaxDeliveryCount pulumi.IntPtrOutput `pulumi:"maxDeliveryCount"`
	// Number of messages.
	MessageCount pulumi.IntOutput `pulumi:"messageCount"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Value indicating if a subscription supports the concept of sessions.
	RequiresSession pulumi.BoolPtrOutput `pulumi:"requiresSession"`
	// Enumerates the possible values for the status of a messaging entity.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewSubscription registers a new resource with the given unique name, arguments, and options.
func NewSubscription(ctx *pulumi.Context,
	name string, args *SubscriptionArgs, opts ...pulumi.ResourceOption) (*Subscription, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SubscriptionName == nil {
		return nil, errors.New("invalid value for required argument 'SubscriptionName'")
	}
	if args.TopicName == nil {
		return nil, errors.New("invalid value for required argument 'TopicName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicebus/latest:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20140901:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20150801:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20170401:Subscription"),
		},
	})
	opts = append(opts, aliases)
	var resource Subscription
	err := ctx.RegisterResource("azure-nextgen:servicebus/v20180101preview:Subscription", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSubscription gets an existing Subscription resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubscription(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SubscriptionState, opts ...pulumi.ResourceOption) (*Subscription, error) {
	var resource Subscription
	err := ctx.ReadResource("azure-nextgen:servicebus/v20180101preview:Subscription", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Subscription resources.
type subscriptionState struct {
	// Last time there was a receive request to this subscription.
	AccessedAt *string `pulumi:"accessedAt"`
	// ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle *string `pulumi:"autoDeleteOnIdle"`
	// Message count details
	CountDetails *MessageCountDetailsResponse `pulumi:"countDetails"`
	// Exact time the message was created.
	CreatedAt *string `pulumi:"createdAt"`
	// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
	DeadLetteringOnFilterEvaluationExceptions *bool `pulumi:"deadLetteringOnFilterEvaluationExceptions"`
	// Value that indicates whether a subscription has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration *bool `pulumi:"deadLetteringOnMessageExpiration"`
	// ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive *string `pulumi:"defaultMessageTimeToLive"`
	// ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow *string `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// Value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations *bool `pulumi:"enableBatchedOperations"`
	// Queue/Topic name to forward the Dead Letter message
	ForwardDeadLetteredMessagesTo *string `pulumi:"forwardDeadLetteredMessagesTo"`
	// Queue/Topic name to forward the messages
	ForwardTo *string `pulumi:"forwardTo"`
	// ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
	LockDuration *string `pulumi:"lockDuration"`
	// Number of maximum deliveries.
	MaxDeliveryCount *int `pulumi:"maxDeliveryCount"`
	// Number of messages.
	MessageCount *int `pulumi:"messageCount"`
	// Resource name
	Name *string `pulumi:"name"`
	// Value indicating if a subscription supports the concept of sessions.
	RequiresSession *bool `pulumi:"requiresSession"`
	// Enumerates the possible values for the status of a messaging entity.
	Status *string `pulumi:"status"`
	// Resource type
	Type *string `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type SubscriptionState struct {
	// Last time there was a receive request to this subscription.
	AccessedAt pulumi.StringPtrInput
	// ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrInput
	// Message count details
	CountDetails MessageCountDetailsResponsePtrInput
	// Exact time the message was created.
	CreatedAt pulumi.StringPtrInput
	// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
	DeadLetteringOnFilterEvaluationExceptions pulumi.BoolPtrInput
	// Value that indicates whether a subscription has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrInput
	// ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrInput
	// ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrInput
	// Value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrInput
	// Queue/Topic name to forward the Dead Letter message
	ForwardDeadLetteredMessagesTo pulumi.StringPtrInput
	// Queue/Topic name to forward the messages
	ForwardTo pulumi.StringPtrInput
	// ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
	LockDuration pulumi.StringPtrInput
	// Number of maximum deliveries.
	MaxDeliveryCount pulumi.IntPtrInput
	// Number of messages.
	MessageCount pulumi.IntPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Value indicating if a subscription supports the concept of sessions.
	RequiresSession pulumi.BoolPtrInput
	// Enumerates the possible values for the status of a messaging entity.
	Status pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
	// The exact time the message was updated.
	UpdatedAt pulumi.StringPtrInput
}

func (SubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*subscriptionState)(nil)).Elem()
}

type subscriptionArgs struct {
	// ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle *string `pulumi:"autoDeleteOnIdle"`
	// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
	DeadLetteringOnFilterEvaluationExceptions *bool `pulumi:"deadLetteringOnFilterEvaluationExceptions"`
	// Value that indicates whether a subscription has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration *bool `pulumi:"deadLetteringOnMessageExpiration"`
	// ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive *string `pulumi:"defaultMessageTimeToLive"`
	// ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow *string `pulumi:"duplicateDetectionHistoryTimeWindow"`
	// Value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations *bool `pulumi:"enableBatchedOperations"`
	// Queue/Topic name to forward the Dead Letter message
	ForwardDeadLetteredMessagesTo *string `pulumi:"forwardDeadLetteredMessagesTo"`
	// Queue/Topic name to forward the messages
	ForwardTo *string `pulumi:"forwardTo"`
	// ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
	LockDuration *string `pulumi:"lockDuration"`
	// Number of maximum deliveries.
	MaxDeliveryCount *int `pulumi:"maxDeliveryCount"`
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Value indicating if a subscription supports the concept of sessions.
	RequiresSession *bool `pulumi:"requiresSession"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Enumerates the possible values for the status of a messaging entity.
	Status *string `pulumi:"status"`
	// The subscription name.
	SubscriptionName string `pulumi:"subscriptionName"`
	// The topic name.
	TopicName string `pulumi:"topicName"`
}

// The set of arguments for constructing a Subscription resource.
type SubscriptionArgs struct {
	// ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle pulumi.StringPtrInput
	// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
	DeadLetteringOnFilterEvaluationExceptions pulumi.BoolPtrInput
	// Value that indicates whether a subscription has dead letter support when a message expires.
	DeadLetteringOnMessageExpiration pulumi.BoolPtrInput
	// ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
	DefaultMessageTimeToLive pulumi.StringPtrInput
	// ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
	DuplicateDetectionHistoryTimeWindow pulumi.StringPtrInput
	// Value that indicates whether server-side batched operations are enabled.
	EnableBatchedOperations pulumi.BoolPtrInput
	// Queue/Topic name to forward the Dead Letter message
	ForwardDeadLetteredMessagesTo pulumi.StringPtrInput
	// Queue/Topic name to forward the messages
	ForwardTo pulumi.StringPtrInput
	// ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
	LockDuration pulumi.StringPtrInput
	// Number of maximum deliveries.
	MaxDeliveryCount pulumi.IntPtrInput
	// The namespace name
	NamespaceName pulumi.StringInput
	// Value indicating if a subscription supports the concept of sessions.
	RequiresSession pulumi.BoolPtrInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Enumerates the possible values for the status of a messaging entity.
	Status EntityStatus
	// The subscription name.
	SubscriptionName pulumi.StringInput
	// The topic name.
	TopicName pulumi.StringInput
}

func (SubscriptionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*subscriptionArgs)(nil)).Elem()
}

type SubscriptionInput interface {
	pulumi.Input

	ToSubscriptionOutput() SubscriptionOutput
	ToSubscriptionOutputWithContext(ctx context.Context) SubscriptionOutput
}

func (*Subscription) ElementType() reflect.Type {
	return reflect.TypeOf((*Subscription)(nil))
}

func (i *Subscription) ToSubscriptionOutput() SubscriptionOutput {
	return i.ToSubscriptionOutputWithContext(context.Background())
}

func (i *Subscription) ToSubscriptionOutputWithContext(ctx context.Context) SubscriptionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SubscriptionOutput)
}

type SubscriptionOutput struct {
	*pulumi.OutputState
}

func (SubscriptionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Subscription)(nil))
}

func (o SubscriptionOutput) ToSubscriptionOutput() SubscriptionOutput {
	return o
}

func (o SubscriptionOutput) ToSubscriptionOutputWithContext(ctx context.Context) SubscriptionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SubscriptionOutput{})
}