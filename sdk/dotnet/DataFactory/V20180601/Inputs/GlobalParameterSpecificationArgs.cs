// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// Definition of a single parameter for an entity.
    /// </summary>
    public sealed class GlobalParameterSpecificationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Global Parameter type.
        /// </summary>
        [Input("type", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.GlobalParameterType> Type { get; set; } = null!;

        /// <summary>
        /// Value of parameter.
        /// </summary>
        [Input("value", required: true)]
        public Input<object> Value { get; set; } = null!;

        public GlobalParameterSpecificationArgs()
        {
        }
    }
}
