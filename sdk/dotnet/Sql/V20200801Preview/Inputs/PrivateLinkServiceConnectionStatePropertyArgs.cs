// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview.Inputs
{

    public sealed class PrivateLinkServiceConnectionStatePropertyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The private link service connection description.
        /// </summary>
        [Input("description", required: true)]
        public Input<string> Description { get; set; } = null!;

        /// <summary>
        /// The private link service connection status.
        /// </summary>
        [Input("status", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200801Preview.PrivateLinkServiceConnectionStateStatus> Status { get; set; } = null!;

        public PrivateLinkServiceConnectionStatePropertyArgs()
        {
        }
    }
}
