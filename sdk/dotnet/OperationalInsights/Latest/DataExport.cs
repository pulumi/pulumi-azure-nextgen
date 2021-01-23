// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.Latest
{
    /// <summary>
    /// The top level data export resource container.
    /// Latest API Version: 2020-08-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:operationalinsights/latest:DataExport")]
    public partial class DataExport : Pulumi.CustomResource
    {
        /// <summary>
        /// The latest data export rule modification time.
        /// </summary>
        [Output("createdDate")]
        public Output<string?> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// The data export rule ID.
        /// </summary>
        [Output("dataExportId")]
        public Output<string?> DataExportId { get; private set; } = null!;

        /// <summary>
        /// Active when enabled.
        /// </summary>
        [Output("enable")]
        public Output<bool?> Enable { get; private set; } = null!;

        /// <summary>
        /// Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
        /// </summary>
        [Output("eventHubName")]
        public Output<string?> EventHubName { get; private set; } = null!;

        /// <summary>
        /// Date and time when the export was last modified.
        /// </summary>
        [Output("lastModifiedDate")]
        public Output<string?> LastModifiedDate { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
        /// </summary>
        [Output("resourceId")]
        public Output<string> ResourceId { get; private set; } = null!;

        /// <summary>
        /// An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
        /// </summary>
        [Output("tableNames")]
        public Output<ImmutableArray<string>> TableNames { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a DataExport resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DataExport(string name, DataExportArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:operationalinsights/latest:DataExport", name, args ?? new DataExportArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DataExport(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:operationalinsights/latest:DataExport", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/v20190801preview:DataExport"},
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/v20200301preview:DataExport"},
                    new Pulumi.Alias { Type = "azure-nextgen:operationalinsights/v20200801:DataExport"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DataExport resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DataExport Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DataExport(name, id, options);
        }
    }

    public sealed class DataExportArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The latest data export rule modification time.
        /// </summary>
        [Input("createdDate")]
        public Input<string>? CreatedDate { get; set; }

        /// <summary>
        /// The data export rule ID.
        /// </summary>
        [Input("dataExportId")]
        public Input<string>? DataExportId { get; set; }

        /// <summary>
        /// The data export rule name.
        /// </summary>
        [Input("dataExportName", required: true)]
        public Input<string> DataExportName { get; set; } = null!;

        /// <summary>
        /// Active when enabled.
        /// </summary>
        [Input("enable")]
        public Input<bool>? Enable { get; set; }

        /// <summary>
        /// Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
        /// </summary>
        [Input("eventHubName")]
        public Input<string>? EventHubName { get; set; }

        /// <summary>
        /// Date and time when the export was last modified.
        /// </summary>
        [Input("lastModifiedDate")]
        public Input<string>? LastModifiedDate { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
        /// </summary>
        [Input("resourceId", required: true)]
        public Input<string> ResourceId { get; set; } = null!;

        [Input("tableNames", required: true)]
        private InputList<string>? _tableNames;

        /// <summary>
        /// An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
        /// </summary>
        public InputList<string> TableNames
        {
            get => _tableNames ?? (_tableNames = new InputList<string>());
            set => _tableNames = value;
        }

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public DataExportArgs()
        {
        }
    }
}
