// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class representing a Traffic Manager profile.
type Profile struct {
	pulumi.CustomResourceState

	// Gets or sets the DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigResponsePtrOutput `pulumi:"dnsConfig"`
	// Gets or sets the list of endpoints in the Traffic Manager profile.
	Endpoints EndpointResponseArrayOutput `pulumi:"endpoints"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigResponsePtrOutput `pulumi:"monitorConfig"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
	ProfileStatus pulumi.StringPtrOutput `pulumi:"profileStatus"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
	TrafficRoutingMethod pulumi.StringPtrOutput `pulumi:"trafficRoutingMethod"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
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
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:Profile"),
		},
	})
	opts = append(opts, aliases)
	var resource Profile
	err := ctx.RegisterResource("azure-nextgen:network/v20151101:Profile", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:network/v20151101:Profile", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Profile resources.
type profileState struct {
	// Gets or sets the DNS settings of the Traffic Manager profile.
	DnsConfig *DnsConfigResponse `pulumi:"dnsConfig"`
	// Gets or sets the list of endpoints in the Traffic Manager profile.
	Endpoints []EndpointResponse `pulumi:"endpoints"`
	// Resource location
	Location *string `pulumi:"location"`
	// Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig *MonitorConfigResponse `pulumi:"monitorConfig"`
	// Resource name
	Name *string `pulumi:"name"`
	// Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
	ProfileStatus *string `pulumi:"profileStatus"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
	TrafficRoutingMethod *string `pulumi:"trafficRoutingMethod"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ProfileState struct {
	// Gets or sets the DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigResponsePtrInput
	// Gets or sets the list of endpoints in the Traffic Manager profile.
	Endpoints EndpointResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigResponsePtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
	ProfileStatus pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
	TrafficRoutingMethod pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ProfileState) ElementType() reflect.Type {
	return reflect.TypeOf((*profileState)(nil)).Elem()
}

type profileArgs struct {
	// Gets or sets the DNS settings of the Traffic Manager profile.
	DnsConfig *DnsConfig `pulumi:"dnsConfig"`
	// Gets or sets the list of endpoints in the Traffic Manager profile.
	Endpoints []EndpointType `pulumi:"endpoints"`
	// Resource location
	Location *string `pulumi:"location"`
	// Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig *MonitorConfig `pulumi:"monitorConfig"`
	// The name of the Traffic Manager profile.
	ProfileName string `pulumi:"profileName"`
	// Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
	ProfileStatus *string `pulumi:"profileStatus"`
	// The name of the resource group containing the Traffic Manager profile.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
	TrafficRoutingMethod *string `pulumi:"trafficRoutingMethod"`
}

// The set of arguments for constructing a Profile resource.
type ProfileArgs struct {
	// Gets or sets the DNS settings of the Traffic Manager profile.
	DnsConfig DnsConfigPtrInput
	// Gets or sets the list of endpoints in the Traffic Manager profile.
	Endpoints EndpointTypeArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
	MonitorConfig MonitorConfigPtrInput
	// The name of the Traffic Manager profile.
	ProfileName pulumi.StringInput
	// Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
	ProfileStatus pulumi.StringPtrInput
	// The name of the resource group containing the Traffic Manager profile.
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
	TrafficRoutingMethod pulumi.StringPtrInput
}

func (ProfileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*profileArgs)(nil)).Elem()
}

type ProfileInput interface {
	pulumi.Input

	ToProfileOutput() ProfileOutput
	ToProfileOutputWithContext(ctx context.Context) ProfileOutput
}

func (Profile) ElementType() reflect.Type {
	return reflect.TypeOf((*Profile)(nil)).Elem()
}

func (i Profile) ToProfileOutput() ProfileOutput {
	return i.ToProfileOutputWithContext(context.Background())
}

func (i Profile) ToProfileOutputWithContext(ctx context.Context) ProfileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProfileOutput)
}

type ProfileOutput struct {
	*pulumi.OutputState
}

func (ProfileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProfileOutput)(nil)).Elem()
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
