// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180110.Outputs
{

    [OutputType]
    public sealed class VmmToAzureNetworkMappingSettingsResponse
    {
        /// <summary>
        /// Gets the Instance type.
        /// Expected value is 'VmmToAzure'.
        /// </summary>
        public readonly string InstanceType;

        [OutputConstructor]
        private VmmToAzureNetworkMappingSettingsResponse(string instanceType)
        {
            InstanceType = instanceType;
        }
    }
}
