// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20200930
{
    public static class GetGalleryImage
    {
        public static Task<GetGalleryImageResult> InvokeAsync(GetGalleryImageArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetGalleryImageResult>("azure-nextgen:compute/v20200930:getGalleryImage", args ?? new GetGalleryImageArgs(), options.WithVersion());
    }


    public sealed class GetGalleryImageArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the gallery image definition to be retrieved.
        /// </summary>
        [Input("galleryImageName", required: true)]
        public string GalleryImageName { get; set; } = null!;

        /// <summary>
        /// The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
        /// </summary>
        [Input("galleryName", required: true)]
        public string GalleryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetGalleryImageArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetGalleryImageResult
    {
        /// <summary>
        /// The description of this gallery image definition resource. This property is updatable.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Describes the disallowed disk types.
        /// </summary>
        public readonly Outputs.DisallowedResponse? Disallowed;
        /// <summary>
        /// The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
        /// </summary>
        public readonly string? EndOfLifeDate;
        /// <summary>
        /// The Eula agreement for the gallery image definition.
        /// </summary>
        public readonly string? Eula;
        /// <summary>
        /// A list of gallery image features.
        /// </summary>
        public readonly ImmutableArray<Outputs.GalleryImageFeatureResponse> Features;
        /// <summary>
        /// The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
        /// </summary>
        public readonly string? HyperVGeneration;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// This is the gallery image definition identifier.
        /// </summary>
        public readonly Outputs.GalleryImageIdentifierResponse Identifier;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
        /// </summary>
        public readonly string OsState;
        /// <summary>
        /// This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux**
        /// </summary>
        public readonly string OsType;
        /// <summary>
        /// The privacy statement uri.
        /// </summary>
        public readonly string? PrivacyStatementUri;
        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Describes the gallery image definition purchase plan. This is used by marketplace images.
        /// </summary>
        public readonly Outputs.ImagePurchasePlanResponse? PurchasePlan;
        /// <summary>
        /// The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
        /// </summary>
        public readonly Outputs.RecommendedMachineConfigurationResponse? Recommended;
        /// <summary>
        /// The release note uri.
        /// </summary>
        public readonly string? ReleaseNoteUri;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetGalleryImageResult(
            string? description,

            Outputs.DisallowedResponse? disallowed,

            string? endOfLifeDate,

            string? eula,

            ImmutableArray<Outputs.GalleryImageFeatureResponse> features,

            string? hyperVGeneration,

            string id,

            Outputs.GalleryImageIdentifierResponse identifier,

            string location,

            string name,

            string osState,

            string osType,

            string? privacyStatementUri,

            string provisioningState,

            Outputs.ImagePurchasePlanResponse? purchasePlan,

            Outputs.RecommendedMachineConfigurationResponse? recommended,

            string? releaseNoteUri,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Description = description;
            Disallowed = disallowed;
            EndOfLifeDate = endOfLifeDate;
            Eula = eula;
            Features = features;
            HyperVGeneration = hyperVGeneration;
            Id = id;
            Identifier = identifier;
            Location = location;
            Name = name;
            OsState = osState;
            OsType = osType;
            PrivacyStatementUri = privacyStatementUri;
            ProvisioningState = provisioningState;
            PurchasePlan = purchasePlan;
            Recommended = recommended;
            ReleaseNoteUri = releaseNoteUri;
            Tags = tags;
            Type = type;
        }
    }
}
