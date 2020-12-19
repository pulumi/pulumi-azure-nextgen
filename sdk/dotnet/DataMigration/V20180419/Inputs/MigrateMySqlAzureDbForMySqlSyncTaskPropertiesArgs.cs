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
    /// Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
    /// </summary>
    public sealed class MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Task input
        /// </summary>
        [Input("input")]
        public Input<Inputs.MigrateMySqlAzureDbForMySqlSyncTaskInputArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'Migrate.MySql.AzureDbForMySql.Sync'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs()
        {
        }
    }
}
