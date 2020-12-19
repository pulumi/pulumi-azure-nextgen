// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Attestation.V20201001
{
    /// <summary>
    /// Attestation service response message.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:attestation/v20201001:AttestationProvider")]
    public partial class AttestationProvider : Pulumi.CustomResource
    {
        /// <summary>
        /// Gets the uri of attestation service
        /// </summary>
        [Output("attestUri")]
        public Output<string?> AttestUri { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Status of attestation service.
        /// </summary>
        [Output("status")]
        public Output<string?> Status { get; private set; } = null!;

        /// <summary>
        /// The system metadata relating to this resource
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Trust model for the attestation service instance.
        /// </summary>
        [Output("trustModel")]
        public Output<string?> TrustModel { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a AttestationProvider resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AttestationProvider(string name, AttestationProviderArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:attestation/v20201001:AttestationProvider", name, args ?? new AttestationProviderArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AttestationProvider(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:attestation/v20201001:AttestationProvider", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:attestation/latest:AttestationProvider"},
                    new Pulumi.Alias { Type = "azure-nextgen:attestation/v20180901preview:AttestationProvider"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AttestationProvider resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AttestationProvider Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AttestationProvider(name, id, options);
        }
    }

    public sealed class AttestationProviderArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The supported Azure location where the attestation service instance should be created.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Properties of the attestation service instance
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.AttestationServiceCreationSpecificParamsArgs> Properties { get; set; } = null!;

        /// <summary>
        /// Name of the attestation service instance.
        /// </summary>
        [Input("providerName", required: true)]
        public Input<string> ProviderName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags that will be assigned to the attestation service instance.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public AttestationProviderArgs()
        {
        }
    }
}
