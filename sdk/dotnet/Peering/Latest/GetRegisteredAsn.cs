// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Peering.Latest
{
    public static class GetRegisteredAsn
    {
        public static Task<GetRegisteredAsnResult> InvokeAsync(GetRegisteredAsnArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRegisteredAsnResult>("azure-nextgen:peering/latest:getRegisteredAsn", args ?? new GetRegisteredAsnArgs(), options.WithVersion());
    }


    public sealed class GetRegisteredAsnArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the peering.
        /// </summary>
        [Input("peeringName", required: true)]
        public string PeeringName { get; set; } = null!;

        /// <summary>
        /// The name of the registered ASN.
        /// </summary>
        [Input("registeredAsnName", required: true)]
        public string RegisteredAsnName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetRegisteredAsnArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRegisteredAsnResult
    {
        /// <summary>
        /// The customer's ASN from which traffic originates.
        /// </summary>
        public readonly int? Asn;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The peering service prefix key that is to be shared with the customer.
        /// </summary>
        public readonly string PeeringServicePrefixKey;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRegisteredAsnResult(
            int? asn,

            string id,

            string name,

            string peeringServicePrefixKey,

            string provisioningState,

            string type)
        {
            Asn = asn;
            Id = id;
            Name = name;
            PeeringServicePrefixKey = peeringServicePrefixKey;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
