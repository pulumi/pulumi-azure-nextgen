// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.V20151101Preview
{
    /// <summary>
    /// Datasources under OMS Workspace.
    /// </summary>
    public partial class DataSource : Pulumi.CustomResource
    {
        /// <summary>
        /// The ETag of the data source.
        /// </summary>
        [Output("eTag")]
        public Output<string?> ETag { get; private set; } = null!;

        /// <summary>
        /// The kind of the DataSource.
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The data source properties in raw json format, each kind of data source have it's own schema.
        /// </summary>
        [Output("properties")]
        public Output<object> Properties { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a DataSource resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DataSource(string name, DataSourceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:operationalinsights/v20151101preview:DataSource", name, args ?? new DataSourceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DataSource(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:operationalinsights/v20151101preview:DataSource", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/latest:DataSource"},
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/v20200301preview:DataSource"},
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/v20200801:DataSource"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DataSource resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DataSource Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DataSource(name, id, options);
        }
    }

    public sealed class DataSourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the datasource resource.
        /// </summary>
        [Input("dataSourceName", required: true)]
        public Input<string> DataSourceName { get; set; } = null!;

        /// <summary>
        /// The ETag of the data source.
        /// </summary>
        [Input("eTag")]
        public Input<string>? ETag { get; set; }

        /// <summary>
        /// The kind of the DataSource.
        /// </summary>
        [Input("kind", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.OperationalInsights.V20151101Preview.DataSourceKind> Kind { get; set; } = null!;

        /// <summary>
        /// The data source properties in raw json format, each kind of data source have it's own schema.
        /// </summary>
        [Input("properties", required: true)]
        public Input<object> Properties { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to get. The name is case insensitive.
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
        /// Name of the Log Analytics Workspace that will contain the datasource
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public DataSourceArgs()
        {
        }
    }
}
