// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class DelimitedTextDatasetResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The column delimiter. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? ColumnDelimiter;
        public readonly string? CompressionCodec;
        /// <summary>
        /// The data compression method used for DelimitedText.
        /// </summary>
        public readonly string? CompressionLevel;
        /// <summary>
        /// Dataset description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncodingName;
        /// <summary>
        /// The escape character. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EscapeChar;
        /// <summary>
        /// When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
        /// </summary>
        public readonly object? FirstRowAsHeader;
        /// <summary>
        /// The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
        /// </summary>
        public readonly Outputs.DatasetResponseFolder? Folder;
        /// <summary>
        /// Linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse LinkedServiceName;
        /// <summary>
        /// The location of the delimited text storage.
        /// </summary>
        public readonly Union<Outputs.AmazonS3LocationResponse, Union<Outputs.AzureBlobFSLocationResponse, Union<Outputs.AzureBlobStorageLocationResponse, Union<Outputs.AzureDataLakeStoreLocationResponse, Union<Outputs.AzureFileStorageLocationResponse, Union<Outputs.FileServerLocationResponse, Union<Outputs.FtpServerLocationResponse, Union<Outputs.GoogleCloudStorageLocationResponse, Union<Outputs.HdfsLocationResponse, Union<Outputs.HttpServerLocationResponse, Outputs.SftpLocationResponse>>>>>>>>>> Location;
        /// <summary>
        /// The null value string. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? NullValue;
        /// <summary>
        /// Parameters for dataset.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The quote character. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? QuoteChar;
        /// <summary>
        /// The row delimiter. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? RowDelimiter;
        /// <summary>
        /// Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
        /// </summary>
        public readonly object? Schema;
        /// <summary>
        /// Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
        /// </summary>
        public readonly object? Structure;
        /// <summary>
        /// Type of dataset.
        /// Expected value is 'DelimitedText'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private DelimitedTextDatasetResponse(
            ImmutableArray<object> annotations,

            object? columnDelimiter,

            string? compressionCodec,

            string? compressionLevel,

            string? description,

            object? encodingName,

            object? escapeChar,

            object? firstRowAsHeader,

            Outputs.DatasetResponseFolder? folder,

            Outputs.LinkedServiceReferenceResponse linkedServiceName,

            Union<Outputs.AmazonS3LocationResponse, Union<Outputs.AzureBlobFSLocationResponse, Union<Outputs.AzureBlobStorageLocationResponse, Union<Outputs.AzureDataLakeStoreLocationResponse, Union<Outputs.AzureFileStorageLocationResponse, Union<Outputs.FileServerLocationResponse, Union<Outputs.FtpServerLocationResponse, Union<Outputs.GoogleCloudStorageLocationResponse, Union<Outputs.HdfsLocationResponse, Union<Outputs.HttpServerLocationResponse, Outputs.SftpLocationResponse>>>>>>>>>> location,

            object? nullValue,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            object? quoteChar,

            object? rowDelimiter,

            object? schema,

            object? structure,

            string type)
        {
            Annotations = annotations;
            ColumnDelimiter = columnDelimiter;
            CompressionCodec = compressionCodec;
            CompressionLevel = compressionLevel;
            Description = description;
            EncodingName = encodingName;
            EscapeChar = escapeChar;
            FirstRowAsHeader = firstRowAsHeader;
            Folder = folder;
            LinkedServiceName = linkedServiceName;
            Location = location;
            NullValue = nullValue;
            Parameters = parameters;
            QuoteChar = quoteChar;
            RowDelimiter = rowDelimiter;
            Schema = schema;
            Structure = structure;
            Type = type;
        }
    }
}
