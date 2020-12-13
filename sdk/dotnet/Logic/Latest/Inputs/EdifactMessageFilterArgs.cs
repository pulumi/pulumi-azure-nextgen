// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.Latest.Inputs
{

    /// <summary>
    /// The Edifact message filter for odata query.
    /// </summary>
    public sealed class EdifactMessageFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The message filter type.
        /// </summary>
        [Input("messageFilterType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Logic.Latest.MessageFilterType> MessageFilterType { get; set; } = null!;

        public EdifactMessageFilterArgs()
        {
        }
    }
}
