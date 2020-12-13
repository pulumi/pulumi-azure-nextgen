// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190701

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Information about managed application.
type Application struct {
	pulumi.CustomResourceState

	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId pulumi.StringPtrOutput `pulumi:"applicationDefinitionId"`
	// The collection of managed application artifacts.
	Artifacts ApplicationArtifactResponseArrayOutput `pulumi:"artifacts"`
	// The  read-only authorizations property that is retrieved from the application package.
	Authorizations ApplicationAuthorizationResponseArrayOutput `pulumi:"authorizations"`
	// The managed application billing details.
	BillingDetails ApplicationBillingDetailsDefinitionResponseOutput `pulumi:"billingDetails"`
	// The client entity that created the JIT request.
	CreatedBy ApplicationClientDetailsResponseOutput `pulumi:"createdBy"`
	// The read-only customer support property that is retrieved from the application package.
	CustomerSupport ApplicationPackageContactResponseOutput `pulumi:"customerSupport"`
	// The identity of the resource.
	Identity IdentityResponsePtrOutput `pulumi:"identity"`
	// The managed application Jit access policy.
	JitAccessPolicy ApplicationJitAccessPolicyResponsePtrOutput `pulumi:"jitAccessPolicy"`
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// ID of the resource that manages this resource.
	ManagedBy pulumi.StringPtrOutput `pulumi:"managedBy"`
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringPtrOutput `pulumi:"managedResourceGroupId"`
	// The managed application management mode.
	ManagementMode pulumi.StringOutput `pulumi:"managementMode"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Name and value pairs that define the managed application outputs.
	Outputs pulumi.AnyOutput `pulumi:"outputs"`
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters pulumi.AnyOutput `pulumi:"parameters"`
	// The plan information.
	Plan PlanResponsePtrOutput `pulumi:"plan"`
	// The managed application provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The publisher tenant Id.
	PublisherTenantId pulumi.StringOutput `pulumi:"publisherTenantId"`
	// The SKU of the resource.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// The read-only support URLs property that is retrieved from the application package.
	SupportUrls ApplicationPackageSupportUrlsResponseOutput `pulumi:"supportUrls"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// The client entity that last updated the JIT request.
	UpdatedBy ApplicationClientDetailsResponseOutput `pulumi:"updatedBy"`
}

