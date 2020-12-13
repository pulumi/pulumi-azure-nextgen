// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class representing a Traffic Manager endpoint.
type Endpoint struct {
	pulumi.CustomResourceState

	// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
	EndpointLocation pulumi.StringPtrOutput `pulumi:"endpointLocation"`
	// The monitoring status of the endpoint.
	EndpointMonitorStatus pulumi.StringPtrOutput `pulumi:"endpointMonitorStatus"`
	// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
	EndpointStatus pulumi.StringPtrOutput `pulumi:"endpointStatus"`
	// The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
	GeoMapping pulumi.StringArrayOutput `pulumi:"geoMapping"`
	// The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
	MinChildEndpoints pulumi.IntPtrOutput `pulumi:"minChildEndpoints"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
	Priority pulumi.IntPtrOutput `pulumi:"priority"`
	// The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
	Target pulumi.StringPtrOutput `pulumi:"target"`
	// The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
	TargetResourceId pulumi.StringPtrOutput `pulumi:"targetResourceId"`
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type pulumi.StringOutput `pulumi:"type"`
	// The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
	Weight pulumi.IntPtrOutput `pulumi:"weight"`
}

// NewEndpoint registers a new resource with the given unique name, arguments, and options.
func NewEndpoint(ctx *pulumi.Context,
	name string, args *EndpointArgs, opts ...pulumi.ResourceOption) (*Endpoint, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EndpointName == nil {
		return nil, errors.New("invalid value for required argument 'EndpointName'")
	}
	if args.EndpointType == nil {
		return nil, errors.New("invalid value for required argument 'EndpointType'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:Endpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20151101:Endpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:Endpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:Endpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180301:Endpoint"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:Endpoint"),
		},
	})
	opts = append(opts, aliases)
	var resource Endpoint
	err := ctx.RegisterResource("azure-nextgen:network/v20170501:Endpoint", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEndpoint gets an existing Endpoint resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEndpoint(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EndpointState, opts ...pulumi.ResourceOption) (*Endpoint, error) {
	var resource Endpoint
	err := ctx.ReadResource("azure-nextgen:network/v20170501:Endpoint", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Endpoint resources.
type endpointState struct {
	// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
	EndpointLocation *string `pulumi:"endpointLocation"`
	// The monitoring status of the endpoint.
	EndpointMonitorStatus *string `pulumi:"endpointMonitorStatus"`
	// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
	EndpointStatus *string `pulumi:"endpointStatus"`
	// The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
	GeoMapping []string `pulumi:"geoMapping"`
	// The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
	MinChildEndpoints *int `pulumi:"minChildEndpoints"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
	Priority *int `pulumi:"priority"`
	// The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
	Target *string `pulumi:"target"`
	// The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
	TargetResourceId *string `pulumi:"targetResourceId"`
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type *string `pulumi:"type"`
	// The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
	Weight *int `pulumi:"weight"`
}

type EndpointState struct {
	// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
	EndpointLocation pulumi.StringPtrInput
	// The monitoring status of the endpoint.
	EndpointMonitorStatus pulumi.StringPtrInput
	// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
	EndpointStatus pulumi.StringPtrInput
	// The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
	GeoMapping pulumi.StringArrayInput
	// The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
	MinChildEndpoints pulumi.IntPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
	Priority pulumi.IntPtrInput
	// The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
	Target pulumi.StringPtrInput
	// The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
	TargetResourceId pulumi.StringPtrInput
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type pulumi.StringPtrInput
	// The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
	Weight pulumi.IntPtrInput
}

func (EndpointState) ElementType() reflect.Type {
	return reflect.TypeOf((*endpointState)(nil)).Elem()
}

type endpointArgs struct {
	// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
	EndpointLocation *string `pulumi:"endpointLocation"`
	// The monitoring status of the endpoint.
	EndpointMonitorStatus *string `pulumi:"endpointMonitorStatus"`
	// The name of the Traffic Manager endpoint to be created or updated.
	EndpointName string `pulumi:"endpointName"`
	// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
	EndpointStatus *string `pulumi:"endpointStatus"`
	// The type of the Traffic Manager endpoint to be created or updated.
	EndpointType string `pulumi:"endpointType"`
	// The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
	GeoMapping []string `pulumi:"geoMapping"`
	// The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
	MinChildEndpoints *int `pulumi:"minChildEndpoints"`
	// The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
	Priority *int `pulumi:"priority"`
	// The name of the Traffic Manager profile.
	ProfileName string `pulumi:"profileName"`
	// The name of the resource group containing the Traffic Manager endpoint to be created or updated.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
	Target *string `pulumi:"target"`
	// The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
	TargetResourceId *string `pulumi:"targetResourceId"`
	// The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
	Weight *int `pulumi:"weight"`
}

// The set of arguments for constructing a Endpoint resource.
type EndpointArgs struct {
	// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
	EndpointLocation pulumi.StringPtrInput
	// The monitoring status of the endpoint.
	EndpointMonitorStatus pulumi.StringPtrInput
	// The name of the Traffic Manager endpoint to be created or updated.
	EndpointName pulumi.StringInput
	// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
	EndpointStatus pulumi.StringPtrInput
	// The type of the Traffic Manager endpoint to be created or updated.
	EndpointType pulumi.StringInput
	// The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
	GeoMapping pulumi.StringArrayInput
	// The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
	MinChildEndpoints pulumi.IntPtrInput
	// The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
	Priority pulumi.IntPtrInput
	// The name of the Traffic Manager profile.
	ProfileName pulumi.StringInput
	// The name of the resource group containing the Traffic Manager endpoint to be created or updated.
	ResourceGroupName pulumi.StringInput
	// The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
	Target pulumi.StringPtrInput
	// The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
	TargetResourceId pulumi.StringPtrInput
	// The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
	Weight pulumi.IntPtrInput
}

func (EndpointArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*endpointArgs)(nil)).Elem()
}

type EndpointInput interface {
	pulumi.Input

	ToEndpointOutput() EndpointOutput
	ToEndpointOutputWithContext(ctx context.Context) EndpointOutput
}

func (Endpoint) ElementType() reflect.Type {
	return reflect.TypeOf((*Endpoint)(nil)).Elem()
}

func (i Endpoint) ToEndpointOutput() EndpointOutput {
	return i.ToEndpointOutputWithContext(context.Background())
}

func (i Endpoint) ToEndpointOutputWithContext(ctx context.Context) EndpointOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointOutput)
}

type EndpointOutput struct {
	*pulumi.OutputState
}

func (EndpointOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EndpointOutput)(nil)).Elem()
}

func (o EndpointOutput) ToEndpointOutput() EndpointOutput {
	return o
}

func (o EndpointOutput) ToEndpointOutputWithContext(ctx context.Context) EndpointOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(EndpointOutput{})
}
