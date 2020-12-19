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
    /// The relationship resource format.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:customerinsights/v20170426:Relationship")]
    public partial class Relationship : Pulumi.CustomResource
    {
        /// <summary>
        /// The Relationship Cardinality.
        /// </summary>
        [Output("cardinality")]
        public Output<string?> Cardinality { get; private set; } = null!;

        /// <summary>
        /// Localized descriptions for the Relationship.
        /// </summary>
        [Output("description")]
        public Output<ImmutableDictionary<string, string>?> Description { get; private set; } = null!;

        /// <summary>
        /// Localized display name for the Relationship.
        /// </summary>
        [Output("displayName")]
        public Output<ImmutableDictionary<string, string>?> DisplayName { get; private set; } = null!;

        /// <summary>
        /// The expiry date time in UTC.
        /// </summary>
        [Output("expiryDateTimeUtc")]
        public Output<string?> ExpiryDateTimeUtc { get; private set; } = null!;

        /// <summary>
        /// The properties of the Relationship.
        /// </summary>
        [Output("fields")]
        public Output<ImmutableArray<Outputs.PropertyDefinitionResponse>> Fields { get; private set; } = null!;

        /// <summary>
        /// Optional property to be used to map fields in profile to their strong ids in related profile.
        /// </summary>
        [Output("lookupMappings")]
        public Output<ImmutableArray<Outputs.RelationshipTypeMappingResponse>> LookupMappings { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Profile type.
        /// </summary>
        [Output("profileType")]
        public Output<string> ProfileType { get; private set; } = null!;

        /// <summary>
        /// Provisioning state.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Related profile being referenced.
        /// </summary>
        [Output("relatedProfileType")]
        public Output<string> RelatedProfileType { get; private set; } = null!;

        /// <summary>
        /// The relationship guid id.
        /// </summary>
        [Output("relationshipGuidId")]
        public Output<string> RelationshipGuidId { get; private set; } = null!;

        /// <summary>
        /// The Relationship name.
        /// </summary>
        [Output("relationshipName")]
        public Output<string> RelationshipName { get; private set; } = null!;

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
        /// Create a Relationship resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Relationship(string name, RelationshipArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:customerinsights/v20170426:Relationship", name, args ?? new RelationshipArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Relationship(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:customerinsights/v20170426:Relationship", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:customerinsights/latest:Relationship"},
                    new Pulumi.Alias { Type = "azure-nextgen:customerinsights/v20170101:Relationship"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Relationship resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Relationship Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Relationship(name, id, options);
        }
    }

    public sealed class RelationshipArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Relationship Cardinality.
        /// </summary>
        [Input("cardinality")]
        public Input<Pulumi.AzureNextGen.CustomerInsights.V20170426.CardinalityTypes>? Cardinality { get; set; }

        [Input("description")]
        private InputMap<string>? _description;

        /// <summary>
        /// Localized descriptions for the Relationship.
        /// </summary>
        public InputMap<string> Description
        {
            get => _description ?? (_description = new InputMap<string>());
            set => _description = value;
        }

        [Input("displayName")]
        private InputMap<string>? _displayName;

        /// <summary>
        /// Localized display name for the Relationship.
        /// </summary>
        public InputMap<string> DisplayName
        {
            get => _displayName ?? (_displayName = new InputMap<string>());
            set => _displayName = value;
        }

        /// <summary>
        /// The expiry date time in UTC.
        /// </summary>
        [Input("expiryDateTimeUtc")]
        public Input<string>? ExpiryDateTimeUtc { get; set; }

        [Input("fields")]
        private InputList<Inputs.PropertyDefinitionArgs>? _fields;

        /// <summary>
        /// The properties of the Relationship.
        /// </summary>
        public InputList<Inputs.PropertyDefinitionArgs> Fields
        {
            get => _fields ?? (_fields = new InputList<Inputs.PropertyDefinitionArgs>());
            set => _fields = value;
        }

        /// <summary>
        /// The name of the hub.
        /// </summary>
        [Input("hubName", required: true)]
        public Input<string> HubName { get; set; } = null!;

        [Input("lookupMappings")]
        private InputList<Inputs.RelationshipTypeMappingArgs>? _lookupMappings;

        /// <summary>
        /// Optional property to be used to map fields in profile to their strong ids in related profile.
        /// </summary>
        public InputList<Inputs.RelationshipTypeMappingArgs> LookupMappings
        {
            get => _lookupMappings ?? (_lookupMappings = new InputList<Inputs.RelationshipTypeMappingArgs>());
            set => _lookupMappings = value;
        }

        /// <summary>
        /// Profile type.
        /// </summary>
        [Input("profileType", required: true)]
        public Input<string> ProfileType { get; set; } = null!;

        /// <summary>
        /// Related profile being referenced.
        /// </summary>
        [Input("relatedProfileType", required: true)]
        public Input<string> RelatedProfileType { get; set; } = null!;

        /// <summary>
        /// The name of the Relationship.
        /// </summary>
        [Input("relationshipName", required: true)]
        public Input<string> RelationshipName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public RelationshipArgs()
        {
        }
    }
}
