// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200601.Inputs
{

    /// <summary>
    /// This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
    /// </summary>
    public sealed class JsonInputSchemaMappingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The mapping information for the DataVersion property of the Event Grid Event.
        /// </summary>
        [Input("dataVersion")]
        public Input<Inputs.JsonFieldWithDefaultArgs>? DataVersion { get; set; }

        /// <summary>
        /// The mapping information for the EventTime property of the Event Grid Event.
        /// </summary>
        [Input("eventTime")]
        public Input<Inputs.JsonFieldArgs>? EventTime { get; set; }

        /// <summary>
        /// The mapping information for the EventType property of the Event Grid Event.
        /// </summary>
        [Input("eventType")]
        public Input<Inputs.JsonFieldWithDefaultArgs>? EventType { get; set; }

        /// <summary>
        /// The mapping information for the Id property of the Event Grid Event.
        /// </summary>
        [Input("id")]
        public Input<Inputs.JsonFieldArgs>? Id { get; set; }

        /// <summary>
        /// Type of the custom mapping
        /// Expected value is 'Json'.
        /// </summary>
        [Input("inputSchemaMappingType", required: true)]
        public Input<string> InputSchemaMappingType { get; set; } = null!;

        /// <summary>
        /// The mapping information for the Subject property of the Event Grid Event.
        /// </summary>
        [Input("subject")]
        public Input<Inputs.JsonFieldWithDefaultArgs>? Subject { get; set; }

        /// <summary>
        /// The mapping information for the Topic property of the Event Grid Event.
        /// </summary>
        [Input("topic")]
        public Input<Inputs.JsonFieldArgs>? Topic { get; set; }

        public JsonInputSchemaMappingArgs()
        {
        }
    }
}
