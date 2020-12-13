// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetBastionHost
    {
        public static Task<GetBastionHostResult> InvokeAsync(GetBastionHostArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBastionHostResult>("azure-nextgen:network/latest:getBastionHost", args ?? new GetBastionHostArgs(), options.WithVersion());
    }


    public sealed class GetBastionHostArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Bastion Host.
        /// </summary>
        [Input("bastionHostName", required: true)]
        public string BastionHostName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetBastionHostArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBastionHostResult
    {
        /// <summary>
        /// FQDN for the endpoint on which bastion host is accessible.
        /// </summary>
        public readonly string? DnsName;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// IP configuration of the Bastion Host resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.BastionHostIPConfigurationResponse> IpConfigurations;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the bastion host resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBastionHostResult(
            string? dnsName,

            string etag,

            string? id,

            ImmutableArray<Outputs.BastionHostIPConfigurationResponse> ipConfigurations,

            string? location,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            DnsName = dnsName;
            Etag = etag;
            Id = id;
            IpConfigurations = ipConfigurations;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
        }
    }
}
