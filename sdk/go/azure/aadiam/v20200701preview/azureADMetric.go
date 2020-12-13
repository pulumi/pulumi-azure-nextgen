// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// AzureADMetrics resource.
type AzureADMetric struct {
	pulumi.CustomResourceState

	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name       pulumi.StringOutput                          `pulumi:"name"`
	Properties AzureADMetricsPropertiesFormatResponseOutput `pulumi:"properties"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAzureADMetric registers a new resource with the given unique name, arguments, and options.
func NewAzureADMetric(ctx *pulumi.Context,
	name string, args *AzureADMetricArgs, opts ...pulumi.ResourceOption) (*AzureADMetric, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AzureADMetricsName == nil {
		return nil, errors.New("invalid value for required argument 'AzureADMetricsName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource AzureADMetric
	err := ctx.RegisterResource("azure-nextgen:aadiam/v20200701preview:azureADMetric", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAzureADMetric gets an existing AzureADMetric resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAzureADMetric(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AzureADMetricState, opts ...pulumi.ResourceOption) (*AzureADMetric, error) {
	var resource AzureADMetric
	err := ctx.ReadResource("azure-nextgen:aadiam/v20200701preview:azureADMetric", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AzureADMetric resources.
type azureADMetricState struct {
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name       *string                                 `pulumi:"name"`
	Properties *AzureADMetricsPropertiesFormatResponse `pulumi:"properties"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type AzureADMetricState struct {
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name       pulumi.StringPtrInput
	Properties AzureADMetricsPropertiesFormatResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (AzureADMetricState) ElementType() reflect.Type {
	return reflect.TypeOf((*azureADMetricState)(nil)).Elem()
}

type azureADMetricArgs struct {
	// Name of the azureADMetrics instance.
	AzureADMetricsName string `pulumi:"azureADMetricsName"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a AzureADMetric resource.
type AzureADMetricArgs struct {
	// Name of the azureADMetrics instance.
	AzureADMetricsName pulumi.StringInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (AzureADMetricArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*azureADMetricArgs)(nil)).Elem()
}

type AzureADMetricInput interface {
	pulumi.Input

	ToAzureADMetricOutput() AzureADMetricOutput
	ToAzureADMetricOutputWithContext(ctx context.Context) AzureADMetricOutput
}

func (AzureADMetric) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureADMetric)(nil)).Elem()
}

func (i AzureADMetric) ToAzureADMetricOutput() AzureADMetricOutput {
	return i.ToAzureADMetricOutputWithContext(context.Background())
}

func (i AzureADMetric) ToAzureADMetricOutputWithContext(ctx context.Context) AzureADMetricOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AzureADMetricOutput)
}

type AzureADMetricOutput struct {
	*pulumi.OutputState
}

func (AzureADMetricOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureADMetricOutput)(nil)).Elem()
}

func (o AzureADMetricOutput) ToAzureADMetricOutput() AzureADMetricOutput {
	return o
}

func (o AzureADMetricOutput) ToAzureADMetricOutputWithContext(ctx context.Context) AzureADMetricOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AzureADMetricOutput{})
}
