// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170131

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The orchestrator to use to manage container service cluster resources. Valid values are Swarm, DCOS, and Custom.
type ContainerServiceOrchestratorTypes pulumi.String

const (
	ContainerServiceOrchestratorTypesSwarm      = ContainerServiceOrchestratorTypes("Swarm")
	ContainerServiceOrchestratorTypesDCOS       = ContainerServiceOrchestratorTypes("DCOS")
	ContainerServiceOrchestratorTypesCustom     = ContainerServiceOrchestratorTypes("Custom")
	ContainerServiceOrchestratorTypesKubernetes = ContainerServiceOrchestratorTypes("Kubernetes")
)

func (ContainerServiceOrchestratorTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ContainerServiceOrchestratorTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContainerServiceOrchestratorTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContainerServiceOrchestratorTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ContainerServiceOrchestratorTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Size of agent VMs.
type ContainerServiceVMSizeTypes pulumi.String

const (
	ContainerServiceVMSizeTypes_Standard_A0     = ContainerServiceVMSizeTypes("Standard_A0")
	ContainerServiceVMSizeTypes_Standard_A1     = ContainerServiceVMSizeTypes("Standard_A1")
	ContainerServiceVMSizeTypes_Standard_A2     = ContainerServiceVMSizeTypes("Standard_A2")
	ContainerServiceVMSizeTypes_Standard_A3     = ContainerServiceVMSizeTypes("Standard_A3")
	ContainerServiceVMSizeTypes_Standard_A4     = ContainerServiceVMSizeTypes("Standard_A4")
	ContainerServiceVMSizeTypes_Standard_A5     = ContainerServiceVMSizeTypes("Standard_A5")
	ContainerServiceVMSizeTypes_Standard_A6     = ContainerServiceVMSizeTypes("Standard_A6")
	ContainerServiceVMSizeTypes_Standard_A7     = ContainerServiceVMSizeTypes("Standard_A7")
	ContainerServiceVMSizeTypes_Standard_A8     = ContainerServiceVMSizeTypes("Standard_A8")
	ContainerServiceVMSizeTypes_Standard_A9     = ContainerServiceVMSizeTypes("Standard_A9")
	ContainerServiceVMSizeTypes_Standard_A10    = ContainerServiceVMSizeTypes("Standard_A10")
	ContainerServiceVMSizeTypes_Standard_A11    = ContainerServiceVMSizeTypes("Standard_A11")
	ContainerServiceVMSizeTypes_Standard_D1     = ContainerServiceVMSizeTypes("Standard_D1")
	ContainerServiceVMSizeTypes_Standard_D2     = ContainerServiceVMSizeTypes("Standard_D2")
	ContainerServiceVMSizeTypes_Standard_D3     = ContainerServiceVMSizeTypes("Standard_D3")
	ContainerServiceVMSizeTypes_Standard_D4     = ContainerServiceVMSizeTypes("Standard_D4")
	ContainerServiceVMSizeTypes_Standard_D11    = ContainerServiceVMSizeTypes("Standard_D11")
	ContainerServiceVMSizeTypes_Standard_D12    = ContainerServiceVMSizeTypes("Standard_D12")
	ContainerServiceVMSizeTypes_Standard_D13    = ContainerServiceVMSizeTypes("Standard_D13")
	ContainerServiceVMSizeTypes_Standard_D14    = ContainerServiceVMSizeTypes("Standard_D14")
	ContainerServiceVMSizeTypes_Standard_D1_v2  = ContainerServiceVMSizeTypes("Standard_D1_v2")
	ContainerServiceVMSizeTypes_Standard_D2_v2  = ContainerServiceVMSizeTypes("Standard_D2_v2")
	ContainerServiceVMSizeTypes_Standard_D3_v2  = ContainerServiceVMSizeTypes("Standard_D3_v2")
	ContainerServiceVMSizeTypes_Standard_D4_v2  = ContainerServiceVMSizeTypes("Standard_D4_v2")
	ContainerServiceVMSizeTypes_Standard_D5_v2  = ContainerServiceVMSizeTypes("Standard_D5_v2")
	ContainerServiceVMSizeTypes_Standard_D11_v2 = ContainerServiceVMSizeTypes("Standard_D11_v2")
	ContainerServiceVMSizeTypes_Standard_D12_v2 = ContainerServiceVMSizeTypes("Standard_D12_v2")
	ContainerServiceVMSizeTypes_Standard_D13_v2 = ContainerServiceVMSizeTypes("Standard_D13_v2")
	ContainerServiceVMSizeTypes_Standard_D14_v2 = ContainerServiceVMSizeTypes("Standard_D14_v2")
	ContainerServiceVMSizeTypes_Standard_G1     = ContainerServiceVMSizeTypes("Standard_G1")
	ContainerServiceVMSizeTypes_Standard_G2     = ContainerServiceVMSizeTypes("Standard_G2")
	ContainerServiceVMSizeTypes_Standard_G3     = ContainerServiceVMSizeTypes("Standard_G3")
	ContainerServiceVMSizeTypes_Standard_G4     = ContainerServiceVMSizeTypes("Standard_G4")
	ContainerServiceVMSizeTypes_Standard_G5     = ContainerServiceVMSizeTypes("Standard_G5")
	ContainerServiceVMSizeTypes_Standard_DS1    = ContainerServiceVMSizeTypes("Standard_DS1")
	ContainerServiceVMSizeTypes_Standard_DS2    = ContainerServiceVMSizeTypes("Standard_DS2")
	ContainerServiceVMSizeTypes_Standard_DS3    = ContainerServiceVMSizeTypes("Standard_DS3")
	ContainerServiceVMSizeTypes_Standard_DS4    = ContainerServiceVMSizeTypes("Standard_DS4")
	ContainerServiceVMSizeTypes_Standard_DS11   = ContainerServiceVMSizeTypes("Standard_DS11")
	ContainerServiceVMSizeTypes_Standard_DS12   = ContainerServiceVMSizeTypes("Standard_DS12")
	ContainerServiceVMSizeTypes_Standard_DS13   = ContainerServiceVMSizeTypes("Standard_DS13")
	ContainerServiceVMSizeTypes_Standard_DS14   = ContainerServiceVMSizeTypes("Standard_DS14")
	ContainerServiceVMSizeTypes_Standard_GS1    = ContainerServiceVMSizeTypes("Standard_GS1")
	ContainerServiceVMSizeTypes_Standard_GS2    = ContainerServiceVMSizeTypes("Standard_GS2")
	ContainerServiceVMSizeTypes_Standard_GS3    = ContainerServiceVMSizeTypes("Standard_GS3")
	ContainerServiceVMSizeTypes_Standard_GS4    = ContainerServiceVMSizeTypes("Standard_GS4")
	ContainerServiceVMSizeTypes_Standard_GS5    = ContainerServiceVMSizeTypes("Standard_GS5")
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
