// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview.Inputs
{

    /// <summary>
    /// The output configuration of a job step.
    /// </summary>
    public sealed class JobStepOutputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource ID of the credential to use to connect to the output destination.
        /// </summary>
        [Input("credential", required: true)]
        public Input<string> Credential { get; set; } = null!;

        /// <summary>
        /// The output destination database.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// The output destination resource group.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The output destination schema.
        /// </summary>
        [Input("schemaName")]
        public Input<string>? SchemaName { get; set; }

        /// <summary>
        /// The output destination server name.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// The output destination subscription id.
        /// </summary>
        [Input("subscriptionId")]
        public Input<string>? SubscriptionId { get; set; }

        /// <summary>
        /// The output destination table.
        /// </summary>
        [Input("tableName", required: true)]
        public Input<string> TableName { get; set; } = null!;

        /// <summary>
        /// The output destination type.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.JobStepOutputType>? Type { get; set; }

        public JobStepOutputArgs()
        {
        }
    }
}