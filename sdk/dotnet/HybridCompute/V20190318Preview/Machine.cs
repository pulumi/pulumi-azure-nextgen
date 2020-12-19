// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HybridCompute.V20190318Preview
{
    /// <summary>
    /// Describes a hybrid machine.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:hybridcompute/v20190318preview:Machine")]
    public partial class Machine : Pulumi.CustomResource
    {
        /// <summary>
        /// The hybrid machine agent full version.
        /// </summary>
        [Output("agentVersion")]
        public Output<string> AgentVersion { get; private set; } = null!;

        /// <summary>
        /// Public Key that the client provides to be used during initial resource onboarding
        /// </summary>
        [Output("clientPublicKey")]
        public Output<string?> ClientPublicKey { get; private set; } = null!;

        /// <summary>
        /// Specifies the hybrid machine display name.
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Details about the error state.
        /// </summary>
        [Output("errorDetails")]
        public Output<ImmutableArray<Outputs.ErrorDetailResponse>> ErrorDetails { get; private set; } = null!;

        /// <summary>
        /// The time of the last status change.
        /// </summary>
        [Output("lastStatusChange")]
        public Output<string> LastStatusChange { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the hybrid machine FQDN.
        /// </summary>
        [Output("machineFqdn")]
        public Output<string> MachineFqdn { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The Operating System running on the hybrid machine.
        /// </summary>
        [Output("osName")]
        public Output<string> OsName { get; private set; } = null!;

        /// <summary>
        /// Specifies the operating system settings for the hybrid machine.
        /// </summary>
        [Output("osProfile")]
        public Output<Outputs.OSProfileResponse> OsProfile { get; private set; } = null!;

        /// <summary>
        /// The version of Operating System running on the hybrid machine.
        /// </summary>
        [Output("osVersion")]
        public Output<string> OsVersion { get; private set; } = null!;

        /// <summary>
        /// Resource's Physical Location
        /// </summary>
        [Output("physicalLocation")]
        public Output<string?> PhysicalLocation { get; private set; } = null!;

        /// <summary>
        /// The identity's principal id.
        /// </summary>
        [Output("principalId")]
        public Output<string> PrincipalId { get; private set; } = null!;

        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The status of the hybrid machine agent.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The identity's tenant id.
        /// </summary>
        [Output("tenantId")]
        public Output<string> TenantId { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Specifies the hybrid machine unique ID.
        /// </summary>
        [Output("vmId")]
        public Output<string> VmId { get; private set; } = null!;


        /// <summary>
        /// Create a Machine resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Machine(string name, MachineArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:hybridcompute/v20190318preview:Machine", name, args ?? new MachineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Machine(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:hybridcompute/v20190318preview:Machine", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/latest:Machine"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/v20190802preview:Machine"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/v20191212:Machine"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/v20200730preview:Machine"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/v20200802:Machine"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybridcompute/v20200815preview:Machine"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Machine resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Machine Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Machine(name, id, options);
        }
    }

    public sealed class MachineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Public Key that the client provides to be used during initial resource onboarding
        /// </summary>
        [Input("clientPublicKey")]
        public Input<string>? ClientPublicKey { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the hybrid machine.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Resource's Physical Location
        /// </summary>
        [Input("physicalLocation")]
        public Input<string>? PhysicalLocation { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

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
        /// The identity type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public MachineArgs()
        {
        }
    }
}
