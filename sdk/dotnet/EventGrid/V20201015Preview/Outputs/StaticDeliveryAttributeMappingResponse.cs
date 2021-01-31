// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20201015Preview.Outputs
{

    [OutputType]
    public sealed class StaticDeliveryAttributeMappingResponse
    {
        /// <summary>
        /// Boolean flag to tell if the attribute contains sensitive information .
        /// </summary>
        public readonly bool? IsSecret;
        /// <summary>
        /// Name of the delivery attribute or header.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Type of the delivery attribute or header name.
        /// Expected value is 'Static'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Value of the delivery attribute.
        /// </summary>
        public readonly string? Value;

        [OutputConstructor]
        private StaticDeliveryAttributeMappingResponse(
            bool? isSecret,

            string? name,

            string type,

            string? value)
        {
            IsSecret = isSecret;
            Name = name;
            Type = type;
            Value = value;
        }
    }
}
