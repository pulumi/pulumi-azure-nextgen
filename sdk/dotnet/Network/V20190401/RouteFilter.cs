// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190401
{
    /// <summary>
    /// Route Filter Resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20190401:RouteFilter")]
    public partial class RouteFilter : Pulumi.CustomResource
    {
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// A collection of references to express route circuit ipv6 peerings.
        /// </summary>
        [Output("ipv6Peerings")]
        public Output<ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse>> Ipv6Peerings { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A collection of references to express route circuit peerings.
        /// </summary>
        [Output("peerings")]
        public Output<ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse>> Peerings { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Collection of RouteFilterRules contained within a route filter.
        /// </summary>
        [Output("rules")]
        public Output<ImmutableArray<Outputs.RouteFilterRuleResponse>> Rules { get; private set; } = null!;

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
        /// Create a RouteFilter resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RouteFilter(string name, RouteFilterArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190401:RouteFilter", name, args ?? new RouteFilterArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RouteFilter(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190401:RouteFilter", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:RouteFilter"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:RouteFilter"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RouteFilter resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RouteFilter Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new RouteFilter(name, id, options);
        }
    }

    public sealed class RouteFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("ipv6Peerings")]
        private InputList<Inputs.ExpressRouteCircuitPeeringArgs>? _ipv6Peerings;

        /// <summary>
        /// A collection of references to express route circuit ipv6 peerings.
        /// </summary>
        public InputList<Inputs.ExpressRouteCircuitPeeringArgs> Ipv6Peerings
        {
            get => _ipv6Peerings ?? (_ipv6Peerings = new InputList<Inputs.ExpressRouteCircuitPeeringArgs>());
            set => _ipv6Peerings = value;
        }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        [Input("peerings")]
        private InputList<Inputs.ExpressRouteCircuitPeeringArgs>? _peerings;

        /// <summary>
        /// A collection of references to express route circuit peerings.
        /// </summary>
        public InputList<Inputs.ExpressRouteCircuitPeeringArgs> Peerings
        {
            get => _peerings ?? (_peerings = new InputList<Inputs.ExpressRouteCircuitPeeringArgs>());
            set => _peerings = value;
        }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the route filter.
        /// </summary>
        [Input("routeFilterName", required: true)]
        public Input<string> RouteFilterName { get; set; } = null!;

        [Input("rules")]
        private InputList<Inputs.RouteFilterRuleArgs>? _rules;

        /// <summary>
        /// Collection of RouteFilterRules contained within a route filter.
        /// </summary>
        public InputList<Inputs.RouteFilterRuleArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<Inputs.RouteFilterRuleArgs>());
            set => _rules = value;
        }

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

        public RouteFilterArgs()
        {
        }
    }
}
