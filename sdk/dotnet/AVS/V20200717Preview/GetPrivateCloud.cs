// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AVS.V20200717Preview
{
    public static class GetPrivateCloud
    {
        public static Task<GetPrivateCloudResult> InvokeAsync(GetPrivateCloudArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPrivateCloudResult>("azure-nextgen:avs/v20200717preview:getPrivateCloud", args ?? new GetPrivateCloudArgs(), options.WithVersion());
    }


    public sealed class GetPrivateCloudArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the private cloud
        /// </summary>
        [Input("privateCloudName", required: true)]
        public string PrivateCloudName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPrivateCloudArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPrivateCloudResult
    {
        /// <summary>
        /// An ExpressRoute Circuit
        /// </summary>
        public readonly Outputs.CircuitResponse? Circuit;
        /// <summary>
        /// The endpoints
        /// </summary>
        public readonly Outputs.EndpointsResponse Endpoints;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// vCenter Single Sign On Identity Sources
        /// </summary>
        public readonly ImmutableArray<Outputs.IdentitySourceResponse> IdentitySources;
        /// <summary>
        /// Connectivity to internet is enabled or disabled
        /// </summary>
        public readonly string? Internet;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The default cluster used for management
        /// </summary>
        public readonly Outputs.ManagementClusterResponse ManagementCluster;
        /// <summary>
        /// Network used to access vCenter Server and NSX-T Manager
        /// </summary>
        public readonly string ManagementNetwork;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
        /// </summary>
        public readonly string NetworkBlock;
        /// <summary>
        /// Thumbprint of the NSX-T Manager SSL certificate
        /// </summary>
        public readonly string NsxtCertificateThumbprint;
        /// <summary>
        /// Indicate to rotate the NSX-T Manager password for the private cloud
        /// </summary>
        public readonly string? NsxtPassword;
        /// <summary>
        /// Used for virtual machine cold migration, cloning, and snapshot migration
        /// </summary>
        public readonly string ProvisioningNetwork;
        /// <summary>
        /// The provisioning state
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The private cloud SKU
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Thumbprint of the vCenter Server SSL certificate
        /// </summary>
        public readonly string VcenterCertificateThumbprint;
        /// <summary>
        /// Indicate to rotate the vCenter admin password for the private cloud
        /// </summary>
        public readonly string? VcenterPassword;
        /// <summary>
        /// Used for live migration of virtual machines
        /// </summary>
        public readonly string VmotionNetwork;

        [OutputConstructor]
        private GetPrivateCloudResult(
            Outputs.CircuitResponse? circuit,

            Outputs.EndpointsResponse endpoints,

            string id,

            ImmutableArray<Outputs.IdentitySourceResponse> identitySources,

            string? internet,

            string location,

            Outputs.ManagementClusterResponse managementCluster,

            string managementNetwork,

            string name,

            string networkBlock,

            string nsxtCertificateThumbprint,

            string? nsxtPassword,

            string provisioningNetwork,

            string provisioningState,

            Outputs.SkuResponse sku,

            ImmutableDictionary<string, string>? tags,

            string type,

            string vcenterCertificateThumbprint,

            string? vcenterPassword,

            string vmotionNetwork)
        {
            Circuit = circuit;
            Endpoints = endpoints;
            Id = id;
            IdentitySources = identitySources;
            Internet = internet;
            Location = location;
            ManagementCluster = managementCluster;
            ManagementNetwork = managementNetwork;
            Name = name;
            NetworkBlock = networkBlock;
            NsxtCertificateThumbprint = nsxtCertificateThumbprint;
            NsxtPassword = nsxtPassword;
            ProvisioningNetwork = provisioningNetwork;
            ProvisioningState = provisioningState;
            Sku = sku;
            Tags = tags;
            Type = type;
            VcenterCertificateThumbprint = vcenterCertificateThumbprint;
            VcenterPassword = vcenterPassword;
            VmotionNetwork = vmotionNetwork;
        }
    }
}
