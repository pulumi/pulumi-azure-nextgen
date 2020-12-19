// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200202preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Application Insights component definition.
type Component struct {
	pulumi.CustomResourceState

	// Application Insights Unique ID for your Application.
	AppId pulumi.StringOutput `pulumi:"appId"`
	// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
	ApplicationId pulumi.StringOutput `pulumi:"applicationId"`
	// Type of application being monitored.
	ApplicationType pulumi.StringOutput `pulumi:"applicationType"`
	// Application Insights component connection string.
	ConnectionString pulumi.StringOutput `pulumi:"connectionString"`
	// Creation Date for the Application Insights component, in ISO 8601 format.
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// Disable IP masking.
	DisableIpMasking pulumi.BoolPtrOutput `pulumi:"disableIpMasking"`
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType pulumi.StringPtrOutput `pulumi:"flowType"`
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId pulumi.StringPtrOutput `pulumi:"hockeyAppId"`
	// Token used to authenticate communications with between Application Insights and HockeyApp.
	HockeyAppToken pulumi.StringOutput `pulumi:"hockeyAppToken"`
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days pulumi.BoolPtrOutput `pulumi:"immediatePurgeDataOn30Days"`
	// Indicates the flow of the ingestion.
	IngestionMode pulumi.StringPtrOutput `pulumi:"ingestionMode"`
	// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
	InstrumentationKey pulumi.StringOutput `pulumi:"instrumentationKey"`
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// The date which the component got migrated to LA, in ISO 8601 format.
	LaMigrationDate pulumi.StringOutput `pulumi:"laMigrationDate"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Azure resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// List of linked private link scope resources.
	PrivateLinkScopedResources PrivateLinkScopedResourceResponseArrayOutput `pulumi:"privateLinkScopedResources"`
	// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The network access type for accessing Application Insights ingestion.
	PublicNetworkAccessForIngestion pulumi.StringPtrOutput `pulumi:"publicNetworkAccessForIngestion"`
	// The network access type for accessing Application Insights query.
	PublicNetworkAccessForQuery pulumi.StringPtrOutput `pulumi:"publicNetworkAccessForQuery"`
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource pulumi.StringPtrOutput `pulumi:"requestSource"`
	// Retention period in days.
	RetentionInDays pulumi.IntOutput `pulumi:"retentionInDays"`
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage pulumi.Float64PtrOutput `pulumi:"samplingPercentage"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Azure Tenant Id.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// Azure resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// ResourceId of the log analytics workspace which the data will be ingested to.
	WorkspaceResourceId pulumi.StringOutput `pulumi:"workspaceResourceId"`
}

