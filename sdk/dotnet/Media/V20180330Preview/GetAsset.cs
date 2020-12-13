// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180330Preview
{
    public static class GetAsset
    {
        public static Task<GetAssetResult> InvokeAsync(GetAssetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAssetResult>("azure-nextgen:media/v20180330preview:getAsset", args ?? new GetAssetArgs(), options.WithVersion());
    }


    public sealed class GetAssetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The Asset name.
        /// </summary>
        [Input("assetName", required: true)]
        public string AssetName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAssetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAssetResult
    {
        /// <summary>
        /// The alternate ID of the Asset.
        /// </summary>
        public readonly string? AlternateId;
        /// <summary>
        /// The Asset ID.
        /// </summary>
        public readonly string AssetId;
        /// <summary>
        /// The name of the asset blob container.
        /// </summary>
        public readonly string? Container;
        /// <summary>
        /// The creation date of the Asset.
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// The Asset description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Fully qualified resource ID for the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The last modified date of the Asset.
        /// </summary>
        public readonly string LastModified;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The name of the storage account.
        /// </summary>
        public readonly string? StorageAccountName;
        /// <summary>
        /// The Asset encryption format. One of None or MediaStorageEncryption.
        /// </summary>
        public readonly string StorageEncryptionFormat;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAssetResult(
            string? alternateId,

            string assetId,

            string? container,

            string created,

            string? description,

            string id,

            string lastModified,

            string name,

            string? storageAccountName,

            string storageEncryptionFormat,

            string type)
        {
            AlternateId = alternateId;
            AssetId = assetId;
            Container = container;
            Created = created;
            Description = description;
            Id = id;
            LastModified = lastModified;
            Name = name;
            StorageAccountName = storageAccountName;
            StorageEncryptionFormat = storageEncryptionFormat;
            Type = type;
        }
    }
}
