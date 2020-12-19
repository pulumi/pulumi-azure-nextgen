// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20160330
{
    /// <summary>
    /// Network security rule
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20160330:SecurityRule")]
    public partial class SecurityRule : Pulumi.CustomResource
    {
        /// <summary>
        /// Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
        /// </summary>
        [Output("access")]
        public Output<string> Access { get; private set; } = null!;

        /// <summary>
        /// Gets or sets a description for this rule. Restricted to 140 chars.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. 
        /// </summary>
        [Output("destinationAddressPrefix")]
        public Output<string> DestinationAddressPrefix { get; private set; } = null!;

        /// <summary>
        /// Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Output("destinationPortRange")]
        public Output<string?> DestinationPortRange { get; private set; } = null!;

        /// <summary>
        /// Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        /// </summary>
        [Output("direction")]
        public Output<string> Direction { get; private set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// Gets name of the resource that is unique within a resource group. This name can be used to access the resource
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        /// </summary>
        [Output("priority")]
        public Output<int?> Priority { get; private set; } = null!;

        /// <summary>
        /// Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
        /// </summary>
        [Output("protocol")]
        public Output<string> Protocol { get; private set; } = null!;

        /// <summary>
        /// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
        /// </summary>
        [Output("sourceAddressPrefix")]
        public Output<string> SourceAddressPrefix { get; private set; } = null!;

        /// <summary>
        /// Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Output("sourcePortRange")]
        public Output<string?> SourcePortRange { get; private set; } = null!;


        /// <summary>
        /// Create a SecurityRule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SecurityRule(string name, SecurityRuleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20160330:SecurityRule", name, args ?? new SecurityRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SecurityRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20160330:SecurityRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150501preview:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150615:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160601:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160901:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:SecurityRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:SecurityRule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SecurityRule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SecurityRule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SecurityRule(name, id, options);
        }
    }

    public sealed class SecurityRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
        /// </summary>
        [Input("access", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160330.SecurityRuleAccess> Access { get; set; } = null!;

        /// <summary>
        /// Gets or sets a description for this rule. Restricted to 140 chars.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. 
        /// </summary>
        [Input("destinationAddressPrefix", required: true)]
        public Input<string> DestinationAddressPrefix { get; set; } = null!;

        /// <summary>
        /// Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Input("destinationPortRange")]
        public Input<string>? DestinationPortRange { get; set; }

        /// <summary>
        /// Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        /// </summary>
        [Input("direction", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160330.SecurityRuleDirection> Direction { get; set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Resource Id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Gets name of the resource that is unique within a resource group. This name can be used to access the resource
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the network security group.
        /// </summary>
        [Input("networkSecurityGroupName", required: true)]
        public Input<string> NetworkSecurityGroupName { get; set; } = null!;

        /// <summary>
        /// Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
        /// </summary>
        [Input("protocol", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160330.SecurityRuleProtocol> Protocol { get; set; } = null!;

        /// <summary>
        /// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the security rule.
        /// </summary>
        [Input("securityRuleName", required: true)]
        public Input<string> SecurityRuleName { get; set; } = null!;

        /// <summary>
        /// Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
        /// </summary>
        [Input("sourceAddressPrefix", required: true)]
        public Input<string> SourceAddressPrefix { get; set; } = null!;

        /// <summary>
        /// Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Input("sourcePortRange")]
        public Input<string>? SourcePortRange { get; set; }

        public SecurityRuleArgs()
        {
        }
    }
}
