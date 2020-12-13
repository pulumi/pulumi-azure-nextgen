// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.VMwareCloudSimple.Latest
{
    public static class GetDedicatedCloudNode
    {
        public static Task<GetDedicatedCloudNodeResult> InvokeAsync(GetDedicatedCloudNodeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDedicatedCloudNodeResult>("azure-nextgen:vmwarecloudsimple/latest:getDedicatedCloudNode", args ?? new GetDedicatedCloudNodeArgs(), options.WithVersion());
    }


    public sealed class GetDedicatedCloudNodeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// dedicated cloud node name
        /// </summary>
        [Input("dedicatedCloudNodeName", required: true)]
        public string DedicatedCloudNodeName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDedicatedCloudNodeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDedicatedCloudNodeResult
    {
        /// <summary>
        /// Availability Zone id, e.g. "az1"
        /// </summary>
        public readonly string AvailabilityZoneId;
        /// <summary>
        /// Availability Zone name, e.g. "Availability Zone 1"
        /// </summary>
        public readonly string AvailabilityZoneName;
        /// <summary>
        /// VMWare Cloud Rack Name
        /// </summary>
        public readonly string CloudRackName;
        /// <summary>
        /// date time the resource was created
        /// </summary>
        public readonly object Created;
        /// <summary>
        /// SKU's id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Azure region
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// SKU's name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// count of nodes to create
        /// </summary>
        public readonly int NodesCount;
        /// <summary>
        /// Placement Group id, e.g. "n1"
        /// </summary>
        public readonly string PlacementGroupId;
        /// <summary>
        /// Placement Name, e.g. "Placement Group 1"
        /// </summary>
        public readonly string PlacementGroupName;
        /// <summary>
        /// Private Cloud Id
        /// </summary>
        public readonly string PrivateCloudId;
        /// <summary>
        /// Resource Pool Name
        /// </summary>
        public readonly string PrivateCloudName;
        /// <summary>
        /// The provisioning status of the resource
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// purchase id
        /// </summary>
        public readonly string PurchaseId;
        /// <summary>
        /// Dedicated Cloud Nodes SKU
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Node status, indicates is private cloud set up on this node or not
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Dedicated Cloud Nodes tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// {resourceProviderNamespace}/{resourceType}
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// VMWare Cluster Name
        /// </summary>
        public readonly string VmwareClusterName;

        [OutputConstructor]
        private GetDedicatedCloudNodeResult(
            string availabilityZoneId,

            string availabilityZoneName,

            string cloudRackName,

            object created,

            string id,

            string location,

            string name,

            int nodesCount,

            string placementGroupId,

            string placementGroupName,

            string privateCloudId,

            string privateCloudName,

            string provisioningState,

            string purchaseId,

            Outputs.SkuResponse? sku,

            string status,

            ImmutableDictionary<string, string>? tags,

            string type,

            string vmwareClusterName)
        {
            AvailabilityZoneId = availabilityZoneId;
            AvailabilityZoneName = availabilityZoneName;
            CloudRackName = cloudRackName;
            Created = created;
            Id = id;
            Location = location;
            Name = name;
            NodesCount = nodesCount;
            PlacementGroupId = placementGroupId;
            PlacementGroupName = placementGroupName;
            PrivateCloudId = privateCloudId;
            PrivateCloudName = privateCloudName;
            ProvisioningState = provisioningState;
            PurchaseId = purchaseId;
            Sku = sku;
            Status = status;
            Tags = tags;
            Type = type;
            VmwareClusterName = vmwareClusterName;
        }
    }
}
