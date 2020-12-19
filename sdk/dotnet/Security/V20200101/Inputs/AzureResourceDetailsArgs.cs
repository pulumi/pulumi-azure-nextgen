// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200101.Inputs
{

    /// <summary>
    /// Details of the Azure resource that was assessed
    /// </summary>
    public sealed class AzureResourceDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The platform where the assessed resource resides
        /// Expected value is 'Azure'.
        /// </summary>
        [Input("source", required: true)]
        public Input<string> Source { get; set; } = null!;

        public AzureResourceDetailsArgs()
        {
        }
    }
}
