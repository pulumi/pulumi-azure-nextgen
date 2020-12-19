// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EngagementFabric.V20180901Preview
{
    /// <summary>
    /// The EngagementFabric channel
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:engagementfabric/v20180901preview:Channel")]
    public partial class Channel : Pulumi.CustomResource
    {
        /// <summary>
        /// The functions to be enabled for the channel
        /// </summary>
        [Output("channelFunctions")]
        public Output<ImmutableArray<string>> ChannelFunctions { get; private set; } = null!;

        /// <summary>
        /// The channel type
        /// </summary>
        [Output("channelType")]
        public Output<string> ChannelType { get; private set; } = null!;

        /// <summary>
        /// The channel credentials
        /// </summary>
        [Output("credentials")]
        public Output<ImmutableDictionary<string, string>?> Credentials { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The fully qualified type of the resource
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Channel resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Channel(string name, ChannelArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:engagementfabric/v20180901preview:Channel", name, args ?? new ChannelArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Channel(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:engagementfabric/v20180901preview:Channel", name, null, MakeResourceOptions(options, id))
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
        /// Get an existing Channel resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Channel Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Channel(name, id, options);
        }
    }

    public sealed class ChannelArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Account Name
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        [Input("channelFunctions")]
        private InputList<string>? _channelFunctions;

        /// <summary>
        /// The functions to be enabled for the channel
        /// </summary>
        public InputList<string> ChannelFunctions
        {
            get => _channelFunctions ?? (_channelFunctions = new InputList<string>());
            set => _channelFunctions = value;
        }

        /// <summary>
        /// Channel Name
        /// </summary>
        [Input("channelName", required: true)]
        public Input<string> ChannelName { get; set; } = null!;

        /// <summary>
        /// The channel type
        /// </summary>
        [Input("channelType", required: true)]
        public Input<string> ChannelType { get; set; } = null!;

        [Input("credentials")]
        private InputMap<string>? _credentials;

        /// <summary>
        /// The channel credentials
        /// </summary>
        public InputMap<string> Credentials
        {
            get => _credentials ?? (_credentials = new InputMap<string>());
            set => _credentials = value;
        }

        /// <summary>
        /// Resource Group Name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ChannelArgs()
        {
        }
    }
}
