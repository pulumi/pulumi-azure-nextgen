// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NotificationHubs.Latest
{
    /// <summary>
    /// Description of a Namespace AuthorizationRules.
    /// Latest API Version: 2017-04-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:notificationhubs/latest:NamespaceAuthorizationRule")]
    public partial class NamespaceAuthorizationRule : Pulumi.CustomResource
    {
        /// <summary>
        /// A string that describes the claim type
        /// </summary>
        [Output("claimType")]
        public Output<string> ClaimType { get; private set; } = null!;

        /// <summary>
        /// A string that describes the claim value
        /// </summary>
        [Output("claimValue")]
        public Output<string> ClaimValue { get; private set; } = null!;

        /// <summary>
        /// The created time for this rule
        /// </summary>
        [Output("createdTime")]
        public Output<string> CreatedTime { get; private set; } = null!;

        /// <summary>
        /// A string that describes the authorization rule.
        /// </summary>
        [Output("keyName")]
        public Output<string> KeyName { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The last modified time for this rule
        /// </summary>
        [Output("modifiedTime")]
        public Output<string> ModifiedTime { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A base64-encoded 256-bit primary key for signing and validating the SAS token.
        /// </summary>
        [Output("primaryKey")]
        public Output<string> PrimaryKey { get; private set; } = null!;

        /// <summary>
        /// The revision number for the rule
        /// </summary>
        [Output("revision")]
        public Output<int> Revision { get; private set; } = null!;

        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        [Output("rights")]
        public Output<ImmutableArray<string>> Rights { get; private set; } = null!;

        /// <summary>
        /// A base64-encoded 256-bit primary key for signing and validating the SAS token.
        /// </summary>
        [Output("secondaryKey")]
        public Output<string> SecondaryKey { get; private set; } = null!;

        /// <summary>
        /// The sku of the created namespace
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a NamespaceAuthorizationRule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NamespaceAuthorizationRule(string name, NamespaceAuthorizationRuleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:notificationhubs/latest:NamespaceAuthorizationRule", name, args ?? new NamespaceAuthorizationRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NamespaceAuthorizationRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:notificationhubs/latest:NamespaceAuthorizationRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:notificationhubs/v20160301:NamespaceAuthorizationRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:notificationhubs/v20170401:NamespaceAuthorizationRule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing NamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NamespaceAuthorizationRule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NamespaceAuthorizationRule(name, id, options);
        }
    }

    public sealed class NamespaceAuthorizationRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Authorization Rule Name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public Input<string> AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The namespace name.
        /// </summary>
        [Input("namespaceName", required: true)]
        public Input<string> NamespaceName { get; set; } = null!;

        /// <summary>
        /// Properties of the Namespace AuthorizationRules.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.SharedAccessAuthorizationRulePropertiesArgs> Properties { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public NamespaceAuthorizationRuleArgs()
        {
        }
    }
}
