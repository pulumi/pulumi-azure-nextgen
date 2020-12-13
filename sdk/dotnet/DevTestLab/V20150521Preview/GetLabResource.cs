// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20150521Preview
{
    public static class GetLabResource
    {
        public static Task<GetLabResourceResult> InvokeAsync(GetLabResourceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLabResourceResult>("azure-nextgen:devtestlab/v20150521preview:getLabResource", args ?? new GetLabResourceArgs(), options.WithVersion());
    }


    public sealed class GetLabResourceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetLabResourceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLabResourceResult
    {
        /// <summary>
        /// The artifact storage account of the lab.
        /// </summary>
        public readonly string? ArtifactsStorageAccount;
        /// <summary>
        /// The creation date of the lab.
        /// </summary>
        public readonly string? CreatedDate;
        /// <summary>
        /// The lab's default storage account.
        /// </summary>
        public readonly string? DefaultStorageAccount;
        /// <summary>
        /// The default virtual network identifier of the lab.
        /// </summary>
        public readonly string? DefaultVirtualNetworkId;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The type of the lab storage.
        /// </summary>
        public readonly string? LabStorageType;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The storage accounts of the lab.
        /// </summary>
        public readonly ImmutableArray<string> StorageAccounts;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string? Type;
        /// <summary>
        /// The name of the key vault of the lab.
        /// </summary>
        public readonly string? VaultName;

        [OutputConstructor]
        private GetLabResourceResult(
            string? artifactsStorageAccount,

            string? createdDate,

            string? defaultStorageAccount,

            string? defaultVirtualNetworkId,

            string? id,

            string? labStorageType,

            string? location,

            string? name,

            string? provisioningState,

            ImmutableArray<string> storageAccounts,

            ImmutableDictionary<string, string>? tags,

            string? type,

            string? vaultName)
        {
            ArtifactsStorageAccount = artifactsStorageAccount;
            CreatedDate = createdDate;
            DefaultStorageAccount = defaultStorageAccount;
            DefaultVirtualNetworkId = defaultVirtualNetworkId;
            Id = id;
            LabStorageType = labStorageType;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            StorageAccounts = storageAccounts;
            Tags = tags;
            Type = type;
            VaultName = vaultName;
        }
    }
}
