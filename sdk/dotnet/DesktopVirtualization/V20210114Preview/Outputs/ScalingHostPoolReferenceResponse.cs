// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.Outputs
{

    [OutputType]
    public sealed class ScalingHostPoolReferenceResponse
    {
        /// <summary>
        /// Arm path of referenced hostpool.
        /// </summary>
        public readonly string? HostPoolArmPath;
        /// <summary>
        /// Is the scaling plan enabled for this hostpool.
        /// </summary>
        public readonly bool? ScalingPlanEnabled;

        [OutputConstructor]
        private ScalingHostPoolReferenceResponse(
            string? hostPoolArmPath,

            bool? scalingPlanEnabled)
        {
            HostPoolArmPath = hostPoolArmPath;
            ScalingPlanEnabled = scalingPlanEnabled;
        }
    }
}
