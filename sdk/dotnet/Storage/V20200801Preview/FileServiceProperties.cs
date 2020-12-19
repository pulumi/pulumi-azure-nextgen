// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.V20200801Preview
{
    /// <summary>
    /// The properties of File services in storage account.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:storage/v20200801preview:FileServiceProperties")]
    public partial class FileServiceProperties : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
        /// </summary>
        [Output("cors")]
        public Output<Outputs.CorsRulesResponse?> Cors { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Protocol settings for file service
        /// </summary>
        [Output("protocolSettings")]
        public Output<Outputs.ProtocolSettingsResponse?> ProtocolSettings { get; private set; } = null!;

        /// <summary>
        /// The file service properties for share soft delete.
        /// </summary>
        [Output("shareDeleteRetentionPolicy")]
        public Output<Outputs.DeleteRetentionPolicyResponse?> ShareDeleteRetentionPolicy { get; private set; } = null!;

        /// <summary>
        /// Sku name and tier.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a FileServiceProperties resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public FileServiceProperties(string name, FileServicePropertiesArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:storage/v20200801preview:FileServiceProperties", name, args ?? new FileServicePropertiesArgs(), MakeResourceOptions(options, ""))
        {
        }

        private FileServiceProperties(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storage/v20200801preview:FileServiceProperties", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storage/latest:FileServiceProperties"},
                    new Pulumi.Alias { Type = "azure-nextgen:storage/v20190401:FileServiceProperties"},
                    new Pulumi.Alias { Type = "azure-nextgen:storage/v20190601:FileServiceProperties"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing FileServiceProperties resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static FileServiceProperties Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new FileServiceProperties(name, id, options);
        }
    }

    public sealed class FileServicePropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
        /// </summary>
        [Input("cors")]
        public Input<Inputs.CorsRulesArgs>? Cors { get; set; }

        /// <summary>
        /// The name of the file Service within the specified storage account. File Service Name must be "default"
        /// </summary>
        [Input("fileServicesName", required: true)]
        public Input<string> FileServicesName { get; set; } = null!;

        /// <summary>
        /// Protocol settings for file service
        /// </summary>
        [Input("protocolSettings")]
        public Input<Inputs.ProtocolSettingsArgs>? ProtocolSettings { get; set; }

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The file service properties for share soft delete.
        /// </summary>
        [Input("shareDeleteRetentionPolicy")]
        public Input<Inputs.DeleteRetentionPolicyArgs>? ShareDeleteRetentionPolicy { get; set; }

        public FileServicePropertiesArgs()
        {
        }
    }
}
