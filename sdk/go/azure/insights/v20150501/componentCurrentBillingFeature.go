// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Application Insights component billing features
type ComponentCurrentBillingFeature struct {
	pulumi.CustomResourceState

	// Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
	CurrentBillingFeatures pulumi.StringArrayOutput `pulumi:"currentBillingFeatures"`
	// An Application Insights component daily data volume cap
	DataVolumeCap ApplicationInsightsComponentDataVolumeCapResponsePtrOutput `pulumi:"dataVolumeCap"`
}

// NewComponentCurrentBillingFeature registers a new resource with the given unique name, arguments, and options.
func NewComponentCurrentBillingFeature(ctx *pulumi.Context,
	name string, args *ComponentCurrentBillingFeatureArgs, opts ...pulumi.ResourceOption) (*ComponentCurrentBillingFeature, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:insights/latest:ComponentCurrentBillingFeature"),
		},
	})
	opts = append(opts, aliases)
	var resource ComponentCurrentBillingFeature
	err := ctx.RegisterResource("azure-nextgen:insights/v20150501:ComponentCurrentBillingFeature", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetComponentCurrentBillingFeature gets an existing ComponentCurrentBillingFeature resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetComponentCurrentBillingFeature(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ComponentCurrentBillingFeatureState, opts ...pulumi.ResourceOption) (*ComponentCurrentBillingFeature, error) {
	var resource ComponentCurrentBillingFeature
	err := ctx.ReadResource("azure-nextgen:insights/v20150501:ComponentCurrentBillingFeature", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ComponentCurrentBillingFeature resources.
type componentCurrentBillingFeatureState struct {
	// Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
	CurrentBillingFeatures []string `pulumi:"currentBillingFeatures"`
	// An Application Insights component daily data volume cap
	DataVolumeCap *ApplicationInsightsComponentDataVolumeCapResponse `pulumi:"dataVolumeCap"`
}

type ComponentCurrentBillingFeatureState struct {
	// Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
	CurrentBillingFeatures pulumi.StringArrayInput
	// An Application Insights component daily data volume cap
	DataVolumeCap ApplicationInsightsComponentDataVolumeCapResponsePtrInput
}

func (ComponentCurrentBillingFeatureState) ElementType() reflect.Type {
	return reflect.TypeOf((*componentCurrentBillingFeatureState)(nil)).Elem()
}

type componentCurrentBillingFeatureArgs struct {
	// Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
	CurrentBillingFeatures []string `pulumi:"currentBillingFeatures"`
	// An Application Insights component daily data volume cap
	DataVolumeCap *ApplicationInsightsComponentDataVolumeCap `pulumi:"dataVolumeCap"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
}

// The set of arguments for constructing a ComponentCurrentBillingFeature resource.
type ComponentCurrentBillingFeatureArgs struct {
	// Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
	CurrentBillingFeatures pulumi.StringArrayInput
	// An Application Insights component daily data volume cap
	DataVolumeCap ApplicationInsightsComponentDataVolumeCapPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the Application Insights component resource.
	ResourceName pulumi.StringInput
}

func (ComponentCurrentBillingFeatureArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*componentCurrentBillingFeatureArgs)(nil)).Elem()
}

type ComponentCurrentBillingFeatureInput interface {
	pulumi.Input

	ToComponentCurrentBillingFeatureOutput() ComponentCurrentBillingFeatureOutput
	ToComponentCurrentBillingFeatureOutputWithContext(ctx context.Context) ComponentCurrentBillingFeatureOutput
}

func (ComponentCurrentBillingFeature) ElementType() reflect.Type {
	return reflect.TypeOf((*ComponentCurrentBillingFeature)(nil)).Elem()
}

func (i ComponentCurrentBillingFeature) ToComponentCurrentBillingFeatureOutput() ComponentCurrentBillingFeatureOutput {
	return i.ToComponentCurrentBillingFeatureOutputWithContext(context.Background())
}

func (i ComponentCurrentBillingFeature) ToComponentCurrentBillingFeatureOutputWithContext(ctx context.Context) ComponentCurrentBillingFeatureOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ComponentCurrentBillingFeatureOutput)
}

type ComponentCurrentBillingFeatureOutput struct {
	*pulumi.OutputState
}

func (ComponentCurrentBillingFeatureOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ComponentCurrentBillingFeatureOutput)(nil)).Elem()
}

func (o ComponentCurrentBillingFeatureOutput) ToComponentCurrentBillingFeatureOutput() ComponentCurrentBillingFeatureOutput {
	return o
}

func (o ComponentCurrentBillingFeatureOutput) ToComponentCurrentBillingFeatureOutputWithContext(ctx context.Context) ComponentCurrentBillingFeatureOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ComponentCurrentBillingFeatureOutput{})
}
