// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    /// <summary>
    /// Defines the properties of an Experiment
    /// Latest API Version: 2019-11-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/latest:Experiment")]
    public partial class Experiment : Pulumi.CustomResource
    {
        /// <summary>
        /// The description of the details or intents of the Experiment
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The state of the Experiment
        /// </summary>
        [Output("enabledState")]
        public Output<string?> EnabledState { get; private set; } = null!;

        /// <summary>
        /// The endpoint A of an experiment
        /// </summary>
        [Output("endpointA")]
        public Output<Outputs.EndpointResponse?> EndpointA { get; private set; } = null!;

        /// <summary>
        /// The endpoint B of an experiment
        /// </summary>
        [Output("endpointB")]
        public Output<Outputs.EndpointResponse?> EndpointB { get; private set; } = null!;

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
        /// Resource status.
        /// </summary>
        [Output("resourceState")]
        public Output<string> ResourceState { get; private set; } = null!;

        /// <summary>
        /// The uri to the Script used in the Experiment
        /// </summary>
        [Output("scriptFileUri")]
        public Output<string> ScriptFileUri { get; private set; } = null!;

        /// <summary>
        /// The description of Experiment status from the server side
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

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
        /// Create a Experiment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Experiment(string name, ExperimentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:Experiment", name, args ?? new ExperimentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Experiment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:Experiment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:Experiment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Experiment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Experiment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Experiment(name, id, options);
        }
    }

    public sealed class ExperimentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The description of the details or intents of the Experiment
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The state of the Experiment
        /// </summary>
        [Input("enabledState")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.Latest.State>? EnabledState { get; set; }

        /// <summary>
        /// The endpoint A of an experiment
        /// </summary>
        [Input("endpointA")]
        public Input<Inputs.EndpointArgs>? EndpointA { get; set; }

        /// <summary>
        /// The endpoint B of an experiment
        /// </summary>
        [Input("endpointB")]
        public Input<Inputs.EndpointArgs>? EndpointB { get; set; }

        /// <summary>
        /// The Experiment identifier associated with the Experiment
        /// </summary>
        [Input("experimentName", required: true)]
        public Input<string> ExperimentName { get; set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The Profile identifier associated with the Tenant and Partner
        /// </summary>
        [Input("profileName", required: true)]
        public Input<string> ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
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

        public ExperimentArgs()
        {
        }
    }
}
