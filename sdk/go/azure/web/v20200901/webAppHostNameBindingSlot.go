// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A hostname binding object.
type WebAppHostNameBindingSlot struct {
	pulumi.CustomResourceState

	// Azure resource name.
	AzureResourceName pulumi.StringPtrOutput `pulumi:"azureResourceName"`
	// Azure resource type.
	AzureResourceType pulumi.StringPtrOutput `pulumi:"azureResourceType"`
	// Custom DNS record type.
	CustomHostNameDnsRecordType pulumi.StringPtrOutput `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI.
	DomainId pulumi.StringPtrOutput `pulumi:"domainId"`
	// Hostname type.
	HostNameType pulumi.StringPtrOutput `pulumi:"hostNameType"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// App Service app name.
	SiteName pulumi.StringPtrOutput `pulumi:"siteName"`
	// SSL type
	SslState pulumi.StringPtrOutput `pulumi:"sslState"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// SSL certificate thumbprint
	Thumbprint pulumi.StringPtrOutput `pulumi:"thumbprint"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Virtual IP address assigned to the hostname if IP based SSL is enabled.
	VirtualIP pulumi.StringOutput `pulumi:"virtualIP"`
}

// NewWebAppHostNameBindingSlot registers a new resource with the given unique name, arguments, and options.
func NewWebAppHostNameBindingSlot(ctx *pulumi.Context,
	name string, args *WebAppHostNameBindingSlotArgs, opts ...pulumi.ResourceOption) (*WebAppHostNameBindingSlot, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HostName == nil {
		return nil, errors.New("invalid value for required argument 'HostName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Slot == nil {
		return nil, errors.New("invalid value for required argument 'Slot'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebAppHostNameBindingSlot"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppHostNameBindingSlot"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppHostNameBindingSlot
	err := ctx.RegisterResource("azure-nextgen:web/v20200901:WebAppHostNameBindingSlot", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppHostNameBindingSlot gets an existing WebAppHostNameBindingSlot resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppHostNameBindingSlot(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppHostNameBindingSlotState, opts ...pulumi.ResourceOption) (*WebAppHostNameBindingSlot, error) {
	var resource WebAppHostNameBindingSlot
	err := ctx.ReadResource("azure-nextgen:web/v20200901:WebAppHostNameBindingSlot", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppHostNameBindingSlot resources.
type webAppHostNameBindingSlotState struct {
	// Azure resource name.
	AzureResourceName *string `pulumi:"azureResourceName"`
	// Azure resource type.
	AzureResourceType *string `pulumi:"azureResourceType"`
	// Custom DNS record type.
	CustomHostNameDnsRecordType *string `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI.
	DomainId *string `pulumi:"domainId"`
	// Hostname type.
	HostNameType *string `pulumi:"hostNameType"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// App Service app name.
	SiteName *string `pulumi:"siteName"`
	// SSL type
	SslState *string `pulumi:"sslState"`
	// The system metadata relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// SSL certificate thumbprint
	Thumbprint *string `pulumi:"thumbprint"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Virtual IP address assigned to the hostname if IP based SSL is enabled.
	VirtualIP *string `pulumi:"virtualIP"`
}

type WebAppHostNameBindingSlotState struct {
	// Azure resource name.
	AzureResourceName pulumi.StringPtrInput
	// Azure resource type.
	AzureResourceType pulumi.StringPtrInput
	// Custom DNS record type.
	CustomHostNameDnsRecordType pulumi.StringPtrInput
	// Fully qualified ARM domain resource URI.
	DomainId pulumi.StringPtrInput
	// Hostname type.
	HostNameType pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// App Service app name.
	SiteName pulumi.StringPtrInput
	// SSL type
	SslState pulumi.StringPtrInput
	// The system metadata relating to this resource.
	SystemData SystemDataResponsePtrInput
	// SSL certificate thumbprint
	Thumbprint pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Virtual IP address assigned to the hostname if IP based SSL is enabled.
	VirtualIP pulumi.StringPtrInput
}

func (WebAppHostNameBindingSlotState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppHostNameBindingSlotState)(nil)).Elem()
}

type webAppHostNameBindingSlotArgs struct {
	// Azure resource name.
	AzureResourceName *string `pulumi:"azureResourceName"`
	// Azure resource type.
	AzureResourceType *string `pulumi:"azureResourceType"`
	// Custom DNS record type.
	CustomHostNameDnsRecordType *string `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI.
	DomainId *string `pulumi:"domainId"`
	// Hostname in the hostname binding.
	HostName string `pulumi:"hostName"`
	// Hostname type.
	HostNameType *string `pulumi:"hostNameType"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// App Service app name.
	SiteName *string `pulumi:"siteName"`
	// Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
	Slot string `pulumi:"slot"`
	// SSL type
	SslState *string `pulumi:"sslState"`
	// SSL certificate thumbprint
	Thumbprint *string `pulumi:"thumbprint"`
}

// The set of arguments for constructing a WebAppHostNameBindingSlot resource.
type WebAppHostNameBindingSlotArgs struct {
	// Azure resource name.
	AzureResourceName pulumi.StringPtrInput
	// Azure resource type.
	AzureResourceType AzureResourceType
	// Custom DNS record type.
	CustomHostNameDnsRecordType CustomHostNameDnsRecordType
	// Fully qualified ARM domain resource URI.
	DomainId pulumi.StringPtrInput
	// Hostname in the hostname binding.
	HostName pulumi.StringInput
	// Hostname type.
	HostNameType HostNameType
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the app.
	Name pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// App Service app name.
	SiteName pulumi.StringPtrInput
	// Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
	Slot pulumi.StringInput
	// SSL type
	SslState SslState
	// SSL certificate thumbprint
	Thumbprint pulumi.StringPtrInput
}

func (WebAppHostNameBindingSlotArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppHostNameBindingSlotArgs)(nil)).Elem()
}

type WebAppHostNameBindingSlotInput interface {
	pulumi.Input

	ToWebAppHostNameBindingSlotOutput() WebAppHostNameBindingSlotOutput
	ToWebAppHostNameBindingSlotOutputWithContext(ctx context.Context) WebAppHostNameBindingSlotOutput
}

func (WebAppHostNameBindingSlot) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppHostNameBindingSlot)(nil)).Elem()
}

func (i WebAppHostNameBindingSlot) ToWebAppHostNameBindingSlotOutput() WebAppHostNameBindingSlotOutput {
	return i.ToWebAppHostNameBindingSlotOutputWithContext(context.Background())
}

func (i WebAppHostNameBindingSlot) ToWebAppHostNameBindingSlotOutputWithContext(ctx context.Context) WebAppHostNameBindingSlotOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppHostNameBindingSlotOutput)
}

type WebAppHostNameBindingSlotOutput struct {
	*pulumi.OutputState
}

func (WebAppHostNameBindingSlotOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppHostNameBindingSlotOutput)(nil)).Elem()
}

func (o WebAppHostNameBindingSlotOutput) ToWebAppHostNameBindingSlotOutput() WebAppHostNameBindingSlotOutput {
	return o
}

func (o WebAppHostNameBindingSlotOutput) ToWebAppHostNameBindingSlotOutputWithContext(ctx context.Context) WebAppHostNameBindingSlotOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppHostNameBindingSlotOutput{})
}
