// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.V20160301.Inputs
{

    /// <summary>
    /// Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
    /// </summary>
    public sealed class JsonSerializationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("encoding")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.V20160301.Encoding>? Encoding { get; set; }

        /// <summary>
        /// This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
        /// </summary>
        [Input("format")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.V20160301.JsonOutputSerializationFormat>? Format { get; set; }

        /// <summary>
        /// Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
        /// Expected value is 'Json'.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public JsonSerializationArgs()
        {
        }
    }
}
