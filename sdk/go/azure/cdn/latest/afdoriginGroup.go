// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// AFDOrigin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
type AFDOriginGroup struct {
	pulumi.CustomResourceState

	DeploymentStatus pulumi.StringOutput `pulumi:"deploymentStatus"`
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersResponsePtrOutput `pulumi:"healthProbeSettings"`
	// Load balancing settings for a backend pool
	LoadBalancingSettings LoadBalancingSettingsParametersResponsePtrOutput `pulumi:"loadBalancingSettings"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning status
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedAfdOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersResponsePtrOutput `pulumi:"responseBasedAfdOriginErrorDetectionSettings"`
	// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
	SessionAffinityState pulumi.StringPtrOutput `pulumi:"sessionAffinityState"`
	// Read only system data
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrOutput `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAFDOriginGroup registers a new resource with the given unique name, arguments, and options.
func NewAFDOriginGroup(ctx *pulumi.Context,
	name string, args *AFDOriginGroupArgs, opts ...pulumi.ResourceOption) (*AFDOriginGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.OriginGroupName == nil {
		return nil, errors.New("invalid value for required argument 'OriginGroupName'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200901:AFDOriginGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource AFDOriginGroup
	err := ctx.RegisterResource("azure-nextgen:cdn/latest:AFDOriginGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAFDOriginGroup gets an existing AFDOriginGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAFDOriginGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AFDOriginGroupState, opts ...pulumi.ResourceOption) (*AFDOriginGroup, error) {
	var resource AFDOriginGroup
	err := ctx.ReadResource("azure-nextgen:cdn/latest:AFDOriginGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AFDOriginGroup resources.
type afdoriginGroupState struct {
	DeploymentStatus *string `pulumi:"deploymentStatus"`
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings *HealthProbeParametersResponse `pulumi:"healthProbeSettings"`
	// Load balancing settings for a backend pool
	LoadBalancingSettings *LoadBalancingSettingsParametersResponse `pulumi:"loadBalancingSettings"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Provisioning status
	ProvisioningState *string `pulumi:"provisioningState"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedAfdOriginErrorDetectionSettings *ResponseBasedOriginErrorDetectionParametersResponse `pulumi:"responseBasedAfdOriginErrorDetectionSettings"`
	// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
	SessionAffinityState *string `pulumi:"sessionAffinityState"`
	// Read only system data
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes *int `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type AFDOriginGroupState struct {
	DeploymentStatus pulumi.StringPtrInput
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersResponsePtrInput
	// Load balancing settings for a backend pool
	LoadBalancingSettings LoadBalancingSettingsParametersResponsePtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Provisioning status
	ProvisioningState pulumi.StringPtrInput
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedAfdOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersResponsePtrInput
	// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
	SessionAffinityState pulumi.StringPtrInput
	// Read only system data
	SystemData SystemDataResponsePtrInput
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (AFDOriginGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*afdoriginGroupState)(nil)).Elem()
}

type afdoriginGroupArgs struct {
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings *HealthProbeParameters `pulumi:"healthProbeSettings"`
	// Load balancing settings for a backend pool
	LoadBalancingSettings *LoadBalancingSettingsParameters `pulumi:"loadBalancingSettings"`
	// Name of the origin group which is unique within the endpoint.
	OriginGroupName string `pulumi:"originGroupName"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedAfdOriginErrorDetectionSettings *ResponseBasedOriginErrorDetectionParameters `pulumi:"responseBasedAfdOriginErrorDetectionSettings"`
	// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
	SessionAffinityState *string `pulumi:"sessionAffinityState"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes *int `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
}

// The set of arguments for constructing a AFDOriginGroup resource.
type AFDOriginGroupArgs struct {
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersPtrInput
	// Load balancing settings for a backend pool
	LoadBalancingSettings LoadBalancingSettingsParametersPtrInput
	// Name of the origin group which is unique within the endpoint.
	OriginGroupName pulumi.StringInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedAfdOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersPtrInput
	// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
	SessionAffinityState pulumi.StringPtrInput
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrInput
}

func (AFDOriginGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*afdoriginGroupArgs)(nil)).Elem()
}

type AFDOriginGroupInput interface {
	pulumi.Input

	ToAFDOriginGroupOutput() AFDOriginGroupOutput
	ToAFDOriginGroupOutputWithContext(ctx context.Context) AFDOriginGroupOutput
}

func (AFDOriginGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*AFDOriginGroup)(nil)).Elem()
}

func (i AFDOriginGroup) ToAFDOriginGroupOutput() AFDOriginGroupOutput {
	return i.ToAFDOriginGroupOutputWithContext(context.Background())
}

func (i AFDOriginGroup) ToAFDOriginGroupOutputWithContext(ctx context.Context) AFDOriginGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AFDOriginGroupOutput)
}

type AFDOriginGroupOutput struct {
	*pulumi.OutputState
}

func (AFDOriginGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AFDOriginGroupOutput)(nil)).Elem()
}

func (o AFDOriginGroupOutput) ToAFDOriginGroupOutput() AFDOriginGroupOutput {
	return o
}

func (o AFDOriginGroupOutput) ToAFDOriginGroupOutputWithContext(ctx context.Context) AFDOriginGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AFDOriginGroupOutput{})
}
