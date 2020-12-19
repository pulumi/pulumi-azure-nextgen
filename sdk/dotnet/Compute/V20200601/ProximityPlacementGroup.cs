// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20200601
{
    /// <summary>
    /// Specifies information about the proximity placement group.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:compute/v20200601:ProximityPlacementGroup")]
    public partial class ProximityPlacementGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// A list of references to all availability sets in the proximity placement group.
        /// </summary>
        [Output("availabilitySets")]
        public Output<ImmutableArray<Outputs.SubResourceWithColocationStatusResponse>> AvailabilitySets { get; private set; } = null!;

        /// <summary>
        /// Describes colocation status of the Proximity Placement Group.
        /// </summary>
        [Output("colocationStatus")]
        public Output<Outputs.InstanceViewStatusResponse?> ColocationStatus { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the type of the proximity placement group. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Standard** : Co-locate resources within an Azure region or Availability Zone. &lt;br&gt;&lt;br&gt; **Ultra** : For future use.
        /// </summary>
        [Output("proximityPlacementGroupType")]
        public Output<string?> ProximityPlacementGroupType { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// A list of references to all virtual machine scale sets in the proximity placement group.
        /// </summary>
        [Output("virtualMachineScaleSets")]
        public Output<ImmutableArray<Outputs.SubResourceWithColocationStatusResponse>> VirtualMachineScaleSets { get; private set; } = null!;

        /// <summary>
        /// A list of references to all virtual machines in the proximity placement group.
        /// </summary>
        [Output("virtualMachines")]
        public Output<ImmutableArray<Outputs.SubResourceWithColocationStatusResponse>> VirtualMachines { get; private set; } = null!;


        /// <summary>
        /// Create a ProximityPlacementGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ProximityPlacementGroup(string name, ProximityPlacementGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20200601:ProximityPlacementGroup", name, args ?? new ProximityPlacementGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ProximityPlacementGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20200601:ProximityPlacementGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:compute/latest:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20180401:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20180601:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20181001:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20190301:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20190701:ProximityPlacementGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20191201:ProximityPlacementGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ProximityPlacementGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ProximityPlacementGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ProximityPlacementGroup(name, id, options);
        }
    }

    public sealed class ProximityPlacementGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes colocation status of the Proximity Placement Group.
        /// </summary>
        [Input("colocationStatus")]
        public Input<Inputs.InstanceViewStatusArgs>? ColocationStatus { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the proximity placement group.
        /// </summary>
        [Input("proximityPlacementGroupName", required: true)]
        public Input<string> ProximityPlacementGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies the type of the proximity placement group. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Standard** : Co-locate resources within an Azure region or Availability Zone. &lt;br&gt;&lt;br&gt; **Ultra** : For future use.
        /// </summary>
        [Input("proximityPlacementGroupType")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20200601.ProximityPlacementGroupType>? ProximityPlacementGroupType { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ProximityPlacementGroupArgs()
        {
        }
    }
}
