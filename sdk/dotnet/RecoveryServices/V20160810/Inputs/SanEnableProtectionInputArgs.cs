// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20160810.Inputs
{

    /// <summary>
    /// San enable protection provider specific input.
    /// </summary>
    public sealed class SanEnableProtectionInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The class type.
        /// Expected value is 'San'.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        public SanEnableProtectionInputArgs()
        {
        }
    }
}
