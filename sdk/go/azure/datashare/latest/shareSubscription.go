// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A share subscription data transfer object.
type ShareSubscription struct {
	pulumi.CustomResourceState

	// Time at which the share subscription was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The invitation id.
	InvitationId pulumi.StringOutput `pulumi:"invitationId"`
	// Name of the azure resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Email of the provider who created the resource
	ProviderEmail pulumi.StringOutput `pulumi:"providerEmail"`
	// Name of the provider who created the resource
	ProviderName pulumi.StringOutput `pulumi:"providerName"`
	// Tenant name of the provider who created the resource
	ProviderTenantName pulumi.StringOutput `pulumi:"providerTenantName"`
	// Provisioning state of the share subscription
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Description of share
	ShareDescription pulumi.StringOutput `pulumi:"shareDescription"`
	// Kind of share
	ShareKind pulumi.StringOutput `pulumi:"shareKind"`
	// Name of the share
	ShareName pulumi.StringOutput `pulumi:"shareName"`
	// Gets the current status of share subscription.
	ShareSubscriptionStatus pulumi.StringOutput `pulumi:"shareSubscriptionStatus"`
	// Terms of a share
	ShareTerms pulumi.StringOutput `pulumi:"shareTerms"`
	// Source share location.
	SourceShareLocation pulumi.StringOutput `pulumi:"sourceShareLocation"`
	// Type of the azure resource
	Type pulumi.StringOutput `pulumi:"type"`
	// Email of the user who created the resource
	UserEmail pulumi.StringOutput `pulumi:"userEmail"`
	// Name of the user who created the resource
	UserName pulumi.StringOutput `pulumi:"userName"`
}

// NewShareSubscription registers a new resource with the given unique name, arguments, and options.
func NewShareSubscription(ctx *pulumi.Context,
	name string, args *ShareSubscriptionArgs, opts ...pulumi.ResourceOption) (*ShareSubscription, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.InvitationId == nil {
		return nil, errors.New("invalid value for required argument 'InvitationId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ShareSubscriptionName == nil {
		return nil, errors.New("invalid value for required argument 'ShareSubscriptionName'")
	}
	if args.SourceShareLocation == nil {
		return nil, errors.New("invalid value for required argument 'SourceShareLocation'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datashare/v20181101preview:ShareSubscription"),
		},
		{
			Type: pulumi.String("azure-nextgen:datashare/v20191101:ShareSubscription"),
		},
	})
	opts = append(opts, aliases)
	var resource ShareSubscription
	err := ctx.RegisterResource("azure-nextgen:datashare/latest:ShareSubscription", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetShareSubscription gets an existing ShareSubscription resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetShareSubscription(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ShareSubscriptionState, opts ...pulumi.ResourceOption) (*ShareSubscription, error) {
	var resource ShareSubscription
	err := ctx.ReadResource("azure-nextgen:datashare/latest:ShareSubscription", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ShareSubscription resources.
type shareSubscriptionState struct {
	// Time at which the share subscription was created.
	CreatedAt *string `pulumi:"createdAt"`
	// The invitation id.
	InvitationId *string `pulumi:"invitationId"`
	// Name of the azure resource
	Name *string `pulumi:"name"`
	// Email of the provider who created the resource
	ProviderEmail *string `pulumi:"providerEmail"`
	// Name of the provider who created the resource
	ProviderName *string `pulumi:"providerName"`
	// Tenant name of the provider who created the resource
	ProviderTenantName *string `pulumi:"providerTenantName"`
	// Provisioning state of the share subscription
	ProvisioningState *string `pulumi:"provisioningState"`
	// Description of share
	ShareDescription *string `pulumi:"shareDescription"`
	// Kind of share
	ShareKind *string `pulumi:"shareKind"`
	// Name of the share
	ShareName *string `pulumi:"shareName"`
	// Gets the current status of share subscription.
	ShareSubscriptionStatus *string `pulumi:"shareSubscriptionStatus"`
	// Terms of a share
	ShareTerms *string `pulumi:"shareTerms"`
	// Source share location.
	SourceShareLocation *string `pulumi:"sourceShareLocation"`
	// Type of the azure resource
	Type *string `pulumi:"type"`
	// Email of the user who created the resource
	UserEmail *string `pulumi:"userEmail"`
	// Name of the user who created the resource
	UserName *string `pulumi:"userName"`
}

type ShareSubscriptionState struct {
	// Time at which the share subscription was created.
	CreatedAt pulumi.StringPtrInput
	// The invitation id.
	InvitationId pulumi.StringPtrInput
	// Name of the azure resource
	Name pulumi.StringPtrInput
	// Email of the provider who created the resource
	ProviderEmail pulumi.StringPtrInput
	// Name of the provider who created the resource
	ProviderName pulumi.StringPtrInput
	// Tenant name of the provider who created the resource
	ProviderTenantName pulumi.StringPtrInput
	// Provisioning state of the share subscription
	ProvisioningState pulumi.StringPtrInput
	// Description of share
	ShareDescription pulumi.StringPtrInput
	// Kind of share
	ShareKind pulumi.StringPtrInput
	// Name of the share
	ShareName pulumi.StringPtrInput
	// Gets the current status of share subscription.
	ShareSubscriptionStatus pulumi.StringPtrInput
	// Terms of a share
	ShareTerms pulumi.StringPtrInput
	// Source share location.
	SourceShareLocation pulumi.StringPtrInput
	// Type of the azure resource
	Type pulumi.StringPtrInput
	// Email of the user who created the resource
	UserEmail pulumi.StringPtrInput
	// Name of the user who created the resource
	UserName pulumi.StringPtrInput
}

func (ShareSubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*shareSubscriptionState)(nil)).Elem()
}

type shareSubscriptionArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// The invitation id.
	InvitationId string `pulumi:"invitationId"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the shareSubscription.
	ShareSubscriptionName string `pulumi:"shareSubscriptionName"`
	// Source share location.
	SourceShareLocation string `pulumi:"sourceShareLocation"`
}

// The set of arguments for constructing a ShareSubscription resource.
type ShareSubscriptionArgs struct {
	// The name of the share account.
	AccountName pulumi.StringInput
	// The invitation id.
	InvitationId pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The name of the shareSubscription.
	ShareSubscriptionName pulumi.StringInput
	// Source share location.
	SourceShareLocation pulumi.StringInput
}

func (ShareSubscriptionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*shareSubscriptionArgs)(nil)).Elem()
}

type ShareSubscriptionInput interface {
	pulumi.Input

	ToShareSubscriptionOutput() ShareSubscriptionOutput
	ToShareSubscriptionOutputWithContext(ctx context.Context) ShareSubscriptionOutput
}

func (ShareSubscription) ElementType() reflect.Type {
	return reflect.TypeOf((*ShareSubscription)(nil)).Elem()
}

func (i ShareSubscription) ToShareSubscriptionOutput() ShareSubscriptionOutput {
	return i.ToShareSubscriptionOutputWithContext(context.Background())
}

func (i ShareSubscription) ToShareSubscriptionOutputWithContext(ctx context.Context) ShareSubscriptionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ShareSubscriptionOutput)
}

type ShareSubscriptionOutput struct {
	*pulumi.OutputState
}

func (ShareSubscriptionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ShareSubscriptionOutput)(nil)).Elem()
}

func (o ShareSubscriptionOutput) ToShareSubscriptionOutput() ShareSubscriptionOutput {
	return o
}

func (o ShareSubscriptionOutput) ToShareSubscriptionOutputWithContext(ctx context.Context) ShareSubscriptionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ShareSubscriptionOutput{})
}
