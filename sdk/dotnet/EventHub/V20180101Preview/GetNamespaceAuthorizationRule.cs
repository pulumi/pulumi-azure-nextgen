// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventHub.V20180101Preview
{
    public static class GetNamespaceAuthorizationRule
    {
        public static Task<GetNamespaceAuthorizationRuleResult> InvokeAsync(GetNamespaceAuthorizationRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNamespaceAuthorizationRuleResult>("azure-nextgen:eventhub/v20180101preview:getNamespaceAuthorizationRule", args ?? new GetNamespaceAuthorizationRuleArgs(), options.WithVersion());
    }


    public sealed class GetNamespaceAuthorizationRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The authorization rule name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public string AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The Namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group within the azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNamespaceAuthorizationRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNamespaceAuthorizationRuleResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        public readonly ImmutableArray<string> Rights;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetNamespaceAuthorizationRuleResult(
            string id,

            string name,

            ImmutableArray<string> rights,

            string type)
        {
            Id = id;
            Name = name;
            Rights = rights;
            Type = type;
        }
    }
}
