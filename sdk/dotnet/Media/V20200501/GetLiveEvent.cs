// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20200501
{
    public static class GetLiveEvent
    {
        public static Task<GetLiveEventResult> InvokeAsync(GetLiveEventArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLiveEventResult>("azure-nextgen:media/v20200501:getLiveEvent", args ?? new GetLiveEventArgs(), options.WithVersion());
    }


    public sealed class GetLiveEventArgs : Pulumi.InvokeArgs
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
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetLiveEventArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLiveEventResult
    {
        /// <summary>
        /// The creation time for the live event
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// Live event cross site access policies.
        /// </summary>
        public readonly Outputs.CrossSiteAccessPoliciesResponse? CrossSiteAccessPolicies;
        /// <summary>
        /// A description for the live event.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
        /// </summary>
        public readonly Outputs.LiveEventEncodingResponse? Encoding;
        /// <summary>
        /// When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
        /// </summary>
        public readonly string? HostnamePrefix;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Live event input settings. It defines how the live event receives input from a contribution encoder.
        /// </summary>
        public readonly Outputs.LiveEventInputResponse Input;
        /// <summary>
        /// The last modified time of the live event.
        /// </summary>
        public readonly string LastModified;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
        /// </summary>
        public readonly Outputs.LiveEventPreviewResponse? Preview;
        /// <summary>
        /// The provisioning state of the live event.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
        /// </summary>
        public readonly ImmutableArray<string> StreamOptions;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Live transcription settings for the live event. See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature.
        /// </summary>
        public readonly ImmutableArray<Outputs.LiveEventTranscriptionResponse> Transcriptions;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state
        /// </summary>
        public readonly bool? UseStaticHostname;

        [OutputConstructor]
        private GetLiveEventResult(
            string created,

            Outputs.CrossSiteAccessPoliciesResponse? crossSiteAccessPolicies,

            string? description,

            Outputs.LiveEventEncodingResponse? encoding,

            string? hostnamePrefix,

            string id,

            Outputs.LiveEventInputResponse input,

            string lastModified,

            string location,

            string name,

            Outputs.LiveEventPreviewResponse? preview,

            string provisioningState,

            string resourceState,

            ImmutableArray<string> streamOptions,

            ImmutableDictionary<string, string>? tags,

            ImmutableArray<Outputs.LiveEventTranscriptionResponse> transcriptions,

            string type,

            bool? useStaticHostname)
        {
            Created = created;
            CrossSiteAccessPolicies = crossSiteAccessPolicies;
            Description = description;
            Encoding = encoding;
            HostnamePrefix = hostnamePrefix;
            Id = id;
            Input = input;
            LastModified = lastModified;
            Location = location;
            Name = name;
            Preview = preview;
            ProvisioningState = provisioningState;
            ResourceState = resourceState;
            StreamOptions = streamOptions;
            Tags = tags;
            Transcriptions = transcriptions;
            Type = type;
            UseStaticHostname = useStaticHostname;
        }
    }
}
