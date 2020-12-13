// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.Latest
{
    public static class GetPolicyDefinitionAtManagementGroup
    {
        public static Task<GetPolicyDefinitionAtManagementGroupResult> InvokeAsync(GetPolicyDefinitionAtManagementGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPolicyDefinitionAtManagementGroupResult>("azure-nextgen:management/latest:getPolicyDefinitionAtManagementGroup", args ?? new GetPolicyDefinitionAtManagementGroupArgs(), options.WithVersion());
    }


    public sealed class GetPolicyDefinitionAtManagementGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The ID of the management group.
        /// </summary>
        [Input("managementGroupId", required: true)]
        public string ManagementGroupId { get; set; } = null!;

        /// <summary>
        /// The name of the policy definition to get.
        /// </summary>
        [Input("policyDefinitionName", required: true)]
        public string PolicyDefinitionName { get; set; } = null!;

        public GetPolicyDefinitionAtManagementGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPolicyDefinitionAtManagementGroupResult
    {
        /// <summary>
        /// The policy definition description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The display name of the policy definition.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The ID of the policy definition.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
        /// </summary>
        public readonly object? Metadata;
        /// <summary>
        /// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
        /// </summary>
        public readonly string? Mode;
        /// <summary>
        /// The name of the policy definition.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterDefinitionsValueResponse>? Parameters;
        /// <summary>
        /// The policy rule.
        /// </summary>
        public readonly object? PolicyRule;
        /// <summary>
        /// The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
        /// </summary>
        public readonly string? PolicyType;
        /// <summary>
        /// The type of the resource (Microsoft.Authorization/policyDefinitions).
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPolicyDefinitionAtManagementGroupResult(
            string? description,

            string? displayName,

            string id,

            object? metadata,

            string? mode,

            string name,

            ImmutableDictionary<string, Outputs.ParameterDefinitionsValueResponse>? parameters,

            object? policyRule,

            string? policyType,

            string type)
        {
            Description = description;
            DisplayName = displayName;
            Id = id;
            Metadata = metadata;
            Mode = mode;
            Name = name;
            Parameters = parameters;
            PolicyRule = policyRule;
            PolicyType = policyType;
            Type = type;
        }
    }
}
