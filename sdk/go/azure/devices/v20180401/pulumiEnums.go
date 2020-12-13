// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180401

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The permissions assigned to the shared access policy.
type AccessRights pulumi.String

const (
	AccessRightsRegistryRead                                             = AccessRights("RegistryRead")
	AccessRightsRegistryWrite                                            = AccessRights("RegistryWrite")
	AccessRightsServiceConnect                                           = AccessRights("ServiceConnect")
	AccessRightsDeviceConnect                                            = AccessRights("DeviceConnect")
	AccessRights_RegistryRead_RegistryWrite                              = AccessRights("RegistryRead, RegistryWrite")
	AccessRights_RegistryRead_ServiceConnect                             = AccessRights("RegistryRead, ServiceConnect")
	AccessRights_RegistryRead_DeviceConnect                              = AccessRights("RegistryRead, DeviceConnect")
	AccessRights_RegistryWrite_ServiceConnect                            = AccessRights("RegistryWrite, ServiceConnect")
	AccessRights_RegistryWrite_DeviceConnect                             = AccessRights("RegistryWrite, DeviceConnect")
	AccessRights_ServiceConnect_DeviceConnect                            = AccessRights("ServiceConnect, DeviceConnect")
	AccessRights_RegistryRead_RegistryWrite_ServiceConnect               = AccessRights("RegistryRead, RegistryWrite, ServiceConnect")
	AccessRights_RegistryRead_RegistryWrite_DeviceConnect                = AccessRights("RegistryRead, RegistryWrite, DeviceConnect")
	AccessRights_RegistryRead_ServiceConnect_DeviceConnect               = AccessRights("RegistryRead, ServiceConnect, DeviceConnect")
	AccessRights_RegistryWrite_ServiceConnect_DeviceConnect              = AccessRights("RegistryWrite, ServiceConnect, DeviceConnect")
	AccessRights_RegistryRead_RegistryWrite_ServiceConnect_DeviceConnect = AccessRights("RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect")
)

func (AccessRights) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AccessRights) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AccessRights) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AccessRights) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AccessRights) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The capabilities and features enabled for the IoT hub.
type Capabilities pulumi.String

const (
	CapabilitiesNone             = Capabilities("None")
	CapabilitiesDeviceManagement = Capabilities("DeviceManagement")
)

func (Capabilities) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Capabilities) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Capabilities) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Capabilities) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Capabilities) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The name of the SKU.
type IotHubSku pulumi.String

const (
	IotHubSkuF1 = IotHubSku("F1")
	IotHubSkuS1 = IotHubSku("S1")
	IotHubSkuS2 = IotHubSku("S2")
	IotHubSkuS3 = IotHubSku("S3")
	IotHubSkuB1 = IotHubSku("B1")
	IotHubSkuB2 = IotHubSku("B2")
	IotHubSkuB3 = IotHubSku("B3")
)

func (IotHubSku) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IotHubSku) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IotHubSku) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IotHubSku) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IotHubSku) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The desired action for requests captured by this rule.
type IpFilterActionType pulumi.String

const (
	IpFilterActionTypeAccept = IpFilterActionType("Accept")
	IpFilterActionTypeReject = IpFilterActionType("Reject")
)

func (IpFilterActionType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IpFilterActionType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IpFilterActionType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IpFilterActionType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IpFilterActionType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The operations monitoring level.
type OperationMonitoringLevel pulumi.String

const (
	OperationMonitoringLevelNone               = OperationMonitoringLevel("None")
	OperationMonitoringLevelError              = OperationMonitoringLevel("Error")
	OperationMonitoringLevelInformation        = OperationMonitoringLevel("Information")
	OperationMonitoringLevel_Error_Information = OperationMonitoringLevel("Error, Information")
)

func (OperationMonitoringLevel) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OperationMonitoringLevel) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperationMonitoringLevel) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperationMonitoringLevel) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OperationMonitoringLevel) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The source that the routing rule is to be applied to, such as DeviceMessages.
type RoutingSource pulumi.String

const (
	RoutingSourceInvalid                  = RoutingSource("Invalid")
	RoutingSourceDeviceMessages           = RoutingSource("DeviceMessages")
	RoutingSourceTwinChangeEvents         = RoutingSource("TwinChangeEvents")
	RoutingSourceDeviceLifecycleEvents    = RoutingSource("DeviceLifecycleEvents")
	RoutingSourceDeviceJobLifecycleEvents = RoutingSource("DeviceJobLifecycleEvents")
)

func (RoutingSource) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RoutingSource) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RoutingSource) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RoutingSource) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RoutingSource) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
