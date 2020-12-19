// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class JsonFormatResponse
    {
        /// <summary>
        /// Deserializer. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? Deserializer;
        /// <summary>
        /// The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncodingName;
        /// <summary>
        /// File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
        /// </summary>
        public readonly string? FilePattern;
        /// <summary>
        /// The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? JsonNodeReference;
        /// <summary>
        /// The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
        /// </summary>
        public readonly object? JsonPathDefinition;
        /// <summary>
        /// The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? NestingSeparator;
        /// <summary>
        /// Serializer. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? Serializer;
        /// <summary>
        /// Type of dataset storage format.
        /// Expected value is 'JsonFormat'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private JsonFormatResponse(
            object? deserializer,

            object? encodingName,

            string? filePattern,

            object? jsonNodeReference,

            object? jsonPathDefinition,

            object? nestingSeparator,

            object? serializer,

            string type)
        {
            Deserializer = deserializer;
            EncodingName = encodingName;
            FilePattern = filePattern;
            JsonNodeReference = jsonNodeReference;
            JsonPathDefinition = jsonPathDefinition;
            NestingSeparator = nestingSeparator;
            Serializer = serializer;
            Type = type;
        }
    }
}
