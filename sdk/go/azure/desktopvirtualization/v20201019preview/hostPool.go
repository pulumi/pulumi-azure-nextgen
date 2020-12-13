// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201019preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a HostPool definition.
type HostPool struct {
	pulumi.CustomResourceState

	// List of applicationGroup links.
	ApplicationGroupReferences pulumi.StringArrayOutput `pulumi:"applicationGroupReferences"`
	// Custom rdp property of HostPool.
	CustomRdpProperty pulumi.StringPtrOutput `pulumi:"customRdpProperty"`
	// Description of HostPool.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Friendly name of HostPool.
	FriendlyName pulumi.StringPtrOutput `pulumi:"friendlyName"`
	// HostPool type for desktop.
	HostPoolType pulumi.StringOutput `pulumi:"hostPoolType"`
	// The type of the load balancer.
	LoadBalancerType pulumi.StringOutput `pulumi:"loadBalancerType"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The max session limit of HostPool.
	MaxSessionLimit pulumi.IntPtrOutput `pulumi:"maxSessionLimit"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// PersonalDesktopAssignment type for HostPool.
	PersonalDesktopAssignmentType pulumi.StringPtrOutput `pulumi:"personalDesktopAssignmentType"`
	// The type of preferred application group type, default to Desktop Application Group
	PreferredAppGroupType pulumi.StringOutput `pulumi:"preferredAppGroupType"`
	// The registration info of HostPool.
	RegistrationInfo RegistrationInfoResponsePtrOutput `pulumi:"registrationInfo"`
	// The ring number of HostPool.
	Ring pulumi.IntPtrOutput `pulumi:"ring"`
	// ClientId for the registered Relying Party used to issue WVD SSO certificates.
	SsoClientId pulumi.StringPtrOutput `pulumi:"ssoClientId"`
	// Path to Azure KeyVault storing the secret used for communication to ADFS.
	SsoClientSecretKeyVaultPath pulumi.StringPtrOutput `pulumi:"ssoClientSecretKeyVaultPath"`
	// Path to keyvault containing ssoContext secret.
	SsoContext pulumi.StringPtrOutput `pulumi:"ssoContext"`
	// The type of single sign on Secret Type.
	SsoSecretType pulumi.StringPtrOutput `pulumi:"ssoSecretType"`
	// URL to customer ADFS server for signing WVD SSO certificates.
	SsoadfsAuthority pulumi.StringPtrOutput `pulumi:"ssoadfsAuthority"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
	// Is validation environment.
	ValidationEnvironment pulumi.BoolPtrOutput `pulumi:"validationEnvironment"`
	// VM template for sessionhosts configuration within hostpool.
	VmTemplate pulumi.StringPtrOutput `pulumi:"vmTemplate"`
}

// NewHostPool registers a new resource with the given unique name, arguments, and options.
func NewHostPool(ctx *pulumi.Context,
	name string, args *HostPoolArgs, opts ...pulumi.ResourceOption) (*HostPool, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HostPoolName == nil {
		return nil, errors.New("invalid value for required argument 'HostPoolName'")
	}
	if args.HostPoolType == nil {
		return nil, errors.New("invalid value for required argument 'HostPoolType'")
	}
	if args.LoadBalancerType == nil {
		return nil, errors.New("invalid value for required argument 'LoadBalancerType'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.PreferredAppGroupType == nil {
		return nil, errors.New("invalid value for required argument 'PreferredAppGroupType'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20190123preview:HostPool"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20190924preview:HostPool"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20191210preview:HostPool"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20200921preview:HostPool"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201102preview:HostPool"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201110preview:HostPool"),
		},
	})
	opts = append(opts, aliases)
	var resource HostPool
	err := ctx.RegisterResource("azure-nextgen:desktopvirtualization/v20201019preview:HostPool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetHostPool gets an existing HostPool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetHostPool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *HostPoolState, opts ...pulumi.ResourceOption) (*HostPool, error) {
	var resource HostPool
	err := ctx.ReadResource("azure-nextgen:desktopvirtualization/v20201019preview:HostPool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering HostPool resources.
type hostPoolState struct {
	// List of applicationGroup links.
	ApplicationGroupReferences []string `pulumi:"applicationGroupReferences"`
	// Custom rdp property of HostPool.
	CustomRdpProperty *string `pulumi:"customRdpProperty"`
	// Description of HostPool.
	Description *string `pulumi:"description"`
	// Friendly name of HostPool.
	FriendlyName *string `pulumi:"friendlyName"`
	// HostPool type for desktop.
	HostPoolType *string `pulumi:"hostPoolType"`
	// The type of the load balancer.
	LoadBalancerType *string `pulumi:"loadBalancerType"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The max session limit of HostPool.
	MaxSessionLimit *int `pulumi:"maxSessionLimit"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// PersonalDesktopAssignment type for HostPool.
	PersonalDesktopAssignmentType *string `pulumi:"personalDesktopAssignmentType"`
	// The type of preferred application group type, default to Desktop Application Group
	PreferredAppGroupType *string `pulumi:"preferredAppGroupType"`
	// The registration info of HostPool.
	RegistrationInfo *RegistrationInfoResponse `pulumi:"registrationInfo"`
	// The ring number of HostPool.
	Ring *int `pulumi:"ring"`
	// ClientId for the registered Relying Party used to issue WVD SSO certificates.
	SsoClientId *string `pulumi:"ssoClientId"`
	// Path to Azure KeyVault storing the secret used for communication to ADFS.
	SsoClientSecretKeyVaultPath *string `pulumi:"ssoClientSecretKeyVaultPath"`
	// Path to keyvault containing ssoContext secret.
	SsoContext *string `pulumi:"ssoContext"`
	// The type of single sign on Secret Type.
	SsoSecretType *string `pulumi:"ssoSecretType"`
	// URL to customer ADFS server for signing WVD SSO certificates.
	SsoadfsAuthority *string `pulumi:"ssoadfsAuthority"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
	// Is validation environment.
	ValidationEnvironment *bool `pulumi:"validationEnvironment"`
	// VM template for sessionhosts configuration within hostpool.
	VmTemplate *string `pulumi:"vmTemplate"`
}

