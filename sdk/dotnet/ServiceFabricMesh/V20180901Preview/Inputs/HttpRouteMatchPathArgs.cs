// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabricMesh.V20180901Preview.Inputs
{

    /// <summary>
    /// Path to match for routing.
    /// </summary>
    public sealed class HttpRouteMatchPathArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// replacement string for matched part of the Uri.
        /// </summary>
        [Input("rewrite")]
        public Input<string>? Rewrite { get; set; }

        /// <summary>
        /// how to match value in the Uri
        /// </summary>
        [Input("type", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ServiceFabricMesh.V20180901Preview.PathMatchType> Type { get; set; } = null!;

        /// <summary>
        /// Uri path to match for request.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public HttpRouteMatchPathArgs()
        {
        }
    }
}
