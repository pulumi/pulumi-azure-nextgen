// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20190601Preview
{
    /// <summary>
    /// An Azure SQL Database sync group.
    /// </summary>
    public partial class SyncGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// Conflict resolution policy of the sync group.
        /// </summary>
        [Output("conflictResolutionPolicy")]
        public Output<string?> ConflictResolutionPolicy { get; private set; } = null!;

        /// <summary>
        /// Password for the sync group hub database credential.
        /// </summary>
        [Output("hubDatabasePassword")]
        public Output<string?> HubDatabasePassword { get; private set; } = null!;

        /// <summary>
        /// User name for the sync group hub database credential.
        /// </summary>
        [Output("hubDatabaseUserName")]
        public Output<string?> HubDatabaseUserName { get; private set; } = null!;

        /// <summary>
        /// Sync interval of the sync group.
        /// </summary>
        [Output("interval")]
        public Output<int?> Interval { get; private set; } = null!;

        /// <summary>
        /// Last sync time of the sync group.
        /// </summary>
        [Output("lastSyncTime")]
        public Output<string> LastSyncTime { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Private endpoint name of the sync group if use private link connection is enabled.
        /// </summary>
        [Output("privateEndpointName")]
        public Output<string> PrivateEndpointName { get; private set; } = null!;

        /// <summary>
        /// Sync schema of the sync group.
        /// </summary>
        [Output("schema")]
        public Output<Outputs.SyncGroupSchemaResponse?> Schema { get; private set; } = null!;

        /// <summary>
        /// ARM resource id of the sync database in the sync group.
        /// </summary>
        [Output("syncDatabaseId")]
        public Output<string?> SyncDatabaseId { get; private set; } = null!;

        /// <summary>
        /// Sync state of the sync group.
        /// </summary>
        [Output("syncState")]
        public Output<string> SyncState { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// If use private link connection is enabled.
        /// </summary>
        [Output("usePrivateLinkConnection")]
        public Output<bool?> UsePrivateLinkConnection { get; private set; } = null!;


        /// <summary>
        /// Create a SyncGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SyncGroup(string name, SyncGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20190601preview:SyncGroup", name, args ?? new SyncGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SyncGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20190601preview:SyncGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20150501preview:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:SyncGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SyncGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SyncGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SyncGroup(name, id, options);
        }
    }

    public sealed class SyncGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Conflict resolution policy of the sync group.
        /// </summary>
        [Input("conflictResolutionPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20190601Preview.SyncConflictResolutionPolicy>? ConflictResolutionPolicy { get; set; }

        /// <summary>
        /// The name of the database on which the sync group is hosted.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// Password for the sync group hub database credential.
        /// </summary>
        [Input("hubDatabasePassword")]
        public Input<string>? HubDatabasePassword { get; set; }

        /// <summary>
        /// User name for the sync group hub database credential.
        /// </summary>
        [Input("hubDatabaseUserName")]
        public Input<string>? HubDatabaseUserName { get; set; }

        /// <summary>
        /// Sync interval of the sync group.
        /// </summary>
        [Input("interval")]
        public Input<int>? Interval { get; set; }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Sync schema of the sync group.
        /// </summary>
        [Input("schema")]
        public Input<Inputs.SyncGroupSchemaArgs>? Schema { get; set; }

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// ARM resource id of the sync database in the sync group.
        /// </summary>
        [Input("syncDatabaseId")]
        public Input<string>? SyncDatabaseId { get; set; }

        /// <summary>
        /// The name of the sync group.
        /// </summary>
        [Input("syncGroupName", required: true)]
        public Input<string> SyncGroupName { get; set; } = null!;

        /// <summary>
        /// If use private link connection is enabled.
        /// </summary>
        [Input("usePrivateLinkConnection")]
        public Input<bool>? UsePrivateLinkConnection { get; set; }

        public SyncGroupArgs()
        {
        }
    }
}
