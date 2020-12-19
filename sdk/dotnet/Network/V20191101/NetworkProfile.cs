// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191101
{
    /// <summary>
    /// Network profile resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20191101:NetworkProfile")]
    public partial class NetworkProfile : Pulumi.CustomResource
    {
        /// <summary>
        /// List of chid container network interface configurations.
        /// </summary>
        [Output("containerNetworkInterfaceConfigurations")]
        public Output<ImmutableArray<Outputs.ContainerNetworkInterfaceConfigurationResponse>> ContainerNetworkInterfaceConfigurations { get; private set; } = null!;

        /// <summary>
        /// List of child container network interfaces.
        /// </summary>
        [Output("containerNetworkInterfaces")]
        public Output<ImmutableArray<Outputs.ContainerNetworkInterfaceResponse>> ContainerNetworkInterfaces { get; private set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the network profile resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The resource GUID property of the network profile resource.
        /// </summary>
        [Output("resourceGuid")]
        public Output<string> ResourceGuid { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a NetworkProfile resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NetworkProfile(string name, NetworkProfileArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20191101:NetworkProfile", name, args ?? new NetworkProfileArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NetworkProfile(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20191101:NetworkProfile", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:NetworkProfile"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:NetworkProfile"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing NetworkProfile resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NetworkProfile Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NetworkProfile(name, id, options);
        }
    }

    public sealed class NetworkProfileArgs : Pulumi.ResourceArgs
    {
        [Input("containerNetworkInterfaceConfigurations")]
        private InputList<Inputs.ContainerNetworkInterfaceConfigurationArgs>? _containerNetworkInterfaceConfigurations;

        /// <summary>
        /// List of chid container network interface configurations.
        /// </summary>
        public InputList<Inputs.ContainerNetworkInterfaceConfigurationArgs> ContainerNetworkInterfaceConfigurations
        {
            get => _containerNetworkInterfaceConfigurations ?? (_containerNetworkInterfaceConfigurations = new InputList<Inputs.ContainerNetworkInterfaceConfigurationArgs>());
            set => _containerNetworkInterfaceConfigurations = value;
        }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the network profile.
        /// </summary>
        [Input("networkProfileName", required: true)]
        public Input<string> NetworkProfileName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public NetworkProfileArgs()
        {
        }
    }
}
