// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class representing a Traffic Manager profile.
type Profile struct {
	pulumi.CustomResourceState

	// The DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigResponsePtrOutput `pulumi:"dnsConfig"`
	// The list of endpoints in the Traffic Manager profile.
	Endpoints EndpointResponseArrayOutput `pulumi:"endpoints"`
	// The Azure Region where the resource lives
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Maximum number of endpoints to be returned for MultiValue routing type.
	MaxReturn pulumi.IntPtrOutput `pulumi:"maxReturn"`
	// The endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigResponsePtrOutput `pulumi:"monitorConfig"`
	// The name of the resource
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The status of the Traffic Manager profile.
	ProfileStatus pulumi.StringPtrOutput `pulumi:"profileStatus"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The traffic routing method of the Traffic Manager profile.
	TrafficRoutingMethod pulumi.StringPtrOutput `pulumi:"trafficRoutingMethod"`
	// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
	TrafficViewEnrollmentStatus pulumi.StringPtrOutput `pulumi:"trafficViewEnrollmentStatus"`
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewProfile registers a new resource with the given unique name, arguments, and options.
func NewProfile(ctx *pulumi.Context,
	name string, args *ProfileArgs, opts ...pulumi.ResourceOption) (*Profile, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20151101:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170501:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180301:Profile"),
		},
	})
	opts = append(opts, aliases)
	var resource Profile
	err := ctx.RegisterResource("azure-nextgen:network/v20180401:Profile", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProfile gets an existing Profile resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProfile(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProfileState, opts ...pulumi.ResourceOption) (*Profile, error) {
	var resource Profile
	err := ctx.ReadResource("azure-nextgen:network/v20180401:Profile", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Profile resources.
type profileState struct {
	// The DNS settings of the Traffic Manager profile.
	DnsConfig *DnsConfigResponse `pulumi:"dnsConfig"`
	// The list of endpoints in the Traffic Manager profile.
	Endpoints []EndpointResponse `pulumi:"endpoints"`
	// The Azure Region where the resource lives
	Location *string `pulumi:"location"`
	// Maximum number of endpoints to be returned for MultiValue routing type.
	MaxReturn *int `pulumi:"maxReturn"`
	// The endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig *MonitorConfigResponse `pulumi:"monitorConfig"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The status of the Traffic Manager profile.
	ProfileStatus *string `pulumi:"profileStatus"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The traffic routing method of the Traffic Manager profile.
	TrafficRoutingMethod *string `pulumi:"trafficRoutingMethod"`
	// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
	TrafficViewEnrollmentStatus *string `pulumi:"trafficViewEnrollmentStatus"`
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type *string `pulumi:"type"`
}

type ProfileState struct {
	// The DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigResponsePtrInput
	// The list of endpoints in the Traffic Manager profile.
	Endpoints EndpointResponseArrayInput
	// The Azure Region where the resource lives
	Location pulumi.StringPtrInput
	// Maximum number of endpoints to be returned for MultiValue routing type.
	MaxReturn pulumi.IntPtrInput
	// The endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigResponsePtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The status of the Traffic Manager profile.
	ProfileStatus pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The traffic routing method of the Traffic Manager profile.
	TrafficRoutingMethod pulumi.StringPtrInput
	// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
	TrafficViewEnrollmentStatus pulumi.StringPtrInput
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type pulumi.StringPtrInput
}

func (ProfileState) ElementType() reflect.Type {
	return reflect.TypeOf((*profileState)(nil)).Elem()
}

type profileArgs struct {
	// The DNS settings of the Traffic Manager profile.
	DnsConfig *DnsConfig `pulumi:"dnsConfig"`
	// The list of endpoints in the Traffic Manager profile.
	Endpoints []EndpointType `pulumi:"endpoints"`
	// Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
	Id *string `pulumi:"id"`
	// The Azure Region where the resource lives
	Location *string `pulumi:"location"`
	// Maximum number of endpoints to be returned for MultiValue routing type.
	MaxReturn *int `pulumi:"maxReturn"`
	// The endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig *MonitorConfig `pulumi:"monitorConfig"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The name of the Traffic Manager profile.
	ProfileName string `pulumi:"profileName"`
	// The status of the Traffic Manager profile.
	ProfileStatus *string `pulumi:"profileStatus"`
	// The name of the resource group containing the Traffic Manager profile.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The traffic routing method of the Traffic Manager profile.
	TrafficRoutingMethod *string `pulumi:"trafficRoutingMethod"`
	// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
	TrafficViewEnrollmentStatus *string `pulumi:"trafficViewEnrollmentStatus"`
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a Profile resource.
type ProfileArgs struct {
	// The DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigPtrInput
	// The list of endpoints in the Traffic Manager profile.
	Endpoints EndpointTypeArrayInput
	// Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
	Id pulumi.StringPtrInput
	// The Azure Region where the resource lives
	Location pulumi.StringPtrInput
	// Maximum number of endpoints to be returned for MultiValue routing type.
	MaxReturn pulumi.IntPtrInput
	// The endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The name of the Traffic Manager profile.
	ProfileName pulumi.StringInput
	// The status of the Traffic Manager profile.
	ProfileStatus pulumi.StringPtrInput
	// The name of the resource group containing the Traffic Manager profile.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The traffic routing method of the Traffic Manager profile.
	TrafficRoutingMethod pulumi.StringPtrInput
	// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
	TrafficViewEnrollmentStatus pulumi.StringPtrInput
	// The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
	Type pulumi.StringPtrInput
}

func (ProfileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*profileArgs)(nil)).Elem()
}

type ProfileInput interface {
	pulumi.Input

	ToProfileOutput() ProfileOutput
	ToProfileOutputWithContext(ctx context.Context) ProfileOutput
}

func (*Profile) ElementType() reflect.Type {
	return reflect.TypeOf((*Profile)(nil))
}

func (i *Profile) ToProfileOutput() ProfileOutput {
	return i.ToProfileOutputWithContext(context.Background())
}

func (i *Profile) ToProfileOutputWithContext(ctx context.Context) ProfileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProfileOutput)
}

type ProfileOutput struct {
	*pulumi.OutputState
}

func (ProfileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Profile)(nil))
}

func (o ProfileOutput) ToProfileOutput() ProfileOutput {
	return o
}

func (o ProfileOutput) ToProfileOutputWithContext(ctx context.Context) ProfileOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProfileOutput{})
}
