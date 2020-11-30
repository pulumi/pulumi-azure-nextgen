// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Outputs
{

    [OutputType]
    public sealed class ErrorDetailResponse
    {
        /// <summary>
        /// Error code.
        /// </summary>
        public readonly string Code;
        /// <summary>
        /// Error Message related to the Code.
        /// </summary>
        public readonly string Message;
        /// <summary>
        /// List of recommendation strings.
        /// </summary>
        public readonly ImmutableArray<string> Recommendations;

        [OutputConstructor]
        private ErrorDetailResponse(
            string code,

            string message,

            ImmutableArray<string> recommendations)
        {
            Code = code;
            Message = message;
            Recommendations = recommendations;
        }
    }
}
