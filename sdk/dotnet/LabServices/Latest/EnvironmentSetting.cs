// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.LabServices.Latest
{
    /// <summary>
    /// Represents settings of an environment, from which environment instances would be created
    /// Latest API Version: 2018-10-15.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:labservices/latest:EnvironmentSetting")]
    public partial class EnvironmentSetting : Pulumi.CustomResource
    {
        /// <summary>
        /// Describes the user's progress in configuring their environment setting
        /// </summary>
        [Output("configurationState")]
        public Output<string?> ConfigurationState { get; private set; } = null!;

        /// <summary>
        /// Describes the environment and its resource settings
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Time when the template VM was last changed.
        /// </summary>
        [Output("lastChanged")]
        public Output<string> LastChanged { get; private set; } = null!;

        /// <summary>
        /// Time when the template VM was last sent for publishing.
        /// </summary>
        [Output("lastPublished")]
        public Output<string> LastPublished { get; private set; } = null!;

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
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Describes the readiness of this environment setting
        /// </summary>
        [Output("publishingState")]
        public Output<string> PublishingState { get; private set; } = null!;

        /// <summary>
        /// The resource specific settings
        /// </summary>
        [Output("resourceSettings")]
        public Output<Outputs.ResourceSettingsResponse> ResourceSettings { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Brief title describing the environment and its resource settings
        /// </summary>
        [Output("title")]
        public Output<string?> Title { get; private set; } = null!;

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
        /// Create a EnvironmentSetting resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public EnvironmentSetting(string name, EnvironmentSettingArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:labservices/latest:EnvironmentSetting", name, args ?? new EnvironmentSettingArgs(), MakeResourceOptions(options, ""))
        {
        }

        private EnvironmentSetting(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:labservices/latest:EnvironmentSetting", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:labservices/v20181015:EnvironmentSetting"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing EnvironmentSetting resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static EnvironmentSetting Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new EnvironmentSetting(name, id, options);
        }
    }

    public sealed class EnvironmentSettingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes the user's progress in configuring their environment setting
        /// </summary>
        [Input("configurationState")]
        public InputUnion<string, Pulumi.AzureNextGen.LabServices.Latest.ConfigurationState>? ConfigurationState { get; set; }

        /// <summary>
        /// Describes the environment and its resource settings
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

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
        /// The resource specific settings
        /// </summary>
        [Input("resourceSettings", required: true)]
        public Input<Inputs.ResourceSettingsArgs> ResourceSettings { get; set; } = null!;

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
        /// Brief title describing the environment and its resource settings
        /// </summary>
        [Input("title")]
        public Input<string>? Title { get; set; }

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Input("uniqueIdentifier")]
        public Input<string>? UniqueIdentifier { get; set; }

        public EnvironmentSettingArgs()
        {
        }
    }
}
