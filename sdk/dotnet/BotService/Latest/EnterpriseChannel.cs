// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.Latest
{
    /// <summary>
    /// Enterprise Channel resource definition
    /// </summary>
    public partial class EnterpriseChannel : Pulumi.CustomResource
    {
        /// <summary>
        /// Entity Tag
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// Required. Gets or sets the Kind of the resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The set of properties specific to an Enterprise Channel resource.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.EnterpriseChannelPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// Gets or sets the SKU of the resource.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a EnterpriseChannel resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public EnterpriseChannel(string name, EnterpriseChannelArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:botservice/latest:EnterpriseChannel", name, args ?? new EnterpriseChannelArgs(), MakeResourceOptions(options, ""))
        {
        }

        private EnterpriseChannel(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:botservice/latest:EnterpriseChannel", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:botservice/v20180712:EnterpriseChannel"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing EnterpriseChannel resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static EnterpriseChannel Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new EnterpriseChannel(name, id, options);
        }
    }

    public sealed class EnterpriseChannelArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Entity Tag
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Required. Gets or sets the Kind of the resource.
        /// </summary>
        [Input("kind")]
        public InputUnion<string, Pulumi.AzureNextGen.BotService.Latest.Kind>? Kind { get; set; }

        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The set of properties specific to an Enterprise Channel resource.
        /// </summary>
        [Input("properties")]
        public Input<Inputs.EnterpriseChannelPropertiesArgs>? Properties { get; set; }

        /// <summary>
        /// The name of the Bot resource group in the user subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Bot resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// Gets or sets the SKU of the resource.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public EnterpriseChannelArgs()
        {
        }
    }
}
