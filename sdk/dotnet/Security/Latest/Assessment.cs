// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.Latest
{
    /// <summary>
    /// Security assessment on a resource
    /// Latest API Version: 2020-01-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:security/latest:Assessment")]
    public partial class Assessment : Pulumi.CustomResource
    {
        /// <summary>
        /// Additional data regarding the assessment
        /// </summary>
        [Output("additionalData")]
        public Output<ImmutableDictionary<string, string>?> AdditionalData { get; private set; } = null!;

        /// <summary>
        /// User friendly display name of the assessment
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Links relevant to the assessment
        /// </summary>
        [Output("links")]
        public Output<Outputs.AssessmentLinksResponse> Links { get; private set; } = null!;

        /// <summary>
        /// Describes properties of an assessment metadata.
        /// </summary>
        [Output("metadata")]
        public Output<Outputs.SecurityAssessmentMetadataPropertiesResponse?> Metadata { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Data regarding 3rd party partner integration
        /// </summary>
        [Output("partnersData")]
        public Output<Outputs.SecurityAssessmentPartnerDataResponse?> PartnersData { get; private set; } = null!;

        /// <summary>
        /// Details of the resource that was assessed
        /// </summary>
        [Output("resourceDetails")]
        public Output<Union<Outputs.AzureResourceDetailsResponse, Outputs.OnPremiseResourceDetailsResponse>> ResourceDetails { get; private set; } = null!;

        /// <summary>
        /// The result of the assessment
        /// </summary>
        [Output("status")]
        public Output<Outputs.AssessmentStatusResponse> Status { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Assessment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Assessment(string name, AssessmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/latest:Assessment", name, args ?? new AssessmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Assessment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/latest:Assessment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:security/v20190101preview:Assessment"},
                    new Pulumi.Alias { Type = "azure-nextgen:security/v20200101:Assessment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Assessment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Assessment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Assessment(name, id, options);
        }
    }

    public sealed class AssessmentArgs : Pulumi.ResourceArgs
    {
        [Input("additionalData")]
        private InputMap<string>? _additionalData;

        /// <summary>
        /// Additional data regarding the assessment
        /// </summary>
        public InputMap<string> AdditionalData
        {
            get => _additionalData ?? (_additionalData = new InputMap<string>());
            set => _additionalData = value;
        }

        /// <summary>
        /// The Assessment Key - Unique key for the assessment type
        /// </summary>
        [Input("assessmentName", required: true)]
        public Input<string> AssessmentName { get; set; } = null!;

        /// <summary>
        /// Describes properties of an assessment metadata.
        /// </summary>
        [Input("metadata")]
        public Input<Inputs.SecurityAssessmentMetadataPropertiesArgs>? Metadata { get; set; }

        /// <summary>
        /// Data regarding 3rd party partner integration
        /// </summary>
        [Input("partnersData")]
        public Input<Inputs.SecurityAssessmentPartnerDataArgs>? PartnersData { get; set; }

        /// <summary>
        /// Details of the resource that was assessed
        /// </summary>
        [Input("resourceDetails", required: true)]
        public InputUnion<Inputs.AzureResourceDetailsArgs, Inputs.OnPremiseResourceDetailsArgs> ResourceDetails { get; set; } = null!;

        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        [Input("resourceId", required: true)]
        public Input<string> ResourceId { get; set; } = null!;

        /// <summary>
        /// The result of the assessment
        /// </summary>
        [Input("status", required: true)]
        public Input<Inputs.AssessmentStatusArgs> Status { get; set; } = null!;

        public AssessmentArgs()
        {
        }
    }
}
