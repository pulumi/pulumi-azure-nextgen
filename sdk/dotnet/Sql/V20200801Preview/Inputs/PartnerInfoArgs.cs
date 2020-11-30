// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview.Inputs
{

    /// <summary>
    /// Partner server information for the failover group.
    /// </summary>
    public sealed class PartnerInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource identifier of the partner server.
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        public PartnerInfoArgs()
        {
        }
    }
}
