// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20171201
{
    public static class GetFirewallRule
    {
        public static Task<GetFirewallRuleResult> InvokeAsync(GetFirewallRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetFirewallRuleResult>("azure-nextgen:dbforpostgresql/v20171201:getFirewallRule", args ?? new GetFirewallRuleArgs(), options.WithVersion());
    }


    public sealed class GetFirewallRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the server firewall rule.
        /// </summary>
        [Input("firewallRuleName", required: true)]
        public string FirewallRuleName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetFirewallRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetFirewallRuleResult
    {
        /// <summary>
        /// The end IP address of the server firewall rule. Must be IPv4 format.
        /// </summary>
        public readonly string EndIpAddress;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The start IP address of the server firewall rule. Must be IPv4 format.
        /// </summary>
        public readonly string StartIpAddress;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetFirewallRuleResult(
            string endIpAddress,

            string id,

            string name,

            string startIpAddress,

            string type)
        {
            EndIpAddress = endIpAddress;
            Id = id;
            Name = name;
            StartIpAddress = startIpAddress;
            Type = type;
        }
    }
}
