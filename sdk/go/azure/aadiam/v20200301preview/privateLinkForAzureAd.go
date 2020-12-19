// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// PrivateLink Policy configuration object.
type PrivateLinkForAzureAd struct {
	pulumi.CustomResourceState

	// Flag indicating whether all tenants are allowed
	AllTenants pulumi.BoolPtrOutput `pulumi:"allTenants"`
	// Name of this resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// Guid of the owner tenant
	OwnerTenantId pulumi.StringPtrOutput `pulumi:"ownerTenantId"`
	// Name of the resource group
	ResourceGroup pulumi.StringPtrOutput `pulumi:"resourceGroup"`
	// Name of the private link policy resource
	ResourceName pulumi.StringPtrOutput `pulumi:"resourceName"`
	// Subscription Identifier
	SubscriptionId pulumi.StringPtrOutput `pulumi:"subscriptionId"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The list of tenantIds.
	Tenants pulumi.StringArrayOutput `pulumi:"tenants"`
	// Type of this resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPrivateLinkForAzureAd registers a new resource with the given unique name, arguments, and options.
func NewPrivateLinkForAzureAd(ctx *pulumi.Context,
	name string, args *PrivateLinkForAzureAdArgs, opts ...pulumi.ResourceOption) (*PrivateLinkForAzureAd, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PolicyName == nil {
		return nil, errors.New("invalid value for required argument 'PolicyName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource PrivateLinkForAzureAd
	err := ctx.RegisterResource("azure-nextgen:aadiam/v20200301preview:privateLinkForAzureAd", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateLinkForAzureAd gets an existing PrivateLinkForAzureAd resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateLinkForAzureAd(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateLinkForAzureAdState, opts ...pulumi.ResourceOption) (*PrivateLinkForAzureAd, error) {
	var resource PrivateLinkForAzureAd
	err := ctx.ReadResource("azure-nextgen:aadiam/v20200301preview:privateLinkForAzureAd", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateLinkForAzureAd resources.
type privateLinkForAzureAdState struct {
	// Flag indicating whether all tenants are allowed
	AllTenants *bool `pulumi:"allTenants"`
	// Name of this resource.
	Name *string `pulumi:"name"`
	// Guid of the owner tenant
	OwnerTenantId *string `pulumi:"ownerTenantId"`
	// Name of the resource group
	ResourceGroup *string `pulumi:"resourceGroup"`
	// Name of the private link policy resource
	ResourceName *string `pulumi:"resourceName"`
	// Subscription Identifier
	SubscriptionId *string `pulumi:"subscriptionId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The list of tenantIds.
	Tenants []string `pulumi:"tenants"`
	// Type of this resource.
	Type *string `pulumi:"type"`
}

type PrivateLinkForAzureAdState struct {
	// Flag indicating whether all tenants are allowed
	AllTenants pulumi.BoolPtrInput
	// Name of this resource.
	Name pulumi.StringPtrInput
	// Guid of the owner tenant
	OwnerTenantId pulumi.StringPtrInput
	// Name of the resource group
	ResourceGroup pulumi.StringPtrInput
	// Name of the private link policy resource
	ResourceName pulumi.StringPtrInput
	// Subscription Identifier
	SubscriptionId pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The list of tenantIds.
	Tenants pulumi.StringArrayInput
	// Type of this resource.
	Type pulumi.StringPtrInput
}

func (PrivateLinkForAzureAdState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateLinkForAzureAdState)(nil)).Elem()
}

type privateLinkForAzureAdArgs struct {
	// Flag indicating whether all tenants are allowed
	AllTenants *bool `pulumi:"allTenants"`
	// Name of this resource.
	Name *string `pulumi:"name"`
	// Guid of the owner tenant
	OwnerTenantId *string `pulumi:"ownerTenantId"`
	// The name of the private link policy in Azure AD.
	PolicyName string `pulumi:"policyName"`
	// Name of the resource group
	ResourceGroup *string `pulumi:"resourceGroup"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the private link policy resource
	ResourceName *string `pulumi:"resourceName"`
	// Subscription Identifier
	SubscriptionId *string `pulumi:"subscriptionId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The list of tenantIds.
	Tenants []string `pulumi:"tenants"`
}

// The set of arguments for constructing a PrivateLinkForAzureAd resource.
type PrivateLinkForAzureAdArgs struct {
	// Flag indicating whether all tenants are allowed
	AllTenants pulumi.BoolPtrInput
	// Name of this resource.
	Name pulumi.StringPtrInput
	// Guid of the owner tenant
	OwnerTenantId pulumi.StringPtrInput
	// The name of the private link policy in Azure AD.
	PolicyName pulumi.StringInput
	// Name of the resource group
	ResourceGroup pulumi.StringPtrInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Name of the private link policy resource
	ResourceName pulumi.StringPtrInput
	// Subscription Identifier
	SubscriptionId pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The list of tenantIds.
	Tenants pulumi.StringArrayInput
}

func (PrivateLinkForAzureAdArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateLinkForAzureAdArgs)(nil)).Elem()
}

type PrivateLinkForAzureAdInput interface {
	pulumi.Input

	ToPrivateLinkForAzureAdOutput() PrivateLinkForAzureAdOutput
	ToPrivateLinkForAzureAdOutputWithContext(ctx context.Context) PrivateLinkForAzureAdOutput
}

func (*PrivateLinkForAzureAd) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateLinkForAzureAd)(nil))
}

func (i *PrivateLinkForAzureAd) ToPrivateLinkForAzureAdOutput() PrivateLinkForAzureAdOutput {
	return i.ToPrivateLinkForAzureAdOutputWithContext(context.Background())
}

func (i *PrivateLinkForAzureAd) ToPrivateLinkForAzureAdOutputWithContext(ctx context.Context) PrivateLinkForAzureAdOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateLinkForAzureAdOutput)
}

type PrivateLinkForAzureAdOutput struct {
	*pulumi.OutputState
}

func (PrivateLinkForAzureAdOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateLinkForAzureAd)(nil))
}

func (o PrivateLinkForAzureAdOutput) ToPrivateLinkForAzureAdOutput() PrivateLinkForAzureAdOutput {
	return o
}

func (o PrivateLinkForAzureAdOutput) ToPrivateLinkForAzureAdOutputWithContext(ctx context.Context) PrivateLinkForAzureAdOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateLinkForAzureAdOutput{})
}