type HostPoolState struct {
	// List of applicationGroup links.
	ApplicationGroupReferences pulumi.StringArrayInput
	// Custom rdp property of HostPool.
	CustomRdpProperty pulumi.StringPtrInput
	// Description of HostPool.
	Description pulumi.StringPtrInput
	// Friendly name of HostPool.
	FriendlyName pulumi.StringPtrInput
	// HostPool type for desktop.
	HostPoolType pulumi.StringPtrInput
	// The type of the load balancer.
	LoadBalancerType pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The max session limit of HostPool.
	MaxSessionLimit pulumi.IntPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// PersonalDesktopAssignment type for HostPool.
	PersonalDesktopAssignmentType pulumi.StringPtrInput
	// The type of preferred application group type, default to Desktop Application Group
	PreferredAppGroupType pulumi.StringPtrInput
	// The registration info of HostPool.
	RegistrationInfo RegistrationInfoResponsePtrInput
	// The ring number of HostPool.
	Ring pulumi.IntPtrInput
	// ClientId for the registered Relying Party used to issue WVD SSO certificates.
	SsoClientId pulumi.StringPtrInput
	// Path to Azure KeyVault storing the secret used for communication to ADFS.
	SsoClientSecretKeyVaultPath pulumi.StringPtrInput
	// Path to keyvault containing ssoContext secret.
	SsoContext pulumi.StringPtrInput
	// The type of single sign on Secret Type.
	SsoSecretType pulumi.StringPtrInput
	// URL to customer ADFS server for signing WVD SSO certificates.
	SsoadfsAuthority pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
	// Is validation environment.
	ValidationEnvironment pulumi.BoolPtrInput
	// VM template for sessionhosts configuration within hostpool.
	VmTemplate pulumi.StringPtrInput
}

func (HostPoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*hostPoolState)(nil)).Elem()
}

