// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DelegatedNetwork.V20200808Preview
{
    /// <summary>
    /// Represents an instance of a orchestrator.
    /// </summary>
    public partial class DelegatedSubnetServiceDetails : Pulumi.CustomResource
    {
        /// <summary>
        /// controller details
        /// </summary>
        [Output("controllerDetails")]
        public Output<Outputs.ControllerDetailsResponse?> ControllerDetails { get; private set; } = null!;

        /// <summary>
        /// Location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The current state of dnc delegated subnet resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource guid.
        /// </summary>
        [Output("resourceGuid")]
        public Output<string> ResourceGuid { get; private set; } = null!;

        /// <summary>
        /// orchestrator details
        /// </summary>
        [Output("subnetDetails")]
        public Output<Outputs.SubnetDetailsResponse?> SubnetDetails { get; private set; } = null!;

        /// <summary>
        /// The resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a DelegatedSubnetServiceDetails resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DelegatedSubnetServiceDetails(string name, DelegatedSubnetServiceDetailsArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:delegatednetwork/v20200808preview:DelegatedSubnetServiceDetails", name, args ?? new DelegatedSubnetServiceDetailsArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DelegatedSubnetServiceDetails(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:delegatednetwork/v20200808preview:DelegatedSubnetServiceDetails", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DelegatedSubnetServiceDetails resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DelegatedSubnetServiceDetails Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DelegatedSubnetServiceDetails(name, id, options);
        }
    }

    public sealed class DelegatedSubnetServiceDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// controller details
        /// </summary>
        [Input("controllerDetails")]
        public Input<Inputs.ControllerDetailsArgs>? ControllerDetails { get; set; }

        /// <summary>
        /// Location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the Azure Resource group of which a given DelegatedNetwork resource is part. This name must be at least 1 character in length, and no more than 90.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// orchestrator details
        /// </summary>
        [Input("subnetDetails")]
        public Input<Inputs.SubnetDetailsArgs>? SubnetDetails { get; set; }

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

        public DelegatedSubnetServiceDetailsArgs()
        {
        }
    }
}