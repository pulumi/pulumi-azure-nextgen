// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20171201Preview
{
    public static class GetVirtualNetworkRule
    {
        public static Task<GetVirtualNetworkRuleResult> InvokeAsync(GetVirtualNetworkRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualNetworkRuleResult>("azure-nextgen:dbforpostgresql/v20171201preview:getVirtualNetworkRule", args ?? new GetVirtualNetworkRuleArgs(), options.WithVersion());
    }


    public sealed class GetVirtualNetworkRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual network rule.
        /// </summary>
        [Input("virtualNetworkRuleName", required: true)]
        public string VirtualNetworkRuleName { get; set; } = null!;

        public GetVirtualNetworkRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualNetworkRuleResult
    {
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Create firewall rule before the virtual network has vnet service endpoint enabled.
        /// </summary>
        public readonly bool? IgnoreMissingVnetServiceEndpoint;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Virtual Network Rule State
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The ARM resource id of the virtual network subnet.
        /// </summary>
        public readonly string VirtualNetworkSubnetId;

        [OutputConstructor]
        private GetVirtualNetworkRuleResult(
            string id,

            bool? ignoreMissingVnetServiceEndpoint,

            string name,

            string state,

            string type,

            string virtualNetworkSubnetId)
        {
            Id = id;
            IgnoreMissingVnetServiceEndpoint = ignoreMissingVnetServiceEndpoint;
            Name = name;
            State = state;
            Type = type;
            VirtualNetworkSubnetId = virtualNetworkSubnetId;
        }
    }
}
