// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101.Inputs
{

    /// <summary>
    /// Http logs to file system configuration.
    /// </summary>
    public sealed class FileSystemHttpLogsConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// True if configuration is enabled, false if it is disabled and null if configuration is not set.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Retention in days.
        /// Remove files older than X days.
        /// 0 or lower means no retention.
        /// </summary>
        [Input("retentionInDays")]
        public Input<int>? RetentionInDays { get; set; }

        /// <summary>
        /// Maximum size in megabytes that http log files can use.
        /// When reached old log files will be removed to make space for new ones.
        /// Value can range between 25 and 100.
        /// </summary>
        [Input("retentionInMb")]
        public Input<int>? RetentionInMb { get; set; }

        public FileSystemHttpLogsConfigArgs()
        {
        }
    }
}
