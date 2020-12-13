// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Peering.V20200401
{
    public static class GetPeerAsn
    {
        public static Task<GetPeerAsnResult> InvokeAsync(GetPeerAsnArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPeerAsnResult>("azure-nextgen:peering/v20200401:getPeerAsn", args ?? new GetPeerAsnArgs(), options.WithVersion());
    }


    public sealed class GetPeerAsnArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The peer ASN name.
        /// </summary>
        [Input("peerAsnName", required: true)]
        public string PeerAsnName { get; set; } = null!;

        public GetPeerAsnArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPeerAsnResult
    {
        /// <summary>
        /// The error message for the validation state
        /// </summary>
        public readonly string ErrorMessage;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The Autonomous System Number (ASN) of the peer.
        /// </summary>
        public readonly int? PeerAsn;
        /// <summary>
        /// The contact details of the peer.
        /// </summary>
        public readonly ImmutableArray<Outputs.ContactDetailResponse> PeerContactDetail;
        /// <summary>
        /// The name of the peer.
        /// </summary>
        public readonly string? PeerName;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The validation state of the ASN associated with the peer.
        /// </summary>
        public readonly string? ValidationState;

        [OutputConstructor]
        private GetPeerAsnResult(
            string errorMessage,

            string id,

            string name,

            int? peerAsn,

            ImmutableArray<Outputs.ContactDetailResponse> peerContactDetail,

            string? peerName,

            string type,

            string? validationState)
        {
            ErrorMessage = errorMessage;
            Id = id;
            Name = name;
            PeerAsn = peerAsn;
            PeerContactDetail = peerContactDetail;
            PeerName = peerName;
            Type = type;
            ValidationState = validationState;
        }
    }
}
