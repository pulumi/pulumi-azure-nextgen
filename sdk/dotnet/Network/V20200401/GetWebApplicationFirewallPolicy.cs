// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200401
{
    public static class GetWebApplicationFirewallPolicy
    {
        public static Task<GetWebApplicationFirewallPolicyResult> InvokeAsync(GetWebApplicationFirewallPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebApplicationFirewallPolicyResult>("azure-nextgen:network/v20200401:getWebApplicationFirewallPolicy", args ?? new GetWebApplicationFirewallPolicyArgs(), options.WithVersion());
    }


    public sealed class GetWebApplicationFirewallPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the policy.
        /// </summary>
        [Input("policyName", required: true)]
        public string PolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetWebApplicationFirewallPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebApplicationFirewallPolicyResult
    {
        /// <summary>
        /// A collection of references to application gateways.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayResponse> ApplicationGateways;
        /// <summary>
        /// The custom rules inside the policy.
        /// </summary>
        public readonly ImmutableArray<Outputs.WebApplicationFirewallCustomRuleResponse> CustomRules;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// A collection of references to application gateway http listeners.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> HttpListeners;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Describes the managedRules structure.
        /// </summary>
        public readonly Outputs.ManagedRulesDefinitionResponse ManagedRules;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A collection of references to application gateway path rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> PathBasedRules;
        /// <summary>
        /// The PolicySettings for policy.
        /// </summary>
        public readonly Outputs.PolicySettingsResponse? PolicySettings;
        /// <summary>
        /// The provisioning state of the web application firewall policy resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource status of the policy.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebApplicationFirewallPolicyResult(
            ImmutableArray<Outputs.ApplicationGatewayResponse> applicationGateways,

            ImmutableArray<Outputs.WebApplicationFirewallCustomRuleResponse> customRules,

            string etag,

            ImmutableArray<Outputs.SubResourceResponse> httpListeners,

            string? id,

            string? location,

            Outputs.ManagedRulesDefinitionResponse managedRules,

            string name,

            ImmutableArray<Outputs.SubResourceResponse> pathBasedRules,

            Outputs.PolicySettingsResponse? policySettings,

            string provisioningState,

            string resourceState,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            ApplicationGateways = applicationGateways;
            CustomRules = customRules;
            Etag = etag;
            HttpListeners = httpListeners;
            Id = id;
            Location = location;
            ManagedRules = managedRules;
            Name = name;
            PathBasedRules = pathBasedRules;
            PolicySettings = policySettings;
            ProvisioningState = provisioningState;
            ResourceState = resourceState;
            Tags = tags;
            Type = type;
        }
    }
}
