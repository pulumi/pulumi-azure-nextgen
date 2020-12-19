// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBoxEdge.Latest
{
    /// <summary>
    /// The storage account credential.
    /// Latest API Version: 2019-08-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:databoxedge/latest:StorageAccountCredential")]
    public partial class StorageAccountCredential : Pulumi.CustomResource
    {
        /// <summary>
        /// Encrypted storage key.
        /// </summary>
        [Output("accountKey")]
        public Output<Outputs.AsymmetricEncryptedSecretResponse?> AccountKey { get; private set; } = null!;

        /// <summary>
        /// Type of storage accessed on the storage account.
        /// </summary>
        [Output("accountType")]
        public Output<string> AccountType { get; private set; } = null!;

        /// <summary>
        /// Alias for the storage account.
        /// </summary>
        [Output("alias")]
        public Output<string> Alias { get; private set; } = null!;

        /// <summary>
        /// Blob end point for private clouds.
        /// </summary>
        [Output("blobDomainName")]
        public Output<string?> BlobDomainName { get; private set; } = null!;

        /// <summary>
        /// Connection string for the storage account. Use this string if username and account key are not specified.
        /// </summary>
        [Output("connectionString")]
        public Output<string?> ConnectionString { get; private set; } = null!;

        /// <summary>
        /// The object name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Signifies whether SSL needs to be enabled or not.
        /// </summary>
        [Output("sslStatus")]
        public Output<string> SslStatus { get; private set; } = null!;

        /// <summary>
        /// Id of the storage account.
        /// </summary>
        [Output("storageAccountId")]
        public Output<string?> StorageAccountId { get; private set; } = null!;

        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Username for the storage account.
        /// </summary>
        [Output("userName")]
        public Output<string?> UserName { get; private set; } = null!;


        /// <summary>
        /// Create a StorageAccountCredential resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public StorageAccountCredential(string name, StorageAccountCredentialArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:databoxedge/latest:StorageAccountCredential", name, args ?? new StorageAccountCredentialArgs(), MakeResourceOptions(options, ""))
        {
        }

        private StorageAccountCredential(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:databoxedge/latest:StorageAccountCredential", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20190301:StorageAccountCredential"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20190701:StorageAccountCredential"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20190801:StorageAccountCredential"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20200501preview:StorageAccountCredential"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static StorageAccountCredential Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new StorageAccountCredential(name, id, options);
        }
    }

    public sealed class StorageAccountCredentialArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Encrypted storage key.
        /// </summary>
        [Input("accountKey")]
        public Input<Inputs.AsymmetricEncryptedSecretArgs>? AccountKey { get; set; }

        /// <summary>
        /// Type of storage accessed on the storage account.
        /// </summary>
        [Input("accountType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataBoxEdge.Latest.AccountType> AccountType { get; set; } = null!;

        /// <summary>
        /// Alias for the storage account.
        /// </summary>
        [Input("alias", required: true)]
        public Input<string> Alias { get; set; } = null!;

        /// <summary>
        /// Blob end point for private clouds.
        /// </summary>
        [Input("blobDomainName")]
        public Input<string>? BlobDomainName { get; set; }

        /// <summary>
        /// Connection string for the storage account. Use this string if username and account key are not specified.
        /// </summary>
        [Input("connectionString")]
        public Input<string>? ConnectionString { get; set; }

        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        /// <summary>
        /// The storage account credential name.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Signifies whether SSL needs to be enabled or not.
        /// </summary>
        [Input("sslStatus", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataBoxEdge.Latest.SSLStatus> SslStatus { get; set; } = null!;

        /// <summary>
        /// Id of the storage account.
        /// </summary>
        [Input("storageAccountId")]
        public Input<string>? StorageAccountId { get; set; }

        /// <summary>
        /// Username for the storage account.
        /// </summary>
        [Input("userName")]
        public Input<string>? UserName { get; set; }

        public StorageAccountCredentialArgs()
        {
        }
    }
}
