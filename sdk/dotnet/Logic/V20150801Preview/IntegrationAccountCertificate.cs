// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20150801Preview
{
    [AzureNextGenResourceType("azure-nextgen:logic/v20150801preview:IntegrationAccountCertificate")]
    public partial class IntegrationAccountCertificate : Pulumi.CustomResource
    {
        /// <summary>
        /// The changed time.
        /// </summary>
        [Output("changedTime")]
        public Output<string> ChangedTime { get; private set; } = null!;

        /// <summary>
        /// The created time.
        /// </summary>
        [Output("createdTime")]
        public Output<string> CreatedTime { get; private set; } = null!;

        /// <summary>
        /// The key details in the key vault.
        /// </summary>
        [Output("key")]
        public Output<Outputs.KeyVaultKeyReferenceResponse?> Key { get; private set; } = null!;

        /// <summary>
        /// The resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The metadata.
        /// </summary>
        [Output("metadata")]
        public Output<object?> Metadata { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The public certificate.
        /// </summary>
        [Output("publicCertificate")]
        public Output<string?> PublicCertificate { get; private set; } = null!;

        /// <summary>
        /// The resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string?> Type { get; private set; } = null!;


        /// <summary>
        /// Create a IntegrationAccountCertificate resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IntegrationAccountCertificate(string name, IntegrationAccountCertificateArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20150801preview:IntegrationAccountCertificate", name, args ?? new IntegrationAccountCertificateArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IntegrationAccountCertificate(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20150801preview:IntegrationAccountCertificate", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:logic/latest:IntegrationAccountCertificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20160601:IntegrationAccountCertificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20180701preview:IntegrationAccountCertificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20190501:IntegrationAccountCertificate"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IntegrationAccountCertificate resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IntegrationAccountCertificate Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new IntegrationAccountCertificate(name, id, options);
        }
    }

    public sealed class IntegrationAccountCertificateArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The integration account certificate name.
        /// </summary>
        [Input("certificateName", required: true)]
        public Input<string> CertificateName { get; set; } = null!;

        /// <summary>
        /// The resource id.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public Input<string> IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The key details in the key vault.
        /// </summary>
        [Input("key")]
        public Input<Inputs.KeyVaultKeyReferenceArgs>? Key { get; set; }

        /// <summary>
        /// The resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The metadata.
        /// </summary>
        [Input("metadata")]
        public Input<object>? Metadata { get; set; }

        /// <summary>
        /// The resource name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The public certificate.
        /// </summary>
        [Input("publicCertificate")]
        public Input<string>? PublicCertificate { get; set; }

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The resource type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public IntegrationAccountCertificateArgs()
        {
        }
    }
}
