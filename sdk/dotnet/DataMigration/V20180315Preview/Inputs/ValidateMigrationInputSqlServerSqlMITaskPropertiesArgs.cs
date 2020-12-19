// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180315Preview.Inputs
{

    /// <summary>
    /// Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance
    /// </summary>
    public sealed class ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Task input
        /// </summary>
        [Input("input")]
        public Input<Inputs.ValidateMigrationInputSqlServerSqlMITaskInputArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'ValidateMigrationInput.SqlServer.AzureSqlDbMI'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs()
        {
        }
    }
}
