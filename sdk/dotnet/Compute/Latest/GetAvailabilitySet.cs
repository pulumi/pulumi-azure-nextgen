// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.Latest
{
    public static class GetAvailabilitySet
    {
        public static Task<GetAvailabilitySetResult> InvokeAsync(GetAvailabilitySetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAvailabilitySetResult>("azure-nextgen:compute/latest:getAvailabilitySet", args ?? new GetAvailabilitySetArgs(), options.WithVersion());
    }


    public sealed class GetAvailabilitySetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the availability set.
        /// </summary>
        [Input("availabilitySetName", required: true)]
        public string AvailabilitySetName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAvailabilitySetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAvailabilitySetResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Fault Domain count.
        /// </summary>
        public readonly int? PlatformFaultDomainCount;
        /// <summary>
        /// Update Domain count.
        /// </summary>
        public readonly int? PlatformUpdateDomainCount;
        /// <summary>
        /// Specifies information about the proximity placement group that the availability set should be assigned to. &lt;br&gt;&lt;br&gt;Minimum api-version: 2018-04-01.
        /// </summary>
        public readonly Outputs.SubResourceResponse? ProximityPlacementGroup;
        /// <summary>
        /// Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The resource status information.
        /// </summary>
        public readonly ImmutableArray<Outputs.InstanceViewStatusResponse> Statuses;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A list of references to all virtual machines in the availability set.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VirtualMachines;

        [OutputConstructor]
        private GetAvailabilitySetResult(
            string id,

            string location,

            string name,

            int? platformFaultDomainCount,

            int? platformUpdateDomainCount,

            Outputs.SubResourceResponse? proximityPlacementGroup,

            Outputs.SkuResponse? sku,

            ImmutableArray<Outputs.InstanceViewStatusResponse> statuses,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.SubResourceResponse> virtualMachines)
        {
            Id = id;
            Location = location;
            Name = name;
            PlatformFaultDomainCount = platformFaultDomainCount;
            PlatformUpdateDomainCount = platformUpdateDomainCount;
            ProximityPlacementGroup = proximityPlacementGroup;
            Sku = sku;
            Statuses = statuses;
            Tags = tags;
            Type = type;
            VirtualMachines = virtualMachines;
        }
    }
}
