// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NetApp.V20200801.Inputs
{

    /// <summary>
    /// Volume Snapshot Properties
    /// </summary>
    public sealed class VolumeSnapshotPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Snapshot Policy ResourceId
        /// </summary>
        [Input("snapshotPolicyId")]
        public Input<string>? SnapshotPolicyId { get; set; }

        public VolumeSnapshotPropertiesArgs()
        {
        }
    }
}
