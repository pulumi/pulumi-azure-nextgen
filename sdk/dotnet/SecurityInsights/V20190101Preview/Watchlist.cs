// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview
{
    /// <summary>
    /// Represents a Watchlist in Azure Security Insights.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:securityinsights/v20190101preview:Watchlist")]
    public partial class Watchlist : Pulumi.CustomResource
    {
        /// <summary>
        /// The content type of the raw content. Example : text/csv or text/tsv 
        /// </summary>
        [Output("contentType")]
        public Output<string?> ContentType { get; private set; } = null!;

        /// <summary>
        /// The time the watchlist was created
        /// </summary>
        [Output("created")]
        public Output<string?> Created { get; private set; } = null!;

        /// <summary>
        /// Describes a user that created the watchlist
        /// </summary>
        [Output("createdBy")]
        public Output<Outputs.UserInfoResponse?> CreatedBy { get; private set; } = null!;

        /// <summary>
        /// The default duration of a watchlist (in ISO 8601 duration format)
        /// </summary>
        [Output("defaultDuration")]
        public Output<string?> DefaultDuration { get; private set; } = null!;

        /// <summary>
        /// A description of the watchlist
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The display name of the watchlist
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// A flag that indicates if the watchlist is deleted or not
        /// </summary>
        [Output("isDeleted")]
        public Output<bool?> IsDeleted { get; private set; } = null!;

        /// <summary>
        /// List of labels relevant to this watchlist
        /// </summary>
        [Output("labels")]
        public Output<ImmutableArray<string>> Labels { get; private set; } = null!;

        /// <summary>
        /// Azure resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The number of lines in a csv/tsv content to skip before the header
        /// </summary>
        [Output("numberOfLinesToSkip")]
        public Output<int?> NumberOfLinesToSkip { get; private set; } = null!;

        /// <summary>
        /// The provider of the watchlist
        /// </summary>
        [Output("provider")]
        public Output<string> Provider { get; private set; } = null!;

        /// <summary>
        /// The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
        /// </summary>
        [Output("rawContent")]
        public Output<string?> RawContent { get; private set; } = null!;

        /// <summary>
        /// The source of the watchlist
        /// </summary>
        [Output("source")]
        public Output<string> Source { get; private set; } = null!;

        /// <summary>
        /// The tenantId where the watchlist belongs to
        /// </summary>
        [Output("tenantId")]
        public Output<string?> TenantId { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The last time the watchlist was updated
        /// </summary>
        [Output("updated")]
        public Output<string?> Updated { get; private set; } = null!;

        /// <summary>
        /// Describes a user that updated the watchlist
        /// </summary>
        [Output("updatedBy")]
        public Output<Outputs.UserInfoResponse?> UpdatedBy { get; private set; } = null!;

        /// <summary>
        /// The alias of the watchlist
        /// </summary>
        [Output("watchlistAlias")]
        public Output<string?> WatchlistAlias { get; private set; } = null!;

        /// <summary>
        /// The id (a Guid) of the watchlist
        /// </summary>
        [Output("watchlistId")]
        public Output<string?> WatchlistId { get; private set; } = null!;

        /// <summary>
        /// The type of the watchlist
        /// </summary>
        [Output("watchlistType")]
        public Output<string?> WatchlistType { get; private set; } = null!;


        /// <summary>
        /// Create a Watchlist resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Watchlist(string name, WatchlistArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:Watchlist", name, args ?? new WatchlistArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Watchlist(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:Watchlist", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Watchlist resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Watchlist Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Watchlist(name, id, options);
        }
    }

    public sealed class WatchlistArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The content type of the raw content. Example : text/csv or text/tsv 
        /// </summary>
        [Input("contentType")]
        public Input<string>? ContentType { get; set; }

        /// <summary>
        /// The time the watchlist was created
        /// </summary>
        [Input("created")]
        public Input<string>? Created { get; set; }

        /// <summary>
        /// Describes a user that created the watchlist
        /// </summary>
        [Input("createdBy")]
        public Input<Inputs.UserInfoArgs>? CreatedBy { get; set; }

        /// <summary>
        /// The default duration of a watchlist (in ISO 8601 duration format)
        /// </summary>
        [Input("defaultDuration")]
        public Input<string>? DefaultDuration { get; set; }

        /// <summary>
        /// A description of the watchlist
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The display name of the watchlist
        /// </summary>
        [Input("displayName", required: true)]
        public Input<string> DisplayName { get; set; } = null!;

        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// A flag that indicates if the watchlist is deleted or not
        /// </summary>
        [Input("isDeleted")]
        public Input<bool>? IsDeleted { get; set; }

        [Input("labels")]
        private InputList<string>? _labels;

        /// <summary>
        /// List of labels relevant to this watchlist
        /// </summary>
        public InputList<string> Labels
        {
            get => _labels ?? (_labels = new InputList<string>());
            set => _labels = value;
        }

        /// <summary>
        /// The number of lines in a csv/tsv content to skip before the header
        /// </summary>
        [Input("numberOfLinesToSkip")]
        public Input<int>? NumberOfLinesToSkip { get; set; }

        /// <summary>
        /// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
        /// </summary>
        [Input("operationalInsightsResourceProvider", required: true)]
        public Input<string> OperationalInsightsResourceProvider { get; set; } = null!;

        /// <summary>
        /// The provider of the watchlist
        /// </summary>
        [Input("provider", required: true)]
        public Input<string> Provider { get; set; } = null!;

        /// <summary>
        /// The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
        /// </summary>
        [Input("rawContent")]
        public Input<string>? RawContent { get; set; }

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The source of the watchlist
        /// </summary>
        [Input("source", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.SecurityInsights.V20190101Preview.Source> Source { get; set; } = null!;

        /// <summary>
        /// The tenantId where the watchlist belongs to
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        /// <summary>
        /// The last time the watchlist was updated
        /// </summary>
        [Input("updated")]
        public Input<string>? Updated { get; set; }

        /// <summary>
        /// Describes a user that updated the watchlist
        /// </summary>
        [Input("updatedBy")]
        public Input<Inputs.UserInfoArgs>? UpdatedBy { get; set; }

        /// <summary>
        /// The alias of the watchlist
        /// </summary>
        [Input("watchlistAlias", required: true)]
        public Input<string> WatchlistAlias { get; set; } = null!;

        /// <summary>
        /// The id (a Guid) of the watchlist
        /// </summary>
        [Input("watchlistId")]
        public Input<string>? WatchlistId { get; set; }

        /// <summary>
        /// The type of the watchlist
        /// </summary>
        [Input("watchlistType")]
        public Input<string>? WatchlistType { get; set; }

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public WatchlistArgs()
        {
        }
    }
}
