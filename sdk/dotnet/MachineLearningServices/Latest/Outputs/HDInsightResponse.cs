// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearningServices.Latest.Outputs
{

    [OutputType]
    public sealed class HDInsightResponse
    {
        /// <summary>
        /// Location for the underlying compute
        /// </summary>
        public readonly string? ComputeLocation;
        /// <summary>
        /// The type of compute
        /// Expected value is 'HDInsight'.
        /// </summary>
        public readonly string ComputeType;
        /// <summary>
        /// The date and time when the compute was created.
        /// </summary>
        public readonly string CreatedOn;
        /// <summary>
        /// The description of the Machine Learning compute.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
        /// </summary>
        public readonly bool IsAttachedCompute;
        /// <summary>
        /// The date and time when the compute was last modified.
        /// </summary>
        public readonly string ModifiedOn;
        public readonly Outputs.HDInsightResponseProperties? Properties;
        /// <summary>
        /// Errors during provisioning
        /// </summary>
        public readonly ImmutableArray<Outputs.MachineLearningServiceErrorResponse> ProvisioningErrors;
        /// <summary>
        /// The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// ARM resource id of the underlying compute
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private HDInsightResponse(
            string? computeLocation,

            string computeType,

            string createdOn,

            string? description,

            bool isAttachedCompute,

            string modifiedOn,

            Outputs.HDInsightResponseProperties? properties,

            ImmutableArray<Outputs.MachineLearningServiceErrorResponse> provisioningErrors,

            string provisioningState,

            string? resourceId)
        {
            ComputeLocation = computeLocation;
            ComputeType = computeType;
            CreatedOn = createdOn;
            Description = description;
            IsAttachedCompute = isAttachedCompute;
            ModifiedOn = modifiedOn;
            Properties = properties;
            ProvisioningErrors = provisioningErrors;
            ProvisioningState = provisioningState;
            ResourceId = resourceId;
        }
    }
}
