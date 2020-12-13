// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.Latest
{
    public static class GetStorageInsightConfig
    {
        public static Task<GetStorageInsightConfigResult> InvokeAsync(GetStorageInsightConfigArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStorageInsightConfigResult>("azure-nextgen:operationalinsights/latest:getStorageInsightConfig", args ?? new GetStorageInsightConfigArgs(), options.WithVersion());
    }


    public sealed class GetStorageInsightConfigArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the storageInsightsConfigs resource
        /// </summary>
        [Input("storageInsightName", required: true)]
        public string StorageInsightName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetStorageInsightConfigArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStorageInsightConfigResult
    {
        /// <summary>
        /// The names of the blob containers that the workspace should read
        /// </summary>
        public readonly ImmutableArray<string> Containers;
        /// <summary>
        /// The ETag of the storage insight.
        /// </summary>
        public readonly string? ETag;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The status of the storage insight
        /// </summary>
        public readonly Outputs.StorageInsightStatusResponse Status;
        /// <summary>
        /// The storage account connection details
        /// </summary>
        public readonly Outputs.StorageAccountResponse StorageAccount;
        /// <summary>
        /// The names of the Azure tables that the workspace should read
        /// </summary>
        public readonly ImmutableArray<string> Tables;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetStorageInsightConfigResult(
            ImmutableArray<string> containers,

            string? eTag,

            string id,

            string name,

            Outputs.StorageInsightStatusResponse status,

            Outputs.StorageAccountResponse storageAccount,

            ImmutableArray<string> tables,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Containers = containers;
            ETag = eTag;
            Id = id;
            Name = name;
            Status = status;
            StorageAccount = storageAccount;
            Tables = tables;
            Tags = tags;
            Type = type;
        }
    }
}
