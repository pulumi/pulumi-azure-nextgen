// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.V20201001.Outputs
{

    [OutputType]
    public sealed class Nfs3TargetResponse
    {
        /// <summary>
        /// IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
        /// </summary>
        public readonly string? Target;
        /// <summary>
        /// Identifies the usage model to be used for this Storage Target. Get choices from .../usageModels
        /// </summary>
        public readonly string? UsageModel;

        [OutputConstructor]
        private Nfs3TargetResponse(
            string? target,

            string? usageModel)
        {
            Target = target;
            UsageModel = usageModel;
        }
    }
}