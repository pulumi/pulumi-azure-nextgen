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
    public sealed class AzureBlobFSDatasetResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The data compression method used for the blob storage.
        /// </summary>
        public readonly Union<Outputs.DatasetBZip2CompressionResponse, Union<Outputs.DatasetDeflateCompressionResponse, Union<Outputs.DatasetGZipCompressionResponse, Union<Outputs.DatasetTarCompressionResponse, Union<Outputs.DatasetTarGZipCompressionResponse, Outputs.DatasetZipDeflateCompressionResponse>>>>>? Compression;
        /// <summary>
        /// Dataset description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? FileName;
        /// <summary>
        /// The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
        /// </summary>
        public readonly Outputs.DatasetResponseFolder? Folder;
        /// <summary>
        /// The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? FolderPath;
        /// <summary>
        /// The format of the Azure Data Lake Storage Gen2 storage.
        /// </summary>
        public readonly Union<Outputs.AvroFormatResponse, Union<Outputs.JsonFormatResponse, Union<Outputs.OrcFormatResponse, Union<Outputs.ParquetFormatResponse, Outputs.TextFormatResponse>>>>? Format;
        /// <summary>
        /// Linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse LinkedServiceName;
        /// <summary>
        /// Parameters for dataset.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
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
        /// Expected value is 'AzureBlobFSFile'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private AzureBlobFSDatasetResponse(
            ImmutableArray<object> annotations,

            Union<Outputs.DatasetBZip2CompressionResponse, Union<Outputs.DatasetDeflateCompressionResponse, Union<Outputs.DatasetGZipCompressionResponse, Union<Outputs.DatasetTarCompressionResponse, Union<Outputs.DatasetTarGZipCompressionResponse, Outputs.DatasetZipDeflateCompressionResponse>>>>>? compression,

            string? description,

            object? fileName,

            Outputs.DatasetResponseFolder? folder,

            object? folderPath,

            Union<Outputs.AvroFormatResponse, Union<Outputs.JsonFormatResponse, Union<Outputs.OrcFormatResponse, Union<Outputs.ParquetFormatResponse, Outputs.TextFormatResponse>>>>? format,

            Outputs.LinkedServiceReferenceResponse linkedServiceName,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            object? schema,

            object? structure,

            string type)
        {
            Annotations = annotations;
            Compression = compression;
            Description = description;
            FileName = fileName;
            Folder = folder;
            FolderPath = folderPath;
            Format = format;
            LinkedServiceName = linkedServiceName;
            Parameters = parameters;
            Schema = schema;
            Structure = structure;
            Type = type;
        }
    }
}
