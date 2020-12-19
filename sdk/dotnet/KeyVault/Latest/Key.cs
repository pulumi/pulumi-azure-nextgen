// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.Latest
{
    /// <summary>
    /// The key resource.
    /// Latest API Version: 2019-09-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:keyvault/latest:Key")]
    public partial class Key : Pulumi.CustomResource
    {
        /// <summary>
        /// The attributes of the key.
        /// </summary>
        [Output("attributes")]
        public Output<Outputs.KeyAttributesResponse?> Attributes { get; private set; } = null!;

        /// <summary>
        /// The elliptic curve name. For valid values, see JsonWebKeyCurveName.
        /// </summary>
        [Output("curveName")]
        public Output<string?> CurveName { get; private set; } = null!;

        [Output("keyOps")]
        public Output<ImmutableArray<string>> KeyOps { get; private set; } = null!;

        /// <summary>
        /// The key size in bits. For example: 2048, 3072, or 4096 for RSA.
        /// </summary>
        [Output("keySize")]
        public Output<int?> KeySize { get; private set; } = null!;

        /// <summary>
        /// The URI to retrieve the current version of the key.
        /// </summary>
        [Output("keyUri")]
        public Output<string> KeyUri { get; private set; } = null!;

        /// <summary>
        /// The URI to retrieve the specific version of the key.
        /// </summary>
        [Output("keyUriWithVersion")]
        public Output<string> KeyUriWithVersion { get; private set; } = null!;

        /// <summary>
        /// The type of the key. For valid values, see JsonWebKeyType.
        /// </summary>
        [Output("kty")]
        public Output<string?> Kty { get; private set; } = null!;

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
        /// Create a Key resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Key(string name, KeyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/latest:Key", name, args ?? new KeyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Key(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/latest:Key", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20190901:Key"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Key resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Key Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Key(name, id, options);
        }
    }

    public sealed class KeyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the key to be created.
        /// </summary>
        [Input("keyName", required: true)]
        public Input<string> KeyName { get; set; } = null!;

        /// <summary>
        /// The properties of the key to be created.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.KeyPropertiesArgs> Properties { get; set; } = null!;

        /// <summary>
        /// The name of the resource group which contains the specified key vault.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags that will be assigned to the key.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The name of the key vault which contains the key to be created.
        /// </summary>
        [Input("vaultName", required: true)]
        public Input<string> VaultName { get; set; } = null!;

        public KeyArgs()
        {
        }
    }
}
