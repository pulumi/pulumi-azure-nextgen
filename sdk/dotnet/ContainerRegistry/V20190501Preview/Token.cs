// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190501Preview
{
    /// <summary>
    /// An object that represents a token for a container registry.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:containerregistry/v20190501preview:Token")]
    public partial class Token : Pulumi.CustomResource
    {
        /// <summary>
        /// The creation date of scope map.
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// The credentials that can be used for authenticating the token.
        /// </summary>
        [Output("credentials")]
        public Output<Outputs.TokenCredentialsPropertiesResponse?> Credentials { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The resource ID of the scope map to which the token will be associated with.
        /// </summary>
        [Output("scopeMapId")]
        public Output<string?> ScopeMapId { get; private set; } = null!;

        /// <summary>
        /// The status of the token example enabled or disabled.
        /// </summary>
        [Output("status")]
        public Output<string?> Status { get; private set; } = null!;

        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Token resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Token(string name, TokenArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20190501preview:Token", name, args ?? new TokenArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Token(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20190501preview:Token", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20201101preview:Token"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Token resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Token Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Token(name, id, options);
        }
    }

    public sealed class TokenArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The credentials that can be used for authenticating the token.
        /// </summary>
        [Input("credentials")]
        public Input<Inputs.TokenCredentialsPropertiesArgs>? Credentials { get; set; }

        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public Input<string> RegistryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The resource ID of the scope map to which the token will be associated with.
        /// </summary>
        [Input("scopeMapId")]
        public Input<string>? ScopeMapId { get; set; }

        /// <summary>
        /// The status of the token example enabled or disabled.
        /// </summary>
        [Input("status")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20190501Preview.TokenStatus>? Status { get; set; }

        /// <summary>
        /// The name of the token.
        /// </summary>
        [Input("tokenName", required: true)]
        public Input<string> TokenName { get; set; } = null!;

        public TokenArgs()
        {
        }
    }
}
