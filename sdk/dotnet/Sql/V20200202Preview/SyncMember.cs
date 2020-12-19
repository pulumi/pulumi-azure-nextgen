// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    /// <summary>
    /// An Azure SQL Database sync member.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20200202preview:SyncMember")]
    public partial class SyncMember : Pulumi.CustomResource
    {
        /// <summary>
        /// Database name of the member database in the sync member.
        /// </summary>
        [Output("databaseName")]
        public Output<string?> DatabaseName { get; private set; } = null!;

        /// <summary>
        /// Database type of the sync member.
        /// </summary>
        [Output("databaseType")]
        public Output<string?> DatabaseType { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Password of the member database in the sync member.
        /// </summary>
        [Output("password")]
        public Output<string?> Password { get; private set; } = null!;

        /// <summary>
        /// Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
        /// </summary>
        [Output("privateEndpointName")]
        public Output<string> PrivateEndpointName { get; private set; } = null!;

        /// <summary>
        /// Server name of the member database in the sync member
        /// </summary>
        [Output("serverName")]
        public Output<string?> ServerName { get; private set; } = null!;

        /// <summary>
        /// SQL Server database id of the sync member.
        /// </summary>
        [Output("sqlServerDatabaseId")]
        public Output<string?> SqlServerDatabaseId { get; private set; } = null!;

        /// <summary>
        /// ARM resource id of the sync agent in the sync member.
        /// </summary>
        [Output("syncAgentId")]
        public Output<string?> SyncAgentId { get; private set; } = null!;

        /// <summary>
        /// Sync direction of the sync member.
        /// </summary>
        [Output("syncDirection")]
        public Output<string?> SyncDirection { get; private set; } = null!;

        /// <summary>
        /// ARM resource id of the sync member logical database, for sync members in Azure.
        /// </summary>
        [Output("syncMemberAzureDatabaseResourceId")]
        public Output<string?> SyncMemberAzureDatabaseResourceId { get; private set; } = null!;

        /// <summary>
        /// Sync state of the sync member.
        /// </summary>
        [Output("syncState")]
        public Output<string> SyncState { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Whether to use private link connection.
        /// </summary>
        [Output("usePrivateLinkConnection")]
        public Output<bool?> UsePrivateLinkConnection { get; private set; } = null!;

        /// <summary>
        /// User name of the member database in the sync member.
        /// </summary>
        [Output("userName")]
        public Output<string?> UserName { get; private set; } = null!;


        /// <summary>
        /// Create a SyncMember resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SyncMember(string name, SyncMemberArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:SyncMember", name, args ?? new SyncMemberArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SyncMember(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:SyncMember", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20150501preview:SyncMember"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20190601preview:SyncMember"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:SyncMember"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SyncMember resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SyncMember Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SyncMember(name, id, options);
        }
    }

    public sealed class SyncMemberArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Database name of the member database in the sync member.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// Database type of the sync member.
        /// </summary>
        [Input("databaseType")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.SyncMemberDbType>? DatabaseType { get; set; }

        /// <summary>
        /// Password of the member database in the sync member.
        /// </summary>
        [Input("password")]
        public Input<string>? Password { get; set; }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Server name of the member database in the sync member
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// SQL Server database id of the sync member.
        /// </summary>
        [Input("sqlServerDatabaseId")]
        public Input<string>? SqlServerDatabaseId { get; set; }

        /// <summary>
        /// ARM resource id of the sync agent in the sync member.
        /// </summary>
        [Input("syncAgentId")]
        public Input<string>? SyncAgentId { get; set; }

        /// <summary>
        /// Sync direction of the sync member.
        /// </summary>
        [Input("syncDirection")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.SyncDirection>? SyncDirection { get; set; }

        /// <summary>
        /// The name of the sync group on which the sync member is hosted.
        /// </summary>
        [Input("syncGroupName", required: true)]
        public Input<string> SyncGroupName { get; set; } = null!;

        /// <summary>
        /// ARM resource id of the sync member logical database, for sync members in Azure.
        /// </summary>
        [Input("syncMemberAzureDatabaseResourceId")]
        public Input<string>? SyncMemberAzureDatabaseResourceId { get; set; }

        /// <summary>
        /// The name of the sync member.
        /// </summary>
        [Input("syncMemberName", required: true)]
        public Input<string> SyncMemberName { get; set; } = null!;

        /// <summary>
        /// Whether to use private link connection.
        /// </summary>
        [Input("usePrivateLinkConnection")]
        public Input<bool>? UsePrivateLinkConnection { get; set; }

        /// <summary>
        /// User name of the member database in the sync member.
        /// </summary>
        [Input("userName")]
        public Input<string>? UserName { get; set; }

        public SyncMemberArgs()
        {
        }
    }
}
