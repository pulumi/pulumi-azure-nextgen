// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.Latest
{
    public static class GetVirtualMachineScaleSetVMRunCommand
    {
        public static Task<GetVirtualMachineScaleSetVMRunCommandResult> InvokeAsync(GetVirtualMachineScaleSetVMRunCommandArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualMachineScaleSetVMRunCommandResult>("azure-nextgen:compute/latest:getVirtualMachineScaleSetVMRunCommand", args ?? new GetVirtualMachineScaleSetVMRunCommandArgs(), options.WithVersion());
    }


    public sealed class GetVirtualMachineScaleSetVMRunCommandArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The expand expression to apply on the operation.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The instance ID of the virtual machine.
        /// </summary>
        [Input("instanceId", required: true)]
        public string InstanceId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual machine run command.
        /// </summary>
        [Input("runCommandName", required: true)]
        public string RunCommandName { get; set; } = null!;

        /// <summary>
        /// The name of the VM scale set.
        /// </summary>
        [Input("vmScaleSetName", required: true)]
        public string VmScaleSetName { get; set; } = null!;

        public GetVirtualMachineScaleSetVMRunCommandArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualMachineScaleSetVMRunCommandResult
    {
        /// <summary>
        /// Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
        /// </summary>
        public readonly bool? AsyncExecution;
        /// <summary>
        /// Specifies the Azure storage blob where script error stream will be uploaded.
        /// </summary>
        public readonly string? ErrorBlobUri;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The virtual machine run command instance view.
        /// </summary>
        public readonly Outputs.VirtualMachineRunCommandInstanceViewResponse InstanceView;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Specifies the Azure storage blob where script output stream will be uploaded.
        /// </summary>
        public readonly string? OutputBlobUri;
        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        public readonly ImmutableArray<Outputs.RunCommandInputParameterResponse> Parameters;
        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        public readonly ImmutableArray<Outputs.RunCommandInputParameterResponse> ProtectedParameters;
        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Specifies the user account password on the VM when executing the run command.
        /// </summary>
        public readonly string? RunAsPassword;
        /// <summary>
        /// Specifies the user account on the VM when executing the run command.
        /// </summary>
        public readonly string? RunAsUser;
        /// <summary>
        /// The source of the run command script.
        /// </summary>
        public readonly Outputs.VirtualMachineRunCommandScriptSourceResponse? Source;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The timeout in seconds to execute the run command.
        /// </summary>
        public readonly int? TimeoutInSeconds;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetVirtualMachineScaleSetVMRunCommandResult(
            bool? asyncExecution,

            string? errorBlobUri,

            string id,

            Outputs.VirtualMachineRunCommandInstanceViewResponse instanceView,

            string location,

            string name,

            string? outputBlobUri,

            ImmutableArray<Outputs.RunCommandInputParameterResponse> parameters,

            ImmutableArray<Outputs.RunCommandInputParameterResponse> protectedParameters,

            string provisioningState,

            string? runAsPassword,

            string? runAsUser,

            Outputs.VirtualMachineRunCommandScriptSourceResponse? source,

            ImmutableDictionary<string, string>? tags,

            int? timeoutInSeconds,

            string type)
        {
            AsyncExecution = asyncExecution;
            ErrorBlobUri = errorBlobUri;
            Id = id;
            InstanceView = instanceView;
            Location = location;
            Name = name;
            OutputBlobUri = outputBlobUri;
            Parameters = parameters;
            ProtectedParameters = protectedParameters;
            ProvisioningState = provisioningState;
            RunAsPassword = runAsPassword;
            RunAsUser = runAsUser;
            Source = source;
            Tags = tags;
            TimeoutInSeconds = timeoutInSeconds;
            Type = type;
        }
    }
}
