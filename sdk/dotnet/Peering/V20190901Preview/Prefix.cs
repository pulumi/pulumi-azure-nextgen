// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Peering.V20190901Preview
{
    /// <summary>
    /// The peering service prefix class.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:peering/v20190901preview:Prefix")]
    public partial class Prefix : Pulumi.CustomResource
    {
        /// <summary>
        /// The error message for validation state
        /// </summary>
        [Output("errorMessage")]
        public Output<string> ErrorMessage { get; private set; } = null!;

        /// <summary>
        /// The list of events for peering service prefix
        /// </summary>
        [Output("events")]
        public Output<ImmutableArray<Outputs.PeeringServicePrefixEventResponse>> Events { get; private set; } = null!;

        /// <summary>
        /// The prefix learned type
        /// </summary>
        [Output("learnedType")]
        public Output<string> LearnedType { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The prefix from which your traffic originates.
        /// </summary>
        [Output("prefix")]
        public Output<string?> PrefixValue { get; private set; } = null!;

        /// <summary>
        /// The prefix validation state
        /// </summary>
        [Output("prefixValidationState")]
        public Output<string> PrefixValidationState { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Prefix resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Prefix(string name, PrefixArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:peering/v20190901preview:Prefix", name, args ?? new PrefixArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Prefix(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:peering/v20190901preview:Prefix", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:peering/latest:Prefix"},
                    new Pulumi.Alias { Type = "azure-nextgen:peering/v20190801preview:Prefix"},
                    new Pulumi.Alias { Type = "azure-nextgen:peering/v20200101preview:Prefix"},
                    new Pulumi.Alias { Type = "azure-nextgen:peering/v20200401:Prefix"},
                    new Pulumi.Alias { Type = "azure-nextgen:peering/v20201001:Prefix"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Prefix resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Prefix Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Prefix(name, id, options);
        }
    }

    public sealed class PrefixArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the peering service.
        /// </summary>
        [Input("peeringServiceName", required: true)]
        public Input<string> PeeringServiceName { get; set; } = null!;

        /// <summary>
        /// The prefix from which your traffic originates.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        /// <summary>
        /// The name of the prefix.
        /// </summary>
        [Input("prefixName", required: true)]
        public Input<string> PrefixName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public PrefixArgs()
        {
        }
    }
}
