// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20180401
{
    public static class GetProximityPlacementGroup
    {
        public static Task<GetProximityPlacementGroupResult> InvokeAsync(GetProximityPlacementGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetProximityPlacementGroupResult>("azure-nextgen:compute/v20180401:getProximityPlacementGroup", args ?? new GetProximityPlacementGroupArgs(), options.WithVersion());
    }


    public sealed class GetProximityPlacementGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the proximity placement group.
        /// </summary>
        [Input("proximityPlacementGroupName", required: true)]
        public string ProximityPlacementGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetProximityPlacementGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetProximityPlacementGroupResult
    {
        /// <summary>
        /// A list of references to all availability sets in the proximity placement group.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> AvailabilitySets;
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
        /// Specifies the type of the proximity placement group. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Standard** : Co-locate resources within an Azure region or Availability Zone. &lt;br&gt;&lt;br&gt; **Ultra** : For future use.
        /// </summary>
        public readonly string? ProximityPlacementGroupType;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A list of references to all virtual machine scale sets in the proximity placement group.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VirtualMachineScaleSets;
        /// <summary>
        /// A list of references to all virtual machines in the proximity placement group.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VirtualMachines;

        [OutputConstructor]
        private GetProximityPlacementGroupResult(
            ImmutableArray<Outputs.SubResourceResponse> availabilitySets,

            string id,

            string location,

            string name,

            string? proximityPlacementGroupType,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.SubResourceResponse> virtualMachineScaleSets,

            ImmutableArray<Outputs.SubResourceResponse> virtualMachines)
        {
            AvailabilitySets = availabilitySets;
            Id = id;
            Location = location;
            Name = name;
            ProximityPlacementGroupType = proximityPlacementGroupType;
            Tags = tags;
            Type = type;
            VirtualMachineScaleSets = virtualMachineScaleSets;
            VirtualMachines = virtualMachines;
        }
    }
}
