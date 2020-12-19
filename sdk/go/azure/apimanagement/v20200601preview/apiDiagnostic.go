// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Diagnostic details.
type ApiDiagnostic struct {
	pulumi.CustomResourceState

	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog pulumi.StringPtrOutput `pulumi:"alwaysLog"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend PipelineDiagnosticSettingsResponsePtrOutput `pulumi:"backend"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend PipelineDiagnosticSettingsResponsePtrOutput `pulumi:"frontend"`
	// Sets correlation protocol to use for Application Insights diagnostics.
	HttpCorrelationProtocol pulumi.StringPtrOutput `pulumi:"httpCorrelationProtocol"`
	// Log the ClientIP. Default is false.
	LogClientIp pulumi.BoolPtrOutput `pulumi:"logClientIp"`
	// Resource Id of a target logger.
	LoggerId pulumi.StringOutput `pulumi:"loggerId"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The format of the Operation Name for Application Insights telemetries. Default is Name.
	OperationNameFormat pulumi.StringPtrOutput `pulumi:"operationNameFormat"`
	// Sampling settings for Diagnostic.
	Sampling SamplingSettingsResponsePtrOutput `pulumi:"sampling"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The verbosity level applied to traces emitted by trace policies.
	Verbosity pulumi.StringPtrOutput `pulumi:"verbosity"`
}

// NewApiDiagnostic registers a new resource with the given unique name, arguments, and options.
func NewApiDiagnostic(ctx *pulumi.Context,
	name string, args *ApiDiagnosticArgs, opts ...pulumi.ResourceOption) (*ApiDiagnostic, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
	}
	if args.DiagnosticId == nil {
		return nil, errors.New("invalid value for required argument 'DiagnosticId'")
	}
	if args.LoggerId == nil {
		return nil, errors.New("invalid value for required argument 'LoggerId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ApiDiagnostic"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ApiDiagnostic"),
		},
	})
	opts = append(opts, aliases)
	var resource ApiDiagnostic
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20200601preview:ApiDiagnostic", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiDiagnostic gets an existing ApiDiagnostic resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiDiagnostic(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiDiagnosticState, opts ...pulumi.ResourceOption) (*ApiDiagnostic, error) {
	var resource ApiDiagnostic
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20200601preview:ApiDiagnostic", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiDiagnostic resources.
type apiDiagnosticState struct {
	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog *string `pulumi:"alwaysLog"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend *PipelineDiagnosticSettingsResponse `pulumi:"backend"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend *PipelineDiagnosticSettingsResponse `pulumi:"frontend"`
	// Sets correlation protocol to use for Application Insights diagnostics.
	HttpCorrelationProtocol *string `pulumi:"httpCorrelationProtocol"`
	// Log the ClientIP. Default is false.
	LogClientIp *bool `pulumi:"logClientIp"`
	// Resource Id of a target logger.
	LoggerId *string `pulumi:"loggerId"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The format of the Operation Name for Application Insights telemetries. Default is Name.
	OperationNameFormat *string `pulumi:"operationNameFormat"`
	// Sampling settings for Diagnostic.
	Sampling *SamplingSettingsResponse `pulumi:"sampling"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// The verbosity level applied to traces emitted by trace policies.
	Verbosity *string `pulumi:"verbosity"`
}

type ApiDiagnosticState struct {
	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog pulumi.StringPtrInput
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend PipelineDiagnosticSettingsResponsePtrInput
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend PipelineDiagnosticSettingsResponsePtrInput
	// Sets correlation protocol to use for Application Insights diagnostics.
	HttpCorrelationProtocol pulumi.StringPtrInput
	// Log the ClientIP. Default is false.
	LogClientIp pulumi.BoolPtrInput
	// Resource Id of a target logger.
	LoggerId pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The format of the Operation Name for Application Insights telemetries. Default is Name.
	OperationNameFormat pulumi.StringPtrInput
	// Sampling settings for Diagnostic.
	Sampling SamplingSettingsResponsePtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// The verbosity level applied to traces emitted by trace policies.
	Verbosity pulumi.StringPtrInput
}

func (ApiDiagnosticState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiDiagnosticState)(nil)).Elem()
}

type apiDiagnosticArgs struct {
	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog *string `pulumi:"alwaysLog"`
	// API identifier. Must be unique in the current API Management service instance.
	ApiId string `pulumi:"apiId"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend *PipelineDiagnosticSettings `pulumi:"backend"`
	// Diagnostic identifier. Must be unique in the current API Management service instance.
	DiagnosticId string `pulumi:"diagnosticId"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend *PipelineDiagnosticSettings `pulumi:"frontend"`
	// Sets correlation protocol to use for Application Insights diagnostics.
	HttpCorrelationProtocol *string `pulumi:"httpCorrelationProtocol"`
	// Log the ClientIP. Default is false.
	LogClientIp *bool `pulumi:"logClientIp"`
	// Resource Id of a target logger.
	LoggerId string `pulumi:"loggerId"`
	// The format of the Operation Name for Application Insights telemetries. Default is Name.
	OperationNameFormat *string `pulumi:"operationNameFormat"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Sampling settings for Diagnostic.
	Sampling *SamplingSettings `pulumi:"sampling"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// The verbosity level applied to traces emitted by trace policies.
	Verbosity *string `pulumi:"verbosity"`
}

// The set of arguments for constructing a ApiDiagnostic resource.
type ApiDiagnosticArgs struct {
	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog pulumi.StringPtrInput
	// API identifier. Must be unique in the current API Management service instance.
	ApiId pulumi.StringInput
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend PipelineDiagnosticSettingsPtrInput
	// Diagnostic identifier. Must be unique in the current API Management service instance.
	DiagnosticId pulumi.StringInput
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend PipelineDiagnosticSettingsPtrInput
	// Sets correlation protocol to use for Application Insights diagnostics.
	HttpCorrelationProtocol pulumi.StringPtrInput
	// Log the ClientIP. Default is false.
	LogClientIp pulumi.BoolPtrInput
	// Resource Id of a target logger.
	LoggerId pulumi.StringInput
	// The format of the Operation Name for Application Insights telemetries. Default is Name.
	OperationNameFormat pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Sampling settings for Diagnostic.
	Sampling SamplingSettingsPtrInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// The verbosity level applied to traces emitted by trace policies.
	Verbosity pulumi.StringPtrInput
}

func (ApiDiagnosticArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiDiagnosticArgs)(nil)).Elem()
}

type ApiDiagnosticInput interface {
	pulumi.Input

	ToApiDiagnosticOutput() ApiDiagnosticOutput
	ToApiDiagnosticOutputWithContext(ctx context.Context) ApiDiagnosticOutput
}

func (*ApiDiagnostic) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiDiagnostic)(nil))
}

func (i *ApiDiagnostic) ToApiDiagnosticOutput() ApiDiagnosticOutput {
	return i.ToApiDiagnosticOutputWithContext(context.Background())
}

func (i *ApiDiagnostic) ToApiDiagnosticOutputWithContext(ctx context.Context) ApiDiagnosticOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApiDiagnosticOutput)
}

type ApiDiagnosticOutput struct {
	*pulumi.OutputState
}

func (ApiDiagnosticOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiDiagnostic)(nil))
}

func (o ApiDiagnosticOutput) ToApiDiagnosticOutput() ApiDiagnosticOutput {
	return o
}

func (o ApiDiagnosticOutput) ToApiDiagnosticOutputWithContext(ctx context.Context) ApiDiagnosticOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApiDiagnosticOutput{})
}
