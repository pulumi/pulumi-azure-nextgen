// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20140901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupQueue(ctx *pulumi.Context, args *LookupQueueArgs, opts ...pulumi.InvokeOption) (*LookupQueueResult, error) {
	var rv LookupQueueResult
	err := ctx.Invoke("azure-nextgen:servicebus/v20140901:getQueue", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupQueueArgs struct {
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// The queue name.
	QueueName string `pulumi:"queueName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Description of queue Resource.
type LookupQueueResult struct {
	// Last time a message was sent, or the last time there was a receive request to this queue.
	AccessedAt string `pulumi:"accessedAt"`
	// the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
	AutoDeleteOnIdle *string `pulumi:"autoDeleteOnIdle"`
	// Message Count Details.
	CountDetails MessageCountDetailsResponse `pulumi:"countDetails"`
	// The exact time the message was created.
	CreatedAt string `pulumi:"createdAt"`
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
	// Resource Id
	Id string `pulumi:"id"`
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
	MessageCount int `pulumi:"messageCount"`
	// Resource name
	Name string `pulumi:"name"`
	// A value indicating if this queue requires duplicate detection.
	RequiresDuplicateDetection *bool `pulumi:"requiresDuplicateDetection"`
	// A value that indicates whether the queue supports the concept of sessions.
	RequiresSession *bool `pulumi:"requiresSession"`
	// The size of the queue, in bytes.
	SizeInBytes int `pulumi:"sizeInBytes"`
	// Enumerates the possible values for the status of a messaging entity.
	Status *string `pulumi:"status"`
	// A value that indicates whether the queue supports ordering.
	SupportOrdering *bool `pulumi:"supportOrdering"`
	// Resource type
	Type string `pulumi:"type"`
	// The exact time the message was updated.
	UpdatedAt string `pulumi:"updatedAt"`
}
