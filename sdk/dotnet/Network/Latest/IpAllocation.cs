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
    /// IpAllocation resource.
    /// Latest API Version: 2020-07-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/latest:IpAllocation")]
    public partial class IpAllocation : Pulumi.CustomResource
    {
        /// <summary>
        /// IpAllocation tags.
        /// </summary>
        [Output("allocationTags")]
        public Output<ImmutableDictionary<string, string>?> AllocationTags { get; private set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The IPAM allocation ID.
        /// </summary>
        [Output("ipamAllocationId")]
        public Output<string?> IpamAllocationId { get; private set; } = null!;

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
        /// The address prefix for the IpAllocation.
        /// </summary>
        [Output("prefix")]
        public Output<string?> Prefix { get; private set; } = null!;

        /// <summary>
        /// The address prefix length for the IpAllocation.
        /// </summary>
        [Output("prefixLength")]
        public Output<int?> PrefixLength { get; private set; } = null!;

        /// <summary>
        /// The address prefix Type for the IpAllocation.
        /// </summary>
        [Output("prefixType")]
        public Output<string?> PrefixType { get; private set; } = null!;

        /// <summary>
        /// The Subnet that using the prefix of this IpAllocation resource.
        /// </summary>
        [Output("subnet")]
        public Output<Outputs.SubResourceResponse> Subnet { get; private set; } = null!;

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
        /// The VirtualNetwork that using the prefix of this IpAllocation resource.
        /// </summary>
        [Output("virtualNetwork")]
        public Output<Outputs.SubResourceResponse> VirtualNetwork { get; private set; } = null!;


        /// <summary>
        /// Create a IpAllocation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IpAllocation(string name, IpAllocationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:IpAllocation", name, args ?? new IpAllocationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IpAllocation(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:IpAllocation", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:IpAllocation"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:IpAllocation"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:IpAllocation"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:IpAllocation"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:IpAllocation"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IpAllocation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IpAllocation Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new IpAllocation(name, id, options);
        }
    }

    public sealed class IpAllocationArgs : Pulumi.ResourceArgs
    {
        [Input("allocationTags")]
        private InputMap<string>? _allocationTags;

        /// <summary>
        /// IpAllocation tags.
        /// </summary>
        public InputMap<string> AllocationTags
        {
            get => _allocationTags ?? (_allocationTags = new InputMap<string>());
            set => _allocationTags = value;
        }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the IpAllocation.
        /// </summary>
        [Input("ipAllocationName", required: true)]
        public Input<string> IpAllocationName { get; set; } = null!;

        /// <summary>
        /// The IPAM allocation ID.
        /// </summary>
        [Input("ipamAllocationId")]
        public Input<string>? IpamAllocationId { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The address prefix for the IpAllocation.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        /// <summary>
        /// The address prefix length for the IpAllocation.
        /// </summary>
        [Input("prefixLength")]
        public Input<int>? PrefixLength { get; set; }

        /// <summary>
        /// The address prefix Type for the IpAllocation.
        /// </summary>
        [Input("prefixType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.Latest.IPVersion>? PrefixType { get; set; }

        /// <summary>
        /// The name of the resource group.
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

        /// <summary>
        /// The type for the IpAllocation.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.Latest.IpAllocationType>? Type { get; set; }

        public IpAllocationArgs()
        {
        }
    }
}
