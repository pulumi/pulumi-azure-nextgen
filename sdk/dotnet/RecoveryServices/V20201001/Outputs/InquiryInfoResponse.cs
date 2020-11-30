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
    public sealed class InquiryInfoResponse
    {
        /// <summary>
        /// Error Details if the Status is non-success.
        /// </summary>
        public readonly Outputs.ErrorDetailResponse? ErrorDetail;
        /// <summary>
        /// Inquiry Details which will have workload specific details.
        /// For e.g. - For SQL and oracle this will contain different details.
        /// </summary>
        public readonly ImmutableArray<Outputs.WorkloadInquiryDetailsResponse> InquiryDetails;
        /// <summary>
        /// Inquiry Status for this container such as
        /// InProgress | Failed | Succeeded
        /// </summary>
        public readonly string? Status;

        [OutputConstructor]
        private InquiryInfoResponse(
            Outputs.ErrorDetailResponse? errorDetail,

            ImmutableArray<Outputs.WorkloadInquiryDetailsResponse> inquiryDetails,

            string? status)
        {
            ErrorDetail = errorDetail;
            InquiryDetails = inquiryDetails;
            Status = status;
        }
    }
}
