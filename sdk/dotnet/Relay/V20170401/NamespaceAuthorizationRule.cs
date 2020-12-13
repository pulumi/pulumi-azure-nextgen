// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Relay.V20170401
{
    /// <summary>
    /// Description of a namespace authorization rule.
    /// </summary>
    public partial class NamespaceAuthorizationRule : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        [Output("rights")]
        public Output<ImmutableArray<string>> Rights { get; private set; } = null!;

        /// <summary>
        /// Resource type.
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
            : base("azure-nextgen:relay/v20170401:NamespaceAuthorizationRule", name, args ?? new NamespaceAuthorizationRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NamespaceAuthorizationRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:relay/v20170401:NamespaceAuthorizationRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:relay/latest:NamespaceAuthorizationRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:relay/v20160701:NamespaceAuthorizationRule"},
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
        /// The authorization rule name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public Input<string> AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public Input<string> NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("rights", required: true)]
        private InputList<Pulumi.AzureNextGen.Relay.V20170401.AccessRights>? _rights;

        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        public InputList<Pulumi.AzureNextGen.Relay.V20170401.AccessRights> Rights
        {
            get => _rights ?? (_rights = new InputList<Pulumi.AzureNextGen.Relay.V20170401.AccessRights>());
            set => _rights = value;
        }

        public NamespaceAuthorizationRuleArgs()
        {
        }
    }
}
