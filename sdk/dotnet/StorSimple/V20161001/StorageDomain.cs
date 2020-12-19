// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20161001
{
    /// <summary>
    /// The storage domain.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:storsimple/v20161001:StorageDomain")]
    public partial class StorageDomain : Pulumi.CustomResource
    {
        /// <summary>
        /// The encryption key used to encrypt the data. This is a user secret.
        /// </summary>
        [Output("encryptionKey")]
        public Output<Outputs.AsymmetricEncryptedSecretResponse?> EncryptionKey { get; private set; } = null!;

        /// <summary>
        /// The encryption status "Enabled | Disabled".
        /// </summary>
        [Output("encryptionStatus")]
        public Output<string> EncryptionStatus { get; private set; } = null!;

        /// <summary>
        /// The name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The storage account credentials.
        /// </summary>
        [Output("storageAccountCredentialIds")]
        public Output<ImmutableArray<string>> StorageAccountCredentialIds { get; private set; } = null!;

        /// <summary>
        /// The type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a StorageDomain resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public StorageDomain(string name, StorageDomainArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:storsimple/v20161001:StorageDomain", name, args ?? new StorageDomainArgs(), MakeResourceOptions(options, ""))
        {
        }

        private StorageDomain(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storsimple/v20161001:StorageDomain", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storsimple/latest:StorageDomain"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing StorageDomain resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static StorageDomain Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new StorageDomain(name, id, options);
        }
    }

    public sealed class StorageDomainArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The encryption key used to encrypt the data. This is a user secret.
        /// </summary>
        [Input("encryptionKey")]
        public Input<Inputs.AsymmetricEncryptedSecretArgs>? EncryptionKey { get; set; }

        /// <summary>
        /// The encryption status "Enabled | Disabled".
        /// </summary>
        [Input("encryptionStatus", required: true)]
        public Input<Pulumi.AzureNextGen.StorSimple.V20161001.EncryptionStatus> EncryptionStatus { get; set; } = null!;

        /// <summary>
        /// The manager name
        /// </summary>
        [Input("managerName", required: true)]
        public Input<string> ManagerName { get; set; } = null!;

        /// <summary>
        /// The resource group name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("storageAccountCredentialIds", required: true)]
        private InputList<string>? _storageAccountCredentialIds;

        /// <summary>
        /// The storage account credentials.
        /// </summary>
        public InputList<string> StorageAccountCredentialIds
        {
            get => _storageAccountCredentialIds ?? (_storageAccountCredentialIds = new InputList<string>());
            set => _storageAccountCredentialIds = value;
        }

        /// <summary>
        /// The storage domain name.
        /// </summary>
        [Input("storageDomainName", required: true)]
        public Input<string> StorageDomainName { get; set; } = null!;

        public StorageDomainArgs()
        {
        }
    }
}
