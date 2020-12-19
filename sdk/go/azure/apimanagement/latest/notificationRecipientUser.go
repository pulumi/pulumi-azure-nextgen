// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Recipient User details.
// Latest API Version: 2019-12-01.
type NotificationRecipientUser struct {
	pulumi.CustomResourceState

	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// API Management UserId subscribed to notification.
	UserId pulumi.StringPtrOutput `pulumi:"userId"`
}

// NewNotificationRecipientUser registers a new resource with the given unique name, arguments, and options.
func NewNotificationRecipientUser(ctx *pulumi.Context,
	name string, args *NotificationRecipientUserArgs, opts ...pulumi.ResourceOption) (*NotificationRecipientUser, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
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
	if args.UserId == nil {
		return nil, errors.New("invalid value for required argument 'UserId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:NotificationRecipientUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:NotificationRecipientUser"),
		},
	})
	opts = append(opts, aliases)
	var resource NotificationRecipientUser
	err := ctx.RegisterResource("azure-nextgen:apimanagement/latest:NotificationRecipientUser", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNotificationRecipientUser gets an existing NotificationRecipientUser resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNotificationRecipientUser(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NotificationRecipientUserState, opts ...pulumi.ResourceOption) (*NotificationRecipientUser, error) {
	var resource NotificationRecipientUser
	err := ctx.ReadResource("azure-nextgen:apimanagement/latest:NotificationRecipientUser", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NotificationRecipientUser resources.
type notificationRecipientUserState struct {
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// API Management UserId subscribed to notification.
	UserId *string `pulumi:"userId"`
}

type NotificationRecipientUserState struct {
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// API Management UserId subscribed to notification.
	UserId pulumi.StringPtrInput
}

func (NotificationRecipientUserState) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRecipientUserState)(nil)).Elem()
}

type notificationRecipientUserArgs struct {
	// Notification Name Identifier.
	NotificationName string `pulumi:"notificationName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// User identifier. Must be unique in the current API Management service instance.
	UserId string `pulumi:"userId"`
}

// The set of arguments for constructing a NotificationRecipientUser resource.
type NotificationRecipientUserArgs struct {
	// Notification Name Identifier.
	NotificationName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// User identifier. Must be unique in the current API Management service instance.
	UserId pulumi.StringInput
}

func (NotificationRecipientUserArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRecipientUserArgs)(nil)).Elem()
}

type NotificationRecipientUserInput interface {
	pulumi.Input

	ToNotificationRecipientUserOutput() NotificationRecipientUserOutput
	ToNotificationRecipientUserOutputWithContext(ctx context.Context) NotificationRecipientUserOutput
}

func (*NotificationRecipientUser) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRecipientUser)(nil))
}

func (i *NotificationRecipientUser) ToNotificationRecipientUserOutput() NotificationRecipientUserOutput {
	return i.ToNotificationRecipientUserOutputWithContext(context.Background())
}

func (i *NotificationRecipientUser) ToNotificationRecipientUserOutputWithContext(ctx context.Context) NotificationRecipientUserOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NotificationRecipientUserOutput)
}

type NotificationRecipientUserOutput struct {
	*pulumi.OutputState
}

func (NotificationRecipientUserOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRecipientUser)(nil))
}

func (o NotificationRecipientUserOutput) ToNotificationRecipientUserOutput() NotificationRecipientUserOutput {
	return o
}

func (o NotificationRecipientUserOutput) ToNotificationRecipientUserOutputWithContext(ctx context.Context) NotificationRecipientUserOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NotificationRecipientUserOutput{})
}
