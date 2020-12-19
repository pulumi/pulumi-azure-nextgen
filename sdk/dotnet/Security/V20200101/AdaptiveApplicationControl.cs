// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200101
{
    [AzureNextGenResourceType("azure-nextgen:security/v20200101:AdaptiveApplicationControl")]
    public partial class AdaptiveApplicationControl : Pulumi.CustomResource
    {
        /// <summary>
        /// The configuration status of the machines group or machine or rule
        /// </summary>
        [Output("configurationStatus")]
        public Output<string> ConfigurationStatus { get; private set; } = null!;

        /// <summary>
        /// The application control policy enforcement/protection mode of the machine group
        /// </summary>
        [Output("enforcementMode")]
        public Output<string?> EnforcementMode { get; private set; } = null!;

        [Output("issues")]
        public Output<ImmutableArray<Outputs.AdaptiveApplicationControlIssueSummaryResponse>> Issues { get; private set; } = null!;

        /// <summary>
        /// Location where the resource is stored
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("pathRecommendations")]
        public Output<ImmutableArray<Outputs.PathRecommendationResponse>> PathRecommendations { get; private set; } = null!;

        /// <summary>
        /// The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
        /// </summary>
        [Output("protectionMode")]
        public Output<Outputs.ProtectionModeResponse?> ProtectionMode { get; private set; } = null!;

        /// <summary>
        /// The initial recommendation status of the machine group or machine
        /// </summary>
        [Output("recommendationStatus")]
        public Output<string> RecommendationStatus { get; private set; } = null!;

        /// <summary>
        /// The source type of the machine group
        /// </summary>
        [Output("sourceSystem")]
        public Output<string> SourceSystem { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        [Output("vmRecommendations")]
        public Output<ImmutableArray<Outputs.VmRecommendationResponse>> VmRecommendations { get; private set; } = null!;


        /// <summary>
        /// Create a AdaptiveApplicationControl resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AdaptiveApplicationControl(string name, AdaptiveApplicationControlArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200101:AdaptiveApplicationControl", name, args ?? new AdaptiveApplicationControlArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AdaptiveApplicationControl(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200101:AdaptiveApplicationControl", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:security/latest:AdaptiveApplicationControl"},
                    new Pulumi.Alias { Type = "azure-nextgen:security/v20150601preview:AdaptiveApplicationControl"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AdaptiveApplicationControl resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AdaptiveApplicationControl Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AdaptiveApplicationControl(name, id, options);
        }
    }

    public sealed class AdaptiveApplicationControlArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The location where ASC stores the data of the subscription. can be retrieved from Get locations
        /// </summary>
        [Input("ascLocation", required: true)]
        public Input<string> AscLocation { get; set; } = null!;

        /// <summary>
        /// The application control policy enforcement/protection mode of the machine group
        /// </summary>
        [Input("enforcementMode")]
        public Input<string>? EnforcementMode { get; set; }

        /// <summary>
        /// Name of an application control machine group
        /// </summary>
        [Input("groupName", required: true)]
        public Input<string> GroupName { get; set; } = null!;

        [Input("pathRecommendations")]
        private InputList<Inputs.PathRecommendationArgs>? _pathRecommendations;
        public InputList<Inputs.PathRecommendationArgs> PathRecommendations
        {
            get => _pathRecommendations ?? (_pathRecommendations = new InputList<Inputs.PathRecommendationArgs>());
            set => _pathRecommendations = value;
        }

        /// <summary>
        /// The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
        /// </summary>
        [Input("protectionMode")]
        public Input<Inputs.ProtectionModeArgs>? ProtectionMode { get; set; }

        [Input("vmRecommendations")]
        private InputList<Inputs.VmRecommendationArgs>? _vmRecommendations;
        public InputList<Inputs.VmRecommendationArgs> VmRecommendations
        {
            get => _vmRecommendations ?? (_vmRecommendations = new InputList<Inputs.VmRecommendationArgs>());
            set => _vmRecommendations = value;
        }

        public AdaptiveApplicationControlArgs()
        {
        }
    }
}
