// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AzureData.V20190724Preview
{
    /// <summary>
    /// A SqlServerInstance.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:azuredata/v20190724preview:SqlServerInstance")]
    public partial class SqlServerInstance : Pulumi.CustomResource
    {
        /// <summary>
        /// ARM Resource id of the container resource (Azure Arc for Servers)
        /// </summary>
        [Output("containerResourceId")]
        public Output<string> ContainerResourceId { get; private set; } = null!;

        /// <summary>
        /// The time when the resource was created.
        /// </summary>
        [Output("createTime")]
        public Output<string> CreateTime { get; private set; } = null!;

        /// <summary>
        /// SQL Server edition.
        /// </summary>
        [Output("edition")]
        public Output<string> Edition { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The cloud connectivity status.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// Read only system data
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The time when the resource was last updated.
        /// </summary>
        [Output("updateTime")]
        public Output<string> UpdateTime { get; private set; } = null!;

        /// <summary>
        /// The number of logical processors used by the SQL Server instance.
        /// </summary>
        [Output("vCore")]
        public Output<string> VCore { get; private set; } = null!;

        /// <summary>
        /// SQL Server version.
        /// </summary>
        [Output("version")]
        public Output<string> Version { get; private set; } = null!;


        /// <summary>
        /// Create a SqlServerInstance resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SqlServerInstance(string name, SqlServerInstanceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:azuredata/v20190724preview:SqlServerInstance", name, args ?? new SqlServerInstanceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SqlServerInstance(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:azuredata/v20190724preview:SqlServerInstance", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:azuredata/v20200908preview:SqlServerInstance"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SqlServerInstance resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SqlServerInstance Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SqlServerInstance(name, id, options);
        }
    }

    public sealed class SqlServerInstanceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ARM Resource id of the container resource (Azure Arc for Servers)
        /// </summary>
        [Input("containerResourceId", required: true)]
        public Input<string> ContainerResourceId { get; set; } = null!;

        /// <summary>
        /// SQL Server edition.
        /// </summary>
        [Input("edition", required: true)]
        public Input<string> Edition { get; set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the Azure resource group
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of SQL Server Instance
        /// </summary>
        [Input("sqlServerInstanceName", required: true)]
        public Input<string> SqlServerInstanceName { get; set; } = null!;

        /// <summary>
        /// The cloud connectivity status.
        /// </summary>
        [Input("status", required: true)]
        public Input<string> Status { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The number of logical processors used by the SQL Server instance.
        /// </summary>
        [Input("vCore", required: true)]
        public Input<string> VCore { get; set; } = null!;

        /// <summary>
        /// SQL Server version.
        /// </summary>
        [Input("version", required: true)]
        public Input<string> Version { get; set; } = null!;

        public SqlServerInstanceArgs()
        {
        }
    }
}
