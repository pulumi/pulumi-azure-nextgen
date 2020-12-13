// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.Latest
{
    public static class GetBlobServiceProperties
    {
        public static Task<GetBlobServicePropertiesResult> InvokeAsync(GetBlobServicePropertiesArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBlobServicePropertiesResult>("azure-nextgen:storage/latest:getBlobServiceProperties", args ?? new GetBlobServicePropertiesArgs(), options.WithVersion());
    }


    public sealed class GetBlobServicePropertiesArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
        /// </summary>
        [Input("blobServicesName", required: true)]
        public string BlobServicesName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetBlobServicePropertiesArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBlobServicePropertiesResult
    {
        /// <summary>
        /// Deprecated in favor of isVersioningEnabled property.
        /// </summary>
        public readonly bool? AutomaticSnapshotPolicyEnabled;
        /// <summary>
        /// The blob service properties for change feed events.
        /// </summary>
        public readonly Outputs.ChangeFeedResponse? ChangeFeed;
        /// <summary>
        /// The blob service properties for container soft delete.
        /// </summary>
        public readonly Outputs.DeleteRetentionPolicyResponse? ContainerDeleteRetentionPolicy;
        /// <summary>
        /// Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
        /// </summary>
        public readonly Outputs.CorsRulesResponse? Cors;
        /// <summary>
        /// DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
        /// </summary>
        public readonly string? DefaultServiceVersion;
        /// <summary>
        /// The blob service properties for blob soft delete.
        /// </summary>
        public readonly Outputs.DeleteRetentionPolicyResponse? DeleteRetentionPolicy;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Versioning is enabled if set to true.
        /// </summary>
        public readonly bool? IsVersioningEnabled;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The blob service properties for blob restore policy.
        /// </summary>
        public readonly Outputs.RestorePolicyPropertiesResponse? RestorePolicy;
        /// <summary>
        /// Sku name and tier.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBlobServicePropertiesResult(
            bool? automaticSnapshotPolicyEnabled,

            Outputs.ChangeFeedResponse? changeFeed,

            Outputs.DeleteRetentionPolicyResponse? containerDeleteRetentionPolicy,

            Outputs.CorsRulesResponse? cors,

            string? defaultServiceVersion,

            Outputs.DeleteRetentionPolicyResponse? deleteRetentionPolicy,

            string id,

            bool? isVersioningEnabled,

            string name,

            Outputs.RestorePolicyPropertiesResponse? restorePolicy,

            Outputs.SkuResponse sku,

            string type)
        {
            AutomaticSnapshotPolicyEnabled = automaticSnapshotPolicyEnabled;
            ChangeFeed = changeFeed;
            ContainerDeleteRetentionPolicy = containerDeleteRetentionPolicy;
            Cors = cors;
            DefaultServiceVersion = defaultServiceVersion;
            DeleteRetentionPolicy = deleteRetentionPolicy;
            Id = id;
            IsVersioningEnabled = isVersioningEnabled;
            Name = name;
            RestorePolicy = restorePolicy;
            Sku = sku;
            Type = type;
        }
    }
}