type hostPoolArgs struct {
	// Custom rdp property of HostPool.
	CustomRdpProperty *string `pulumi:"customRdpProperty"`
	// Description of HostPool.
	Description *string `pulumi:"description"`
	// Friendly name of HostPool.
	FriendlyName *string `pulumi:"friendlyName"`
	// The name of the host pool within the specified resource group
	HostPoolName string `pulumi:"hostPoolName"`
	// HostPool type for desktop.
	HostPoolType string `pulumi:"hostPoolType"`
	// The type of the load balancer.
	LoadBalancerType string `pulumi:"loadBalancerType"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The max session limit of HostPool.
	MaxSessionLimit *int `pulumi:"maxSessionLimit"`
	// PersonalDesktopAssignment type for HostPool.
	PersonalDesktopAssignmentType *string `pulumi:"personalDesktopAssignmentType"`
	// The type of preferred application group type, default to Desktop Application Group
	PreferredAppGroupType string `pulumi:"preferredAppGroupType"`
	// The registration info of HostPool.
	RegistrationInfo *RegistrationInfo `pulumi:"registrationInfo"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ring number of HostPool.
	Ring *int `pulumi:"ring"`
	// ClientId for the registered Relying Party used to issue WVD SSO certificates.
	SsoClientId *string `pulumi:"ssoClientId"`
	// Path to Azure KeyVault storing the secret used for communication to ADFS.
	SsoClientSecretKeyVaultPath *string `pulumi:"ssoClientSecretKeyVaultPath"`
	// Path to keyvault containing ssoContext secret.
	SsoContext *string `pulumi:"ssoContext"`
	// The type of single sign on Secret Type.
	SsoSecretType *string `pulumi:"ssoSecretType"`
	// URL to customer ADFS server for signing WVD SSO certificates.
	SsoadfsAuthority *string `pulumi:"ssoadfsAuthority"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Is validation environment.
	ValidationEnvironment *bool `pulumi:"validationEnvironment"`
	// VM template for sessionhosts configuration within hostpool.
	VmTemplate *string `pulumi:"vmTemplate"`
}

// The set of arguments for constructing a HostPool resource.
type HostPoolArgs struct {
	// Custom rdp property of HostPool.
	CustomRdpProperty pulumi.StringPtrInput
	// Description of HostPool.
	Description pulumi.StringPtrInput
	// Friendly name of HostPool.
	FriendlyName pulumi.StringPtrInput
	// The name of the host pool within the specified resource group
	HostPoolName pulumi.StringInput
	// HostPool type for desktop.
	HostPoolType pulumi.StringInput
	// The type of the load balancer.
	LoadBalancerType pulumi.StringInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The max session limit of HostPool.
	MaxSessionLimit pulumi.IntPtrInput
	// PersonalDesktopAssignment type for HostPool.
	PersonalDesktopAssignmentType pulumi.StringPtrInput
	// The type of preferred application group type, default to Desktop Application Group
	PreferredAppGroupType pulumi.StringInput
	// The registration info of HostPool.
	RegistrationInfo RegistrationInfoPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The ring number of HostPool.
	Ring pulumi.IntPtrInput
	// ClientId for the registered Relying Party used to issue WVD SSO certificates.
	SsoClientId pulumi.StringPtrInput
	// Path to Azure KeyVault storing the secret used for communication to ADFS.
	SsoClientSecretKeyVaultPath pulumi.StringPtrInput
	// Path to keyvault containing ssoContext secret.
	SsoContext pulumi.StringPtrInput
	// The type of single sign on Secret Type.
	SsoSecretType pulumi.StringPtrInput
	// URL to customer ADFS server for signing WVD SSO certificates.
	SsoadfsAuthority pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Is validation environment.
	ValidationEnvironment pulumi.BoolPtrInput
	// VM template for sessionhosts configuration within hostpool.
	VmTemplate pulumi.StringPtrInput
}

func (HostPoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*hostPoolArgs)(nil)).Elem()
}

type HostPoolInput interface {
	pulumi.Input

	ToHostPoolOutput() HostPoolOutput
	ToHostPoolOutputWithContext(ctx context.Context) HostPoolOutput
}

func (HostPool) ElementType() reflect.Type {
	return reflect.TypeOf((*HostPool)(nil)).Elem()
}

func (i HostPool) ToHostPoolOutput() HostPoolOutput {
	return i.ToHostPoolOutputWithContext(context.Background())
}

func (i HostPool) ToHostPoolOutputWithContext(ctx context.Context) HostPoolOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HostPoolOutput)
}

type HostPoolOutput struct {
	*pulumi.OutputState
}

func (HostPoolOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*HostPoolOutput)(nil)).Elem()
}

func (o HostPoolOutput) ToHostPoolOutput() HostPoolOutput {
	return o
}

func (o HostPoolOutput) ToHostPoolOutputWithContext(ctx context.Context) HostPoolOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(HostPoolOutput{})
}
