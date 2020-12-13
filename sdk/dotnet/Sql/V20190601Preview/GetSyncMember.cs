// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20190601Preview
{
    public static class GetSyncMember
    {
        public static Task<GetSyncMemberResult> InvokeAsync(GetSyncMemberArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSyncMemberResult>("azure-nextgen:sql/v20190601preview:getSyncMember", args ?? new GetSyncMemberArgs(), options.WithVersion());
    }


    public sealed class GetSyncMemberArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the database on which the sync group is hosted.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        /// <summary>
        /// The name of the sync group on which the sync member is hosted.
        /// </summary>
        [Input("syncGroupName", required: true)]
        public string SyncGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the sync member.
        /// </summary>
        [Input("syncMemberName", required: true)]
        public string SyncMemberName { get; set; } = null!;

        public GetSyncMemberArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSyncMemberResult
    {
        /// <summary>
        /// Database name of the member database in the sync member.
        /// </summary>
        public readonly string? DatabaseName;
        /// <summary>
        /// Database type of the sync member.
        /// </summary>
        public readonly string? DatabaseType;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Password of the member database in the sync member.
        /// </summary>
        public readonly string? Password;
        /// <summary>
        /// Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
        /// </summary>
        public readonly string PrivateEndpointName;
        /// <summary>
        /// Server name of the member database in the sync member
        /// </summary>
        public readonly string? ServerName;
        /// <summary>
        /// SQL Server database id of the sync member.
        /// </summary>
        public readonly string? SqlServerDatabaseId;
        /// <summary>
        /// ARM resource id of the sync agent in the sync member.
        /// </summary>
        public readonly string? SyncAgentId;
        /// <summary>
        /// Sync direction of the sync member.
        /// </summary>
        public readonly string? SyncDirection;
        /// <summary>
        /// ARM resource id of the sync member logical database, for sync members in Azure.
        /// </summary>
        public readonly string? SyncMemberAzureDatabaseResourceId;
        /// <summary>
        /// Sync state of the sync member.
        /// </summary>
        public readonly string SyncState;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Whether to use private link connection.
        /// </summary>
        public readonly bool? UsePrivateLinkConnection;
        /// <summary>
        /// User name of the member database in the sync member.
        /// </summary>
        public readonly string? UserName;

        [OutputConstructor]
        private GetSyncMemberResult(
            string? databaseName,

            string? databaseType,

            string id,

            string name,

            string? password,

            string privateEndpointName,

            string? serverName,

            string? sqlServerDatabaseId,

            string? syncAgentId,

            string? syncDirection,

            string? syncMemberAzureDatabaseResourceId,

            string syncState,

            string type,

            bool? usePrivateLinkConnection,

            string? userName)
        {
            DatabaseName = databaseName;
            DatabaseType = databaseType;
            Id = id;
            Name = name;
            Password = password;
            PrivateEndpointName = privateEndpointName;
            ServerName = serverName;
            SqlServerDatabaseId = sqlServerDatabaseId;
            SyncAgentId = syncAgentId;
            SyncDirection = syncDirection;
            SyncMemberAzureDatabaseResourceId = syncMemberAzureDatabaseResourceId;
            SyncState = syncState;
            Type = type;
            UsePrivateLinkConnection = usePrivateLinkConnection;
            UserName = userName;
        }
    }
}
