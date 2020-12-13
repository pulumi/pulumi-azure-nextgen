// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20180401
{
    public static class GetImage
    {
        public static Task<GetImageResult> InvokeAsync(GetImageArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetImageResult>("azure-nextgen:compute/v20180401:getImage", args ?? new GetImageArgs(), options.WithVersion());
    }


    public sealed class GetImageArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The expand expression to apply on the operation.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the image.
        /// </summary>
        [Input("imageName", required: true)]
        public string ImageName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetImageArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetImageResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The source virtual machine from which Image is created.
        /// </summary>
        public readonly Outputs.SubResourceResponse? SourceVirtualMachine;
        /// <summary>
        /// Specifies the storage settings for the virtual machine disks.
        /// </summary>
        public readonly Outputs.ImageStorageProfileResponse? StorageProfile;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetImageResult(
            string id,

            string location,

            string name,

            string provisioningState,

            Outputs.SubResourceResponse? sourceVirtualMachine,

            Outputs.ImageStorageProfileResponse? storageProfile,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            SourceVirtualMachine = sourceVirtualMachine;
            StorageProfile = storageProfile;
            Tags = tags;
            Type = type;
        }
    }
}
