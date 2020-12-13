// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.PolicyInsights.Latest
{
    /// <summary>
    /// The remediation definition.
    /// </summary>
    public partial class RemediationAtResourceGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// The time at which the remediation was created.
        /// </summary>
        [Output("createdOn")]
        public Output<string> CreatedOn { get; private set; } = null!;

        /// <summary>
        /// The deployment status summary for all deployments created by the remediation.
        /// </summary>
        [Output("deploymentStatus")]
        public Output<Outputs.RemediationDeploymentSummaryResponse> DeploymentStatus { get; private set; } = null!;

        /// <summary>
        /// The filters that will be applied to determine which resources to remediate.
        /// </summary>
        [Output("filters")]
        public Output<Outputs.RemediationFiltersResponse?> Filters { get; private set; } = null!;

        /// <summary>
        /// The time at which the remediation was last updated.
        /// </summary>
        [Output("lastUpdatedOn")]
        public Output<string> LastUpdatedOn { get; private set; } = null!;

        /// <summary>
        /// The name of the remediation.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The resource ID of the policy assignment that should be remediated.
        /// </summary>
        [Output("policyAssignmentId")]
        public Output<string?> PolicyAssignmentId { get; private set; } = null!;

        /// <summary>
        /// The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
        /// </summary>
        [Output("policyDefinitionReferenceId")]
        public Output<string?> PolicyDefinitionReferenceId { get; private set; } = null!;

        /// <summary>
        /// The status of the remediation.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
        /// </summary>
        [Output("resourceDiscoveryMode")]
        public Output<string?> ResourceDiscoveryMode { get; private set; } = null!;

        /// <summary>
        /// The type of the remediation.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a RemediationAtResourceGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RemediationAtResourceGroup(string name, RemediationAtResourceGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:policyinsights/latest:RemediationAtResourceGroup", name, args ?? new RemediationAtResourceGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RemediationAtResourceGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:policyinsights/latest:RemediationAtResourceGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:policyinsights/v20180701preview:RemediationAtResourceGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:policyinsights/v20190701:RemediationAtResourceGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RemediationAtResourceGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RemediationAtResourceGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new RemediationAtResourceGroup(name, id, options);
        }
    }

    public sealed class RemediationAtResourceGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The filters that will be applied to determine which resources to remediate.
        /// </summary>
        [Input("filters")]
        public Input<Inputs.RemediationFiltersArgs>? Filters { get; set; }

        /// <summary>
        /// The resource ID of the policy assignment that should be remediated.
        /// </summary>
        [Input("policyAssignmentId")]
        public Input<string>? PolicyAssignmentId { get; set; }

        /// <summary>
        /// The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
        /// </summary>
        [Input("policyDefinitionReferenceId")]
        public Input<string>? PolicyDefinitionReferenceId { get; set; }

        /// <summary>
        /// The name of the remediation.
        /// </summary>
        [Input("remediationName", required: true)]
        public Input<string> RemediationName { get; set; } = null!;

        /// <summary>
        /// The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
        /// </summary>
        [Input("resourceDiscoveryMode")]
        public InputUnion<string, Pulumi.AzureNextGen.PolicyInsights.Latest.ResourceDiscoveryMode>? ResourceDiscoveryMode { get; set; }

        /// <summary>
        /// Resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public RemediationAtResourceGroupArgs()
        {
        }
    }
}
