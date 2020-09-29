// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DelegatedNetwork.V20200808Preview.Inputs
{

    /// <summary>
    /// controller details
    /// </summary>
    public sealed class ControllerDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// controller arm resource id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        public ControllerDetailsArgs()
        {
        }
    }
}
