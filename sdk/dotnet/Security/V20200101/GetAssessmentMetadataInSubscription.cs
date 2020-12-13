// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200101
{
    public static class GetAssessmentMetadataInSubscription
    {
        public static Task<GetAssessmentMetadataInSubscriptionResult> InvokeAsync(GetAssessmentMetadataInSubscriptionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAssessmentMetadataInSubscriptionResult>("azure-nextgen:security/v20200101:getAssessmentMetadataInSubscription", args ?? new GetAssessmentMetadataInSubscriptionArgs(), options.WithVersion());
    }


    public sealed class GetAssessmentMetadataInSubscriptionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Assessment Key - Unique key for the assessment type
        /// </summary>
        [Input("assessmentMetadataName", required: true)]
        public string AssessmentMetadataName { get; set; } = null!;

        public GetAssessmentMetadataInSubscriptionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAssessmentMetadataInSubscriptionResult
    {
        /// <summary>
        /// BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
        /// </summary>
        public readonly string AssessmentType;
        public readonly ImmutableArray<string> Category;
        /// <summary>
        /// Human readable description of the assessment
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// User friendly display name of the assessment
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The implementation effort required to remediate this assessment
        /// </summary>
        public readonly string? ImplementationEffort;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Describes the partner that created the assessment
        /// </summary>
        public readonly Outputs.SecurityAssessmentMetadataPartnerDataResponse? PartnerData;
        /// <summary>
        /// Azure resource ID of the policy definition that turns this assessment calculation on
        /// </summary>
        public readonly string PolicyDefinitionId;
        /// <summary>
        /// True if this assessment is in preview release status
        /// </summary>
        public readonly bool? Preview;
        /// <summary>
        /// Human readable description of what you should do to mitigate this security issue
        /// </summary>
        public readonly string? RemediationDescription;
        /// <summary>
        /// The severity level of the assessment
        /// </summary>
        public readonly string Severity;
        public readonly ImmutableArray<string> Threats;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The user impact of the assessment
        /// </summary>
        public readonly string? UserImpact;

        [OutputConstructor]
        private GetAssessmentMetadataInSubscriptionResult(
            string assessmentType,

            ImmutableArray<string> category,

            string? description,

            string displayName,

            string id,

            string? implementationEffort,

            string name,

            Outputs.SecurityAssessmentMetadataPartnerDataResponse? partnerData,

            string policyDefinitionId,

            bool? preview,

            string? remediationDescription,

            string severity,

            ImmutableArray<string> threats,

            string type,

            string? userImpact)
        {
            AssessmentType = assessmentType;
            Category = category;
            Description = description;
            DisplayName = displayName;
            Id = id;
            ImplementationEffort = implementationEffort;
            Name = name;
            PartnerData = partnerData;
            PolicyDefinitionId = policyDefinitionId;
            Preview = preview;
            RemediationDescription = remediationDescription;
            Severity = severity;
            Threats = threats;
            Type = type;
            UserImpact = userImpact;
        }
    }
}
