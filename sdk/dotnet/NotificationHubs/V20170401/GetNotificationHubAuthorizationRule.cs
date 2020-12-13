// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NotificationHubs.V20170401
{
    public static class GetNotificationHubAuthorizationRule
    {
        public static Task<GetNotificationHubAuthorizationRuleResult> InvokeAsync(GetNotificationHubAuthorizationRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNotificationHubAuthorizationRuleResult>("azure-nextgen:notificationhubs/v20170401:getNotificationHubAuthorizationRule", args ?? new GetNotificationHubAuthorizationRuleArgs(), options.WithVersion());
    }


    public sealed class GetNotificationHubAuthorizationRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// authorization rule name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public string AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// The notification hub name.
        /// </summary>
        [Input("notificationHubName", required: true)]
        public string NotificationHubName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNotificationHubAuthorizationRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNotificationHubAuthorizationRuleResult
    {
        /// <summary>
        /// A string that describes the claim type
        /// </summary>
        public readonly string ClaimType;
        /// <summary>
        /// A string that describes the claim value
        /// </summary>
        public readonly string ClaimValue;
        /// <summary>
        /// The created time for this rule
        /// </summary>
        public readonly string CreatedTime;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// A string that describes the authorization rule.
        /// </summary>
        public readonly string KeyName;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The last modified time for this rule
        /// </summary>
        public readonly string ModifiedTime;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A base64-encoded 256-bit primary key for signing and validating the SAS token.
        /// </summary>
        public readonly string PrimaryKey;
        /// <summary>
        /// The revision number for the rule
        /// </summary>
        public readonly int Revision;
        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        public readonly ImmutableArray<string> Rights;
        /// <summary>
        /// A base64-encoded 256-bit primary key for signing and validating the SAS token.
        /// </summary>
        public readonly string SecondaryKey;
        /// <summary>
        /// The sku of the created namespace
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetNotificationHubAuthorizationRuleResult(
            string claimType,

            string claimValue,

            string createdTime,

            string id,

            string keyName,

            string? location,

            string modifiedTime,

            string name,

            string primaryKey,

            int revision,

            ImmutableArray<string> rights,

            string secondaryKey,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            ClaimType = claimType;
            ClaimValue = claimValue;
            CreatedTime = createdTime;
            Id = id;
            KeyName = keyName;
            Location = location;
            ModifiedTime = modifiedTime;
            Name = name;
            PrimaryKey = primaryKey;
            Revision = revision;
            Rights = rights;
            SecondaryKey = secondaryKey;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
