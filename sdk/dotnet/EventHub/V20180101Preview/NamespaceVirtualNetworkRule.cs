// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventHub.V20180101Preview
{
    /// <summary>
    /// Single item in a List or Get VirtualNetworkRules operation
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:eventhub/v20180101preview:NamespaceVirtualNetworkRule")]
    public partial class NamespaceVirtualNetworkRule : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// ARM ID of Virtual Network Subnet
        /// </summary>
        [Output("virtualNetworkSubnetId")]
        public Output<string?> VirtualNetworkSubnetId { get; private set; } = null!;


        /// <summary>
        /// Create a NamespaceVirtualNetworkRule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NamespaceVirtualNetworkRule(string name, NamespaceVirtualNetworkRuleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:eventhub/v20180101preview:NamespaceVirtualNetworkRule", name, args ?? new NamespaceVirtualNetworkRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NamespaceVirtualNetworkRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:eventhub/v20180101preview:NamespaceVirtualNetworkRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing NamespaceVirtualNetworkRule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NamespaceVirtualNetworkRule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NamespaceVirtualNetworkRule(name, id, options);
        }
    }

    public sealed class NamespaceVirtualNetworkRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public Input<string> NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group within the azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The Virtual Network Rule name.
        /// </summary>
        [Input("virtualNetworkRuleName", required: true)]
        public Input<string> VirtualNetworkRuleName { get; set; } = null!;

        /// <summary>
        /// ARM ID of Virtual Network Subnet
        /// </summary>
        [Input("virtualNetworkSubnetId")]
        public Input<string>? VirtualNetworkSubnetId { get; set; }

        public NamespaceVirtualNetworkRuleArgs()
        {
        }
    }
}
