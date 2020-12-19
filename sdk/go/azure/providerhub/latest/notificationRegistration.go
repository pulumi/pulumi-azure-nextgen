// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The notification registration definition.
// Latest API Version: 2020-11-20.
type NotificationRegistration struct {
	pulumi.CustomResourceState

	// The name of the resource
	Name       pulumi.StringOutput                              `pulumi:"name"`
	Properties NotificationRegistrationResponsePropertiesOutput `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewNotificationRegistration registers a new resource with the given unique name, arguments, and options.
func NewNotificationRegistration(ctx *pulumi.Context,
	name string, args *NotificationRegistrationArgs, opts ...pulumi.ResourceOption) (*NotificationRegistration, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.NotificationRegistrationName == nil {
		return nil, errors.New("invalid value for required argument 'NotificationRegistrationName'")
	}
	if args.ProviderNamespace == nil {
		return nil, errors.New("invalid value for required argument 'ProviderNamespace'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:providerhub/v20201120:NotificationRegistration"),
		},
	})
	opts = append(opts, aliases)
	var resource NotificationRegistration
	err := ctx.RegisterResource("azure-nextgen:providerhub/latest:NotificationRegistration", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNotificationRegistration gets an existing NotificationRegistration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNotificationRegistration(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NotificationRegistrationState, opts ...pulumi.ResourceOption) (*NotificationRegistration, error) {
	var resource NotificationRegistration
	err := ctx.ReadResource("azure-nextgen:providerhub/latest:NotificationRegistration", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NotificationRegistration resources.
type notificationRegistrationState struct {
	// The name of the resource
	Name       *string                                     `pulumi:"name"`
	Properties *NotificationRegistrationResponseProperties `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type NotificationRegistrationState struct {
	// The name of the resource
	Name       pulumi.StringPtrInput
	Properties NotificationRegistrationResponsePropertiesPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (NotificationRegistrationState) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRegistrationState)(nil)).Elem()
}

type notificationRegistrationArgs struct {
	// The notification registration.
	NotificationRegistrationName string `pulumi:"notificationRegistrationName"`
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace string `pulumi:"providerNamespace"`
}

// The set of arguments for constructing a NotificationRegistration resource.
type NotificationRegistrationArgs struct {
	// The notification registration.
	NotificationRegistrationName pulumi.StringInput
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace pulumi.StringInput
}

func (NotificationRegistrationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRegistrationArgs)(nil)).Elem()
}

type NotificationRegistrationInput interface {
	pulumi.Input

	ToNotificationRegistrationOutput() NotificationRegistrationOutput
	ToNotificationRegistrationOutputWithContext(ctx context.Context) NotificationRegistrationOutput
}

func (*NotificationRegistration) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRegistration)(nil))
}

func (i *NotificationRegistration) ToNotificationRegistrationOutput() NotificationRegistrationOutput {
	return i.ToNotificationRegistrationOutputWithContext(context.Background())
}

func (i *NotificationRegistration) ToNotificationRegistrationOutputWithContext(ctx context.Context) NotificationRegistrationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NotificationRegistrationOutput)
}

type NotificationRegistrationOutput struct {
	*pulumi.OutputState
}

func (NotificationRegistrationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NotificationRegistration)(nil))
}

func (o NotificationRegistrationOutput) ToNotificationRegistrationOutput() NotificationRegistrationOutput {
	return o
}

func (o NotificationRegistrationOutput) ToNotificationRegistrationOutputWithContext(ctx context.Context) NotificationRegistrationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NotificationRegistrationOutput{})
}
