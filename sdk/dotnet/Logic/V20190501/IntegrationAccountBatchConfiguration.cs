// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20190501
{
    /// <summary>
    /// The batch configuration resource definition.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:logic/v20190501:IntegrationAccountBatchConfiguration")]
    public partial class IntegrationAccountBatchConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// The resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Gets the resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The batch configuration properties.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.BatchConfigurationPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// The resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Gets the resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a IntegrationAccountBatchConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IntegrationAccountBatchConfiguration(string name, IntegrationAccountBatchConfigurationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20190501:IntegrationAccountBatchConfiguration", name, args ?? new IntegrationAccountBatchConfigurationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IntegrationAccountBatchConfiguration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20190501:IntegrationAccountBatchConfiguration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:logic/latest:IntegrationAccountBatchConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20160601:IntegrationAccountBatchConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20180701preview:IntegrationAccountBatchConfiguration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IntegrationAccountBatchConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IntegrationAccountBatchConfiguration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new IntegrationAccountBatchConfiguration(name, id, options);
        }
    }

    public sealed class IntegrationAccountBatchConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The batch configuration name.
        /// </summary>
        [Input("batchConfigurationName", required: true)]
        public Input<string> BatchConfigurationName { get; set; } = null!;

        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public Input<string> IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The batch configuration properties.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.BatchConfigurationPropertiesArgs> Properties { get; set; } = null!;

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

        public IntegrationAccountBatchConfigurationArgs()
        {
        }
    }
}
