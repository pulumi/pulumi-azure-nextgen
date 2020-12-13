// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601
{
    public static class GetFirewallPolicyRuleCollectionGroup
    {
        public static Task<GetFirewallPolicyRuleCollectionGroupResult> InvokeAsync(GetFirewallPolicyRuleCollectionGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetFirewallPolicyRuleCollectionGroupResult>("azure-nextgen:network/v20200601:getFirewallPolicyRuleCollectionGroup", args ?? new GetFirewallPolicyRuleCollectionGroupArgs(), options.WithVersion());
    }


    public sealed class GetFirewallPolicyRuleCollectionGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Firewall Policy.
        /// </summary>
        [Input("firewallPolicyName", required: true)]
        public string FirewallPolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the FirewallPolicyRuleCollectionGroup.
        /// </summary>
        [Input("ruleCollectionGroupName", required: true)]
        public string RuleCollectionGroupName { get; set; } = null!;

        public GetFirewallPolicyRuleCollectionGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetFirewallPolicyRuleCollectionGroupResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Priority of the Firewall Policy Rule Collection Group resource.
        /// </summary>
        public readonly int? Priority;
        /// <summary>
        /// The provisioning state of the firewall policy rule collection group resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Group of Firewall Policy rule collections.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.FirewallPolicyFilterRuleCollectionResponse, Outputs.FirewallPolicyNatRuleCollectionResponse>> RuleCollections;
        /// <summary>
        /// Rule Group type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetFirewallPolicyRuleCollectionGroupResult(
            string etag,

            string? id,

            string? name,

            int? priority,

            string provisioningState,

            ImmutableArray<Union<Outputs.FirewallPolicyFilterRuleCollectionResponse, Outputs.FirewallPolicyNatRuleCollectionResponse>> ruleCollections,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            Priority = priority;
            ProvisioningState = provisioningState;
            RuleCollections = ruleCollections;
            Type = type;
        }
    }
}
