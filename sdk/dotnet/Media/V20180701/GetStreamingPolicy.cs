// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180701
{
    public static class GetStreamingPolicy
    {
        public static Task<GetStreamingPolicyResult> InvokeAsync(GetStreamingPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStreamingPolicyResult>("azure-nextgen:media/v20180701:getStreamingPolicy", args ?? new GetStreamingPolicyArgs(), options.WithVersion());
    }


    public sealed class GetStreamingPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The Streaming Policy name.
        /// </summary>
        [Input("streamingPolicyName", required: true)]
        public string StreamingPolicyName { get; set; } = null!;

        public GetStreamingPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStreamingPolicyResult
    {
        /// <summary>
        /// Configuration of CommonEncryptionCbcs
        /// </summary>
        public readonly Outputs.CommonEncryptionCbcsResponse? CommonEncryptionCbcs;
        /// <summary>
        /// Configuration of CommonEncryptionCenc
        /// </summary>
        public readonly Outputs.CommonEncryptionCencResponse? CommonEncryptionCenc;
        /// <summary>
        /// Creation time of Streaming Policy
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// Default ContentKey used by current Streaming Policy
        /// </summary>
        public readonly string? DefaultContentKeyPolicyName;
        /// <summary>
        /// Configuration of EnvelopeEncryption
        /// </summary>
        public readonly Outputs.EnvelopeEncryptionResponse? EnvelopeEncryption;
        /// <summary>
        /// Fully qualified resource ID for the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Configurations of NoEncryption
        /// </summary>
        public readonly Outputs.NoEncryptionResponse? NoEncryption;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetStreamingPolicyResult(
            Outputs.CommonEncryptionCbcsResponse? commonEncryptionCbcs,

            Outputs.CommonEncryptionCencResponse? commonEncryptionCenc,

            string created,

            string? defaultContentKeyPolicyName,

            Outputs.EnvelopeEncryptionResponse? envelopeEncryption,

            string id,

            string name,

            Outputs.NoEncryptionResponse? noEncryption,

            string type)
        {
            CommonEncryptionCbcs = commonEncryptionCbcs;
            CommonEncryptionCenc = commonEncryptionCenc;
            Created = created;
            DefaultContentKeyPolicyName = defaultContentKeyPolicyName;
            EnvelopeEncryption = envelopeEncryption;
            Id = id;
            Name = name;
            NoEncryption = noEncryption;
            Type = type;
        }
    }
}
