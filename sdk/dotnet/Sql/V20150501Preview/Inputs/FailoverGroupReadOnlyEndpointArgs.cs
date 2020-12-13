// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20150501Preview.Inputs
{

    /// <summary>
    /// Read-only endpoint of the failover group instance.
    /// </summary>
    public sealed class FailoverGroupReadOnlyEndpointArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Failover policy of the read-only endpoint for the failover group.
        /// </summary>
        [Input("failoverPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20150501Preview.ReadOnlyEndpointFailoverPolicy>? FailoverPolicy { get; set; }

        public FailoverGroupReadOnlyEndpointArgs()
        {
        }
    }
}
