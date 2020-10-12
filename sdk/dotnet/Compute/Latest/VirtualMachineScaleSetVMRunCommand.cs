// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.Latest
{
    /// <summary>
    /// Describes a Virtual Machine run command.
    /// </summary>
    public partial class VirtualMachineScaleSetVMRunCommand : Pulumi.CustomResource
    {
        /// <summary>
        /// Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
        /// </summary>
        [Output("asyncExecution")]
        public Output<bool?> AsyncExecution { get; private set; } = null!;

        /// <summary>
        /// Specifies the Azure storage blob where script error stream will be uploaded.
        /// </summary>
        [Output("errorBlobUri")]
        public Output<string?> ErrorBlobUri { get; private set; } = null!;

        /// <summary>
        /// The virtual machine run command instance view.
        /// </summary>
        [Output("instanceView")]
        public Output<Outputs.VirtualMachineRunCommandInstanceViewResponse> InstanceView { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the Azure storage blob where script output stream will be uploaded.
        /// </summary>
        [Output("outputBlobUri")]
        public Output<string?> OutputBlobUri { get; private set; } = null!;

        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        [Output("parameters")]
        public Output<ImmutableArray<Outputs.RunCommandInputParameterResponse>> Parameters { get; private set; } = null!;

        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        [Output("protectedParameters")]
        public Output<ImmutableArray<Outputs.RunCommandInputParameterResponse>> ProtectedParameters { get; private set; } = null!;

        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Specifies the user account password on the VM when executing the run command.
        /// </summary>
        [Output("runAsPassword")]
        public Output<string?> RunAsPassword { get; private set; } = null!;

        /// <summary>
        /// Specifies the user account on the VM when executing the run command.
        /// </summary>
        [Output("runAsUser")]
        public Output<string?> RunAsUser { get; private set; } = null!;

        /// <summary>
        /// The source of the run command script.
        /// </summary>
        [Output("source")]
        public Output<Outputs.VirtualMachineRunCommandScriptSourceResponse?> Source { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The timeout in seconds to execute the run command.
        /// </summary>
        [Output("timeoutInSeconds")]
        public Output<int?> TimeoutInSeconds { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualMachineScaleSetVMRunCommand resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualMachineScaleSetVMRunCommand(string name, VirtualMachineScaleSetVMRunCommandArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/latest:VirtualMachineScaleSetVMRunCommand", name, args ?? new VirtualMachineScaleSetVMRunCommandArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualMachineScaleSetVMRunCommand(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/latest:VirtualMachineScaleSetVMRunCommand", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20200601:VirtualMachineScaleSetVMRunCommand"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualMachineScaleSetVMRunCommand resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualMachineScaleSetVMRunCommand Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualMachineScaleSetVMRunCommand(name, id, options);
        }
    }

    public sealed class VirtualMachineScaleSetVMRunCommandArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
        /// </summary>
        [Input("asyncExecution")]
        public Input<bool>? AsyncExecution { get; set; }

        /// <summary>
        /// Specifies the Azure storage blob where script error stream will be uploaded.
        /// </summary>
        [Input("errorBlobUri")]
        public Input<string>? ErrorBlobUri { get; set; }

        /// <summary>
        /// The instance ID of the virtual machine.
        /// </summary>
        [Input("instanceId", required: true)]
        public Input<string> InstanceId { get; set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Specifies the Azure storage blob where script output stream will be uploaded.
        /// </summary>
        [Input("outputBlobUri")]
        public Input<string>? OutputBlobUri { get; set; }

        [Input("parameters")]
        private InputList<Inputs.RunCommandInputParameterArgs>? _parameters;

        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        public InputList<Inputs.RunCommandInputParameterArgs> Parameters
        {
            get => _parameters ?? (_parameters = new InputList<Inputs.RunCommandInputParameterArgs>());
            set => _parameters = value;
        }

        [Input("protectedParameters")]
        private InputList<Inputs.RunCommandInputParameterArgs>? _protectedParameters;

        /// <summary>
        /// The parameters used by the script.
        /// </summary>
        public InputList<Inputs.RunCommandInputParameterArgs> ProtectedParameters
        {
            get => _protectedParameters ?? (_protectedParameters = new InputList<Inputs.RunCommandInputParameterArgs>());
            set => _protectedParameters = value;
        }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies the user account password on the VM when executing the run command.
        /// </summary>
        [Input("runAsPassword")]
        public Input<string>? RunAsPassword { get; set; }

        /// <summary>
        /// Specifies the user account on the VM when executing the run command.
        /// </summary>
        [Input("runAsUser")]
        public Input<string>? RunAsUser { get; set; }

        /// <summary>
        /// The name of the virtual machine run command.
        /// </summary>
        [Input("runCommandName", required: true)]
        public Input<string> RunCommandName { get; set; } = null!;

        /// <summary>
        /// The source of the run command script.
        /// </summary>
        [Input("source")]
        public Input<Inputs.VirtualMachineRunCommandScriptSourceArgs>? Source { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The timeout in seconds to execute the run command.
        /// </summary>
        [Input("timeoutInSeconds")]
        public Input<int>? TimeoutInSeconds { get; set; }

        /// <summary>
        /// The name of the VM scale set.
        /// </summary>
        [Input("vmScaleSetName", required: true)]
        public Input<string> VmScaleSetName { get; set; } = null!;

        public VirtualMachineScaleSetVMRunCommandArgs()
        {
        }
    }
}
