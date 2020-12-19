// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20171001
{
    /// <summary>
    /// Describes a DNS zone.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20171001:Zone")]
    public partial class Zone : Pulumi.CustomResource
    {
        /// <summary>
        /// The etag of the zone.
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        [Output("maxNumberOfRecordSets")]
        public Output<int> MaxNumberOfRecordSets { get; private set; } = null!;

        /// <summary>
        /// The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        [Output("maxNumberOfRecordsPerRecordSet")]
        public Output<int> MaxNumberOfRecordsPerRecordSet { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        [Output("nameServers")]
        public Output<ImmutableArray<string>> NameServers { get; private set; } = null!;

        /// <summary>
        /// The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        [Output("numberOfRecordSets")]
        public Output<int> NumberOfRecordSets { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Zone resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Zone(string name, ZoneArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20171001:Zone", name, args ?? new ZoneArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Zone(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20171001:Zone", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:Zone"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150504preview:Zone"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160401:Zone"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:Zone"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180301preview:Zone"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180501:Zone"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Zone resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Zone Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Zone(name, id, options);
        }
    }

    public sealed class ZoneArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The etag of the zone.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
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
        /// The name of the DNS zone (without a terminating dot).
        /// </summary>
        [Input("zoneName", required: true)]
        public Input<string> ZoneName { get; set; } = null!;

        public ZoneArgs()
        {
        }
    }
}
