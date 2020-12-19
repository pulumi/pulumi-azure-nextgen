// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview.Outputs
{

    [OutputType]
    public sealed class JobStepOutputResponse
    {
        /// <summary>
        /// The resource ID of the credential to use to connect to the output destination.
        /// </summary>
        public readonly string Credential;
        /// <summary>
        /// The output destination database.
        /// </summary>
        public readonly string DatabaseName;
        /// <summary>
        /// The output destination resource group.
        /// </summary>
        public readonly string? ResourceGroupName;
        /// <summary>
        /// The output destination schema.
        /// </summary>
        public readonly string? SchemaName;
        /// <summary>
        /// The output destination server name.
        /// </summary>
        public readonly string ServerName;
        /// <summary>
        /// The output destination subscription id.
        /// </summary>
        public readonly string? SubscriptionId;
        /// <summary>
        /// The output destination table.
        /// </summary>
        public readonly string TableName;
        /// <summary>
        /// The output destination type.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private JobStepOutputResponse(
            string credential,

            string databaseName,

            string? resourceGroupName,

            string? schemaName,

            string serverName,

            string? subscriptionId,

            string tableName,

            string? type)
        {
            Credential = credential;
            DatabaseName = databaseName;
            ResourceGroupName = resourceGroupName;
            SchemaName = schemaName;
            ServerName = serverName;
            SubscriptionId = subscriptionId;
            TableName = tableName;
            Type = type;
        }
    }
}
