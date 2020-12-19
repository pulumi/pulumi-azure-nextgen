// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearning.V20160501Preview
{
    /// <summary>
    /// Instance of an Azure ML web service resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:machinelearning/v20160501preview:WebService")]
    public partial class WebService : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// Contains the property payload that describes the web service.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.WebServicePropertiesForGraphResponse> Properties { get; private set; } = null!;

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
        /// Create a WebService resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public WebService(string name, WebServiceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:machinelearning/v20160501preview:WebService", name, args ?? new WebServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private WebService(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:machinelearning/v20160501preview:WebService", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:machinelearning/latest:WebService"},
                    new Pulumi.Alias { Type = "azure-nextgen:machinelearning/v20170101:WebService"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing WebService resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static WebService Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new WebService(name, id, options);
        }
    }

    public sealed class WebServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Contains the property payload that describes the web service.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.WebServicePropertiesForGraphArgs> Properties { get; set; } = null!;

        /// <summary>
        /// Name of the resource group in which the web service is located.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

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

        /// <summary>
        /// The name of the web service.
        /// </summary>
        [Input("webServiceName", required: true)]
        public Input<string> WebServiceName { get; set; } = null!;

        public WebServiceArgs()
        {
        }
    }
}
