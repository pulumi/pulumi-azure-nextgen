// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Authorization.V20180501Preview.Outputs
{

    [OutputType]
    public sealed class AccessReviewInstanceResponse
    {
        /// <summary>
        /// The DateTime when the review instance is scheduled to end.
        /// </summary>
        public readonly string? EndDateTime;
        /// <summary>
        /// The access review instance id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The access review instance name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The DateTime when the review instance is scheduled to be start.
        /// </summary>
        public readonly string? StartDateTime;
        /// <summary>
        /// This read-only field specifies the status of an access review instance.
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private AccessReviewInstanceResponse(
            string? endDateTime,

            string id,

            string name,

            string? startDateTime,

            string status,

            string type)
        {
            EndDateTime = endDateTime;
            Id = id;
            Name = name;
            StartDateTime = startDateTime;
            Status = status;
            Type = type;
        }
    }
}