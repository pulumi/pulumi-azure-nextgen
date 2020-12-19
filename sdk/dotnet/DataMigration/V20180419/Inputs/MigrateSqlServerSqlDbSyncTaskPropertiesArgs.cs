// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180419.Inputs
{

    /// <summary>
    /// Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
    /// </summary>
    public sealed class MigrateSqlServerSqlDbSyncTaskPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Task input
        /// </summary>
        [Input("input")]
        public Input<Inputs.MigrateSqlServerSqlDbSyncTaskInputArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'Migrate.SqlServer.AzureSqlDb.Sync'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public MigrateSqlServerSqlDbSyncTaskPropertiesArgs()
        {
        }
    }
}