// NewApplication registers a new resource with the given unique name, arguments, and options.
func NewApplication(ctx *pulumi.Context,
	name string, args *ApplicationArgs, opts ...pulumi.ResourceOption) (*Application, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApplicationName == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationName'")
	}
	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:solutions/latest:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:solutions/v20170901:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:solutions/v20180601:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:solutions/v20200821preview:Application"),
		},
	})
	opts = append(opts, aliases)
	var resource Application
	err := ctx.RegisterResource("azure-nextgen:solutions/v20190701:Application", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplication gets an existing Application resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplication(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationState, opts ...pulumi.ResourceOption) (*Application, error) {
	var resource Application
	err := ctx.ReadResource("azure-nextgen:solutions/v20190701:Application", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Application resources.
type applicationState struct {
	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId *string `pulumi:"applicationDefinitionId"`
	// The collection of managed application artifacts.
	Artifacts []ApplicationArtifactResponse `pulumi:"artifacts"`
	// The  read-only authorizations property that is retrieved from the application package.
	Authorizations []ApplicationAuthorizationResponse `pulumi:"authorizations"`
	// The managed application billing details.
	BillingDetails *ApplicationBillingDetailsDefinitionResponse `pulumi:"billingDetails"`
	// The client entity that created the JIT request.
	CreatedBy *ApplicationClientDetailsResponse `pulumi:"createdBy"`
	// The read-only customer support property that is retrieved from the application package.
	CustomerSupport *ApplicationPackageContactResponse `pulumi:"customerSupport"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// The managed application Jit access policy.
	JitAccessPolicy *ApplicationJitAccessPolicyResponse `pulumi:"jitAccessPolicy"`
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind *string `pulumi:"kind"`
	// Resource location
	Location *string `pulumi:"location"`
	// ID of the resource that manages this resource.
	ManagedBy *string `pulumi:"managedBy"`
	// The managed resource group Id.
	ManagedResourceGroupId *string `pulumi:"managedResourceGroupId"`
	// The managed application management mode.
	ManagementMode *string `pulumi:"managementMode"`
	// Resource name
	Name *string `pulumi:"name"`
	// Name and value pairs that define the managed application outputs.
	Outputs interface{} `pulumi:"outputs"`
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters interface{} `pulumi:"parameters"`
	// The plan information.
	Plan *PlanResponse `pulumi:"plan"`
	// The managed application provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The publisher tenant Id.
	PublisherTenantId *string `pulumi:"publisherTenantId"`
	// The SKU of the resource.
	Sku *SkuResponse `pulumi:"sku"`
	// The read-only support URLs property that is retrieved from the application package.
	SupportUrls *ApplicationPackageSupportUrlsResponse `pulumi:"supportUrls"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// The client entity that last updated the JIT request.
	UpdatedBy *ApplicationClientDetailsResponse `pulumi:"updatedBy"`
}

type ApplicationState struct {
	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId pulumi.StringPtrInput
	// The collection of managed application artifacts.
	Artifacts ApplicationArtifactResponseArrayInput
	// The  read-only authorizations property that is retrieved from the application package.
	Authorizations ApplicationAuthorizationResponseArrayInput
	// The managed application billing details.
	BillingDetails ApplicationBillingDetailsDefinitionResponsePtrInput
	// The client entity that created the JIT request.
	CreatedBy ApplicationClientDetailsResponsePtrInput
	// The read-only customer support property that is retrieved from the application package.
	CustomerSupport ApplicationPackageContactResponsePtrInput
	// The identity of the resource.
	Identity IdentityResponsePtrInput
	// The managed application Jit access policy.
	JitAccessPolicy ApplicationJitAccessPolicyResponsePtrInput
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// ID of the resource that manages this resource.
	ManagedBy pulumi.StringPtrInput
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringPtrInput
	// The managed application management mode.
	ManagementMode pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Name and value pairs that define the managed application outputs.
	Outputs pulumi.Input
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters pulumi.Input
	// The plan information.
	Plan PlanResponsePtrInput
	// The managed application provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The publisher tenant Id.
	PublisherTenantId pulumi.StringPtrInput
	// The SKU of the resource.
	Sku SkuResponsePtrInput
	// The read-only support URLs property that is retrieved from the application package.
	SupportUrls ApplicationPackageSupportUrlsResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// The client entity that last updated the JIT request.
	UpdatedBy ApplicationClientDetailsResponsePtrInput
}

func (ApplicationState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationState)(nil)).Elem()
}

type applicationArgs struct {
	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId *string `pulumi:"applicationDefinitionId"`
	// The name of the managed application.
	ApplicationName string `pulumi:"applicationName"`
	// The identity of the resource.
	Identity *Identity `pulumi:"identity"`
	// The managed application Jit access policy.
	JitAccessPolicy *ApplicationJitAccessPolicy `pulumi:"jitAccessPolicy"`
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind string `pulumi:"kind"`
	// Resource location
	Location *string `pulumi:"location"`
	// ID of the resource that manages this resource.
	ManagedBy *string `pulumi:"managedBy"`
	// The managed resource group Id.
	ManagedResourceGroupId *string `pulumi:"managedResourceGroupId"`
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters interface{} `pulumi:"parameters"`
	// The plan information.
	Plan *Plan `pulumi:"plan"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU of the resource.
	Sku *Sku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Application resource.
type ApplicationArgs struct {
	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId pulumi.StringPtrInput
	// The name of the managed application.
	ApplicationName pulumi.StringInput
	// The identity of the resource.
	Identity IdentityPtrInput
	// The managed application Jit access policy.
	JitAccessPolicy ApplicationJitAccessPolicyPtrInput
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind pulumi.StringInput
	// Resource location
	Location pulumi.StringPtrInput
	// ID of the resource that manages this resource.
	ManagedBy pulumi.StringPtrInput
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringPtrInput
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters pulumi.Input
	// The plan information.
	Plan PlanPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The SKU of the resource.
	Sku SkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (ApplicationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationArgs)(nil)).Elem()
}

type ApplicationInput interface {
	pulumi.Input

	ToApplicationOutput() ApplicationOutput
	ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput
}

func (Application) ElementType() reflect.Type {
	return reflect.TypeOf((*Application)(nil)).Elem()
}

func (i Application) ToApplicationOutput() ApplicationOutput {
	return i.ToApplicationOutputWithContext(context.Background())
}

func (i Application) ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationOutput)
}

type ApplicationOutput struct {
	*pulumi.OutputState
}

func (ApplicationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationOutput)(nil)).Elem()
}

func (o ApplicationOutput) ToApplicationOutput() ApplicationOutput {
	return o
}

func (o ApplicationOutput) ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationOutput{})
}
