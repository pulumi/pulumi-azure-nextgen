// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.V20180214
{
    /// <summary>
    /// Resource information with extended details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:keyvault/v20180214:Secret")]
    public partial class Secret : Pulumi.CustomResource
    {
        /// <summary>
        /// Azure location of the key vault resource.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Name of the key vault resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Properties of the secret
        /// </summary>
        [Output("properties")]
        public Output<Outputs.SecretPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// Tags assigned to the key vault resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type of the key vault resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Secret resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Secret(string name, SecretArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/v20180214:Secret", name, args ?? new SecretArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Secret(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/v20180214:Secret", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/latest:Secret"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20161001:Secret"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20180214preview:Secret"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20190901:Secret"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20200401preview:Secret"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Secret resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Secret Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Secret(name, id, options);
        }
    }

    public sealed class SecretArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Properties of the secret
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.SecretPropertiesArgs> Properties { get; set; } = null!;

        /// <summary>
        /// The name of the Resource Group to which the vault belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the secret
        /// </summary>
        [Input("secretName", required: true)]
        public Input<string> SecretName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags that will be assigned to the secret. 
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Name of the vault
        /// </summary>
        [Input("vaultName", required: true)]
        public Input<string> VaultName { get; set; } = null!;

        public SecretArgs()
        {
        }
    }
}
