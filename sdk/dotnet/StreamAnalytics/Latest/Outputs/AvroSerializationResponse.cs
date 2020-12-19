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
    public sealed class AvroSerializationResponse
    {
        /// <summary>
        /// Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
        /// Expected value is 'Avro'.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private AvroSerializationResponse(string? type)
        {
            Type = type;
        }
    }
}
