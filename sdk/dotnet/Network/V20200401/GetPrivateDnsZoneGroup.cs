// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200401
{
    public static class GetPrivateDnsZoneGroup
    {
        public static Task<GetPrivateDnsZoneGroupResult> InvokeAsync(GetPrivateDnsZoneGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPrivateDnsZoneGroupResult>("azure-nextgen:network/v20200401:getPrivateDnsZoneGroup", args ?? new GetPrivateDnsZoneGroupArgs(), options.WithVersion());
    }


    public sealed class GetPrivateDnsZoneGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the private dns zone group.
        /// </summary>
        [Input("privateDnsZoneGroupName", required: true)]
        public string PrivateDnsZoneGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the private endpoint.
        /// </summary>
        [Input("privateEndpointName", required: true)]
        public string PrivateEndpointName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPrivateDnsZoneGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPrivateDnsZoneGroupResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// A collection of private dns zone configurations of the private dns zone group.
        /// </summary>
        public readonly ImmutableArray<Outputs.PrivateDnsZoneConfigResponse> PrivateDnsZoneConfigs;
        /// <summary>
        /// The provisioning state of the private dns zone group resource.
        /// </summary>
        public readonly string ProvisioningState;

        [OutputConstructor]
        private GetPrivateDnsZoneGroupResult(
            string etag,

            string? id,

            string? name,

            ImmutableArray<Outputs.PrivateDnsZoneConfigResponse> privateDnsZoneConfigs,

            string provisioningState)
        {
            Etag = etag;
            Id = id;
            Name = name;
            PrivateDnsZoneConfigs = privateDnsZoneConfigs;
            ProvisioningState = provisioningState;
        }
    }
}
