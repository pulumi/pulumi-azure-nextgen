// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.V20190601
{
    public static class GetBlobContainerImmutabilityPolicy
    {
        public static Task<GetBlobContainerImmutabilityPolicyResult> InvokeAsync(GetBlobContainerImmutabilityPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBlobContainerImmutabilityPolicyResult>("azure-nextgen:storage/v20190601:getBlobContainerImmutabilityPolicy", args ?? new GetBlobContainerImmutabilityPolicyArgs(), options.WithVersion());
    }


    public sealed class GetBlobContainerImmutabilityPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
        /// </summary>
        [Input("containerName", required: true)]
        public string ContainerName { get; set; } = null!;

        /// <summary>
        /// The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
        /// </summary>
        [Input("immutabilityPolicyName", required: true)]
        public string ImmutabilityPolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetBlobContainerImmutabilityPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBlobContainerImmutabilityPolicyResult
    {
        /// <summary>
        /// This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API
        /// </summary>
        public readonly bool? AllowProtectedAppendWrites;
        /// <summary>
        /// Resource Etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The immutability period for the blobs in the container since the policy creation, in days.
        /// </summary>
        public readonly int? ImmutabilityPeriodSinceCreationInDays;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBlobContainerImmutabilityPolicyResult(
            bool? allowProtectedAppendWrites,

            string etag,

            string id,

            int? immutabilityPeriodSinceCreationInDays,

            string name,

            string state,

            string type)
        {
            AllowProtectedAppendWrites = allowProtectedAppendWrites;
            Etag = etag;
            Id = id;
            ImmutabilityPeriodSinceCreationInDays = immutabilityPeriodSinceCreationInDays;
            Name = name;
            State = state;
            Type = type;
        }
    }
}
