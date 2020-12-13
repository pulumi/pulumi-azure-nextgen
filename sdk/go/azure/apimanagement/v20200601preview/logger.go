// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Logger details.
type Logger struct {
	pulumi.CustomResourceState

	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials pulumi.StringMapOutput `pulumi:"credentials"`
	// Logger description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered pulumi.BoolPtrOutput `pulumi:"isBuffered"`
	// Logger type.
	LoggerType pulumi.StringOutput `pulumi:"loggerType"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId pulumi.StringPtrOutput `pulumi:"resourceId"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewLogger registers a new resource with the given unique name, arguments, and options.
func NewLogger(ctx *pulumi.Context,
	name string, args *LoggerArgs, opts ...pulumi.ResourceOption) (*Logger, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LoggerId == nil {
		return nil, errors.New("invalid value for required argument 'LoggerId'")
	}
	if args.LoggerType == nil {
		return nil, errors.New("invalid value for required argument 'LoggerType'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20160707:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20161010:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:Logger"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:Logger"),
		},
	})
	opts = append(opts, aliases)
	var resource Logger
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20200601preview:Logger", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLogger gets an existing Logger resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLogger(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LoggerState, opts ...pulumi.ResourceOption) (*Logger, error) {
	var resource Logger
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20200601preview:Logger", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Logger resources.
type loggerState struct {
	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials map[string]string `pulumi:"credentials"`
	// Logger description.
	Description *string `pulumi:"description"`
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered *bool `pulumi:"isBuffered"`
	// Logger type.
	LoggerType *string `pulumi:"loggerType"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId *string `pulumi:"resourceId"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type LoggerState struct {
	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials pulumi.StringMapInput
	// Logger description.
	Description pulumi.StringPtrInput
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered pulumi.BoolPtrInput
	// Logger type.
	LoggerType pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (LoggerState) ElementType() reflect.Type {
	return reflect.TypeOf((*loggerState)(nil)).Elem()
}

type loggerArgs struct {
	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials map[string]string `pulumi:"credentials"`
	// Logger description.
	Description *string `pulumi:"description"`
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered *bool `pulumi:"isBuffered"`
	// Logger identifier. Must be unique in the API Management service instance.
	LoggerId string `pulumi:"loggerId"`
	// Logger type.
	LoggerType string `pulumi:"loggerType"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId *string `pulumi:"resourceId"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a Logger resource.
type LoggerArgs struct {
	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials pulumi.StringMapInput
	// Logger description.
	Description pulumi.StringPtrInput
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered pulumi.BoolPtrInput
	// Logger identifier. Must be unique in the API Management service instance.
	LoggerId pulumi.StringInput
	// Logger type.
	LoggerType pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId pulumi.StringPtrInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (LoggerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*loggerArgs)(nil)).Elem()
}

type LoggerInput interface {
	pulumi.Input

	ToLoggerOutput() LoggerOutput
	ToLoggerOutputWithContext(ctx context.Context) LoggerOutput
}

func (Logger) ElementType() reflect.Type {
	return reflect.TypeOf((*Logger)(nil)).Elem()
}

func (i Logger) ToLoggerOutput() LoggerOutput {
	return i.ToLoggerOutputWithContext(context.Background())
}

func (i Logger) ToLoggerOutputWithContext(ctx context.Context) LoggerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoggerOutput)
}

type LoggerOutput struct {
	*pulumi.OutputState
}

func (LoggerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoggerOutput)(nil)).Elem()
}

func (o LoggerOutput) ToLoggerOutput() LoggerOutput {
	return o
}

func (o LoggerOutput) ToLoggerOutputWithContext(ctx context.Context) LoggerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(LoggerOutput{})
}
