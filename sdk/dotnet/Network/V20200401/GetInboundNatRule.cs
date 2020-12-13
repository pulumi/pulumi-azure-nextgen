// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200401
{
    public static class GetInboundNatRule
    {
        public static Task<GetInboundNatRuleResult> InvokeAsync(GetInboundNatRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetInboundNatRuleResult>("azure-nextgen:network/v20200401:getInboundNatRule", args ?? new GetInboundNatRuleArgs(), options.WithVersion());
    }


    public sealed class GetInboundNatRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the inbound nat rule.
        /// </summary>
        [Input("inboundNatRuleName", required: true)]
        public string InboundNatRuleName { get; set; } = null!;

        /// <summary>
        /// The name of the load balancer.
        /// </summary>
        [Input("loadBalancerName", required: true)]
        public string LoadBalancerName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetInboundNatRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetInboundNatRuleResult
    {
        /// <summary>
        /// A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
        /// </summary>
        public readonly Outputs.NetworkInterfaceIPConfigurationResponse BackendIPConfiguration;
        /// <summary>
        /// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
        /// </summary>
        public readonly int? BackendPort;
        /// <summary>
        /// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
        /// </summary>
        public readonly bool? EnableFloatingIP;
        /// <summary>
        /// Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
        /// </summary>
        public readonly bool? EnableTcpReset;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// A reference to frontend IP addresses.
        /// </summary>
        public readonly Outputs.SubResourceResponse? FrontendIPConfiguration;
        /// <summary>
        /// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
        /// </summary>
        public readonly int? FrontendPort;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
        /// </summary>
        public readonly int? IdleTimeoutInMinutes;
        /// <summary>
        /// The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The reference to the transport protocol used by the load balancing rule.
        /// </summary>
        public readonly string? Protocol;
        /// <summary>
        /// The provisioning state of the inbound NAT rule resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetInboundNatRuleResult(
            Outputs.NetworkInterfaceIPConfigurationResponse backendIPConfiguration,

            int? backendPort,

            bool? enableFloatingIP,

            bool? enableTcpReset,

            string etag,

            Outputs.SubResourceResponse? frontendIPConfiguration,

            int? frontendPort,

            string? id,

            int? idleTimeoutInMinutes,

            string? name,

            string? protocol,

            string provisioningState,

            string type)
        {
            BackendIPConfiguration = backendIPConfiguration;
            BackendPort = backendPort;
            EnableFloatingIP = enableFloatingIP;
            EnableTcpReset = enableTcpReset;
            Etag = etag;
            FrontendIPConfiguration = frontendIPConfiguration;
            FrontendPort = frontendPort;
            Id = id;
            IdleTimeoutInMinutes = idleTimeoutInMinutes;
            Name = name;
            Protocol = protocol;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
