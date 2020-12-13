// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901.Inputs
{

    /// <summary>
    /// Application logs to Azure table storage configuration.
    /// </summary>
    public sealed class AzureTableStorageApplicationLogsConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Log level.
        /// </summary>
        [Input("level")]
        public Input<Pulumi.AzureNextGen.Web.V20200901.LogLevel>? Level { get; set; }

        /// <summary>
        /// SAS URL to an Azure table with add/query/delete permissions.
        /// </summary>
        [Input("sasUrl", required: true)]
        public Input<string> SasUrl { get; set; } = null!;

        public AzureTableStorageApplicationLogsConfigArgs()
        {
        }
    }
}
