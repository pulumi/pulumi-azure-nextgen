// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.LabServices.V20181015
{
    /// <summary>
    /// Represents an environment instance
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:labservices/v20181015:Environment")]
    public partial class Environment : Pulumi.CustomResource
    {
        /// <summary>
        /// The name or email address of the user who has claimed the environment
        /// </summary>
        [Output("claimedByUserName")]
        public Output<string> ClaimedByUserName { get; private set; } = null!;

        /// <summary>
        /// The AAD object Id of the user who has claimed the environment
        /// </summary>
        [Output("claimedByUserObjectId")]
        public Output<string> ClaimedByUserObjectId { get; private set; } = null!;

        /// <summary>
        /// The user principal Id of the user who has claimed the environment
        /// </summary>
        [Output("claimedByUserPrincipalId")]
        public Output<string> ClaimedByUserPrincipalId { get; private set; } = null!;

        /// <summary>
        /// Is the environment claimed or not
        /// </summary>
        [Output("isClaimed")]
        public Output<bool> IsClaimed { get; private set; } = null!;

        /// <summary>
        /// Last known power state of the environment
        /// </summary>
        [Output("lastKnownPowerState")]
        public Output<string> LastKnownPowerState { get; private set; } = null!;

        /// <summary>
        /// The details of the latest operation. ex: status, error
        /// </summary>
        [Output("latestOperationResult")]
        public Output<Outputs.LatestOperationResultResponse> LatestOperationResult { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Network details of the environment
        /// </summary>
        [Output("networkInterface")]
        public Output<Outputs.NetworkInterfaceResponse> NetworkInterface { get; private set; } = null!;

        /// <summary>
        /// When the password was last reset on the environment.
        /// </summary>
        [Output("passwordLastReset")]
        public Output<string> PasswordLastReset { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The set of a VM and the setting id it was created for
        /// </summary>
        [Output("resourceSets")]
        public Output<Outputs.ResourceSetResponse?> ResourceSets { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// How long the environment has been used by a lab user
        /// </summary>
        [Output("totalUsage")]
        public Output<string> TotalUsage { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Output("uniqueIdentifier")]
        public Output<string?> UniqueIdentifier { get; private set; } = null!;


        /// <summary>
        /// Create a Environment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Environment(string name, EnvironmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:labservices/v20181015:Environment", name, args ?? new EnvironmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Environment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:labservices/v20181015:Environment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:labservices/latest:Environment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Environment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Environment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Environment(name, id, options);
        }
    }

    public sealed class EnvironmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the environment.
        /// </summary>
        [Input("environmentName", required: true)]
        public Input<string> EnvironmentName { get; set; } = null!;

        /// <summary>
        /// The name of the environment Setting.
        /// </summary>
        [Input("environmentSettingName", required: true)]
        public Input<string> EnvironmentSettingName { get; set; } = null!;

        /// <summary>
        /// The name of the lab Account.
        /// </summary>
        [Input("labAccountName", required: true)]
        public Input<string> LabAccountName { get; set; } = null!;

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public Input<string> LabName { get; set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The set of a VM and the setting id it was created for
        /// </summary>
        [Input("resourceSets")]
        public Input<Inputs.ResourceSetArgs>? ResourceSets { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Input("uniqueIdentifier")]
        public Input<string>? UniqueIdentifier { get; set; }

        public EnvironmentArgs()
        {
        }
    }
}
