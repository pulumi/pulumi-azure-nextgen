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
    /// Properties for the task that validates connection to PostgreSQL server and source server requirements for online migration
    /// </summary>
    public sealed class ConnectToSourcePostgreSqlSyncTaskPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Task input
        /// </summary>
        [Input("input")]
        public Input<Inputs.ConnectToSourcePostgreSqlSyncTaskInputArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'ConnectToSource.PostgreSql.Sync'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public ConnectToSourcePostgreSqlSyncTaskPropertiesArgs()
        {
        }
    }
}
