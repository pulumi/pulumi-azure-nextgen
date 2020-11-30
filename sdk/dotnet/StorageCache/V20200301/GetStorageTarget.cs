// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.V20200301
{
    public static class GetStorageTarget
    {
        public static Task<GetStorageTargetResult> InvokeAsync(GetStorageTargetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStorageTargetResult>("azure-nextgen:storagecache/v20200301:getStorageTarget", args ?? new GetStorageTargetArgs(), options.WithVersion());
    }


    public sealed class GetStorageTargetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        /// </summary>
        [Input("cacheName", required: true)]
        public string CacheName { get; set; } = null!;

        /// <summary>
        /// Target resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        /// </summary>
        [Input("storageTargetName", required: true)]
        public string StorageTargetName { get; set; } = null!;

        public GetStorageTargetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStorageTargetResult
    {
        /// <summary>
        /// Properties when targetType is clfs.
        /// </summary>
        public readonly Outputs.ClfsTargetResponse? Clfs;
        /// <summary>
        /// List of Cache namespace junctions to target for namespace associations.
        /// </summary>
        public readonly ImmutableArray<Outputs.NamespaceJunctionResponse> Junctions;
        /// <summary>
        /// Region name string.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Name of the Storage Target.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties when targetType is nfs3.
        /// </summary>
        public readonly Outputs.Nfs3TargetResponse? Nfs3;
        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The system meta data relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Type of the Storage Target.
        /// </summary>
        public readonly string TargetType;
        /// <summary>
        /// Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Properties when targetType is unknown.
        /// </summary>
        public readonly Outputs.UnknownTargetResponse? Unknown;

        [OutputConstructor]
        private GetStorageTargetResult(
            Outputs.ClfsTargetResponse? clfs,

            ImmutableArray<Outputs.NamespaceJunctionResponse> junctions,

            string location,

            string name,

            Outputs.Nfs3TargetResponse? nfs3,

            string? provisioningState,

            Outputs.SystemDataResponse systemData,

            string targetType,

            string type,

            Outputs.UnknownTargetResponse? unknown)
        {
            Clfs = clfs;
            Junctions = junctions;
            Location = location;
            Name = name;
            Nfs3 = nfs3;
            ProvisioningState = provisioningState;
            SystemData = systemData;
            TargetType = targetType;
            Type = type;
            Unknown = unknown;
        }
    }
}
