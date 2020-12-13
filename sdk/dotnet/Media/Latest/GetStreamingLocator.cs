// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.Latest
{
    public static class GetStreamingLocator
    {
        public static Task<GetStreamingLocatorResult> InvokeAsync(GetStreamingLocatorArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStreamingLocatorResult>("azure-nextgen:media/latest:getStreamingLocator", args ?? new GetStreamingLocatorArgs(), options.WithVersion());
    }


    public sealed class GetStreamingLocatorArgs : Pulumi.InvokeArgs
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
        /// The Streaming Locator name.
        /// </summary>
        [Input("streamingLocatorName", required: true)]
        public string StreamingLocatorName { get; set; } = null!;

        public GetStreamingLocatorArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStreamingLocatorResult
    {
        /// <summary>
        /// Alternative Media ID of this Streaming Locator
        /// </summary>
        public readonly string? AlternativeMediaId;
        /// <summary>
        /// Asset Name
        /// </summary>
        public readonly string AssetName;
        /// <summary>
        /// The ContentKeys used by this Streaming Locator.
        /// </summary>
        public readonly ImmutableArray<Outputs.StreamingLocatorContentKeyResponse> ContentKeys;
        /// <summary>
        /// The creation time of the Streaming Locator.
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// Name of the default ContentKeyPolicy used by this Streaming Locator.
        /// </summary>
        public readonly string? DefaultContentKeyPolicyName;
        /// <summary>
        /// The end time of the Streaming Locator.
        /// </summary>
        public readonly string? EndTime;
        /// <summary>
        /// A list of asset or account filters which apply to this streaming locator
        /// </summary>
        public readonly ImmutableArray<string> Filters;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The start time of the Streaming Locator.
        /// </summary>
        public readonly string? StartTime;
        /// <summary>
        /// The StreamingLocatorId of the Streaming Locator.
        /// </summary>
        public readonly string? StreamingLocatorId;
        /// <summary>
        /// Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
        /// </summary>
        public readonly string StreamingPolicyName;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetStreamingLocatorResult(
            string? alternativeMediaId,

            string assetName,

            ImmutableArray<Outputs.StreamingLocatorContentKeyResponse> contentKeys,

            string created,

            string? defaultContentKeyPolicyName,

            string? endTime,

            ImmutableArray<string> filters,

            string id,

            string name,

            string? startTime,

            string? streamingLocatorId,

            string streamingPolicyName,

            string type)
        {
            AlternativeMediaId = alternativeMediaId;
            AssetName = assetName;
            ContentKeys = contentKeys;
            Created = created;
            DefaultContentKeyPolicyName = defaultContentKeyPolicyName;
            EndTime = endTime;
            Filters = filters;
            Id = id;
            Name = name;
            StartTime = startTime;
            StreamingLocatorId = streamingLocatorId;
            StreamingPolicyName = streamingPolicyName;
            Type = type;
        }
    }
}
