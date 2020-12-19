// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Properties that define a Continuous Export configuration.
// Latest API Version: 2015-05-01.
type ExportConfiguration struct {
	pulumi.CustomResourceState

	// The name of the Application Insights component.
	ApplicationName pulumi.StringOutput `pulumi:"applicationName"`
	// The name of the destination storage container.
	ContainerName pulumi.StringOutput `pulumi:"containerName"`
	// The name of destination account.
	DestinationAccountId pulumi.StringOutput `pulumi:"destinationAccountId"`
	// The destination account location ID.
	DestinationStorageLocationId pulumi.StringOutput `pulumi:"destinationStorageLocationId"`
	// The destination storage account subscription ID.
	DestinationStorageSubscriptionId pulumi.StringOutput `pulumi:"destinationStorageSubscriptionId"`
	// The destination type.
	DestinationType pulumi.StringOutput `pulumi:"destinationType"`
	// The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
	ExportId pulumi.StringOutput `pulumi:"exportId"`
	// This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
	ExportStatus pulumi.StringOutput `pulumi:"exportStatus"`
	// The instrumentation key of the Application Insights component.
	InstrumentationKey pulumi.StringOutput `pulumi:"instrumentationKey"`
	// This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
	IsUserEnabled pulumi.StringOutput `pulumi:"isUserEnabled"`
	// The last time the Continuous Export configuration started failing.
	LastGapTime pulumi.StringOutput `pulumi:"lastGapTime"`
	// The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
	LastSuccessTime pulumi.StringOutput `pulumi:"lastSuccessTime"`
	// Last time the Continuous Export configuration was updated.
	LastUserUpdate pulumi.StringOutput `pulumi:"lastUserUpdate"`
	// Deprecated
	NotificationQueueEnabled pulumi.StringPtrOutput `pulumi:"notificationQueueEnabled"`
	// This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
	PermanentErrorReason pulumi.StringOutput `pulumi:"permanentErrorReason"`
	// This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
	RecordTypes pulumi.StringPtrOutput `pulumi:"recordTypes"`
	// The resource group of the Application Insights component.
	ResourceGroup pulumi.StringOutput `pulumi:"resourceGroup"`
	// The name of the destination storage account.
	StorageName pulumi.StringOutput `pulumi:"storageName"`
	// The subscription of the Application Insights component.
	SubscriptionId pulumi.StringOutput `pulumi:"subscriptionId"`
}

