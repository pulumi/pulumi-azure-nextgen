// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Recipient Email details.
type NotificationRecipientEmail struct {
	pulumi.CustomResourceState

	// User Email subscribed to notification.
	Email pulumi.StringPtrOutput `pulumi:"email"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewNotificationRecipientEmail registers a new resource with the given unique name, arguments, and options.
func NewNotificationRecipientEmail(ctx *pulumi.Context,
	name string, args *NotificationRecipientEmailArgs, opts ...pulumi.ResourceOption) (*NotificationRecipientEmail, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Email == nil {
		return nil, errors.New("invalid value for required argument 'Email'")
	}
	if args.NotificationName == nil {
		return nil, errors.New("invalid value for required argument 'NotificationName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:NotificationRecipientEmail"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:NotificationRecipientEmail"),
		},
	})
	opts = append(opts, aliases)
	var resource NotificationRecipientEmail
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201:NotificationRecipientEmail", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNotificationRecipientEmail gets an existing NotificationRecipientEmail resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNotificationRecipientEmail(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NotificationRecipientEmailState, opts ...pulumi.ResourceOption) (*NotificationRecipientEmail, error) {
	var resource NotificationRecipientEmail
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201:NotificationRecipientEmail", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NotificationRecipientEmail resources.
type notificationRecipientEmailState struct {
	// User Email subscribed to notification.
	Email *string `pulumi:"email"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type NotificationRecipientEmailState struct {
	// User Email subscribed to notification.
	Email pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (NotificationRecipientEmailState) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRecipientEmailState)(nil)).Elem()
}

type notificationRecipientEmailArgs struct {
	// Email identifier.
	Email string `pulumi:"email"`
	// Notification Name Identifier.
	NotificationName string `pulumi:"notificationName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a NotificationRecipientEmail resource.
type NotificationRecipientEmailArgs struct {
	// Email identifier.
	Email pulumi.StringInput
	// Notification Name Identifier.
	NotificationName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (NotificationRecipientEmailArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRecipientEmailArgs)(nil)).Elem()
}

type NotificationRecipientEmailInput interface {
	pulumi.Input

	ToNotificationRecipientEmailOutput() NotificationRecipientEmailOutput
	ToNotificationRecipientEmailOutputWithContext(ctx context.Context) NotificationRecipientEmailOutput
}

func (*NotificationRecipientEmail) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRecipientEmail)(nil))
}

func (i *NotificationRecipientEmail) ToNotificationRecipientEmailOutput() NotificationRecipientEmailOutput {
	return i.ToNotificationRecipientEmailOutputWithContext(context.Background())
}

func (i *NotificationRecipientEmail) ToNotificationRecipientEmailOutputWithContext(ctx context.Context) NotificationRecipientEmailOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NotificationRecipientEmailOutput)
}

type NotificationRecipientEmailOutput struct {
	*pulumi.OutputState
}

func (NotificationRecipientEmailOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRecipientEmail)(nil))
}

func (o NotificationRecipientEmailOutput) ToNotificationRecipientEmailOutput() NotificationRecipientEmailOutput {
	return o
}

func (o NotificationRecipientEmailOutput) ToNotificationRecipientEmailOutputWithContext(ctx context.Context) NotificationRecipientEmailOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NotificationRecipientEmailOutput{})
}
