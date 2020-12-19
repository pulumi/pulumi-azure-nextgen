// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.Latest.Outputs
{

    [OutputType]
    public sealed class ReferenceInputPropertiesResponse
    {
        /// <summary>
        /// Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly Outputs.BlobReferenceInputDataSourceResponse? Datasource;
        /// <summary>
        /// Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
        /// </summary>
        public readonly Outputs.DiagnosticsResponse Diagnostics;
        /// <summary>
        /// The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly Union<Outputs.AvroSerializationResponse, Union<Outputs.CsvSerializationResponse, Outputs.JsonSerializationResponse>>? Serialization;
        /// <summary>
        /// Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
        /// Expected value is 'Reference'.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private ReferenceInputPropertiesResponse(
            Outputs.BlobReferenceInputDataSourceResponse? datasource,

            Outputs.DiagnosticsResponse diagnostics,

            string etag,

            Union<Outputs.AvroSerializationResponse, Union<Outputs.CsvSerializationResponse, Outputs.JsonSerializationResponse>>? serialization,

            string? type)
        {
            Datasource = datasource;
            Diagnostics = diagnostics;
            Etag = etag;
            Serialization = serialization;
            Type = type;
        }
    }
}
