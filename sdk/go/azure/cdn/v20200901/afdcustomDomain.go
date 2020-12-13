// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
type AFDCustomDomain struct {
	pulumi.CustomResourceState

	// Resource reference to the Azure DNS zone
	AzureDnsZone     ResourceReferenceResponsePtrOutput `pulumi:"azureDnsZone"`
	DeploymentStatus pulumi.StringOutput                `pulumi:"deploymentStatus"`
	// Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
	DomainValidationState pulumi.StringOutput `pulumi:"domainValidationState"`
	// The host name of the domain. Must be a domain name.
	HostName pulumi.StringOutput `pulumi:"hostName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning status
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Read only system data
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
	TlsSettings AFDDomainHttpsParametersResponsePtrOutput `pulumi:"tlsSettings"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Values the customer needs to validate domain ownership
	ValidationProperties DomainValidationPropertiesResponseOutput `pulumi:"validationProperties"`
}

// NewAFDCustomDomain registers a new resource with the given unique name, arguments, and options.
func NewAFDCustomDomain(ctx *pulumi.Context,
	name string, args *AFDCustomDomainArgs, opts ...pulumi.ResourceOption) (*AFDCustomDomain, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CustomDomainName == nil {
		return nil, errors.New("invalid value for required argument 'CustomDomainName'")
	}
	if args.HostName == nil {
		return nil, errors.New("invalid value for required argument 'HostName'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:AFDCustomDomain"),
		},
	})
	opts = append(opts, aliases)
	var resource AFDCustomDomain
	err := ctx.RegisterResource("azure-nextgen:cdn/v20200901:AFDCustomDomain", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAFDCustomDomain gets an existing AFDCustomDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAFDCustomDomain(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AFDCustomDomainState, opts ...pulumi.ResourceOption) (*AFDCustomDomain, error) {
	var resource AFDCustomDomain
	err := ctx.ReadResource("azure-nextgen:cdn/v20200901:AFDCustomDomain", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AFDCustomDomain resources.
type afdcustomDomainState struct {
	// Resource reference to the Azure DNS zone
	AzureDnsZone     *ResourceReferenceResponse `pulumi:"azureDnsZone"`
	DeploymentStatus *string                    `pulumi:"deploymentStatus"`
	// Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
	DomainValidationState *string `pulumi:"domainValidationState"`
	// The host name of the domain. Must be a domain name.
	HostName *string `pulumi:"hostName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Provisioning status
	ProvisioningState *string `pulumi:"provisioningState"`
	// Read only system data
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
	TlsSettings *AFDDomainHttpsParametersResponse `pulumi:"tlsSettings"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Values the customer needs to validate domain ownership
	ValidationProperties *DomainValidationPropertiesResponse `pulumi:"validationProperties"`
}

type AFDCustomDomainState struct {
	// Resource reference to the Azure DNS zone
	AzureDnsZone     ResourceReferenceResponsePtrInput
	DeploymentStatus pulumi.StringPtrInput
	// Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
	DomainValidationState pulumi.StringPtrInput
	// The host name of the domain. Must be a domain name.
	HostName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Provisioning status
	ProvisioningState pulumi.StringPtrInput
	// Read only system data
	SystemData SystemDataResponsePtrInput
	// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
	TlsSettings AFDDomainHttpsParametersResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Values the customer needs to validate domain ownership
	ValidationProperties DomainValidationPropertiesResponsePtrInput
}

func (AFDCustomDomainState) ElementType() reflect.Type {
	return reflect.TypeOf((*afdcustomDomainState)(nil)).Elem()
}

type afdcustomDomainArgs struct {
	// Resource reference to the Azure DNS zone
	AzureDnsZone *ResourceReference `pulumi:"azureDnsZone"`
	// Name of the domain under the profile which is unique globally
	CustomDomainName string `pulumi:"customDomainName"`
	// The host name of the domain. Must be a domain name.
	HostName string `pulumi:"hostName"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
	TlsSettings *AFDDomainHttpsParameters `pulumi:"tlsSettings"`
}

// The set of arguments for constructing a AFDCustomDomain resource.
type AFDCustomDomainArgs struct {
	// Resource reference to the Azure DNS zone
	AzureDnsZone ResourceReferencePtrInput
	// Name of the domain under the profile which is unique globally
	CustomDomainName pulumi.StringInput
	// The host name of the domain. Must be a domain name.
	HostName pulumi.StringInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
	TlsSettings AFDDomainHttpsParametersPtrInput
}

func (AFDCustomDomainArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*afdcustomDomainArgs)(nil)).Elem()
}

type AFDCustomDomainInput interface {
	pulumi.Input

	ToAFDCustomDomainOutput() AFDCustomDomainOutput
	ToAFDCustomDomainOutputWithContext(ctx context.Context) AFDCustomDomainOutput
}

func (AFDCustomDomain) ElementType() reflect.Type {
	return reflect.TypeOf((*AFDCustomDomain)(nil)).Elem()
}

func (i AFDCustomDomain) ToAFDCustomDomainOutput() AFDCustomDomainOutput {
	return i.ToAFDCustomDomainOutputWithContext(context.Background())
}

func (i AFDCustomDomain) ToAFDCustomDomainOutputWithContext(ctx context.Context) AFDCustomDomainOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AFDCustomDomainOutput)
}

type AFDCustomDomainOutput struct {
	*pulumi.OutputState
}

func (AFDCustomDomainOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AFDCustomDomainOutput)(nil)).Elem()
}

func (o AFDCustomDomainOutput) ToAFDCustomDomainOutput() AFDCustomDomainOutput {
	return o
}

func (o AFDCustomDomainOutput) ToAFDCustomDomainOutputWithContext(ctx context.Context) AFDCustomDomainOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AFDCustomDomainOutput{})
}
