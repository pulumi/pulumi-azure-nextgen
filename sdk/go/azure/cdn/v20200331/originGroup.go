// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200331

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
type OriginGroup struct {
	pulumi.CustomResourceState

	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersResponsePtrOutput `pulumi:"healthProbeSettings"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The source of the content being delivered via CDN within given origin group.
	Origins ResourceReferenceResponseArrayOutput `pulumi:"origins"`
	// Provisioning status of the origin group.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource status of the origin group.
	ResourceState pulumi.StringOutput `pulumi:"resourceState"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersResponsePtrOutput `pulumi:"responseBasedOriginErrorDetectionSettings"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrOutput `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewOriginGroup registers a new resource with the given unique name, arguments, and options.
func NewOriginGroup(ctx *pulumi.Context,
	name string, args *OriginGroupArgs, opts ...pulumi.ResourceOption) (*OriginGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EndpointName == nil {
		return nil, errors.New("invalid value for required argument 'EndpointName'")
	}
	if args.OriginGroupName == nil {
		return nil, errors.New("invalid value for required argument 'OriginGroupName'")
	}
	if args.Origins == nil {
		return nil, errors.New("invalid value for required argument 'Origins'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:OriginGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20191231:OriginGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200415:OriginGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200901:OriginGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource OriginGroup
	err := ctx.RegisterResource("azure-nextgen:cdn/v20200331:OriginGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetOriginGroup gets an existing OriginGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOriginGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *OriginGroupState, opts ...pulumi.ResourceOption) (*OriginGroup, error) {
	var resource OriginGroup
	err := ctx.ReadResource("azure-nextgen:cdn/v20200331:OriginGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering OriginGroup resources.
type originGroupState struct {
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings *HealthProbeParametersResponse `pulumi:"healthProbeSettings"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The source of the content being delivered via CDN within given origin group.
	Origins []ResourceReferenceResponse `pulumi:"origins"`
	// Provisioning status of the origin group.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource status of the origin group.
	ResourceState *string `pulumi:"resourceState"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings *ResponseBasedOriginErrorDetectionParametersResponse `pulumi:"responseBasedOriginErrorDetectionSettings"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes *int `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type OriginGroupState struct {
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersResponsePtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The source of the content being delivered via CDN within given origin group.
	Origins ResourceReferenceResponseArrayInput
	// Provisioning status of the origin group.
	ProvisioningState pulumi.StringPtrInput
	// Resource status of the origin group.
	ResourceState pulumi.StringPtrInput
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersResponsePtrInput
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (OriginGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*originGroupState)(nil)).Elem()
}

type originGroupArgs struct {
	// Name of the endpoint under the profile which is unique globally.
	EndpointName string `pulumi:"endpointName"`
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings *HealthProbeParameters `pulumi:"healthProbeSettings"`
	// Name of the origin group which is unique within the endpoint.
	OriginGroupName string `pulumi:"originGroupName"`
	// The source of the content being delivered via CDN within given origin group.
	Origins []ResourceReference `pulumi:"origins"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings *ResponseBasedOriginErrorDetectionParameters `pulumi:"responseBasedOriginErrorDetectionSettings"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes *int `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
}

// The set of arguments for constructing a OriginGroup resource.
type OriginGroupArgs struct {
	// Name of the endpoint under the profile which is unique globally.
	EndpointName pulumi.StringInput
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings HealthProbeParametersPtrInput
	// Name of the origin group which is unique within the endpoint.
	OriginGroupName pulumi.StringInput
	// The source of the content being delivered via CDN within given origin group.
	Origins ResourceReferenceArrayInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings ResponseBasedOriginErrorDetectionParametersPtrInput
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes pulumi.IntPtrInput
}

func (OriginGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*originGroupArgs)(nil)).Elem()
}

type OriginGroupInput interface {
	pulumi.Input

	ToOriginGroupOutput() OriginGroupOutput
	ToOriginGroupOutputWithContext(ctx context.Context) OriginGroupOutput
}

func (OriginGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*OriginGroup)(nil)).Elem()
}

func (i OriginGroup) ToOriginGroupOutput() OriginGroupOutput {
	return i.ToOriginGroupOutputWithContext(context.Background())
}

func (i OriginGroup) ToOriginGroupOutputWithContext(ctx context.Context) OriginGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(OriginGroupOutput)
}

type OriginGroupOutput struct {
	*pulumi.OutputState
}

func (OriginGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*OriginGroupOutput)(nil)).Elem()
}

func (o OriginGroupOutput) ToOriginGroupOutput() OriginGroupOutput {
	return o
}

func (o OriginGroupOutput) ToOriginGroupOutputWithContext(ctx context.Context) OriginGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(OriginGroupOutput{})
}
