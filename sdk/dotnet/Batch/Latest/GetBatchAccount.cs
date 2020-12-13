// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.Latest
{
    public static class GetBatchAccount
    {
        public static Task<GetBatchAccountResult> InvokeAsync(GetBatchAccountArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBatchAccountResult>("azure-nextgen:batch/latest:getBatchAccount", args ?? new GetBatchAccountArgs(), options.WithVersion());
    }


    public sealed class GetBatchAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Batch account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the Batch account.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetBatchAccountArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBatchAccountResult
    {
        /// <summary>
        /// The account endpoint used to interact with the Batch service.
        /// </summary>
        public readonly string AccountEndpoint;
        public readonly int ActiveJobAndJobScheduleQuota;
        /// <summary>
        /// Contains information about the auto-storage account associated with a Batch account.
        /// </summary>
        public readonly Outputs.AutoStoragePropertiesResponse AutoStorage;
        /// <summary>
        /// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        public readonly int DedicatedCoreQuota;
        /// <summary>
        /// A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualMachineFamilyCoreQuotaResponse> DedicatedCoreQuotaPerVMFamily;
        /// <summary>
        /// Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
        /// </summary>
        public readonly bool DedicatedCoreQuotaPerVMFamilyEnforced;
        /// <summary>
        /// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
        /// </summary>
        public readonly Outputs.EncryptionPropertiesResponse Encryption;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the Batch account.
        /// </summary>
        public readonly Outputs.BatchAccountIdentityResponse? Identity;
        /// <summary>
        /// Identifies the Azure key vault associated with a Batch account.
        /// </summary>
        public readonly Outputs.KeyVaultReferenceResponse KeyVaultReference;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        public readonly int LowPriorityCoreQuota;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The allocation mode for creating pools in the Batch account.
        /// </summary>
        public readonly string PoolAllocationMode;
        public readonly int PoolQuota;
        /// <summary>
        /// List of private endpoint connections associated with the Batch account
        /// </summary>
        public readonly ImmutableArray<Outputs.PrivateEndpointConnectionResponse> PrivateEndpointConnections;
        /// <summary>
        /// The provisioned state of the resource
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// If not specified, the default value is 'enabled'.
        /// </summary>
        public readonly string PublicNetworkAccess;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBatchAccountResult(
            string accountEndpoint,

            int activeJobAndJobScheduleQuota,

            Outputs.AutoStoragePropertiesResponse autoStorage,

            int dedicatedCoreQuota,

            ImmutableArray<Outputs.VirtualMachineFamilyCoreQuotaResponse> dedicatedCoreQuotaPerVMFamily,

            bool dedicatedCoreQuotaPerVMFamilyEnforced,

            Outputs.EncryptionPropertiesResponse encryption,

            string id,

            Outputs.BatchAccountIdentityResponse? identity,

            Outputs.KeyVaultReferenceResponse keyVaultReference,

            string location,

            int lowPriorityCoreQuota,

            string name,

            string poolAllocationMode,

            int poolQuota,

            ImmutableArray<Outputs.PrivateEndpointConnectionResponse> privateEndpointConnections,

            string provisioningState,

            string publicNetworkAccess,

            ImmutableDictionary<string, string> tags,

            string type)
        {
            AccountEndpoint = accountEndpoint;
            ActiveJobAndJobScheduleQuota = activeJobAndJobScheduleQuota;
            AutoStorage = autoStorage;
            DedicatedCoreQuota = dedicatedCoreQuota;
            DedicatedCoreQuotaPerVMFamily = dedicatedCoreQuotaPerVMFamily;
            DedicatedCoreQuotaPerVMFamilyEnforced = dedicatedCoreQuotaPerVMFamilyEnforced;
            Encryption = encryption;
            Id = id;
            Identity = identity;
            KeyVaultReference = keyVaultReference;
            Location = location;
            LowPriorityCoreQuota = lowPriorityCoreQuota;
            Name = name;
            PoolAllocationMode = poolAllocationMode;
            PoolQuota = poolQuota;
            PrivateEndpointConnections = privateEndpointConnections;
            ProvisioningState = provisioningState;
            PublicNetworkAccess = publicNetworkAccess;
            Tags = tags;
            Type = type;
        }
    }
}
