// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.PolicyInsights.V20180701Preview
{
    public static class GetRemediationAtSubscription
    {
        public static Task<GetRemediationAtSubscriptionResult> InvokeAsync(GetRemediationAtSubscriptionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRemediationAtSubscriptionResult>("azure-nextgen:policyinsights/v20180701preview:getRemediationAtSubscription", args ?? new GetRemediationAtSubscriptionArgs(), options.WithVersion());
    }


    public sealed class GetRemediationAtSubscriptionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the remediation.
        /// </summary>
        [Input("remediationName", required: true)]
        public string RemediationName { get; set; } = null!;

        public GetRemediationAtSubscriptionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRemediationAtSubscriptionResult
    {
        /// <summary>
        /// The time at which the remediation was created.
        /// </summary>
        public readonly string CreatedOn;
        /// <summary>
        /// The deployment status summary for all deployments created by the remediation.
        /// </summary>
        public readonly Outputs.RemediationDeploymentSummaryResponse? DeploymentStatus;
        /// <summary>
        /// The filters that will be applied to determine which resources to remediate.
        /// </summary>
        public readonly Outputs.RemediationFiltersResponse? Filters;
        /// <summary>
        /// The ID of the remediation.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The time at which the remediation was last updated.
        /// </summary>
        public readonly string LastUpdatedOn;
        /// <summary>
        /// The name of the remediation.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource ID of the policy assignment that should be remediated.
        /// </summary>
        public readonly string? PolicyAssignmentId;
        /// <summary>
        /// The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
        /// </summary>
        public readonly string? PolicyDefinitionReferenceId;
        /// <summary>
        /// The status of the remediation.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The type of the remediation.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRemediationAtSubscriptionResult(
            string createdOn,

            Outputs.RemediationDeploymentSummaryResponse? deploymentStatus,

            Outputs.RemediationFiltersResponse? filters,

            string id,

            string lastUpdatedOn,

            string name,

            string? policyAssignmentId,

            string? policyDefinitionReferenceId,

            string provisioningState,

            string type)
        {
            CreatedOn = createdOn;
            DeploymentStatus = deploymentStatus;
            Filters = filters;
            Id = id;
            LastUpdatedOn = lastUpdatedOn;
            Name = name;
            PolicyAssignmentId = policyAssignmentId;
            PolicyDefinitionReferenceId = policyDefinitionReferenceId;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
