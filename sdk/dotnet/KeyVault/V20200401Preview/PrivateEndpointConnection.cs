// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.V20200401Preview
{
    /// <summary>
    /// Private endpoint connection resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:keyvault/v20200401preview:PrivateEndpointConnection")]
    public partial class PrivateEndpointConnection : Pulumi.CustomResource
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
        /// Properties of the private endpoint object.
        /// </summary>
        [Output("privateEndpoint")]
        public Output<Outputs.PrivateEndpointResponse?> PrivateEndpoint { get; private set; } = null!;

        /// <summary>
        /// Approval state of the private link connection.
        /// </summary>
        [Output("privateLinkServiceConnectionState")]
        public Output<Outputs.PrivateLinkServiceConnectionStateResponse?> PrivateLinkServiceConnectionState { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the private endpoint connection.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

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
        /// Create a PrivateEndpointConnection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrivateEndpointConnection(string name, PrivateEndpointConnectionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/v20200401preview:PrivateEndpointConnection", name, args ?? new PrivateEndpointConnectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrivateEndpointConnection(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:keyvault/v20200401preview:PrivateEndpointConnection", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/latest:PrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20180214:PrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:keyvault/v20190901:PrivateEndpointConnection"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrivateEndpointConnection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrivateEndpointConnection Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PrivateEndpointConnection(name, id, options);
        }
    }

    public sealed class PrivateEndpointConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the private endpoint connection associated with the key vault.
        /// </summary>
        [Input("privateEndpointConnectionName", required: true)]
        public Input<string> PrivateEndpointConnectionName { get; set; } = null!;

        /// <summary>
        /// Approval state of the private link connection.
        /// </summary>
        [Input("privateLinkServiceConnectionState")]
        public Input<Inputs.PrivateLinkServiceConnectionStateArgs>? PrivateLinkServiceConnectionState { get; set; }

        /// <summary>
        /// Name of the resource group that contains the key vault.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the key vault.
        /// </summary>
        [Input("vaultName", required: true)]
        public Input<string> VaultName { get; set; } = null!;

        public PrivateEndpointConnectionArgs()
        {
        }
    }
}
