// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview.Outputs
{

    [OutputType]
    public sealed class InsightsTableResultResponseColumnsResult
    {
        /// <summary>
        /// the name of the colum
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// the type of the colum
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private InsightsTableResultResponseColumnsResult(
            string? name,

            string? type)
        {
            Name = name;
            Type = type;
        }
    }
}