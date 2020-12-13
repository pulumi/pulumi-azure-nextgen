// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20191001Preview.Inputs
{

    /// <summary>
    /// Gets or sets the virtual machine resource settings.
    /// </summary>
    public sealed class VirtualMachineResourceSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
        /// </summary>
        [Input("resourceType", required: true)]
        public Input<string> ResourceType { get; set; } = null!;

        /// <summary>
        /// Gets or sets the target availability set id for virtual machines not in an availability set at source.
        /// </summary>
        [Input("targetAvailabilitySetId")]
        public Input<string>? TargetAvailabilitySetId { get; set; }

        /// <summary>
        /// Gets or sets the target availability zone.
        /// </summary>
        [Input("targetAvailabilityZone")]
        public InputUnion<string, Pulumi.AzureNextGen.Migrate.V20191001Preview.TargetAvailabilityZone>? TargetAvailabilityZone { get; set; }

        /// <summary>
        /// Gets or sets the target Resource name.
        /// </summary>
        [Input("targetResourceName", required: true)]
        public Input<string> TargetResourceName { get; set; } = null!;

        /// <summary>
        /// Gets or sets the target virtual machine size.
        /// </summary>
        [Input("targetVmSize")]
        public Input<string>? TargetVmSize { get; set; }

        public VirtualMachineResourceSettingsArgs()
        {
        }
    }
}
