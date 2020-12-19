// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DigitalTwins.V20201201.Inputs
{

    /// <summary>
    /// The managed identity for the DigitalTwinsInstance.
    /// </summary>
    public sealed class DigitalTwinsIdentityArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The type of Managed Identity used by the DigitalTwinsInstance. Only SystemAssigned is supported.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.DigitalTwins.V20201201.DigitalTwinsIdentityType>? Type { get; set; }

        public DigitalTwinsIdentityArgs()
        {
        }
    }
}