// NewExportConfiguration registers a new resource with the given unique name, arguments, and options.
func NewExportConfiguration(ctx *pulumi.Context,
	name string, args *ExportConfigurationArgs, opts ...pulumi.ResourceOption) (*ExportConfiguration, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ExportId == nil {
		return nil, errors.New("invalid value for required argument 'ExportId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:insights/v20150501:ExportConfiguration"),
		},
	})
	opts = append(opts, aliases)
	var resource ExportConfiguration
	err := ctx.RegisterResource("azure-nextgen:insights/latest:ExportConfiguration", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExportConfiguration gets an existing ExportConfiguration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExportConfiguration(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExportConfigurationState, opts ...pulumi.ResourceOption) (*ExportConfiguration, error) {
	var resource ExportConfiguration
	err := ctx.ReadResource("azure-nextgen:insights/latest:ExportConfiguration", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExportConfiguration resources.
type exportConfigurationState struct {
	// The name of the Application Insights component.
	ApplicationName *string `pulumi:"applicationName"`
	// The name of the destination storage container.
	ContainerName *string `pulumi:"containerName"`
	// The name of destination account.
	DestinationAccountId *string `pulumi:"destinationAccountId"`
	// The destination account location ID.
	DestinationStorageLocationId *string `pulumi:"destinationStorageLocationId"`
	// The destination storage account subscription ID.
	DestinationStorageSubscriptionId *string `pulumi:"destinationStorageSubscriptionId"`
	// The destination type.
	DestinationType *string `pulumi:"destinationType"`
	// The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
	ExportId *string `pulumi:"exportId"`
	// This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
	ExportStatus *string `pulumi:"exportStatus"`
	// The instrumentation key of the Application Insights component.
	InstrumentationKey *string `pulumi:"instrumentationKey"`
	// This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
	IsUserEnabled *string `pulumi:"isUserEnabled"`
	// The last time the Continuous Export configuration started failing.
	LastGapTime *string `pulumi:"lastGapTime"`
	// The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
	LastSuccessTime *string `pulumi:"lastSuccessTime"`
	// Last time the Continuous Export configuration was updated.
	LastUserUpdate *string `pulumi:"lastUserUpdate"`
	// Deprecated
	NotificationQueueEnabled *string `pulumi:"notificationQueueEnabled"`
	// This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
	PermanentErrorReason *string `pulumi:"permanentErrorReason"`
	// This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
	RecordTypes *string `pulumi:"recordTypes"`
	// The resource group of the Application Insights component.
	ResourceGroup *string `pulumi:"resourceGroup"`
	// The name of the destination storage account.
	StorageName *string `pulumi:"storageName"`
	// The subscription of the Application Insights component.
	SubscriptionId *string `pulumi:"subscriptionId"`
}

type ExportConfigurationState struct {
	// The name of the Application Insights component.
	ApplicationName pulumi.StringPtrInput
	// The name of the destination storage container.
	ContainerName pulumi.StringPtrInput
	// The name of destination account.
	DestinationAccountId pulumi.StringPtrInput
	// The destination account location ID.
	DestinationStorageLocationId pulumi.StringPtrInput
	// The destination storage account subscription ID.
	DestinationStorageSubscriptionId pulumi.StringPtrInput
	// The destination type.
	DestinationType pulumi.StringPtrInput
	// The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
	ExportId pulumi.StringPtrInput
	// This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
	ExportStatus pulumi.StringPtrInput
	// The instrumentation key of the Application Insights component.
	InstrumentationKey pulumi.StringPtrInput
	// This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
	IsUserEnabled pulumi.StringPtrInput
	// The last time the Continuous Export configuration started failing.
	LastGapTime pulumi.StringPtrInput
	// The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
	LastSuccessTime pulumi.StringPtrInput
	// Last time the Continuous Export configuration was updated.
	LastUserUpdate pulumi.StringPtrInput
	// Deprecated
	NotificationQueueEnabled pulumi.StringPtrInput
	// This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
	PermanentErrorReason pulumi.StringPtrInput
	// This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
	RecordTypes pulumi.StringPtrInput
	// The resource group of the Application Insights component.
	ResourceGroup pulumi.StringPtrInput
	// The name of the destination storage account.
	StorageName pulumi.StringPtrInput
	// The subscription of the Application Insights component.
	SubscriptionId pulumi.StringPtrInput
}

func (ExportConfigurationState) ElementType() reflect.Type {
	return reflect.TypeOf((*exportConfigurationState)(nil)).Elem()
}

type exportConfigurationArgs struct {
	// The name of destination storage account.
	DestinationAccountId *string `pulumi:"destinationAccountId"`
	// The SAS URL for the destination storage container. It must grant write permission.
	DestinationAddress *string `pulumi:"destinationAddress"`
	// The location ID of the destination storage container.
	DestinationStorageLocationId *string `pulumi:"destinationStorageLocationId"`
	// The subscription ID of the destination storage container.
	DestinationStorageSubscriptionId *string `pulumi:"destinationStorageSubscriptionId"`
	// The Continuous Export destination type. This has to be 'Blob'.
	DestinationType *string `pulumi:"destinationType"`
	// The Continuous Export configuration ID. This is unique within a Application Insights component.
	ExportId string `pulumi:"exportId"`
	// Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
	IsEnabled *string `pulumi:"isEnabled"`
	// Deprecated
	NotificationQueueEnabled *string `pulumi:"notificationQueueEnabled"`
	// Deprecated
	NotificationQueueUri *string `pulumi:"notificationQueueUri"`
	// The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
	RecordTypes *string `pulumi:"recordTypes"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
}

// The set of arguments for constructing a ExportConfiguration resource.
type ExportConfigurationArgs struct {
	// The name of destination storage account.
	DestinationAccountId pulumi.StringPtrInput
	// The SAS URL for the destination storage container. It must grant write permission.
	DestinationAddress pulumi.StringPtrInput
	// The location ID of the destination storage container.
	DestinationStorageLocationId pulumi.StringPtrInput
	// The subscription ID of the destination storage container.
	DestinationStorageSubscriptionId pulumi.StringPtrInput
	// The Continuous Export destination type. This has to be 'Blob'.
	DestinationType pulumi.StringPtrInput
	// The Continuous Export configuration ID. This is unique within a Application Insights component.
	ExportId pulumi.StringInput
	// Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
	IsEnabled pulumi.StringPtrInput
	// Deprecated
	NotificationQueueEnabled pulumi.StringPtrInput
	// Deprecated
	NotificationQueueUri pulumi.StringPtrInput
	// The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
	RecordTypes pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the Application Insights component resource.
	ResourceName pulumi.StringInput
}

func (ExportConfigurationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*exportConfigurationArgs)(nil)).Elem()
}

type ExportConfigurationInput interface {
	pulumi.Input

	ToExportConfigurationOutput() ExportConfigurationOutput
	ToExportConfigurationOutputWithContext(ctx context.Context) ExportConfigurationOutput
}

func (*ExportConfiguration) ElementType() reflect.Type {
	return reflect.TypeOf((*ExportConfiguration)(nil))
}

func (i *ExportConfiguration) ToExportConfigurationOutput() ExportConfigurationOutput {
	return i.ToExportConfigurationOutputWithContext(context.Background())
}

func (i *ExportConfiguration) ToExportConfigurationOutputWithContext(ctx context.Context) ExportConfigurationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExportConfigurationOutput)
}

type ExportConfigurationOutput struct {
	*pulumi.OutputState
}

func (ExportConfigurationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExportConfiguration)(nil))
}

func (o ExportConfigurationOutput) ToExportConfigurationOutput() ExportConfigurationOutput {
	return o
}

func (o ExportConfigurationOutput) ToExportConfigurationOutputWithContext(ctx context.Context) ExportConfigurationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExportConfigurationOutput{})
}
