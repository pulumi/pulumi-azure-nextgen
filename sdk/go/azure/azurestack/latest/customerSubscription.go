// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Customer subscription.
type CustomerSubscription struct {
	pulumi.CustomResourceState

	// The entity tag used for optimistic concurrency when modifying the resource.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Tenant Id.
	TenantId pulumi.StringPtrOutput `pulumi:"tenantId"`
	// Type of Resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewCustomerSubscription registers a new resource with the given unique name, arguments, and options.
func NewCustomerSubscription(ctx *pulumi.Context,
	name string, args *CustomerSubscriptionArgs, opts ...pulumi.ResourceOption) (*CustomerSubscription, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CustomerSubscriptionName == nil {
		return nil, errors.New("invalid value for required argument 'CustomerSubscriptionName'")
	}
	if args.RegistrationName == nil {
		return nil, errors.New("invalid value for required argument 'RegistrationName'")
	}
	if args.ResourceGroup == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroup'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:azurestack/v20170601:CustomerSubscription"),
		},
	})
	opts = append(opts, aliases)
	var resource CustomerSubscription
	err := ctx.RegisterResource("azure-nextgen:azurestack/latest:CustomerSubscription", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomerSubscription gets an existing CustomerSubscription resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomerSubscription(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomerSubscriptionState, opts ...pulumi.ResourceOption) (*CustomerSubscription, error) {
	var resource CustomerSubscription
	err := ctx.ReadResource("azure-nextgen:azurestack/latest:CustomerSubscription", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomerSubscription resources.
type customerSubscriptionState struct {
	// The entity tag used for optimistic concurrency when modifying the resource.
	Etag *string `pulumi:"etag"`
	// Name of the resource.
	Name *string `pulumi:"name"`
	// Tenant Id.
	TenantId *string `pulumi:"tenantId"`
	// Type of Resource.
	Type *string `pulumi:"type"`
}

type CustomerSubscriptionState struct {
	// The entity tag used for optimistic concurrency when modifying the resource.
	Etag pulumi.StringPtrInput
	// Name of the resource.
	Name pulumi.StringPtrInput
	// Tenant Id.
	TenantId pulumi.StringPtrInput
	// Type of Resource.
	Type pulumi.StringPtrInput
}

func (CustomerSubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*customerSubscriptionState)(nil)).Elem()
}

type customerSubscriptionArgs struct {
	// Name of the product.
	CustomerSubscriptionName string `pulumi:"customerSubscriptionName"`
	// The entity tag used for optimistic concurrency when modifying the resource.
	Etag *string `pulumi:"etag"`
	// Name of the Azure Stack registration.
	RegistrationName string `pulumi:"registrationName"`
	// Name of the resource group.
	ResourceGroup string `pulumi:"resourceGroup"`
	// Tenant Id.
	TenantId *string `pulumi:"tenantId"`
}

// The set of arguments for constructing a CustomerSubscription resource.
type CustomerSubscriptionArgs struct {
	// Name of the product.
	CustomerSubscriptionName pulumi.StringInput
	// The entity tag used for optimistic concurrency when modifying the resource.
	Etag pulumi.StringPtrInput
	// Name of the Azure Stack registration.
	RegistrationName pulumi.StringInput
	// Name of the resource group.
	ResourceGroup pulumi.StringInput
	// Tenant Id.
	TenantId pulumi.StringPtrInput
}

func (CustomerSubscriptionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customerSubscriptionArgs)(nil)).Elem()
}

type CustomerSubscriptionInput interface {
	pulumi.Input

	ToCustomerSubscriptionOutput() CustomerSubscriptionOutput
	ToCustomerSubscriptionOutputWithContext(ctx context.Context) CustomerSubscriptionOutput
}

func (CustomerSubscription) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomerSubscription)(nil)).Elem()
}

func (i CustomerSubscription) ToCustomerSubscriptionOutput() CustomerSubscriptionOutput {
	return i.ToCustomerSubscriptionOutputWithContext(context.Background())
}

func (i CustomerSubscription) ToCustomerSubscriptionOutputWithContext(ctx context.Context) CustomerSubscriptionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomerSubscriptionOutput)
}

type CustomerSubscriptionOutput struct {
	*pulumi.OutputState
}

func (CustomerSubscriptionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomerSubscriptionOutput)(nil)).Elem()
}

func (o CustomerSubscriptionOutput) ToCustomerSubscriptionOutput() CustomerSubscriptionOutput {
	return o
}

func (o CustomerSubscriptionOutput) ToCustomerSubscriptionOutputWithContext(ctx context.Context) CustomerSubscriptionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CustomerSubscriptionOutput{})
}
