// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceBus.V20140901
{
    public static class GetTopicAuthorizationRule
    {
        public static Task<GetTopicAuthorizationRuleResult> InvokeAsync(GetTopicAuthorizationRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTopicAuthorizationRuleResult>("azure-nextgen:servicebus/v20140901:getTopicAuthorizationRule", args ?? new GetTopicAuthorizationRuleArgs(), options.WithVersion());
    }


    public sealed class GetTopicAuthorizationRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The authorization rule name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public string AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The topic name.
        /// </summary>
        [Input("topicName", required: true)]
        public string TopicName { get; set; } = null!;

        public GetTopicAuthorizationRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTopicAuthorizationRuleResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        public readonly ImmutableArray<string> Rights;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetTopicAuthorizationRuleResult(
            string id,

            string? location,

            string name,

            ImmutableArray<string> rights,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Rights = rights;
            Type = type;
        }
    }
}
