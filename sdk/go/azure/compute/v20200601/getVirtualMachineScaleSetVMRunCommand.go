// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineScaleSetVMRunCommand(ctx *pulumi.Context, args *LookupVirtualMachineScaleSetVMRunCommandArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineScaleSetVMRunCommandResult, error) {
	var rv LookupVirtualMachineScaleSetVMRunCommandResult
	err := ctx.Invoke("azure-nextgen:compute/v20200601:getVirtualMachineScaleSetVMRunCommand", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineScaleSetVMRunCommandArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The instance ID of the virtual machine.
	InstanceId string `pulumi:"instanceId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual machine run command.
	RunCommandName string `pulumi:"runCommandName"`
	// The name of the VM scale set.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
}

// Describes a Virtual Machine run command.
type LookupVirtualMachineScaleSetVMRunCommandResult struct {
	// Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
	AsyncExecution *bool `pulumi:"asyncExecution"`
	// Specifies the Azure storage blob where script error stream will be uploaded.
	ErrorBlobUri *string `pulumi:"errorBlobUri"`
	// The virtual machine run command instance view.
	InstanceView VirtualMachineRunCommandInstanceViewResponse `pulumi:"instanceView"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Specifies the Azure storage blob where script output stream will be uploaded.
	OutputBlobUri *string `pulumi:"outputBlobUri"`
	// The parameters used by the script.
	Parameters []RunCommandInputParameterResponse `pulumi:"parameters"`
	// The parameters used by the script.
	ProtectedParameters []RunCommandInputParameterResponse `pulumi:"protectedParameters"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Specifies the user account password on the VM when executing the run command.
	RunAsPassword *string `pulumi:"runAsPassword"`
	// Specifies the user account on the VM when executing the run command.
	RunAsUser *string `pulumi:"runAsUser"`
	// The source of the run command script.
	Source *VirtualMachineRunCommandScriptSourceResponse `pulumi:"source"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The timeout in seconds to execute the run command.
	TimeoutInSeconds *int `pulumi:"timeoutInSeconds"`
	// Resource type
	Type string `pulumi:"type"`
}
