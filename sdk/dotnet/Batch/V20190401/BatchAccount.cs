// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20190401
{
    /// <summary>
    /// Contains information about an Azure Batch account.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:batch/v20190401:BatchAccount")]
    public partial class BatchAccount : Pulumi.CustomResource
    {
        /// <summary>
        /// The account endpoint used to interact with the Batch service.
        /// </summary>
        [Output("accountEndpoint")]
        public Output<string> AccountEndpoint { get; private set; } = null!;

        [Output("activeJobAndJobScheduleQuota")]
        public Output<int> ActiveJobAndJobScheduleQuota { get; private set; } = null!;

        /// <summary>
        /// Contains information about the auto-storage account associated with a Batch account.
        /// </summary>
        [Output("autoStorage")]
        public Output<Outputs.AutoStoragePropertiesResponse> AutoStorage { get; private set; } = null!;

        /// <summary>
        /// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        [Output("dedicatedCoreQuota")]
        public Output<int> DedicatedCoreQuota { get; private set; } = null!;

        /// <summary>
        /// A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        [Output("dedicatedCoreQuotaPerVMFamily")]
        public Output<ImmutableArray<Outputs.VirtualMachineFamilyCoreQuotaResponse>> DedicatedCoreQuotaPerVMFamily { get; private set; } = null!;

        /// <summary>
        /// Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
        /// </summary>
        [Output("dedicatedCoreQuotaPerVMFamilyEnforced")]
        public Output<bool> DedicatedCoreQuotaPerVMFamilyEnforced { get; private set; } = null!;

        /// <summary>
        /// Identifies the Azure key vault associated with a Batch account.
        /// </summary>
        [Output("keyVaultReference")]
        public Output<Outputs.KeyVaultReferenceResponse> KeyVaultReference { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
        /// </summary>
        [Output("lowPriorityCoreQuota")]
        public Output<int> LowPriorityCoreQuota { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The allocation mode for creating pools in the Batch account.
        /// </summary>
        [Output("poolAllocationMode")]
        public Output<string> PoolAllocationMode { get; private set; } = null!;

        [Output("poolQuota")]
        public Output<int> PoolQuota { get; private set; } = null!;

        /// <summary>
        /// The provisioned state of the resource
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a BatchAccount resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BatchAccount(string name, BatchAccountArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:batch/v20190401:BatchAccount", name, args ?? new BatchAccountArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BatchAccount(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:batch/v20190401:BatchAccount", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:batch/latest:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20151201:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20170101:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20170501:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20170901:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20181201:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20190801:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200301:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200501:BatchAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200901:BatchAccount"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BatchAccount resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BatchAccount Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new BatchAccount(name, id, options);
        }
    }

    public sealed class BatchAccountArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The properties related to the auto-storage account.
        /// </summary>
        [Input("autoStorage")]
        public Input<Inputs.AutoStorageBasePropertiesArgs>? AutoStorage { get; set; }

        /// <summary>
        /// A reference to the Azure key vault associated with the Batch account.
        /// </summary>
        [Input("keyVaultReference")]
        public Input<Inputs.KeyVaultReferenceArgs>? KeyVaultReference { get; set; }

        /// <summary>
        /// The region in which to create the account.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
        /// </summary>
        [Input("poolAllocationMode")]
        public Input<Pulumi.AzureNextGen.Batch.V20190401.PoolAllocationMode>? PoolAllocationMode { get; set; }

        /// <summary>
        /// The name of the resource group that contains the Batch account.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The user-specified tags associated with the account.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public BatchAccountArgs()
        {
        }
    }
}
