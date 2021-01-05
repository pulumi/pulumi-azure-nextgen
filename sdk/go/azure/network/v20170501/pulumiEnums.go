// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170501

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The monitoring status of the endpoint.
type EndpointMonitorStatus pulumi.String

const (
	EndpointMonitorStatusCheckingEndpoint = EndpointMonitorStatus("CheckingEndpoint")
	EndpointMonitorStatusOnline           = EndpointMonitorStatus("Online")
	EndpointMonitorStatusDegraded         = EndpointMonitorStatus("Degraded")
	EndpointMonitorStatusDisabled         = EndpointMonitorStatus("Disabled")
	EndpointMonitorStatusInactive         = EndpointMonitorStatus("Inactive")
	EndpointMonitorStatusStopped          = EndpointMonitorStatus("Stopped")
)

func (EndpointMonitorStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EndpointMonitorStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EndpointMonitorStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EndpointMonitorStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EndpointMonitorStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
type EndpointStatus pulumi.String

const (
	EndpointStatusEnabled  = EndpointStatus("Enabled")
	EndpointStatusDisabled = EndpointStatus("Disabled")
)

func (EndpointStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EndpointStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EndpointStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EndpointStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EndpointStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
type MonitorProtocol pulumi.String

const (
	MonitorProtocolHTTP  = MonitorProtocol("HTTP")
	MonitorProtocolHTTPS = MonitorProtocol("HTTPS")
	MonitorProtocolTCP   = MonitorProtocol("TCP")
)

func (MonitorProtocol) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MonitorProtocol) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MonitorProtocol) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MonitorProtocol) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MonitorProtocol) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The profile-level monitoring status of the Traffic Manager profile.
type ProfileMonitorStatus pulumi.String

const (
	ProfileMonitorStatusCheckingEndpoints = ProfileMonitorStatus("CheckingEndpoints")
	ProfileMonitorStatusOnline            = ProfileMonitorStatus("Online")
	ProfileMonitorStatusDegraded          = ProfileMonitorStatus("Degraded")
	ProfileMonitorStatusDisabled          = ProfileMonitorStatus("Disabled")
	ProfileMonitorStatusInactive          = ProfileMonitorStatus("Inactive")
)

func (ProfileMonitorStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProfileMonitorStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProfileMonitorStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProfileMonitorStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProfileMonitorStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The status of the Traffic Manager profile.
type ProfileStatus pulumi.String

const (
	ProfileStatusEnabled  = ProfileStatus("Enabled")
	ProfileStatusDisabled = ProfileStatus("Disabled")
)

func (ProfileStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProfileStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProfileStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProfileStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProfileStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The traffic routing method of the Traffic Manager profile.
type TrafficRoutingMethod pulumi.String

const (
	TrafficRoutingMethodPerformance = TrafficRoutingMethod("Performance")
	TrafficRoutingMethodPriority    = TrafficRoutingMethod("Priority")
	TrafficRoutingMethodWeighted    = TrafficRoutingMethod("Weighted")
	TrafficRoutingMethodGeographic  = TrafficRoutingMethod("Geographic")
)

func (TrafficRoutingMethod) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e TrafficRoutingMethod) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TrafficRoutingMethod) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TrafficRoutingMethod) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TrafficRoutingMethod) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}