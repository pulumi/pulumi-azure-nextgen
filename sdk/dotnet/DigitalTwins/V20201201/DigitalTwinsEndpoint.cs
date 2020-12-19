// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DigitalTwins.V20201201
{
    /// <summary>
    /// DigitalTwinsInstance endpoint resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:digitaltwins/v20201201:DigitalTwinsEndpoint")]
    public partial class DigitalTwinsEndpoint : Pulumi.CustomResource
    {
        /// <summary>
        /// Extension resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// DigitalTwinsInstance endpoint resource properties.
        /// </summary>
        [Output("properties")]
        public Output<Union<Outputs.EventGridResponse, Union<Outputs.EventHubResponse, Outputs.ServiceBusResponse>>> Properties { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a DigitalTwinsEndpoint resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DigitalTwinsEndpoint(string name, DigitalTwinsEndpointArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:digitaltwins/v20201201:DigitalTwinsEndpoint", name, args ?? new DigitalTwinsEndpointArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DigitalTwinsEndpoint(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:digitaltwins/v20201201:DigitalTwinsEndpoint", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:digitaltwins/latest:DigitalTwinsEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:digitaltwins/v20200301preview:DigitalTwinsEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:digitaltwins/v20201031:DigitalTwinsEndpoint"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DigitalTwinsEndpoint resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DigitalTwinsEndpoint Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DigitalTwinsEndpoint(name, id, options);
        }
    }

    public sealed class DigitalTwinsEndpointArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of Endpoint Resource.
        /// </summary>
        [Input("endpointName", required: true)]
        public Input<string> EndpointName { get; set; } = null!;

        /// <summary>
        /// DigitalTwinsInstance endpoint resource properties.
        /// </summary>
        [Input("properties", required: true)]
        public InputUnion<Inputs.EventGridArgs, InputUnion<Inputs.EventHubArgs, Inputs.ServiceBusArgs>> Properties { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the DigitalTwinsInstance.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the DigitalTwinsInstance.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        public DigitalTwinsEndpointArgs()
        {
        }
    }
}
