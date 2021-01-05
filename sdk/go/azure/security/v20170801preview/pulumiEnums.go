// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170801preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Whether to send security alerts notifications to the security contact
type AlertNotifications pulumi.String

const (
	// Get notifications on new alerts
	AlertNotificationsOn = AlertNotifications("On")
	// Don't get notifications on new alerts
	AlertNotificationsOff = AlertNotifications("Off")
)

func (AlertNotifications) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AlertNotifications) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertNotifications) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertNotifications) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AlertNotifications) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Whether to send security alerts notifications to subscription admins
type AlertsToAdmins pulumi.String

const (
	// Send notification on new alerts to the subscription's admins
	AlertsToAdminsOn = AlertsToAdmins("On")
	// Don't send notification on new alerts to the subscription's admins
	AlertsToAdminsOff = AlertsToAdmins("Off")
)

func (AlertsToAdmins) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AlertsToAdmins) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertsToAdmins) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertsToAdmins) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AlertsToAdmins) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type DataSource pulumi.String

const (
	// Devices twin data
	DataSourceTwinData = DataSource("TwinData")
)

func (DataSource) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DataSource) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataSource) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataSource) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DataSource) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type ExportData pulumi.String

const (
	// Agent raw events
	ExportDataRawEvents = ExportData("RawEvents")
)

func (ExportData) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ExportData) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ExportData) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ExportData) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ExportData) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Recommendation status. The recommendation is not generated when the status is disabled
type RecommendationConfigStatus pulumi.String

const (
	RecommendationConfigStatusDisabled = RecommendationConfigStatus("Disabled")
	RecommendationConfigStatusEnabled  = RecommendationConfigStatus("Enabled")
)

func (RecommendationConfigStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RecommendationConfigStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecommendationConfigStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecommendationConfigStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RecommendationConfigStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The recommendation type.
type RecommendationType pulumi.String

const (
	// Authentication schema used for pull an edge module from an ACR repository does not use Service Principal Authentication.
	RecommendationType_IoT_ACRAuthentication = RecommendationType("IoT_ACRAuthentication")
	// IoT agent message size capacity is currently underutilized, causing an increase in the number of sent messages. Adjust message intervals for better utilization.
	RecommendationType_IoT_AgentSendsUnutilizedMessages = RecommendationType("IoT_AgentSendsUnutilizedMessages")
	// Identified security related system configuration issues.
	RecommendationType_IoT_Baseline = RecommendationType("IoT_Baseline")
	// You can optimize Edge Hub memory usage by turning off protocol heads for any protocols not used by Edge modules in your solution.
	RecommendationType_IoT_EdgeHubMemOptimize = RecommendationType("IoT_EdgeHubMemOptimize")
	// Logging is disabled for this edge module.
	RecommendationType_IoT_EdgeLoggingOptions = RecommendationType("IoT_EdgeLoggingOptions")
	// A minority within a device security group has inconsistent Edge Module settings with the rest of their group.
	RecommendationType_IoT_InconsistentModuleSettings = RecommendationType("IoT_InconsistentModuleSettings")
	// Install the Azure Security of Things Agent.
	RecommendationType_IoT_InstallAgent = RecommendationType("IoT_InstallAgent")
	// IP Filter Configuration should have rules defined for allowed traffic and should deny all other traffic by default.
	RecommendationType_IoT_IPFilter_DenyAll = RecommendationType("IoT_IPFilter_DenyAll")
	// An Allow IP Filter rules source IP range is too large. Overly permissive rules might expose your IoT hub to malicious intenders.
	RecommendationType_IoT_IPFilter_PermissiveRule = RecommendationType("IoT_IPFilter_PermissiveRule")
	// A listening endpoint was found on the device.
	RecommendationType_IoT_OpenPorts = RecommendationType("IoT_OpenPorts")
	// An Allowed firewall policy was found (INPUT/OUTPUT). The policy should Deny all traffic by default and define rules to allow necessary communication to/from the device.
	RecommendationType_IoT_PermissiveFirewallPolicy = RecommendationType("IoT_PermissiveFirewallPolicy")
	// A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
	RecommendationType_IoT_PermissiveInputFirewallRules = RecommendationType("IoT_PermissiveInputFirewallRules")
	// A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
	RecommendationType_IoT_PermissiveOutputFirewallRules = RecommendationType("IoT_PermissiveOutputFirewallRules")
	// Edge module is configured to run in privileged mode, with extensive Linux capabilities or with host-level network access (send/receive data to host machine).
	RecommendationType_IoT_PrivilegedDockerOptions = RecommendationType("IoT_PrivilegedDockerOptions")
	// Same authentication credentials to the IoT Hub used by multiple devices. This could indicate an illegitimate device impersonating a legitimate device. It also exposes the risk of device impersonation by an attacker.
	RecommendationType_IoT_SharedCredentials = RecommendationType("IoT_SharedCredentials")
	// Insecure TLS configurations detected. Immediate upgrade recommended.
	RecommendationType_IoT_VulnerableTLSCipherSuite = RecommendationType("IoT_VulnerableTLSCipherSuite")
)

func (RecommendationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RecommendationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecommendationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecommendationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RecommendationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Security solution status
type SecuritySolutionStatus pulumi.String

const (
	SecuritySolutionStatusEnabled  = SecuritySolutionStatus("Enabled")
	SecuritySolutionStatusDisabled = SecuritySolutionStatus("Disabled")
)

func (SecuritySolutionStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SecuritySolutionStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SecuritySolutionStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SecuritySolutionStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SecuritySolutionStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}