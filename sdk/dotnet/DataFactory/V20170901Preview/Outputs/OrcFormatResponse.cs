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
    public sealed class OrcFormatResponse
    {
        /// <summary>
        /// Deserializer. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? Deserializer;
        /// <summary>
        /// Serializer. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? Serializer;
        /// <summary>
        /// Type of dataset storage format.
        /// Expected value is 'OrcFormat'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private OrcFormatResponse(
            object? deserializer,

            object? serializer,

            string type)
        {
            Deserializer = deserializer;
            Serializer = serializer;
            Type = type;
        }
    }
}
