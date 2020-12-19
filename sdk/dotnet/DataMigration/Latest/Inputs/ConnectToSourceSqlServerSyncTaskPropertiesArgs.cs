// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest.Inputs
{

    /// <summary>
    /// Properties for the task that validates connection to SQL Server and source server requirements for online migration
    /// </summary>
    public sealed class ConnectToSourceSqlServerSyncTaskPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Task input
        /// </summary>
        [Input("input")]
        public Input<Inputs.ConnectToSourceSqlServerTaskInputArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'ConnectToSource.SqlServer.Sync'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public ConnectToSourceSqlServerSyncTaskPropertiesArgs()
        {
        }
    }
}
