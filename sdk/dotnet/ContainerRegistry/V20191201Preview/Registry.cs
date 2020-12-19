// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview
{
    /// <summary>
    /// An object that represents a container registry.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:containerregistry/v20191201preview:Registry")]
    public partial class Registry : Pulumi.CustomResource
    {
        /// <summary>
        /// The value that indicates whether the admin user is enabled.
        /// </summary>
        [Output("adminUserEnabled")]
        public Output<bool?> AdminUserEnabled { get; private set; } = null!;

        /// <summary>
        /// The creation date of the container registry in ISO8601 format.
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// Enable a single data endpoint per region for serving data.
        /// </summary>
        [Output("dataEndpointEnabled")]
        public Output<bool?> DataEndpointEnabled { get; private set; } = null!;

        /// <summary>
        /// List of host names that will serve data when dataEndpointEnabled is true.
        /// </summary>
        [Output("dataEndpointHostNames")]
        public Output<ImmutableArray<string>> DataEndpointHostNames { get; private set; } = null!;

        /// <summary>
        /// The encryption settings of container registry.
        /// </summary>
        [Output("encryption")]
        public Output<Outputs.EncryptionPropertyResponse?> Encryption { get; private set; } = null!;

        /// <summary>
        /// The identity of the container registry.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.IdentityPropertiesResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// The location of the resource. This cannot be changed after the resource is created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The URL that can be used to log into the container registry.
        /// </summary>
        [Output("loginServer")]
        public Output<string> LoginServer { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The network rule set for a container registry.
        /// </summary>
        [Output("networkRuleSet")]
        public Output<Outputs.NetworkRuleSetResponse?> NetworkRuleSet { get; private set; } = null!;

        /// <summary>
        /// The policies for a container registry.
        /// </summary>
        [Output("policies")]
        public Output<Outputs.PoliciesResponse?> Policies { get; private set; } = null!;

        /// <summary>
        /// List of private endpoint connections for a container registry.
        /// </summary>
        [Output("privateEndpointConnections")]
        public Output<ImmutableArray<Outputs.PrivateEndpointConnectionResponse>> PrivateEndpointConnections { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the container registry at the time the operation was called.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Whether or not public network access is allowed for the container registry.
        /// </summary>
        [Output("publicNetworkAccess")]
        public Output<string?> PublicNetworkAccess { get; private set; } = null!;

        /// <summary>
        /// The SKU of the container registry.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// The status of the container registry at the time the operation was called.
        /// </summary>
        [Output("status")]
        public Output<Outputs.StatusResponse> Status { get; private set; } = null!;

        /// <summary>
        /// The properties of the storage account for the container registry. Only applicable to Classic SKU.
        /// </summary>
        [Output("storageAccount")]
        public Output<Outputs.StorageAccountPropertiesResponse?> StorageAccount { get; private set; } = null!;

        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Registry resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Registry(string name, RegistryArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20191201preview:Registry", name, args ?? new RegistryArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Registry(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20191201preview:Registry", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/latest:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20160627preview:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20170301:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20170601preview:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20171001:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20190501:Registry"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20201101preview:Registry"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Registry resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Registry Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Registry(name, id, options);
        }
    }

    public sealed class RegistryArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The value that indicates whether the admin user is enabled.
        /// </summary>
        [Input("adminUserEnabled")]
        public Input<bool>? AdminUserEnabled { get; set; }

        /// <summary>
        /// Enable a single data endpoint per region for serving data.
        /// </summary>
        [Input("dataEndpointEnabled")]
        public Input<bool>? DataEndpointEnabled { get; set; }

        /// <summary>
        /// The encryption settings of container registry.
        /// </summary>
        [Input("encryption")]
        public Input<Inputs.EncryptionPropertyArgs>? Encryption { get; set; }

        /// <summary>
        /// The identity of the container registry.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.IdentityPropertiesArgs>? Identity { get; set; }

        /// <summary>
        /// The location of the resource. This cannot be changed after the resource is created.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The network rule set for a container registry.
        /// </summary>
        [Input("networkRuleSet")]
        public Input<Inputs.NetworkRuleSetArgs>? NetworkRuleSet { get; set; }

        /// <summary>
        /// The policies for a container registry.
        /// </summary>
        [Input("policies")]
        public Input<Inputs.PoliciesArgs>? Policies { get; set; }

        /// <summary>
        /// Whether or not public network access is allowed for the container registry.
        /// </summary>
        [Input("publicNetworkAccess")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview.PublicNetworkAccess>? PublicNetworkAccess { get; set; }

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
        /// The SKU of the container registry.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.SkuArgs> Sku { get; set; } = null!;

        /// <summary>
        /// The properties of the storage account for the container registry. Only applicable to Classic SKU.
        /// </summary>
        [Input("storageAccount")]
        public Input<Inputs.StorageAccountPropertiesArgs>? StorageAccount { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public RegistryArgs()
        {
        }
    }
}
