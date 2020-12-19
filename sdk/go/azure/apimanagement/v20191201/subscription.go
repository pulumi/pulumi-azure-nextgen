// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Subscription details.
type Subscription struct {
	pulumi.CustomResourceState

	// Determines whether tracing is enabled
	AllowTracing pulumi.BoolPtrOutput `pulumi:"allowTracing"`
	// Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	CreatedDate pulumi.StringOutput `pulumi:"createdDate"`
	// The name of the subscription, or null if the subscription has no name.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	EndDate pulumi.StringPtrOutput `pulumi:"endDate"`
	// Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	ExpirationDate pulumi.StringPtrOutput `pulumi:"expirationDate"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	NotificationDate pulumi.StringPtrOutput `pulumi:"notificationDate"`
	// The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
	OwnerId pulumi.StringPtrOutput `pulumi:"ownerId"`
	// Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	PrimaryKey pulumi.StringPtrOutput `pulumi:"primaryKey"`
	// Scope like /products/{productId} or /apis or /apis/{apiId}.
	Scope pulumi.StringOutput `pulumi:"scope"`
	// Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	SecondaryKey pulumi.StringPtrOutput `pulumi:"secondaryKey"`
	// Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	StartDate pulumi.StringPtrOutput `pulumi:"startDate"`
	// Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
	State pulumi.StringOutput `pulumi:"state"`
	// Optional subscription comment added by an administrator when the state is changed to the 'rejected'.
	StateComment pulumi.StringPtrOutput `pulumi:"stateComment"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSubscription registers a new resource with the given unique name, arguments, and options.
func NewSubscription(ctx *pulumi.Context,
	name string, args *SubscriptionArgs, opts ...pulumi.ResourceOption) (*Subscription, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Scope == nil {
		return nil, errors.New("invalid value for required argument 'Scope'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	if args.Sid == nil {
		return nil, errors.New("invalid value for required argument 'Sid'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20160707:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20161010:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:Subscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:Subscription"),
		},
	})
	opts = append(opts, aliases)
	var resource Subscription
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201:Subscription", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201:Subscription", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Subscription resources.
type subscriptionState struct {
	// Determines whether tracing is enabled
	AllowTracing *bool `pulumi:"allowTracing"`
	// Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	CreatedDate *string `pulumi:"createdDate"`
	// The name of the subscription, or null if the subscription has no name.
	DisplayName *string `pulumi:"displayName"`
	// Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	EndDate *string `pulumi:"endDate"`
	// Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	ExpirationDate *string `pulumi:"expirationDate"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	NotificationDate *string `pulumi:"notificationDate"`
	// The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
	OwnerId *string `pulumi:"ownerId"`
	// Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	PrimaryKey *string `pulumi:"primaryKey"`
	// Scope like /products/{productId} or /apis or /apis/{apiId}.
	Scope *string `pulumi:"scope"`
	// Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	SecondaryKey *string `pulumi:"secondaryKey"`
	// Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	StartDate *string `pulumi:"startDate"`
	// Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
	State *string `pulumi:"state"`
	// Optional subscription comment added by an administrator when the state is changed to the 'rejected'.
	StateComment *string `pulumi:"stateComment"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type SubscriptionState struct {
	// Determines whether tracing is enabled
	AllowTracing pulumi.BoolPtrInput
	// Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	CreatedDate pulumi.StringPtrInput
	// The name of the subscription, or null if the subscription has no name.
	DisplayName pulumi.StringPtrInput
	// Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	EndDate pulumi.StringPtrInput
	// Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	ExpirationDate pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	NotificationDate pulumi.StringPtrInput
	// The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
	OwnerId pulumi.StringPtrInput
	// Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	PrimaryKey pulumi.StringPtrInput
	// Scope like /products/{productId} or /apis or /apis/{apiId}.
	Scope pulumi.StringPtrInput
	// Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	SecondaryKey pulumi.StringPtrInput
	// Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	StartDate pulumi.StringPtrInput
	// Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
	State pulumi.StringPtrInput
	// Optional subscription comment added by an administrator when the state is changed to the 'rejected'.
	StateComment pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (SubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*subscriptionState)(nil)).Elem()
}

type subscriptionArgs struct {
	// Determines whether tracing can be enabled
	AllowTracing *bool `pulumi:"allowTracing"`
	// Determines the type of application which send the create user request. Default is legacy publisher portal.
	AppType *string `pulumi:"appType"`
	// Subscription name.
	DisplayName string `pulumi:"displayName"`
	// Notify change in Subscription State.
	//  - If false, do not send any email notification for change of state of subscription
	//  - If true, send email notification of change of state of subscription
	Notify *bool `pulumi:"notify"`
	// User (user id path) for whom subscription is being created in form /users/{userId}
	OwnerId *string `pulumi:"ownerId"`
	// Primary subscription key. If not specified during request key will be generated automatically.
	PrimaryKey *string `pulumi:"primaryKey"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Scope like /products/{productId} or /apis or /apis/{apiId}.
	Scope string `pulumi:"scope"`
	// Secondary subscription key. If not specified during request key will be generated automatically.
	SecondaryKey *string `pulumi:"secondaryKey"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
	Sid string `pulumi:"sid"`
	// Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
	State *string `pulumi:"state"`
}

// The set of arguments for constructing a Subscription resource.
type SubscriptionArgs struct {
	// Determines whether tracing can be enabled
	AllowTracing pulumi.BoolPtrInput
	// Determines the type of application which send the create user request. Default is legacy publisher portal.
	AppType pulumi.StringPtrInput
	// Subscription name.
	DisplayName pulumi.StringInput
	// Notify change in Subscription State.
	//  - If false, do not send any email notification for change of state of subscription
	//  - If true, send email notification of change of state of subscription
	Notify pulumi.BoolPtrInput
	// User (user id path) for whom subscription is being created in form /users/{userId}
	OwnerId pulumi.StringPtrInput
	// Primary subscription key. If not specified during request key will be generated automatically.
	PrimaryKey pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Scope like /products/{productId} or /apis or /apis/{apiId}.
	Scope pulumi.StringInput
	// Secondary subscription key. If not specified during request key will be generated automatically.
	SecondaryKey pulumi.StringPtrInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
	Sid pulumi.StringInput
	// Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
	State SubscriptionState
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
