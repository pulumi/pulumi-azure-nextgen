// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20201005Preview.Inputs
{

    /// <summary>
    /// A header to add to the WebTest.
    /// </summary>
    public sealed class HeaderFieldArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the header.
        /// </summary>
        [Input("headerFieldName")]
        public Input<string>? HeaderFieldName { get; set; }

        /// <summary>
        /// The value of the header.
        /// </summary>
        [Input("headerFieldValue")]
        public Input<string>? HeaderFieldValue { get; set; }

        public HeaderFieldArgs()
        {
        }
    }
}