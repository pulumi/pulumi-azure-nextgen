// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataLakeStore.V20161101
{
    /// <summary>
    /// Data Lake Store firewall rule information.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datalakestore/v20161101:FirewallRule")]
    public partial class FirewallRule : Pulumi.CustomResource
    {
        /// <summary>
        /// The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
        /// </summary>
        [Output("endIpAddress")]
        public Output<string> EndIpAddress { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
        /// </summary>
        [Output("startIpAddress")]
        public Output<string> StartIpAddress { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a FirewallRule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public FirewallRule(string name, FirewallRuleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakestore/v20161101:FirewallRule", name, args ?? new FirewallRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private FirewallRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakestore/v20161101:FirewallRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datalakestore/latest:FirewallRule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing FirewallRule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static FirewallRule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new FirewallRule(name, id, options);
        }
    }

    public sealed class FirewallRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the Data Lake Store account.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
        /// </summary>
        [Input("endIpAddress", required: true)]
        public Input<string> EndIpAddress { get; set; } = null!;

        /// <summary>
        /// The name of the firewall rule to create or update.
        /// </summary>
        [Input("firewallRuleName", required: true)]
        public Input<string> FirewallRuleName { get; set; } = null!;

        /// <summary>
        /// The name of the Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
        /// </summary>
        [Input("startIpAddress", required: true)]
        public Input<string> StartIpAddress { get; set; } = null!;

        public FirewallRuleArgs()
        {
        }
    }
}
