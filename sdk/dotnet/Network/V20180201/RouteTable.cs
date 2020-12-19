// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180201
{
    /// <summary>
    /// Route table resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20180201:RouteTable")]
    public partial class RouteTable : Pulumi.CustomResource
    {
        /// <summary>
        /// Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
        /// </summary>
        [Output("disableBgpRoutePropagation")]
        public Output<bool?> DisableBgpRoutePropagation { get; private set; } = null!;

        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

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
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Collection of routes contained within a route table.
        /// </summary>
        [Output("routes")]
        public Output<ImmutableArray<Outputs.RouteResponse>> Routes { get; private set; } = null!;

        /// <summary>
        /// A collection of references to subnets.
        /// </summary>
        [Output("subnets")]
        public Output<ImmutableArray<Outputs.SubnetResponse>> Subnets { get; private set; } = null!;

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
        /// Create a RouteTable resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RouteTable(string name, RouteTableArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20180201:RouteTable", name, args ?? new RouteTableArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RouteTable(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20180201:RouteTable", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150501preview:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150615:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160330:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160601:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160901:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:RouteTable"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:RouteTable"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RouteTable resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RouteTable Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new RouteTable(name, id, options);
        }
    }

    public sealed class RouteTableArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
        /// </summary>
        [Input("disableBgpRoutePropagation")]
        public Input<bool>? DisableBgpRoutePropagation { get; set; }

        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the route table.
        /// </summary>
        [Input("routeTableName", required: true)]
        public Input<string> RouteTableName { get; set; } = null!;

        [Input("routes")]
        private InputList<Inputs.RouteArgs>? _routes;

        /// <summary>
        /// Collection of routes contained within a route table.
        /// </summary>
        public InputList<Inputs.RouteArgs> Routes
        {
            get => _routes ?? (_routes = new InputList<Inputs.RouteArgs>());
            set => _routes = value;
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

        public RouteTableArgs()
        {
        }
    }
}
