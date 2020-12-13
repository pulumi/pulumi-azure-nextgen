// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest
{
    public static class GetTask
    {
        public static Task<GetTaskResult> InvokeAsync(GetTaskArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTaskResult>("azure-nextgen:datamigration/latest:getTask", args ?? new GetTaskArgs(), options.WithVersion());
    }


    public sealed class GetTaskArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expand the response
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// Name of the resource group
        /// </summary>
        [Input("groupName", required: true)]
        public string GroupName { get; set; } = null!;

        /// <summary>
        /// Name of the project
        /// </summary>
        [Input("projectName", required: true)]
        public string ProjectName { get; set; } = null!;

        /// <summary>
        /// Name of the service
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        /// <summary>
        /// Name of the Task
        /// </summary>
        [Input("taskName", required: true)]
        public string TaskName { get; set; } = null!;

        public GetTaskArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTaskResult
    {
        /// <summary>
        /// HTTP strong entity tag value. This is ignored if submitted.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Custom task properties
        /// </summary>
        public readonly Union<Outputs.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlDbTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMISyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMITaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse, Union<Outputs.GetTdeCertificatesSqlTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlSyncTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlTaskPropertiesResponse, Union<Outputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse, Union<Outputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMISyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMITaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse, Outputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse>>>>>>>>>>>>>>>>>>>> Properties;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetTaskResult(
            string? etag,

            string id,

            string name,

            Union<Outputs.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlDbTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMISyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMITaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse, Union<Outputs.GetTdeCertificatesSqlTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlSyncTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlTaskPropertiesResponse, Union<Outputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse, Union<Outputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMISyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMITaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse, Outputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse>>>>>>>>>>>>>>>>>>>> properties,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
