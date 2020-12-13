// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20171001
{
    public static class GetZone
    {
        public static Task<GetZoneResult> InvokeAsync(GetZoneArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetZoneResult>("azure-nextgen:network/v20171001:getZone", args ?? new GetZoneArgs(), options.WithVersion());
    }


    public sealed class GetZoneArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the DNS zone (without a terminating dot).
        /// </summary>
        [Input("zoneName", required: true)]
        public string ZoneName { get; set; } = null!;

        public GetZoneArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetZoneResult
    {
        /// <summary>
        /// The etag of the zone.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        public readonly int MaxNumberOfRecordSets;
        /// <summary>
        /// The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        public readonly int MaxNumberOfRecordsPerRecordSet;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        public readonly ImmutableArray<string> NameServers;
        /// <summary>
        /// The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
        /// </summary>
        public readonly int NumberOfRecordSets;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetZoneResult(
            string? etag,

            string id,

            string location,

            int maxNumberOfRecordSets,

            int maxNumberOfRecordsPerRecordSet,

            string name,

            ImmutableArray<string> nameServers,

            int numberOfRecordSets,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            MaxNumberOfRecordSets = maxNumberOfRecordSets;
            MaxNumberOfRecordsPerRecordSet = maxNumberOfRecordsPerRecordSet;
            Name = name;
            NameServers = nameServers;
            NumberOfRecordSets = numberOfRecordSets;
            Tags = tags;
            Type = type;
        }
    }
}
