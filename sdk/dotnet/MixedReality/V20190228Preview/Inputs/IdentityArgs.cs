// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MixedReality.V20190228Preview.Inputs
{

    /// <summary>
    /// Identity for the resource.
    /// </summary>
    public sealed class IdentityArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The identity type.
        /// </summary>
        [Input("type")]
        public Input<Pulumi.AzureNextGen.MixedReality.V20190228Preview.ResourceIdentityType>? Type { get; set; }

        public IdentityArgs()
        {
        }
    }
}