// NewComponent registers a new resource with the given unique name, arguments, and options.
func NewComponent(ctx *pulumi.Context,
	name string, args *ComponentArgs, opts ...pulumi.ResourceOption) (*Component, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApplicationType == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationType'")
	}
	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	if args.WorkspaceResourceId == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceResourceId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:insights/latest:Component"),
		},
		{
			Type: pulumi.String("azure-nextgen:insights/v20150501:Component"),
		},
		{
			Type: pulumi.String("azure-nextgen:insights/v20180501preview:Component"),
		},
	})
	opts = append(opts, aliases)
	var resource Component
	err := ctx.RegisterResource("azure-nextgen:insights/v20200202preview:Component", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetComponent gets an existing Component resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetComponent(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ComponentState, opts ...pulumi.ResourceOption) (*Component, error) {
	var resource Component
	err := ctx.ReadResource("azure-nextgen:insights/v20200202preview:Component", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Component resources.
type componentState struct {
	// Application Insights Unique ID for your Application.
	AppId *string `pulumi:"appId"`
	// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
	ApplicationId *string `pulumi:"applicationId"`
	// Type of application being monitored.
	ApplicationType *string `pulumi:"applicationType"`
	// Application Insights component connection string.
	ConnectionString *string `pulumi:"connectionString"`
	// Creation Date for the Application Insights component, in ISO 8601 format.
	CreationDate *string `pulumi:"creationDate"`
	// Disable IP masking.
	DisableIpMasking *bool `pulumi:"disableIpMasking"`
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType *string `pulumi:"flowType"`
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId *string `pulumi:"hockeyAppId"`
	// Token used to authenticate communications with between Application Insights and HockeyApp.
	HockeyAppToken *string `pulumi:"hockeyAppToken"`
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days *bool `pulumi:"immediatePurgeDataOn30Days"`
	// Indicates the flow of the ingestion.
	IngestionMode *string `pulumi:"ingestionMode"`
	// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
	InstrumentationKey *string `pulumi:"instrumentationKey"`
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind *string `pulumi:"kind"`
	// The date which the component got migrated to LA, in ISO 8601 format.
	LaMigrationDate *string `pulumi:"laMigrationDate"`
	// Resource location
	Location *string `pulumi:"location"`
	// Azure resource name
	Name *string `pulumi:"name"`
	// List of linked private link scope resources.
	PrivateLinkScopedResources []PrivateLinkScopedResourceResponse `pulumi:"privateLinkScopedResources"`
	// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The network access type for accessing Application Insights ingestion.
	PublicNetworkAccessForIngestion *string `pulumi:"publicNetworkAccessForIngestion"`
	// The network access type for accessing Application Insights query.
	PublicNetworkAccessForQuery *string `pulumi:"publicNetworkAccessForQuery"`
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource *string `pulumi:"requestSource"`
	// Retention period in days.
	RetentionInDays *int `pulumi:"retentionInDays"`
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage *float64 `pulumi:"samplingPercentage"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure Tenant Id.
	TenantId *string `pulumi:"tenantId"`
	// Azure resource type
	Type *string `pulumi:"type"`
	// ResourceId of the log analytics workspace which the data will be ingested to.
	WorkspaceResourceId *string `pulumi:"workspaceResourceId"`
}

type ComponentState struct {
	// Application Insights Unique ID for your Application.
	AppId pulumi.StringPtrInput
	// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
	ApplicationId pulumi.StringPtrInput
	// Type of application being monitored.
	ApplicationType pulumi.StringPtrInput
	// Application Insights component connection string.
	ConnectionString pulumi.StringPtrInput
	// Creation Date for the Application Insights component, in ISO 8601 format.
	CreationDate pulumi.StringPtrInput
	// Disable IP masking.
	DisableIpMasking pulumi.BoolPtrInput
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType pulumi.StringPtrInput
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId pulumi.StringPtrInput
	// Token used to authenticate communications with between Application Insights and HockeyApp.
	HockeyAppToken pulumi.StringPtrInput
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days pulumi.BoolPtrInput
	// Indicates the flow of the ingestion.
	IngestionMode pulumi.StringPtrInput
	// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
	InstrumentationKey pulumi.StringPtrInput
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind pulumi.StringPtrInput
	// The date which the component got migrated to LA, in ISO 8601 format.
	LaMigrationDate pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Azure resource name
	Name pulumi.StringPtrInput
	// List of linked private link scope resources.
	PrivateLinkScopedResources PrivateLinkScopedResourceResponseArrayInput
	// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
	ProvisioningState pulumi.StringPtrInput
	// The network access type for accessing Application Insights ingestion.
	PublicNetworkAccessForIngestion pulumi.StringPtrInput
	// The network access type for accessing Application Insights query.
	PublicNetworkAccessForQuery pulumi.StringPtrInput
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource pulumi.StringPtrInput
	// Retention period in days.
	RetentionInDays pulumi.IntPtrInput
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage pulumi.Float64PtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Azure Tenant Id.
	TenantId pulumi.StringPtrInput
	// Azure resource type
	Type pulumi.StringPtrInput
	// ResourceId of the log analytics workspace which the data will be ingested to.
	WorkspaceResourceId pulumi.StringPtrInput
}

func (ComponentState) ElementType() reflect.Type {
	return reflect.TypeOf((*componentState)(nil)).Elem()
}

type componentArgs struct {
	// Type of application being monitored.
	ApplicationType string `pulumi:"applicationType"`
	// Disable IP masking.
	DisableIpMasking *bool `pulumi:"disableIpMasking"`
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType *string `pulumi:"flowType"`
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId *string `pulumi:"hockeyAppId"`
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days *bool `pulumi:"immediatePurgeDataOn30Days"`
	// Indicates the flow of the ingestion.
	IngestionMode *string `pulumi:"ingestionMode"`
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind string `pulumi:"kind"`
	// Resource location
	Location string `pulumi:"location"`
	// The network access type for accessing Application Insights ingestion.
	PublicNetworkAccessForIngestion *string `pulumi:"publicNetworkAccessForIngestion"`
	// The network access type for accessing Application Insights query.
	PublicNetworkAccessForQuery *string `pulumi:"publicNetworkAccessForQuery"`
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource *string `pulumi:"requestSource"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage *float64 `pulumi:"samplingPercentage"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// ResourceId of the log analytics workspace which the data will be ingested to.
	WorkspaceResourceId string `pulumi:"workspaceResourceId"`
}

// The set of arguments for constructing a Component resource.
type ComponentArgs struct {
	// Type of application being monitored.
	ApplicationType pulumi.StringInput
	// Disable IP masking.
	DisableIpMasking pulumi.BoolPtrInput
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType pulumi.StringPtrInput
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId pulumi.StringPtrInput
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days pulumi.BoolPtrInput
	// Indicates the flow of the ingestion.
	IngestionMode pulumi.StringPtrInput
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind pulumi.StringInput
	// Resource location
	Location pulumi.StringInput
	// The network access type for accessing Application Insights ingestion.
	PublicNetworkAccessForIngestion pulumi.StringPtrInput
	// The network access type for accessing Application Insights query.
	PublicNetworkAccessForQuery pulumi.StringPtrInput
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the Application Insights component resource.
	ResourceName pulumi.StringInput
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage pulumi.Float64PtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// ResourceId of the log analytics workspace which the data will be ingested to.
	WorkspaceResourceId pulumi.StringInput
}

func (ComponentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*componentArgs)(nil)).Elem()
}

type ComponentInput interface {
	pulumi.Input

	ToComponentOutput() ComponentOutput
	ToComponentOutputWithContext(ctx context.Context) ComponentOutput
}

func (*Component) ElementType() reflect.Type {
	return reflect.TypeOf((*Component)(nil))
}

func (i *Component) ToComponentOutput() ComponentOutput {
	return i.ToComponentOutputWithContext(context.Background())
}

func (i *Component) ToComponentOutputWithContext(ctx context.Context) ComponentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ComponentOutput)
}

type ComponentOutput struct {
	*pulumi.OutputState
}

func (ComponentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Component)(nil))
}

func (o ComponentOutput) ToComponentOutput() ComponentOutput {
	return o
}

func (o ComponentOutput) ToComponentOutputWithContext(ctx context.Context) ComponentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ComponentOutput{})
}
