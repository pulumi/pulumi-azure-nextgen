// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Security Solution
type IotSecuritySolution struct {
	pulumi.CustomResourceState

	// List of resources that were automatically discovered as relevant to the security solution.
	AutoDiscoveredResources pulumi.StringArrayOutput `pulumi:"autoDiscoveredResources"`
	// Disabled data sources. Disabling these data sources compromises the system.
	DisabledDataSources pulumi.StringArrayOutput `pulumi:"disabledDataSources"`
	// Resource display name.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// List of additional export to workspace data options
	Export pulumi.StringArrayOutput `pulumi:"export"`
	// IoT Hub resource IDs
	IotHubs pulumi.StringArrayOutput `pulumi:"iotHubs"`
	// The resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// List of recommendation configuration
	RecommendationsConfiguration RecommendationConfigurationPropertiesResponseArrayOutput `pulumi:"recommendationsConfiguration"`
	// Security solution status
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Properties of the solution's user defined resources.
	UserDefinedResources UserDefinedResourcesPropertiesResponsePtrOutput `pulumi:"userDefinedResources"`
	// Workspace resource ID
	Workspace pulumi.StringOutput `pulumi:"workspace"`
}

// NewIotSecuritySolution registers a new resource with the given unique name, arguments, and options.
func NewIotSecuritySolution(ctx *pulumi.Context,
	name string, args *IotSecuritySolutionArgs, opts ...pulumi.ResourceOption) (*IotSecuritySolution, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.IotHubs == nil {
		return nil, errors.New("invalid value for required argument 'IotHubs'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SolutionName == nil {
		return nil, errors.New("invalid value for required argument 'SolutionName'")
	}
	if args.Workspace == nil {
		return nil, errors.New("invalid value for required argument 'Workspace'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:security/latest:IotSecuritySolution"),
		},
		{
			Type: pulumi.String("azure-nextgen:security/v20190801:IotSecuritySolution"),
		},
	})
	opts = append(opts, aliases)
	var resource IotSecuritySolution
	err := ctx.RegisterResource("azure-nextgen:security/v20170801preview:IotSecuritySolution", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIotSecuritySolution gets an existing IotSecuritySolution resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIotSecuritySolution(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IotSecuritySolutionState, opts ...pulumi.ResourceOption) (*IotSecuritySolution, error) {
	var resource IotSecuritySolution
	err := ctx.ReadResource("azure-nextgen:security/v20170801preview:IotSecuritySolution", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IotSecuritySolution resources.
type iotSecuritySolutionState struct {
	// List of resources that were automatically discovered as relevant to the security solution.
	AutoDiscoveredResources []string `pulumi:"autoDiscoveredResources"`
	// Disabled data sources. Disabling these data sources compromises the system.
	DisabledDataSources []string `pulumi:"disabledDataSources"`
	// Resource display name.
	DisplayName *string `pulumi:"displayName"`
	// List of additional export to workspace data options
	Export []string `pulumi:"export"`
	// IoT Hub resource IDs
	IotHubs []string `pulumi:"iotHubs"`
	// The resource location.
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// List of recommendation configuration
	RecommendationsConfiguration []RecommendationConfigurationPropertiesResponse `pulumi:"recommendationsConfiguration"`
	// Security solution status
	Status *string `pulumi:"status"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Properties of the solution's user defined resources.
	UserDefinedResources *UserDefinedResourcesPropertiesResponse `pulumi:"userDefinedResources"`
	// Workspace resource ID
	Workspace *string `pulumi:"workspace"`
}

type IotSecuritySolutionState struct {
	// List of resources that were automatically discovered as relevant to the security solution.
	AutoDiscoveredResources pulumi.StringArrayInput
	// Disabled data sources. Disabling these data sources compromises the system.
	DisabledDataSources pulumi.StringArrayInput
	// Resource display name.
	DisplayName pulumi.StringPtrInput
	// List of additional export to workspace data options
	Export pulumi.StringArrayInput
	// IoT Hub resource IDs
	IotHubs pulumi.StringArrayInput
	// The resource location.
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// List of recommendation configuration
	RecommendationsConfiguration RecommendationConfigurationPropertiesResponseArrayInput
	// Security solution status
	Status pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Properties of the solution's user defined resources.
	UserDefinedResources UserDefinedResourcesPropertiesResponsePtrInput
	// Workspace resource ID
	Workspace pulumi.StringPtrInput
}

func (IotSecuritySolutionState) ElementType() reflect.Type {
	return reflect.TypeOf((*iotSecuritySolutionState)(nil)).Elem()
}

type iotSecuritySolutionArgs struct {
	// Disabled data sources. Disabling these data sources compromises the system.
	DisabledDataSources []string `pulumi:"disabledDataSources"`
	// Resource display name.
	DisplayName string `pulumi:"displayName"`
	// List of additional export to workspace data options
	Export []string `pulumi:"export"`
	// IoT Hub resource IDs
	IotHubs []string `pulumi:"iotHubs"`
	// The resource location.
	Location *string `pulumi:"location"`
	// List of recommendation configuration
	RecommendationsConfiguration []RecommendationConfigurationProperties `pulumi:"recommendationsConfiguration"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The solution manager name
	SolutionName string `pulumi:"solutionName"`
	// Security solution status
	Status *string `pulumi:"status"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Properties of the solution's user defined resources.
	UserDefinedResources *UserDefinedResourcesProperties `pulumi:"userDefinedResources"`
	// Workspace resource ID
	Workspace string `pulumi:"workspace"`
}

// The set of arguments for constructing a IotSecuritySolution resource.
type IotSecuritySolutionArgs struct {
	// Disabled data sources. Disabling these data sources compromises the system.
	DisabledDataSources pulumi.StringArrayInput
	// Resource display name.
	DisplayName pulumi.StringInput
	// List of additional export to workspace data options
	Export pulumi.StringArrayInput
	// IoT Hub resource IDs
	IotHubs pulumi.StringArrayInput
	// The resource location.
	Location pulumi.StringPtrInput
	// List of recommendation configuration
	RecommendationsConfiguration RecommendationConfigurationPropertiesArrayInput
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The solution manager name
	SolutionName pulumi.StringInput
	// Security solution status
	Status pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Properties of the solution's user defined resources.
	UserDefinedResources UserDefinedResourcesPropertiesPtrInput
	// Workspace resource ID
	Workspace pulumi.StringInput
}

func (IotSecuritySolutionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*iotSecuritySolutionArgs)(nil)).Elem()
}

type IotSecuritySolutionInput interface {
	pulumi.Input

	ToIotSecuritySolutionOutput() IotSecuritySolutionOutput
	ToIotSecuritySolutionOutputWithContext(ctx context.Context) IotSecuritySolutionOutput
}

func (*IotSecuritySolution) ElementType() reflect.Type {
	return reflect.TypeOf((*IotSecuritySolution)(nil))
}

func (i *IotSecuritySolution) ToIotSecuritySolutionOutput() IotSecuritySolutionOutput {
	return i.ToIotSecuritySolutionOutputWithContext(context.Background())
}

func (i *IotSecuritySolution) ToIotSecuritySolutionOutputWithContext(ctx context.Context) IotSecuritySolutionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IotSecuritySolutionOutput)
}

type IotSecuritySolutionOutput struct {
	*pulumi.OutputState
}

func (IotSecuritySolutionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IotSecuritySolution)(nil))
}

func (o IotSecuritySolutionOutput) ToIotSecuritySolutionOutput() IotSecuritySolutionOutput {
	return o
}

func (o IotSecuritySolutionOutput) ToIotSecuritySolutionOutputWithContext(ctx context.Context) IotSecuritySolutionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IotSecuritySolutionOutput{})
}
