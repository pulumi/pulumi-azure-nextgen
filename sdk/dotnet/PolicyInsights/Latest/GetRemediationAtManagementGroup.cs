// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.PolicyInsights.Latest
{
    public static class GetRemediationAtManagementGroup
    {
        public static Task<GetRemediationAtManagementGroupResult> InvokeAsync(GetRemediationAtManagementGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRemediationAtManagementGroupResult>("azure-nextgen:policyinsights/latest:getRemediationAtManagementGroup", args ?? new GetRemediationAtManagementGroupArgs(), options.WithVersion());
    }


    public sealed class GetRemediationAtManagementGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Management group ID.
        /// </summary>
        [Input("managementGroupId", required: true)]
        public string ManagementGroupId { get; set; } = null!;

        /// <summary>
        /// The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
        /// </summary>
        [Input("managementGroupsNamespace", required: true)]
        public string ManagementGroupsNamespace { get; set; } = null!;

        /// <summary>
        /// The name of the remediation.
        /// </summary>
        [Input("remediationName", required: true)]
        public string RemediationName { get; set; } = null!;

        public GetRemediationAtManagementGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRemediationAtManagementGroupResult
    {
        /// <summary>
        /// The time at which the remediation was created.
        /// </summary>
        public readonly string CreatedOn;
        /// <summary>
        /// The deployment status summary for all deployments created by the remediation.
        /// </summary>
        public readonly Outputs.RemediationDeploymentSummaryResponse DeploymentStatus;
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
        /// The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
        /// </summary>
        public readonly string? ResourceDiscoveryMode;
        /// <summary>
        /// The type of the remediation.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRemediationAtManagementGroupResult(
            string createdOn,

            Outputs.RemediationDeploymentSummaryResponse deploymentStatus,

            Outputs.RemediationFiltersResponse? filters,

            string id,

            string lastUpdatedOn,

            string name,

            string? policyAssignmentId,

            string? policyDefinitionReferenceId,

            string provisioningState,

            string? resourceDiscoveryMode,

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
            ResourceDiscoveryMode = resourceDiscoveryMode;
            Type = type;
        }
    }
}
