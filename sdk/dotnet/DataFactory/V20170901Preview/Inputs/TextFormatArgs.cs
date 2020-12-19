// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Inputs
{

    /// <summary>
    /// The data stored in text format.
    /// </summary>
    public sealed class TextFormatArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The column delimiter. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("columnDelimiter")]
        public Input<object>? ColumnDelimiter { get; set; }

        /// <summary>
        /// Deserializer. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("deserializer")]
        public Input<object>? Deserializer { get; set; }

        /// <summary>
        /// The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("encodingName")]
        public Input<object>? EncodingName { get; set; }

        /// <summary>
        /// The escape character. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("escapeChar")]
        public Input<object>? EscapeChar { get; set; }

        /// <summary>
        /// When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
        /// </summary>
        [Input("firstRowAsHeader")]
        public Input<object>? FirstRowAsHeader { get; set; }

        /// <summary>
        /// The null value string. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("nullValue")]
        public Input<object>? NullValue { get; set; }

        /// <summary>
        /// The quote character. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("quoteChar")]
        public Input<object>? QuoteChar { get; set; }

        /// <summary>
        /// The row delimiter. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("rowDelimiter")]
        public Input<object>? RowDelimiter { get; set; }

        /// <summary>
        /// Serializer. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("serializer")]
        public Input<object>? Serializer { get; set; }

        /// <summary>
        /// The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
        /// </summary>
        [Input("skipLineCount")]
        public Input<object>? SkipLineCount { get; set; }

        /// <summary>
        /// Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
        /// </summary>
        [Input("treatEmptyAsNull")]
        public Input<object>? TreatEmptyAsNull { get; set; }

        /// <summary>
        /// Type of dataset storage format.
        /// Expected value is 'TextFormat'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public TextFormatArgs()
        {
        }
    }
}
