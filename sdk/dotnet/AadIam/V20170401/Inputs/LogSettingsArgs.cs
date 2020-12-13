// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AadIam.V20170401.Inputs
{

    /// <summary>
    /// Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
    /// </summary>
    public sealed class LogSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
        /// </summary>
        [Input("category")]
        public InputUnion<string, Pulumi.AzureNextGen.AadIam.V20170401.Category>? Category { get; set; }

        /// <summary>
        /// A value indicating whether this log is enabled.
        /// </summary>
        [Input("enabled", required: true)]
        public Input<bool> Enabled { get; set; } = null!;

        /// <summary>
        /// The retention policy for this log.
        /// </summary>
        [Input("retentionPolicy")]
        public Input<Inputs.RetentionPolicyArgs>? RetentionPolicy { get; set; }

        public LogSettingsArgs()
        {
        }
    }
}
