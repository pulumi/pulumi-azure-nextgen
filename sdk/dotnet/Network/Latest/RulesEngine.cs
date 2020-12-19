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
    /// A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
    /// Latest API Version: 2020-05-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/latest:RulesEngine")]
    public partial class RulesEngine : Pulumi.CustomResource
    {
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
        /// A list of rules that define a particular Rules Engine Configuration.
        /// </summary>
        [Output("rules")]
        public Output<ImmutableArray<Outputs.RulesEngineRuleResponse>> Rules { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a RulesEngine resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RulesEngine(string name, RulesEngineArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:RulesEngine", name, args ?? new RulesEngineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RulesEngine(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:RulesEngine", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200101:RulesEngine"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:RulesEngine"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:RulesEngine"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RulesEngine resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RulesEngine Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new RulesEngine(name, id, options);
        }
    }

    public sealed class RulesEngineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the Front Door which is globally unique.
        /// </summary>
        [Input("frontDoorName", required: true)]
        public Input<string> FrontDoorName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("rules")]
        private InputList<Inputs.RulesEngineRuleArgs>? _rules;

        /// <summary>
        /// A list of rules that define a particular Rules Engine Configuration.
        /// </summary>
        public InputList<Inputs.RulesEngineRuleArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<Inputs.RulesEngineRuleArgs>());
            set => _rules = value;
        }

        /// <summary>
        /// Name of the Rules Engine which is unique within the Front Door.
        /// </summary>
        [Input("rulesEngineName", required: true)]
        public Input<string> RulesEngineName { get; set; } = null!;

        public RulesEngineArgs()
        {
        }
    }
}
