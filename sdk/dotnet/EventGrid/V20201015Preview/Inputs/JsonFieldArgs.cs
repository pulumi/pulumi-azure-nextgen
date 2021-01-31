// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20201015Preview.Inputs
{

    /// <summary>
    /// This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
    /// </summary>
    public sealed class JsonFieldArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of a field in the input event schema that's to be used as the source of a mapping.
        /// </summary>
        [Input("sourceField")]
        public Input<string>? SourceField { get; set; }

        public JsonFieldArgs()
        {
        }
    }
}
