// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20150801.Outputs
{

    [OutputType]
    public sealed class AzureTableStorageApplicationLogsConfigResponse
    {
        /// <summary>
        /// Log level
        /// </summary>
        public readonly string? Level;
        /// <summary>
        /// SAS url to an azure table with add/query/delete permissions
        /// </summary>
        public readonly string? SasUrl;

        [OutputConstructor]
        private AzureTableStorageApplicationLogsConfigResponse(
            string? level,

            string? sasUrl)
        {
            Level = level;
            SasUrl = sasUrl;
        }
    }
}
