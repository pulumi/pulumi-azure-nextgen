// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CustomerInsights.V20170426
{
    /// <summary>
    /// The prediction resource format.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:customerinsights/v20170426:Prediction")]
    public partial class Prediction : Pulumi.CustomResource
    {
        /// <summary>
        /// Whether do auto analyze.
        /// </summary>
        [Output("autoAnalyze")]
        public Output<bool> AutoAnalyze { get; private set; } = null!;

        /// <summary>
        /// Description of the prediction.
        /// </summary>
        [Output("description")]
        public Output<ImmutableDictionary<string, string>?> Description { get; private set; } = null!;

        /// <summary>
        /// Display name of the prediction.
        /// </summary>
        [Output("displayName")]
        public Output<ImmutableDictionary<string, string>?> DisplayName { get; private set; } = null!;

        /// <summary>
        /// The prediction grades.
        /// </summary>
        [Output("grades")]
        public Output<ImmutableArray<Outputs.PredictionResponseGrades>> Grades { get; private set; } = null!;

        /// <summary>
        /// Interaction types involved in the prediction.
        /// </summary>
        [Output("involvedInteractionTypes")]
        public Output<ImmutableArray<string>> InvolvedInteractionTypes { get; private set; } = null!;

        /// <summary>
        /// KPI types involved in the prediction.
        /// </summary>
        [Output("involvedKpiTypes")]
        public Output<ImmutableArray<string>> InvolvedKpiTypes { get; private set; } = null!;

        /// <summary>
        /// Relationships involved in the prediction.
        /// </summary>
        [Output("involvedRelationships")]
        public Output<ImmutableArray<string>> InvolvedRelationships { get; private set; } = null!;

        /// <summary>
        /// Definition of the link mapping of prediction.
        /// </summary>
        [Output("mappings")]
        public Output<Outputs.PredictionResponseMappings> Mappings { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Negative outcome expression.
        /// </summary>
        [Output("negativeOutcomeExpression")]
        public Output<string> NegativeOutcomeExpression { get; private set; } = null!;

        /// <summary>
        /// Positive outcome expression.
        /// </summary>
        [Output("positiveOutcomeExpression")]
        public Output<string> PositiveOutcomeExpression { get; private set; } = null!;

        /// <summary>
        /// Name of the prediction.
        /// </summary>
        [Output("predictionName")]
        public Output<string?> PredictionName { get; private set; } = null!;

        /// <summary>
        /// Primary profile type.
        /// </summary>
        [Output("primaryProfileType")]
        public Output<string> PrimaryProfileType { get; private set; } = null!;

        /// <summary>
        /// Provisioning state.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Scope expression.
        /// </summary>
        [Output("scopeExpression")]
        public Output<string> ScopeExpression { get; private set; } = null!;

        /// <summary>
        /// Score label.
        /// </summary>
        [Output("scoreLabel")]
        public Output<string> ScoreLabel { get; private set; } = null!;

        /// <summary>
        /// System generated entities.
        /// </summary>
        [Output("systemGeneratedEntities")]
        public Output<Outputs.PredictionResponseSystemGeneratedEntities> SystemGeneratedEntities { get; private set; } = null!;

        /// <summary>
        /// The hub name.
        /// </summary>
        [Output("tenantId")]
        public Output<string> TenantId { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Prediction resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Prediction(string name, PredictionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:customerinsights/v20170426:Prediction", name, args ?? new PredictionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Prediction(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:customerinsights/v20170426:Prediction", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:customerinsights/latest:Prediction"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Prediction resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Prediction Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Prediction(name, id, options);
        }
    }

    public sealed class PredictionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether do auto analyze.
        /// </summary>
        [Input("autoAnalyze", required: true)]
        public Input<bool> AutoAnalyze { get; set; } = null!;

        [Input("description")]
        private InputMap<string>? _description;

        /// <summary>
        /// Description of the prediction.
        /// </summary>
        public InputMap<string> Description
        {
            get => _description ?? (_description = new InputMap<string>());
            set => _description = value;
        }

        [Input("displayName")]
        private InputMap<string>? _displayName;

        /// <summary>
        /// Display name of the prediction.
        /// </summary>
        public InputMap<string> DisplayName
        {
            get => _displayName ?? (_displayName = new InputMap<string>());
            set => _displayName = value;
        }

        [Input("grades")]
        private InputList<Inputs.PredictionGradesArgs>? _grades;

        /// <summary>
        /// The prediction grades.
        /// </summary>
        public InputList<Inputs.PredictionGradesArgs> Grades
        {
            get => _grades ?? (_grades = new InputList<Inputs.PredictionGradesArgs>());
            set => _grades = value;
        }

        /// <summary>
        /// The name of the hub.
        /// </summary>
        [Input("hubName", required: true)]
        public Input<string> HubName { get; set; } = null!;

        [Input("involvedInteractionTypes")]
        private InputList<string>? _involvedInteractionTypes;

        /// <summary>
        /// Interaction types involved in the prediction.
        /// </summary>
        public InputList<string> InvolvedInteractionTypes
        {
            get => _involvedInteractionTypes ?? (_involvedInteractionTypes = new InputList<string>());
            set => _involvedInteractionTypes = value;
        }

        [Input("involvedKpiTypes")]
        private InputList<string>? _involvedKpiTypes;

        /// <summary>
        /// KPI types involved in the prediction.
        /// </summary>
        public InputList<string> InvolvedKpiTypes
        {
            get => _involvedKpiTypes ?? (_involvedKpiTypes = new InputList<string>());
            set => _involvedKpiTypes = value;
        }

        [Input("involvedRelationships")]
        private InputList<string>? _involvedRelationships;

        /// <summary>
        /// Relationships involved in the prediction.
        /// </summary>
        public InputList<string> InvolvedRelationships
        {
            get => _involvedRelationships ?? (_involvedRelationships = new InputList<string>());
            set => _involvedRelationships = value;
        }

        /// <summary>
        /// Definition of the link mapping of prediction.
        /// </summary>
        [Input("mappings", required: true)]
        public Input<Inputs.PredictionMappingsArgs> Mappings { get; set; } = null!;

        /// <summary>
        /// Negative outcome expression.
        /// </summary>
        [Input("negativeOutcomeExpression", required: true)]
        public Input<string> NegativeOutcomeExpression { get; set; } = null!;

        /// <summary>
        /// Positive outcome expression.
        /// </summary>
        [Input("positiveOutcomeExpression", required: true)]
        public Input<string> PositiveOutcomeExpression { get; set; } = null!;

        /// <summary>
        /// Name of the prediction.
        /// </summary>
        [Input("predictionName", required: true)]
        public Input<string> PredictionName { get; set; } = null!;

        /// <summary>
        /// Primary profile type.
        /// </summary>
        [Input("primaryProfileType", required: true)]
        public Input<string> PrimaryProfileType { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Scope expression.
        /// </summary>
        [Input("scopeExpression", required: true)]
        public Input<string> ScopeExpression { get; set; } = null!;

        /// <summary>
        /// Score label.
        /// </summary>
        [Input("scoreLabel", required: true)]
        public Input<string> ScoreLabel { get; set; } = null!;

        public PredictionArgs()
        {
        }
    }
}
