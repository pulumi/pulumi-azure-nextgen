// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20200501
{
    public static class GetLiveOutput
    {
        public static Task<GetLiveOutputResult> InvokeAsync(GetLiveOutputArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLiveOutputResult>("azure-nextgen:media/v20200501:getLiveOutput", args ?? new GetLiveOutputArgs(), options.WithVersion());
    }


    public sealed class GetLiveOutputArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the live event, maximum length is 32.
        /// </summary>
        [Input("liveEventName", required: true)]
        public string LiveEventName { get; set; } = null!;

        /// <summary>
        /// The name of the live output.
        /// </summary>
        [Input("liveOutputName", required: true)]
        public string LiveOutputName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetLiveOutputArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLiveOutputResult
    {
        /// <summary>
        /// ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
        /// </summary>
        public readonly string ArchiveWindowLength;
        /// <summary>
        /// The asset that the live output will write to.
        /// </summary>
        public readonly string AssetName;
        /// <summary>
        /// The creation time the live output.
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// The description of the live output.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// HTTP Live Streaming (HLS) packing setting for the live output.
        /// </summary>
        public readonly Outputs.HlsResponse? Hls;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The time the live output was last modified.
        /// </summary>
        public readonly string LastModified;
        /// <summary>
        /// The manifest file name. If not provided, the service will generate one automatically.
        /// </summary>
        public readonly string? ManifestName;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The initial timestamp that the live output will start at, any content before this value will not be archived.
        /// </summary>
        public readonly int? OutputSnapTime;
        /// <summary>
        /// The provisioning state of the live output.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource state of the live output.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetLiveOutputResult(
            string archiveWindowLength,

            string assetName,

            string created,

            string? description,

            Outputs.HlsResponse? hls,

            string id,

            string lastModified,

            string? manifestName,

            string name,

            int? outputSnapTime,

            string provisioningState,

            string resourceState,

            string type)
        {
            ArchiveWindowLength = archiveWindowLength;
            AssetName = assetName;
            Created = created;
            Description = description;
            Hls = hls;
            Id = id;
            LastModified = lastModified;
            ManifestName = manifestName;
            Name = name;
            OutputSnapTime = outputSnapTime;
            ProvisioningState = provisioningState;
            ResourceState = resourceState;
            Type = type;
        }
    }
}
