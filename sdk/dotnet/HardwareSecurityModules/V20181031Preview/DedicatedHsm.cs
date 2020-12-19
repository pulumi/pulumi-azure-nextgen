// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HardwareSecurityModules.V20181031Preview
{
    /// <summary>
    /// Resource information with extended details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:hardwaresecuritymodules/v20181031preview:DedicatedHsm")]
    public partial class DedicatedHsm : Pulumi.CustomResource
    {
        /// <summary>
        /// The supported Azure location where the dedicated HSM should be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the dedicated HSM.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the network interfaces of the dedicated hsm.
        /// </summary>
        [Output("networkProfile")]
        public Output<Outputs.NetworkProfileResponse?> NetworkProfile { get; private set; } = null!;

        /// <summary>
        /// Provisioning state.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// SKU details
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// This field will be used when RP does not support Availability zones.
        /// </summary>
        [Output("stampId")]
        public Output<string?> StampId { get; private set; } = null!;

        /// <summary>
        /// Resource Status Message.
        /// </summary>
        [Output("statusMessage")]
        public Output<string> StatusMessage { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The resource type of the dedicated HSM.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The Dedicated Hsm zones.
        /// </summary>
        [Output("zones")]
        public Output<ImmutableArray<string>> Zones { get; private set; } = null!;


        /// <summary>
        /// Create a DedicatedHsm resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DedicatedHsm(string name, DedicatedHsmArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:hardwaresecuritymodules/v20181031preview:DedicatedHsm", name, args ?? new DedicatedHsmArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DedicatedHsm(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:hardwaresecuritymodules/v20181031preview:DedicatedHsm", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DedicatedHsm resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DedicatedHsm Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DedicatedHsm(name, id, options);
        }
    }

    public sealed class DedicatedHsmArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The supported Azure location where the dedicated HSM should be created.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Name of the dedicated Hsm
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Specifies the network interfaces of the dedicated hsm.
        /// </summary>
        [Input("networkProfile")]
        public Input<Inputs.NetworkProfileArgs>? NetworkProfile { get; set; }

        /// <summary>
        /// The name of the Resource Group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// SKU details
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.SkuArgs> Sku { get; set; } = null!;

        /// <summary>
        /// This field will be used when RP does not support Availability zones.
        /// </summary>
        [Input("stampId")]
        public Input<string>? StampId { get; set; }

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

        [Input("zones")]
        private InputList<string>? _zones;

        /// <summary>
        /// The Dedicated Hsm zones.
        /// </summary>
        public InputList<string> Zones
        {
            get => _zones ?? (_zones = new InputList<string>());
            set => _zones = value;
        }

        public DedicatedHsmArgs()
        {
        }
    }
}
