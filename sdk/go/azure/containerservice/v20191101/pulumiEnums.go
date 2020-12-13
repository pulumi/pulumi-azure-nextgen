// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// AgentPoolType represents types of an agent pool
type AgentPoolType pulumi.String

const (
	AgentPoolTypeVirtualMachineScaleSets = AgentPoolType("VirtualMachineScaleSets")
	AgentPoolTypeAvailabilitySet         = AgentPoolType("AvailabilitySet")
)

func (AgentPoolType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AgentPoolType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AgentPoolType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AgentPoolType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AgentPoolType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Size of agent VMs.
type ContainerServiceVMSizeTypes pulumi.String

const (
	ContainerServiceVMSizeTypes_Standard_A1            = ContainerServiceVMSizeTypes("Standard_A1")
	ContainerServiceVMSizeTypes_Standard_A10           = ContainerServiceVMSizeTypes("Standard_A10")
	ContainerServiceVMSizeTypes_Standard_A11           = ContainerServiceVMSizeTypes("Standard_A11")
	ContainerServiceVMSizeTypes_Standard_A1_v2         = ContainerServiceVMSizeTypes("Standard_A1_v2")
	ContainerServiceVMSizeTypes_Standard_A2            = ContainerServiceVMSizeTypes("Standard_A2")
	ContainerServiceVMSizeTypes_Standard_A2_v2         = ContainerServiceVMSizeTypes("Standard_A2_v2")
	ContainerServiceVMSizeTypes_Standard_A2m_v2        = ContainerServiceVMSizeTypes("Standard_A2m_v2")
	ContainerServiceVMSizeTypes_Standard_A3            = ContainerServiceVMSizeTypes("Standard_A3")
	ContainerServiceVMSizeTypes_Standard_A4            = ContainerServiceVMSizeTypes("Standard_A4")
	ContainerServiceVMSizeTypes_Standard_A4_v2         = ContainerServiceVMSizeTypes("Standard_A4_v2")
	ContainerServiceVMSizeTypes_Standard_A4m_v2        = ContainerServiceVMSizeTypes("Standard_A4m_v2")
	ContainerServiceVMSizeTypes_Standard_A5            = ContainerServiceVMSizeTypes("Standard_A5")
	ContainerServiceVMSizeTypes_Standard_A6            = ContainerServiceVMSizeTypes("Standard_A6")
	ContainerServiceVMSizeTypes_Standard_A7            = ContainerServiceVMSizeTypes("Standard_A7")
	ContainerServiceVMSizeTypes_Standard_A8            = ContainerServiceVMSizeTypes("Standard_A8")
	ContainerServiceVMSizeTypes_Standard_A8_v2         = ContainerServiceVMSizeTypes("Standard_A8_v2")
	ContainerServiceVMSizeTypes_Standard_A8m_v2        = ContainerServiceVMSizeTypes("Standard_A8m_v2")
	ContainerServiceVMSizeTypes_Standard_A9            = ContainerServiceVMSizeTypes("Standard_A9")
	ContainerServiceVMSizeTypes_Standard_B2ms          = ContainerServiceVMSizeTypes("Standard_B2ms")
	ContainerServiceVMSizeTypes_Standard_B2s           = ContainerServiceVMSizeTypes("Standard_B2s")
	ContainerServiceVMSizeTypes_Standard_B4ms          = ContainerServiceVMSizeTypes("Standard_B4ms")
	ContainerServiceVMSizeTypes_Standard_B8ms          = ContainerServiceVMSizeTypes("Standard_B8ms")
	ContainerServiceVMSizeTypes_Standard_D1            = ContainerServiceVMSizeTypes("Standard_D1")
	ContainerServiceVMSizeTypes_Standard_D11           = ContainerServiceVMSizeTypes("Standard_D11")
	ContainerServiceVMSizeTypes_Standard_D11_v2        = ContainerServiceVMSizeTypes("Standard_D11_v2")
	ContainerServiceVMSizeTypes_Standard_D11_v2_Promo  = ContainerServiceVMSizeTypes("Standard_D11_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D12           = ContainerServiceVMSizeTypes("Standard_D12")
	ContainerServiceVMSizeTypes_Standard_D12_v2        = ContainerServiceVMSizeTypes("Standard_D12_v2")
	ContainerServiceVMSizeTypes_Standard_D12_v2_Promo  = ContainerServiceVMSizeTypes("Standard_D12_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D13           = ContainerServiceVMSizeTypes("Standard_D13")
	ContainerServiceVMSizeTypes_Standard_D13_v2        = ContainerServiceVMSizeTypes("Standard_D13_v2")
	ContainerServiceVMSizeTypes_Standard_D13_v2_Promo  = ContainerServiceVMSizeTypes("Standard_D13_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D14           = ContainerServiceVMSizeTypes("Standard_D14")
	ContainerServiceVMSizeTypes_Standard_D14_v2        = ContainerServiceVMSizeTypes("Standard_D14_v2")
	ContainerServiceVMSizeTypes_Standard_D14_v2_Promo  = ContainerServiceVMSizeTypes("Standard_D14_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D15_v2        = ContainerServiceVMSizeTypes("Standard_D15_v2")
	ContainerServiceVMSizeTypes_Standard_D16_v3        = ContainerServiceVMSizeTypes("Standard_D16_v3")
	ContainerServiceVMSizeTypes_Standard_D16s_v3       = ContainerServiceVMSizeTypes("Standard_D16s_v3")
	ContainerServiceVMSizeTypes_Standard_D1_v2         = ContainerServiceVMSizeTypes("Standard_D1_v2")
	ContainerServiceVMSizeTypes_Standard_D2            = ContainerServiceVMSizeTypes("Standard_D2")
	ContainerServiceVMSizeTypes_Standard_D2_v2         = ContainerServiceVMSizeTypes("Standard_D2_v2")
	ContainerServiceVMSizeTypes_Standard_D2_v2_Promo   = ContainerServiceVMSizeTypes("Standard_D2_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D2_v3         = ContainerServiceVMSizeTypes("Standard_D2_v3")
	ContainerServiceVMSizeTypes_Standard_D2s_v3        = ContainerServiceVMSizeTypes("Standard_D2s_v3")
	ContainerServiceVMSizeTypes_Standard_D3            = ContainerServiceVMSizeTypes("Standard_D3")
	ContainerServiceVMSizeTypes_Standard_D32_v3        = ContainerServiceVMSizeTypes("Standard_D32_v3")
	ContainerServiceVMSizeTypes_Standard_D32s_v3       = ContainerServiceVMSizeTypes("Standard_D32s_v3")
	ContainerServiceVMSizeTypes_Standard_D3_v2         = ContainerServiceVMSizeTypes("Standard_D3_v2")
	ContainerServiceVMSizeTypes_Standard_D3_v2_Promo   = ContainerServiceVMSizeTypes("Standard_D3_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D4            = ContainerServiceVMSizeTypes("Standard_D4")
	ContainerServiceVMSizeTypes_Standard_D4_v2         = ContainerServiceVMSizeTypes("Standard_D4_v2")
	ContainerServiceVMSizeTypes_Standard_D4_v2_Promo   = ContainerServiceVMSizeTypes("Standard_D4_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D4_v3         = ContainerServiceVMSizeTypes("Standard_D4_v3")
	ContainerServiceVMSizeTypes_Standard_D4s_v3        = ContainerServiceVMSizeTypes("Standard_D4s_v3")
	ContainerServiceVMSizeTypes_Standard_D5_v2         = ContainerServiceVMSizeTypes("Standard_D5_v2")
	ContainerServiceVMSizeTypes_Standard_D5_v2_Promo   = ContainerServiceVMSizeTypes("Standard_D5_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_D64_v3        = ContainerServiceVMSizeTypes("Standard_D64_v3")
	ContainerServiceVMSizeTypes_Standard_D64s_v3       = ContainerServiceVMSizeTypes("Standard_D64s_v3")
	ContainerServiceVMSizeTypes_Standard_D8_v3         = ContainerServiceVMSizeTypes("Standard_D8_v3")
	ContainerServiceVMSizeTypes_Standard_D8s_v3        = ContainerServiceVMSizeTypes("Standard_D8s_v3")
	ContainerServiceVMSizeTypes_Standard_DS1           = ContainerServiceVMSizeTypes("Standard_DS1")
	ContainerServiceVMSizeTypes_Standard_DS11          = ContainerServiceVMSizeTypes("Standard_DS11")
	ContainerServiceVMSizeTypes_Standard_DS11_v2       = ContainerServiceVMSizeTypes("Standard_DS11_v2")
	ContainerServiceVMSizeTypes_Standard_DS11_v2_Promo = ContainerServiceVMSizeTypes("Standard_DS11_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS12          = ContainerServiceVMSizeTypes("Standard_DS12")
	ContainerServiceVMSizeTypes_Standard_DS12_v2       = ContainerServiceVMSizeTypes("Standard_DS12_v2")
	ContainerServiceVMSizeTypes_Standard_DS12_v2_Promo = ContainerServiceVMSizeTypes("Standard_DS12_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS13          = ContainerServiceVMSizeTypes("Standard_DS13")
	ContainerServiceVMSizeTypes_Standard_DS13_2_v2     = ContainerServiceVMSizeTypes("Standard_DS13-2_v2")
	ContainerServiceVMSizeTypes_Standard_DS13_4_v2     = ContainerServiceVMSizeTypes("Standard_DS13-4_v2")
	ContainerServiceVMSizeTypes_Standard_DS13_v2       = ContainerServiceVMSizeTypes("Standard_DS13_v2")
	ContainerServiceVMSizeTypes_Standard_DS13_v2_Promo = ContainerServiceVMSizeTypes("Standard_DS13_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS14          = ContainerServiceVMSizeTypes("Standard_DS14")
	ContainerServiceVMSizeTypes_Standard_DS14_4_v2     = ContainerServiceVMSizeTypes("Standard_DS14-4_v2")
	ContainerServiceVMSizeTypes_Standard_DS14_8_v2     = ContainerServiceVMSizeTypes("Standard_DS14-8_v2")
	ContainerServiceVMSizeTypes_Standard_DS14_v2       = ContainerServiceVMSizeTypes("Standard_DS14_v2")
	ContainerServiceVMSizeTypes_Standard_DS14_v2_Promo = ContainerServiceVMSizeTypes("Standard_DS14_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS15_v2       = ContainerServiceVMSizeTypes("Standard_DS15_v2")
	ContainerServiceVMSizeTypes_Standard_DS1_v2        = ContainerServiceVMSizeTypes("Standard_DS1_v2")
	ContainerServiceVMSizeTypes_Standard_DS2           = ContainerServiceVMSizeTypes("Standard_DS2")
	ContainerServiceVMSizeTypes_Standard_DS2_v2        = ContainerServiceVMSizeTypes("Standard_DS2_v2")
	ContainerServiceVMSizeTypes_Standard_DS2_v2_Promo  = ContainerServiceVMSizeTypes("Standard_DS2_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS3           = ContainerServiceVMSizeTypes("Standard_DS3")
	ContainerServiceVMSizeTypes_Standard_DS3_v2        = ContainerServiceVMSizeTypes("Standard_DS3_v2")
	ContainerServiceVMSizeTypes_Standard_DS3_v2_Promo  = ContainerServiceVMSizeTypes("Standard_DS3_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS4           = ContainerServiceVMSizeTypes("Standard_DS4")
	ContainerServiceVMSizeTypes_Standard_DS4_v2        = ContainerServiceVMSizeTypes("Standard_DS4_v2")
	ContainerServiceVMSizeTypes_Standard_DS4_v2_Promo  = ContainerServiceVMSizeTypes("Standard_DS4_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_DS5_v2        = ContainerServiceVMSizeTypes("Standard_DS5_v2")
	ContainerServiceVMSizeTypes_Standard_DS5_v2_Promo  = ContainerServiceVMSizeTypes("Standard_DS5_v2_Promo")
	ContainerServiceVMSizeTypes_Standard_E16_v3        = ContainerServiceVMSizeTypes("Standard_E16_v3")
	ContainerServiceVMSizeTypes_Standard_E16s_v3       = ContainerServiceVMSizeTypes("Standard_E16s_v3")
	ContainerServiceVMSizeTypes_Standard_E2_v3         = ContainerServiceVMSizeTypes("Standard_E2_v3")
	ContainerServiceVMSizeTypes_Standard_E2s_v3        = ContainerServiceVMSizeTypes("Standard_E2s_v3")
	ContainerServiceVMSizeTypes_Standard_E32_16s_v3    = ContainerServiceVMSizeTypes("Standard_E32-16s_v3")
	ContainerServiceVMSizeTypes_Standard_E32_8s_v3     = ContainerServiceVMSizeTypes("Standard_E32-8s_v3")
	ContainerServiceVMSizeTypes_Standard_E32_v3        = ContainerServiceVMSizeTypes("Standard_E32_v3")
	ContainerServiceVMSizeTypes_Standard_E32s_v3       = ContainerServiceVMSizeTypes("Standard_E32s_v3")
	ContainerServiceVMSizeTypes_Standard_E4_v3         = ContainerServiceVMSizeTypes("Standard_E4_v3")
	ContainerServiceVMSizeTypes_Standard_E4s_v3        = ContainerServiceVMSizeTypes("Standard_E4s_v3")
	ContainerServiceVMSizeTypes_Standard_E64_16s_v3    = ContainerServiceVMSizeTypes("Standard_E64-16s_v3")
	ContainerServiceVMSizeTypes_Standard_E64_32s_v3    = ContainerServiceVMSizeTypes("Standard_E64-32s_v3")
	ContainerServiceVMSizeTypes_Standard_E64_v3        = ContainerServiceVMSizeTypes("Standard_E64_v3")
	ContainerServiceVMSizeTypes_Standard_E64s_v3       = ContainerServiceVMSizeTypes("Standard_E64s_v3")
	ContainerServiceVMSizeTypes_Standard_E8_v3         = ContainerServiceVMSizeTypes("Standard_E8_v3")
	ContainerServiceVMSizeTypes_Standard_E8s_v3        = ContainerServiceVMSizeTypes("Standard_E8s_v3")
	ContainerServiceVMSizeTypes_Standard_F1            = ContainerServiceVMSizeTypes("Standard_F1")
	ContainerServiceVMSizeTypes_Standard_F16           = ContainerServiceVMSizeTypes("Standard_F16")
	ContainerServiceVMSizeTypes_Standard_F16s          = ContainerServiceVMSizeTypes("Standard_F16s")
	ContainerServiceVMSizeTypes_Standard_F16s_v2       = ContainerServiceVMSizeTypes("Standard_F16s_v2")
	ContainerServiceVMSizeTypes_Standard_F1s           = ContainerServiceVMSizeTypes("Standard_F1s")
	ContainerServiceVMSizeTypes_Standard_F2            = ContainerServiceVMSizeTypes("Standard_F2")
	ContainerServiceVMSizeTypes_Standard_F2s           = ContainerServiceVMSizeTypes("Standard_F2s")
	ContainerServiceVMSizeTypes_Standard_F2s_v2        = ContainerServiceVMSizeTypes("Standard_F2s_v2")
	ContainerServiceVMSizeTypes_Standard_F32s_v2       = ContainerServiceVMSizeTypes("Standard_F32s_v2")
	ContainerServiceVMSizeTypes_Standard_F4            = ContainerServiceVMSizeTypes("Standard_F4")
	ContainerServiceVMSizeTypes_Standard_F4s           = ContainerServiceVMSizeTypes("Standard_F4s")
	ContainerServiceVMSizeTypes_Standard_F4s_v2        = ContainerServiceVMSizeTypes("Standard_F4s_v2")
	ContainerServiceVMSizeTypes_Standard_F64s_v2       = ContainerServiceVMSizeTypes("Standard_F64s_v2")
	ContainerServiceVMSizeTypes_Standard_F72s_v2       = ContainerServiceVMSizeTypes("Standard_F72s_v2")
	ContainerServiceVMSizeTypes_Standard_F8            = ContainerServiceVMSizeTypes("Standard_F8")
	ContainerServiceVMSizeTypes_Standard_F8s           = ContainerServiceVMSizeTypes("Standard_F8s")
	ContainerServiceVMSizeTypes_Standard_F8s_v2        = ContainerServiceVMSizeTypes("Standard_F8s_v2")
	ContainerServiceVMSizeTypes_Standard_G1            = ContainerServiceVMSizeTypes("Standard_G1")
	ContainerServiceVMSizeTypes_Standard_G2            = ContainerServiceVMSizeTypes("Standard_G2")
	ContainerServiceVMSizeTypes_Standard_G3            = ContainerServiceVMSizeTypes("Standard_G3")
	ContainerServiceVMSizeTypes_Standard_G4            = ContainerServiceVMSizeTypes("Standard_G4")
	ContainerServiceVMSizeTypes_Standard_G5            = ContainerServiceVMSizeTypes("Standard_G5")
	ContainerServiceVMSizeTypes_Standard_GS1           = ContainerServiceVMSizeTypes("Standard_GS1")
	ContainerServiceVMSizeTypes_Standard_GS2           = ContainerServiceVMSizeTypes("Standard_GS2")
	ContainerServiceVMSizeTypes_Standard_GS3           = ContainerServiceVMSizeTypes("Standard_GS3")
	ContainerServiceVMSizeTypes_Standard_GS4           = ContainerServiceVMSizeTypes("Standard_GS4")
	ContainerServiceVMSizeTypes_Standard_GS4_4         = ContainerServiceVMSizeTypes("Standard_GS4-4")
	ContainerServiceVMSizeTypes_Standard_GS4_8         = ContainerServiceVMSizeTypes("Standard_GS4-8")
	ContainerServiceVMSizeTypes_Standard_GS5           = ContainerServiceVMSizeTypes("Standard_GS5")
	ContainerServiceVMSizeTypes_Standard_GS5_16        = ContainerServiceVMSizeTypes("Standard_GS5-16")
	ContainerServiceVMSizeTypes_Standard_GS5_8         = ContainerServiceVMSizeTypes("Standard_GS5-8")
	ContainerServiceVMSizeTypes_Standard_H16           = ContainerServiceVMSizeTypes("Standard_H16")
	ContainerServiceVMSizeTypes_Standard_H16m          = ContainerServiceVMSizeTypes("Standard_H16m")
	ContainerServiceVMSizeTypes_Standard_H16mr         = ContainerServiceVMSizeTypes("Standard_H16mr")
	ContainerServiceVMSizeTypes_Standard_H16r          = ContainerServiceVMSizeTypes("Standard_H16r")
	ContainerServiceVMSizeTypes_Standard_H8            = ContainerServiceVMSizeTypes("Standard_H8")
	ContainerServiceVMSizeTypes_Standard_H8m           = ContainerServiceVMSizeTypes("Standard_H8m")
	ContainerServiceVMSizeTypes_Standard_L16s          = ContainerServiceVMSizeTypes("Standard_L16s")
	ContainerServiceVMSizeTypes_Standard_L32s          = ContainerServiceVMSizeTypes("Standard_L32s")
	ContainerServiceVMSizeTypes_Standard_L4s           = ContainerServiceVMSizeTypes("Standard_L4s")
	ContainerServiceVMSizeTypes_Standard_L8s           = ContainerServiceVMSizeTypes("Standard_L8s")
	ContainerServiceVMSizeTypes_Standard_M128_32ms     = ContainerServiceVMSizeTypes("Standard_M128-32ms")
	ContainerServiceVMSizeTypes_Standard_M128_64ms     = ContainerServiceVMSizeTypes("Standard_M128-64ms")
	ContainerServiceVMSizeTypes_Standard_M128ms        = ContainerServiceVMSizeTypes("Standard_M128ms")
	ContainerServiceVMSizeTypes_Standard_M128s         = ContainerServiceVMSizeTypes("Standard_M128s")
	ContainerServiceVMSizeTypes_Standard_M64_16ms      = ContainerServiceVMSizeTypes("Standard_M64-16ms")
	ContainerServiceVMSizeTypes_Standard_M64_32ms      = ContainerServiceVMSizeTypes("Standard_M64-32ms")
	ContainerServiceVMSizeTypes_Standard_M64ms         = ContainerServiceVMSizeTypes("Standard_M64ms")
	ContainerServiceVMSizeTypes_Standard_M64s          = ContainerServiceVMSizeTypes("Standard_M64s")
	ContainerServiceVMSizeTypes_Standard_NC12          = ContainerServiceVMSizeTypes("Standard_NC12")
	ContainerServiceVMSizeTypes_Standard_NC12s_v2      = ContainerServiceVMSizeTypes("Standard_NC12s_v2")
	ContainerServiceVMSizeTypes_Standard_NC12s_v3      = ContainerServiceVMSizeTypes("Standard_NC12s_v3")
	ContainerServiceVMSizeTypes_Standard_NC24          = ContainerServiceVMSizeTypes("Standard_NC24")
	ContainerServiceVMSizeTypes_Standard_NC24r         = ContainerServiceVMSizeTypes("Standard_NC24r")
	ContainerServiceVMSizeTypes_Standard_NC24rs_v2     = ContainerServiceVMSizeTypes("Standard_NC24rs_v2")
	ContainerServiceVMSizeTypes_Standard_NC24rs_v3     = ContainerServiceVMSizeTypes("Standard_NC24rs_v3")
	ContainerServiceVMSizeTypes_Standard_NC24s_v2      = ContainerServiceVMSizeTypes("Standard_NC24s_v2")
	ContainerServiceVMSizeTypes_Standard_NC24s_v3      = ContainerServiceVMSizeTypes("Standard_NC24s_v3")
	ContainerServiceVMSizeTypes_Standard_NC6           = ContainerServiceVMSizeTypes("Standard_NC6")
	ContainerServiceVMSizeTypes_Standard_NC6s_v2       = ContainerServiceVMSizeTypes("Standard_NC6s_v2")
	ContainerServiceVMSizeTypes_Standard_NC6s_v3       = ContainerServiceVMSizeTypes("Standard_NC6s_v3")
	ContainerServiceVMSizeTypes_Standard_ND12s         = ContainerServiceVMSizeTypes("Standard_ND12s")
	ContainerServiceVMSizeTypes_Standard_ND24rs        = ContainerServiceVMSizeTypes("Standard_ND24rs")
	ContainerServiceVMSizeTypes_Standard_ND24s         = ContainerServiceVMSizeTypes("Standard_ND24s")
	ContainerServiceVMSizeTypes_Standard_ND6s          = ContainerServiceVMSizeTypes("Standard_ND6s")
	ContainerServiceVMSizeTypes_Standard_NV12          = ContainerServiceVMSizeTypes("Standard_NV12")
	ContainerServiceVMSizeTypes_Standard_NV24          = ContainerServiceVMSizeTypes("Standard_NV24")
	ContainerServiceVMSizeTypes_Standard_NV6           = ContainerServiceVMSizeTypes("Standard_NV6")
)

func (ContainerServiceVMSizeTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ContainerServiceVMSizeTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContainerServiceVMSizeTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContainerServiceVMSizeTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ContainerServiceVMSizeTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The load balancer sku for the managed cluster.
type LoadBalancerSku pulumi.String

const (
	LoadBalancerSkuStandard = LoadBalancerSku("standard")
	LoadBalancerSkuBasic    = LoadBalancerSku("basic")
)

func (LoadBalancerSku) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e LoadBalancerSku) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e LoadBalancerSku) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e LoadBalancerSku) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e LoadBalancerSku) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Network plugin used for building Kubernetes network.
type NetworkPlugin pulumi.String

const (
	NetworkPluginAzure   = NetworkPlugin("azure")
	NetworkPluginKubenet = NetworkPlugin("kubenet")
)

func (NetworkPlugin) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e NetworkPlugin) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e NetworkPlugin) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e NetworkPlugin) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e NetworkPlugin) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Network policy used for building Kubernetes network.
type NetworkPolicy pulumi.String

const (
	NetworkPolicyCalico = NetworkPolicy("calico")
	NetworkPolicyAzure  = NetworkPolicy("azure")
)

func (NetworkPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e NetworkPolicy) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e NetworkPolicy) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e NetworkPolicy) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e NetworkPolicy) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
type OSType pulumi.String

const (
	OSTypeLinux   = OSType("Linux")
	OSTypeWindows = OSType("Windows")
)

func (OSType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OSType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OSType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OSType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OSType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The outbound (egress) routing method.
type OutboundType pulumi.String

const (
	OutboundTypeLoadBalancer       = OutboundType("loadBalancer")
	OutboundTypeUserDefinedRouting = OutboundType("userDefinedRouting")
)

func (OutboundType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OutboundType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OutboundType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OutboundType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OutboundType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
type ResourceIdentityType pulumi.String

const (
	ResourceIdentityTypeSystemAssigned = ResourceIdentityType("SystemAssigned")
	ResourceIdentityTypeNone           = ResourceIdentityType("None")
)

func (ResourceIdentityType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ResourceIdentityType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ResourceIdentityType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ResourceIdentityType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ResourceIdentityType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
type ScaleSetEvictionPolicy pulumi.String

const (
	ScaleSetEvictionPolicyDelete     = ScaleSetEvictionPolicy("Delete")
	ScaleSetEvictionPolicyDeallocate = ScaleSetEvictionPolicy("Deallocate")
)

func (ScaleSetEvictionPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ScaleSetEvictionPolicy) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleSetEvictionPolicy) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleSetEvictionPolicy) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ScaleSetEvictionPolicy) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
type ScaleSetPriority pulumi.String

const (
	ScaleSetPriorityLow     = ScaleSetPriority("Low")
	ScaleSetPriorityRegular = ScaleSetPriority("Regular")
)

func (ScaleSetPriority) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ScaleSetPriority) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleSetPriority) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleSetPriority) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ScaleSetPriority) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
